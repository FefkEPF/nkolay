import express from "express";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const isProduction = process.env.NODE_ENV === "production";

// Trust Vercel/load-balancer proxy chain for correct client IP (rate-limit/logging)
app.set("trust proxy", isProduction ? 1 : 0);

app.use(express.json({ limit: "10kb" }));

// CSRF state cache (in-memory; for production deploy add Redis/upstash store)
interface CsrfState {
  token: string;
  expiry: number;
}
const csrfStore = new Map<string, CsrfState>();
const CSRF_TTL_MS = 60 * 60 * 1000;

function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
}

function csrfMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (req.method === "GET" || req.method === "HEAD" || req.method === "OPTIONS") {
    return next();
  }
  const header = req.headers["x-csrf-token"];
  if (!header || typeof header !== "string") {
    return res.status(403).json({ success: false, error: "CSRF token eksik." });
  }
  const entry = csrfStore.get(header);
  if (!entry || Date.now() > entry.expiry) {
    csrfStore.delete(header);
    return res.status(403).json({ success: false, error: "CSRF token geçersiz veya süresi dolmuş." });
  }
  next();
}

app.get("/api/csrf-token", (_req, res) => {
  const token = generateToken();
  csrfStore.set(token, { token, expiry: Date.now() + CSRF_TTL_MS });
  // prune expired
  for (const [k, v] of csrfStore) {
    if (Date.now() > v.expiry) csrfStore.delete(k);
  }
  res.json({ csrfToken: token });
});

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Cok fazla istek gonderildi. Lutfen biraz sonra tekrar deneyin." },
});

const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "E-posta gonderim limitine ulastiniz. Lutfen daha sonra tekrar deneyin." },
});

app.use(globalLimiter);

// ----------------------------------------------------
// INPUT SANITIZATION HELPERS
// ----------------------------------------------------

function stripCrlf(value: string): string {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[0-9+\s()-]{7,}$/.test(phone);
}

// ----------------------------------------------------
// SMTP EMAIL SENDING ENDPOINT
// ----------------------------------------------------
app.post("/api/send-email", csrfMiddleware, emailLimiter, async (req, res) => {
  const rawName = req.body?.name;
  const rawEmail = req.body?.email;
  const rawPhone = req.body?.phone;
  const rawSubject = req.body?.subject;
  const rawMessage = req.body?.message;

  const name = stripCrlf(rawName);
  const email = stripCrlf(rawEmail);
  const phone = stripCrlf(rawPhone);
  const subject = stripCrlf(rawSubject);
  const message = stripCrlf(rawMessage);

  if (!name?.trim()) {
    return res.status(400).json({ success: false, error: "Lutfen adinizi girin." });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ success: false, error: "Gecerli bir e-posta adresi girin." });
  }
  if (!validatePhone(phone)) {
    return res.status(400).json({ success: false, error: "Gecerli bir telefon numarasi girin." });
  }
  if (!message?.trim()) {
    return res.status(400).json({ success: false, error: "Mesajinizi yazin." });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.SMTP_TO || "info@nkolaymedya.com";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Belirtilmedi");
  const safeSubject = escapeHtml(subject || "Genel Teklif Talebi");
  const safeMessage = escapeHtml(message);

  const emailBody = `
Yeni Teklif / Iletisim Talebi:
---------------------------------
Musteri Adi: ${name}
E-posta: ${email}
Telefon: ${phone || "Belirtilmedi"}
Hizmet/Konu: ${subject || "Genel Teklif Talebi"}

Mesaj:
${message}
  `;

  if (user && pass && host) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host,
        port,
        secure,
        auth: { user, pass }
      });

      await transporter.sendMail({
        from: `"${safeName}" <${user}>`,
        to: toEmail,
        replyTo: safeEmail,
        subject: `NKolay Medya Teklif - ${safeSubject}`,
        text: emailBody,
        html: `<div style="font-family: sans-serif; padding: 25px; line-height: 1.6; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #C41E2A; margin-top: 0;">NKolay Medya - Yeni Teklif Talebi</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;"/>
          <p><strong>Musteri Ad Soyad:</strong> ${safeName}</p>
          <p><strong>E-posta:</strong> ${safeEmail}</p>
          <p><strong>Telefon:</strong> ${safePhone}</p>
          <p><strong>Ilgilendigi Hizmet:</strong> ${safeSubject}</p>
          <p style="margin-bottom: 8px;"><strong>Musteri Mesaji:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #C41E2A; border-radius: 4px; font-style: italic; color: #334155;">
            ${safeMessage.replace(/\n/g, "<br>")}
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;"/>
          <p style="font-size: 11px; color: #64748b; margin-bottom: 0;">Bu e-posta NKolay Medya web sitesi SMTP iletisim sistemi uzerinden gonderilmistir.</p>
        </div>`
      });

      return res.json({ success: true, message: "E-posta basariyla gonderildi!" });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error("SMTP Error:", errorMsg);
      return res.status(500).json({
        success: false,
        error: "SMTP sunucusu uzerinden e-posta gonderilirken teknik bir sorun olustu."
      });
    }
  }

  console.warn("SMTP Email Not Configured - simulated response served");
  return res.json({
    success: true,
    message: "Mesajiniz alindi! En kisa surede sizinle iletisime gecegiz."
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ----------------------------------------------------
// STATIC ASSETS / SECURITY / SEO
// ----------------------------------------------------

app.use("/robots.txt", express.static(path.join(process.cwd(), "public", "robots.txt")));
app.use("/sitemap.xml", express.static(path.join(process.cwd(), "public", "sitemap.xml")));
app.use("/favicon.ico", express.static(path.join(process.cwd(), "public", "nkolay_logo.png")));

// Security.txt (RFC 9116)
app.get("/.well-known/security.txt", (_req, res) => {
  res.type("text/plain").send(`Contact: security@nkolaymedya.com
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: tr, en
Policy: https://nkolaymedya.com/kvkk`);
});

// ----------------------------------------------------
// VITE OR STATIC FRONTEND INTEGRATION
// ----------------------------------------------------
async function startServer() {
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "https:"],
          "font-src": ["'self'", "data:", "https:", "fonts.gstatic.com"],
          "style-src": ["'self'", "https:", "'unsafe-inline'"],
          "script-src": isProduction
            ? ["'self'"]
            : ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          "connect-src": ["'self'", "ws:", "wss:"],
        },
      },
      crossOriginEmbedderPolicy: false,
    })
  );

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
