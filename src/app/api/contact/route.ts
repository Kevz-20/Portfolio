import { Resend } from "resend";
import { SITE } from "@/lib/data";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: SITE.email,
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    text: `${message}\n\n— ${name} (${email})`,
  });

  if (error) {
    return Response.json({ error: "Failed to send message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
