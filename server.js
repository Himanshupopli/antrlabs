import dotenv from "dotenv";
import express from "express";
import net from "node:net";
import path from "node:path";
import tls from "node:tls";
import { fileURLToPath } from "node:url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 3001);
const CONTACT_TO = process.env.CONTACT_TO || "antrlabs@gmail.com";

app.use(express.json({ limit: "32kb" }));

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const sanitizeHeader = (value = "") => String(value).replace(/[\r\n]/g, " ").trim();

const normalizeLineEndings = (value) =>
  value.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");

const createMessage = ({ name, mobile, email, linkedin, company, message, source }) => {
  const safeName = sanitizeHeader(name || "Website Lead");
  const safeEmail = sanitizeHeader(email);
  const subject = sanitizeHeader(`New ANTR Labs inquiry from ${safeName}`);
  const from = sanitizeHeader(process.env.SMTP_FROM || process.env.SMTP_USER);

  const textBody = [
    "New ANTR Labs contact inquiry",
    "",
    `Source: ${source || "Website contact form"}`,
    `Name: ${name || "-"}`,
    `Company: ${company || "-"}`,
    `Mobile: ${mobile || "-"}`,
    `Email: ${email || "-"}`,
    `LinkedIn: ${linkedin || "-"}`,
    "",
    "Message:",
    message || "-"
  ].join("\n");

  const htmlBody = `
    <h2>New ANTR Labs contact inquiry</h2>
    <table cellpadding="8" cellspacing="0" border="0">
      <tr><td><strong>Source</strong></td><td>${escapeHtml(source || "Website contact form")}</td></tr>
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name || "-")}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(company || "-")}</td></tr>
      <tr><td><strong>Mobile</strong></td><td>${escapeHtml(mobile || "-")}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email || "-")}</td></tr>
      <tr><td><strong>LinkedIn</strong></td><td>${escapeHtml(linkedin || "-")}</td></tr>
    </table>
    <h3>Message</h3>
    <p>${escapeHtml(message || "-").replace(/\n/g, "<br />")}</p>
  `;

  const boundary = `antr-${Date.now().toString(36)}`;
  const headers = [
    `From: ANTR Labs Website <${from}>`,
    `To: ${CONTACT_TO}`,
    `Reply-To: ${safeName} <${safeEmail}>`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`
  ];

  return normalizeLineEndings([
    ...headers,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    textBody,
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    htmlBody,
    "",
    `--${boundary}--`,
    ""
  ].join("\n"));
};

const sendSmtpCommand = (state, command, expectedCodes) =>
  new Promise((resolve, reject) => {
    const codes = Array.isArray(expectedCodes) ? expectedCodes : [expectedCodes];
    let response = "";

    const cleanup = () => {
      clearTimeout(timeout);
      state.socket.off("data", onData);
      state.socket.off("error", onError);
    };

    const onError = (error) => {
      cleanup();
      reject(error);
    };

    const onData = (chunk) => {
      response += chunk.toString("utf8");
      const lines = response.split(/\r?\n/).filter(Boolean);
      const last = lines[lines.length - 1] || "";

      if (/^\d{3} /.test(last)) {
        cleanup();
        const code = Number(last.slice(0, 3));
        if (codes.includes(code)) {
          resolve(response);
        } else {
          reject(new Error(`SMTP command failed (${code}): ${response}`));
        }
      }
    };

    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("SMTP connection timed out"));
    }, 15000);

    state.socket.on("data", onData);
    state.socket.on("error", onError);

    if (command) {
      state.socket.write(`${command}\r\n`);
    }
  });

const createSocket = ({ host, port, secure }) =>
  new Promise((resolve, reject) => {
    const socket = secure
      ? tls.connect({ host, port, servername: host }, () => resolve(socket))
      : net.connect({ host, port }, () => resolve(socket));

    socket.setEncoding("utf8");
    socket.once("error", reject);
  });

const sendEmail = async (rawMessage, replyTo) => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass || !from) {
    throw new Error("SMTP_HOST, SMTP_USER, SMTP_PASS, and SMTP_FROM are required");
  }

  const state = {
    socket: await createSocket({ host, port, secure })
  };

  try {
    await sendSmtpCommand(state, null, 220);
    await sendSmtpCommand(state, `EHLO ${process.env.SMTP_EHLO_DOMAIN || "antrlabs.space"}`, 250);

    if (!secure && process.env.SMTP_STARTTLS !== "false") {
      await sendSmtpCommand(state, "STARTTLS", 220);
      state.socket = tls.connect({ socket: state.socket, servername: host });
      await new Promise((resolve, reject) => {
        state.socket.once("secureConnect", resolve);
        state.socket.once("error", reject);
      });
      state.socket.setEncoding("utf8");
      await sendSmtpCommand(state, `EHLO ${process.env.SMTP_EHLO_DOMAIN || "antrlabs.space"}`, 250);
    }

    const auth = Buffer.from(`\u0000${user}\u0000${pass}`).toString("base64");
    await sendSmtpCommand(state, `AUTH PLAIN ${auth}`, 235);
    await sendSmtpCommand(state, `MAIL FROM:<${from}>`, 250);
    await sendSmtpCommand(state, `RCPT TO:<${CONTACT_TO}>`, [250, 251]);
    await sendSmtpCommand(state, "DATA", 354);
    await sendSmtpCommand(state, `${rawMessage}\r\n.`, 250);
    await sendSmtpCommand(state, "QUIT", 221).catch(() => undefined);
  } finally {
    state.socket.destroy();
  }
};

app.post("/api/contact", async (req, res) => {
  const { name, mobile, email, linkedin, company, message, source } = req.body || {};

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: "A valid email address is required." });
  }

  if (!mobile || !/^[+]?[0-9\s-]{7,20}$/.test(mobile)) {
    return res.status(400).json({ error: "A valid mobile number is required." });
  }

  try {
    const rawMessage = createMessage({ name, mobile, email, linkedin, company, message, source });
    await sendEmail(rawMessage, email);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    res.status(500).json({ error: "Unable to send your inquiry right now. Please try again later." });
  }
});

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`ANTR Labs server listening on http://localhost:${PORT}`);
});
