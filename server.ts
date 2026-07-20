import express from "express";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = 3000;

// ----------------------------------------------------
// SECURITY MIDDLEWARE
// ----------------------------------------------------

// Secure HTTP headers (CSP, X-Content-Type-Options, etc.)
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "https:"],
          "font-src": ["'self'", "data:", "https:"],
          "style-src": ["'self'", "https:", "'unsafe-inline'"],
          "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          "connect-src": ["'self'", "ws:", "wss:"],
        },
      },
    })
  );

// Reject overly large request bodies (DoS protection)
app.use(express.json({ limit: "10kb" }));

// Global rate limiter (brute-force / abuse protection)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Çok fazla istek gönderildi. Lütfen biraz sonra tekrar deneyin." },
});

const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "E-posta gönderim limitine ulaştınız. Lütfen daha sonra tekrar deneyin." },
});

const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  app.use(globalLimiter);
}

// ----------------------------------------------------
// INPUT SANITIZATION HELPERS
// ----------------------------------------------------

// Strip Carriage Return / Line Feed to prevent email header injection
function stripCrlf(value: string): string {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

// Escape HTML to prevent HTML/email-body injection
function escapeHtml(value: string): string {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ----------------------------------------------------
// SMTP EMAIL SENDING ENDPOINT
// ----------------------------------------------------
//
// SECURITY: All SMTP credentials are read EXCLUSIVELY from environment
// variables. The client is NEVER trusted with host/user/password values.
// No sensitive configuration is ever echoed back in the response.
app.post("/api/send-email", emailLimiter, async (req, res) => {
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

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Lütfen ad, e-posta ve mesaj alanlarını doldurun." });
  }

  // SMTP credentials sourced ONLY from the server environment.
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

  // If SMTP credentials are configured server-side, send the real email.
  if (user && pass && host) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass
        }
      });

      await transporter.sendMail({
        from: `"${safeName}" <${user}>`,
        to: toEmail,
        replyTo: safeEmail,
        subject: `NKolay Medya Teklif - ${safeSubject}`,
        text: emailBody,
        html: `<div style="font-family: sans-serif; padding: 25px; line-height: 1.6; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #FF1E27; margin-top: 0;">NKolay Medya - Yeni Teklif Talebi</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;"/>
          <p><strong>Musteri Ad Soyad:</strong> ${safeName}</p>
          <p><strong>E-posta:</strong> ${safeEmail}</p>
          <p><strong>Telefon:</strong> ${safePhone}</p>
          <p><strong>Ilgilendigi Hizmet:</strong> ${safeSubject}</p>
          <p style="margin-bottom: 8px;"><strong>Musteri Mesaji:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #FF1E27; border-radius: 4px; font-style: italic; color: #334155;">
            ${safeMessage.replace(/\n/g, "<br>")}
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;"/>
          <p style="font-size: 11px; color: #64748b; margin-bottom: 0;">Bu e-posta NKolay Medya web sitesi SMTP iletisim sistemi üzerinden gönderilmistir.</p>
        </div>`
      });

      return res.json({
        success: true,
        message: "E-posta başarıyla gönderildi!"
      });
    } catch (err: unknown) {
      console.error("SMTP Error:", err);
      return res.status(500).json({
        success: false,
        error: "SMTP sunucusu üzerinden e-posta gönderilirken teknik bir sorun olustu."
      });
    }
  } else {
    // SMTP not configured server-side: acknowledge receipt without exposing details.
    return res.json({
      success: true,
      simulated: true,
      message: "Mesajiniz alindi! En kisa surede sizinle iletisime gecegiz."
    });
  }
});

// ----------------------------------------------------
// VITE OR STATIC FRONTEND INTEGRATION
// ----------------------------------------------------
async function startServer() {
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
