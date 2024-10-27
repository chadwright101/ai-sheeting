import nodemailer from "nodemailer";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 2,
  duration: 60,
});

const sanitizeInput = (input) => {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

const EmailTemplate = ({ name, email, message, subject }) => {
  return `<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A&I Sheeting</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
    <table style="width: 100%; background-color: #F27C27;">
      <tr>
        <td>
          <h1 style="padding: 1rem;">A&I Sheeting</h1>
        </td>
      </tr>
    </table>

    <table style="width: 100%; padding: 1rem;">
      <tr>
        <td>
          <h3 style="font-size: 1.25rem">Website form submission</h3>
          <p style="font-size: 1rem; margin-top: 1rem; font-weight: 500;">
            Query: <span style="font-weight: 200; font-style: italic;">${subject}</span>
          </p>
          <p style="font-size: 1rem; margin-top: 1rem; font-weight: 500;">
            Name: <span style="font-weight: 200; font-style: italic;">${name}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Email address: <span style="font-weight: 200; font-style: italic;">${email}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Message:
            <br />
            <span style="font-weight: 200; font-style: italic;">${message}</span>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  if (req.headers["content-type"] !== "application/json") {
    return res
      .status(400)
      .json({ error: "Bad Request: Content-Type must be application/json" });
  }

  let ip = req.headers["x-real-ip"] || req.socket.remoteAddress || "default";
  if (Array.isArray(ip)) {
    ip = ip[0];
  }

  try {
    await rateLimiter.consume(ip);
  } catch {
    return res
      .status(429)
      .json({ error: "Too many requests, please try again later." });
  }

  const secretCode = req.headers["api-email-code"];
  if (secretCode !== process.env.NEXT_PUBLIC_API_EMAIL_SECRET_CODE) {
    return res.status(403).json({ error: "Forbidden" });
  }

  let { name, email, message, subject } = req.body;

  if (!name || !email || !message || !subject) {
    return res
      .status(400)
      .json({ error: "Bad Request: Missing required fields" });
  }

  name = sanitizeInput(name);
  email = sanitizeInput(email);
  subject = sanitizeInput(subject);
  message = sanitizeInput(message);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    requireTLS: true,
  });

  const mailOptions = {
    from: process.env.SMTP_SEND_FROM,
    to: process.env.SMTP_SEND_TO,
    subject: "Website form submission - Roof Refurb",
    replyTo: email,
    text: message,
    html: EmailTemplate({ name, email, message, subject }),
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
