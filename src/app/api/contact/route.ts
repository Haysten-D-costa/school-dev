import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to   = process.env.CONTACT_TO || user;
    const from = process.env.SMTP_FROM  || user;

    if (!host || !user || !pass || !from) {
      return NextResponse.json({ error: "Mail service is not configured." }, { status: 500 });
    }

    const port   = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;

    const transporter = nodemailer.createTransport({
      host, port, secure,
      auth: { user, pass },
      requireTLS: !secure,
      tls: { rejectUnauthorized: false },
    });

    const subjectLabel = subject ? `[${subject}] ` : "";

    // Notification to school office
    await transporter.sendMail({
      from,
      replyTo: `"${name}" <${email}>`,
      to,
      subject: `${subjectLabel}Message from ${name} — ${siteConfig.name}`,
      text: `
${message}

From: ${name} <${email}>
${phone ? `Phone: ${phone}` : ""}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone   ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <hr />
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from,
      to: email,
      subject: `Thank you for contacting ${siteConfig.name}`,
      text: [
        `Dear ${name},`,
        "",
        `Thank you for reaching out to ${siteConfig.name}. We have received your message and will get back to you as soon as possible.`,
        "",
        `For urgent matters, you may contact us directly at ${siteConfig.contact.email} or call ${siteConfig.contact.phone}.`,
        "",
        "Warm regards,",
        siteConfig.name,
        siteConfig.location,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
          <p>Dear ${name},</p>
          <p>
            Thank you for reaching out to <strong>${siteConfig.name}</strong>.
            We have received your message and will get back to you as soon as possible.
          </p>
          <p>
            For urgent matters, you may contact us directly at
            <a href="mailto:${siteConfig.contact.email}">${siteConfig.contact.email}</a>
            or call <a href="tel:${siteConfig.contact.phone.replace(/\s+/g, "")}">${siteConfig.contact.phone}</a>.
          </p>
          <br/>
          <p>
            Warm regards,<br/>
            <strong>${siteConfig.name}</strong><br/>
            ${siteConfig.location}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
