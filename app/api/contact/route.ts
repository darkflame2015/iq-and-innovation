import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, product, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fffe; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #0e7c6b 0%, #1a5fa8 100%); padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">📬 New Contact Inquiry</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">IQ &amp; Innovation Website</p>
        </div>
        <div style="background: white; padding: 28px 32px; border: 1px solid #c8e6e0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #3d5a6e; font-size: 14px; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #0a1a2f; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #3d5a6e; font-size: 14px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #0a1a2f; font-size: 14px;"><a href="mailto:${email}" style="color: #0e7c6b;">${email}</a></td>
            </tr>
            ${phone ? `<tr><td style="padding: 10px 0; font-weight: 600; color: #3d5a6e; font-size: 14px; vertical-align: top;">Phone</td><td style="padding: 10px 0; color: #0a1a2f; font-size: 14px;">${phone}</td></tr>` : ""}
            ${product ? `<tr><td style="padding: 10px 0; font-weight: 600; color: #3d5a6e; font-size: 14px; vertical-align: top;">Product</td><td style="padding: 10px 0; color: #0a1a2f; font-size: 14px;"><span style="background: #edf7f5; padding: 4px 12px; border-radius: 6px; font-weight: 600; color: #0e7c6b;">${product}</span></td></tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #3d5a6e; font-size: 14px; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #0a1a2f; font-size: 14px; font-weight: 600;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background: #f8fffe; border-radius: 8px; border: 1px solid #c8e6e0;">
            <p style="font-weight: 600; color: #3d5a6e; font-size: 13px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="color: #0a1a2f; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #7a9aad; text-align: center;">
            This message was sent from the IQ &amp; Innovation website contact form.
          </p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "IQ & Innovation <onboarding@resend.dev>",
      to: ["punarbosupanja@gmail.com"],
      subject: `[IQ & Innovation] ${subject}`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
