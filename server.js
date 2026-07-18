const crypto = require('node:crypto');
const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');
const { URL } = require('node:url');

const PORT = Number(process.env.PORT) || 3000;
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

const sendJson = (response, statusCode, body) => {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  response.end(JSON.stringify(body));
};

const readRequestBody = (request) => new Promise((resolve, reject) => {
  let body = '';

  request.on('data', (chunk) => {
    body += chunk;
    if (body.length > 1_000_000) {
      reject(new Error('Request body is too large'));
      request.destroy();
    }
  });

  request.on('end', () => resolve(body));
  request.on('error', reject);
});

const parseBody = (request, rawBody) => {
  const contentType = request.headers['content-type'] || '';

  if (contentType.includes('application/json')) {
    return JSON.parse(rawBody || '{}');
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(rawBody));
  }

  return {};
};

const cleanValue = (value) => String(value || '').trim();

const buildEnquiry = (payload, request) => {
  const enquiry = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    fullName: cleanValue(payload.fullName || payload['Full Name']),
    phoneNumber: cleanValue(payload.phoneNumber || payload['Phone Number']),
    emailAddress: cleanValue(payload.emailAddress || payload['Email Address']),
    interest: cleanValue(payload.interest || payload['Interested In']),
    message: cleanValue(payload.message || payload.Message),
    sourcePage: cleanValue(payload.sourcePage),
    userAgent: request.headers['user-agent'] || ''
  };

  if (!enquiry.fullName || !enquiry.phoneNumber || !enquiry.emailAddress || !enquiry.interest) {
    const error = new Error('Missing required fields');
    error.statusCode = 400;
    throw error;
  }

  return enquiry;
};

const saveEnquiry = async (enquiry) => {
  await fs.mkdir(DATA_DIR, { recursive: true });

  let enquiries = [];
  try {
    enquiries = JSON.parse(await fs.readFile(ENQUIRIES_FILE, 'utf8'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  enquiries.push(enquiry);
  await fs.writeFile(ENQUIRIES_FILE, `${JSON.stringify(enquiries, null, 2)}\n`);
};

const handleEnquiry = async (request, response) => {
  try {
    const rawBody = await readRequestBody(request);
    const payload = parseBody(request, rawBody);
    const enquiry = buildEnquiry(payload, request);

    await saveEnquiry(enquiry);
    sendJson(response, 201, {
      ok: true,
      id: enquiry.id
    });
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      ok: false,
      error: error.statusCode ? error.message : 'Unable to save enquiry'
    });
  }
};

const serveStaticFile = async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = decodeURIComponent(requestUrl.pathname);
  const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.resolve(ROOT_DIR, relativePath);

  if (!filePath.startsWith(ROOT_DIR)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  try {
    const file = await fs.readFile(filePath);
    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
    });
    response.end(file);
  } catch (error) {
    response.writeHead(error.code === 'ENOENT' ? 404 : 500, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
  }
};

const server = http.createServer((request, response) => {
  if (request.method === 'POST' && request.url.startsWith('/api/enquiries')) {
    handleEnquiry(request, response);
    return;
  }

  if (request.method === 'GET' || request.method === 'HEAD') {
    serveStaticFile(request, response);
    return;
  }

  response.writeHead(405, {
    Allow: 'GET, HEAD, POST'
  });
  response.end('Method not allowed');
});

server.listen(PORT, () => {
  console.log(`Swa:Ragya site running at http://localhost:${PORT}`);
});
