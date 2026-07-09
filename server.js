import fs from "node:fs";
import http from "node:http";
import crypto from "node:crypto";
import net from "node:net";
import path from "node:path";
import tls from "node:tls";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadEnv = () => {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match || process.env[match[1]]) continue;

    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[match[1]] = value.replace(/\\n/g, "\n");
  }
};

loadEnv();

const PORT = Number(process.env.PORT || 3001);
const CONTACT_TO = process.env.CONTACT_TO || "antrlabs@gmail.com";
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "1OFLzwtMfjyAYahQORiKBksD1i4CeuCPuYXioIO6PNc8";
const GOOGLE_SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE || "A:H";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const sanitizeHeader = (value = "") => String(value).replace(/[\r\n]/g, " ").trim();

const normalizeLineEndings = (value) =>
  value.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");

const createMultipartMessage = ({ fromName = "ANTR Labs Website", from, to, replyTo, subject, textBody, htmlBody }) => {
  const boundary = `antr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  const headers = [
    `From: ${sanitizeHeader(fromName)} <${sanitizeHeader(from)}>`,
    `To: ${sanitizeHeader(to)}`,
    replyTo ? `Reply-To: ${sanitizeHeader(replyTo)}` : "",
    `Subject: ${sanitizeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`
  ].filter(Boolean);

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

const createInquiryMessage = ({ name, mobile, email, linkedin, company, message, source }) => {
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

  return createMultipartMessage({
    from,
    to: CONTACT_TO,
    replyTo: `${safeName} <${safeEmail}>`,
    subject,
    textBody,
    htmlBody
  });
};

const createThankYouMessage = ({ name, email }) => {
  const safeName = sanitizeHeader(name || "there");
  const from = sanitizeHeader(process.env.SMTP_FROM || process.env.SMTP_USER);
  const subject = "Thank you for contacting ANTR Labs";

  const textBody = [
    `Hi ${safeName},`,
    "",
    "Thank you for reaching out to ANTR Labs.",
    "We have received your inquiry and our team will reach out shortly.",
    "",
    "Regards,",
    "ANTR LABS"
  ].join("\n");

  const htmlBody = `
    <div style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
      <div style="max-width:640px;margin:0 auto;padding:40px 24px;">
        <div style="text-align:center;margin-bottom:34px;">
          <div style="display:inline-block;border:1px solid #2a2a2a;padding:18px 28px;background:#000000;">
            <div style="font-size:34px;line-height:0.9;font-weight:900;letter-spacing:0.16em;color:#ffffff;">ANTR</div>
            <div style="font-size:34px;line-height:0.9;font-weight:900;letter-spacing:0.16em;color:#ffffff;">LABS</div>
          </div>
        </div>
        <div style="border:1px solid #1e1e1e;background:#0b0b0b;padding:34px 28px;text-align:center;">
          <p style="margin:0 0 14px;font-size:13px;letter-spacing:0.24em;text-transform:uppercase;color:#ff4500;">Inquiry Received</p>
          <h1 style="margin:0 0 18px;font-size:28px;line-height:1.2;color:#ffffff;">Thank you for contacting ANTR Labs.</h1>
          <p style="margin:0 auto 10px;max-width:460px;font-size:16px;line-height:1.7;color:#c7c7c7;">
            Hi ${escapeHtml(safeName)}, we have received your inquiry.
          </p>
          <p style="margin:0 auto;max-width:460px;font-size:16px;line-height:1.7;color:#c7c7c7;">
            Our team will review your message and reach out shortly.
          </p>
        </div>
      </div>
    </div>
  `;

  return createMultipartMessage({
    fromName: "ANTR Labs",
    from,
    to: email,
    subject,
    textBody,
    htmlBody
  });
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

const sendEmail = async (rawMessage, recipient = CONTACT_TO) => {
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
    await sendSmtpCommand(state, `RCPT TO:<${recipient}>`, [250, 251]);
    await sendSmtpCommand(state, "DATA", 354);
    await sendSmtpCommand(state, `${rawMessage}\r\n.`, 250);
    await sendSmtpCommand(state, "QUIT", 221).catch(() => undefined);
  } finally {
    state.socket.destroy();
  }
};

const base64Url = (value) =>
  Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

const createGoogleJwt = () => {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    return null;
  }

  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: "RS256",
    typ: "JWT"
  };
  const claim = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };
  const unsigned = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(claim))}`;
  const signature = crypto.createSign("RSA-SHA256").update(unsigned).sign(privateKey, "base64url");

  return `${unsigned}.${signature}`;
};

const getGoogleAccessToken = async () => {
  const assertion = createGoogleJwt();

  if (!assertion) {
    return null;
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error_description || data.error || "Unable to get Google access token");
  }

  return data.access_token;
};

const appendContactToSheet = async ({ name, mobile, email, linkedin, company, message, source }) => {
  const accessToken = await getGoogleAccessToken();

  if (!accessToken) {
    console.warn("Google Sheets sync skipped: service account credentials are not configured.");
    return;
  }

  const row = [
    new Date().toISOString(),
    source || "Website contact form",
    name || "",
    company || "",
    mobile || "",
    email || "",
    linkedin || "",
    message || ""
  ];

  const range = encodeURIComponent(GOOGLE_SHEET_RANGE);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      values: [row]
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error?.message || "Unable to append contact to Google Sheet");
  }
};

const sendJson = (res, statusCode, data) => {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
};

const readJsonBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 32768) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });

    req.on("error", reject);
  });

const serveStatic = (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const requestedPath = decodeURIComponent(url.pathname);
  const distDir = path.join(__dirname, "dist");
  const filePath = path.normalize(path.join(distDir, requestedPath === "/" ? "index.html" : requestedPath));
  const safePath = filePath.startsWith(distDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()
    ? filePath
    : path.join(distDir, "index.html");

  if (!fs.existsSync(safePath)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Build output not found. Run npm run build before starting the production server.");
    return;
  }

  const ext = path.extname(safePath).toLowerCase();
  const contentTypes = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".webp": "image/webp"
  };

  res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
  fs.createReadStream(safePath).pipe(res);
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (req.method === "POST" && url.pathname === "/api/contact") {
    try {
      const { name, mobile, email, linkedin, company, message, source } = await readJsonBody(req);

      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        sendJson(res, 400, { error: "A valid email address is required." });
        return;
      }

      if (!mobile || !/^[+]?[0-9\s-]{7,20}$/.test(mobile)) {
        sendJson(res, 400, { error: "A valid mobile number is required." });
        return;
      }

      const lead = { name, mobile, email, linkedin, company, message, source };

      try {
        await appendContactToSheet(lead);
      } catch (error) {
        console.error("Google Sheets append failed:", error);
      }

      const inquiryMessage = createInquiryMessage(lead);
      await sendEmail(inquiryMessage, CONTACT_TO);

      const thankYouMessage = createThankYouMessage({ name, email });
      await sendEmail(thankYouMessage, email);

      sendJson(res, 200, { ok: true });
    } catch (error) {
      console.error("Contact form email failed:", error);
      sendJson(res, 500, { error: "Unable to send your inquiry right now. Please try again later." });
    }

    return;
  }

  if (req.method === "GET" || req.method === "HEAD") {
    serveStatic(req, res);
    return;
  }

  sendJson(res, 405, { error: "Method not allowed" });
});

server.listen(PORT, () => {
  console.log(`ANTR Labs server listening on http://localhost:${PORT}`);
});
