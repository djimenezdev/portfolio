import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import sgMail from "@sendgrid/mail";
import validator from "email-validator";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(2, "1 d"),
});

sgMail.setApiKey(process.env.SENDGRID_KEY!);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    // if all fields are missing
    if (!name && !email && !message) {
      return NextResponse.json(
        { result: "No form data submitted" },
        { status: 400 }
      );
    }

    // check each field individually
    if (!name || typeof name !== "string") {
      return NextResponse.json({ result: "Invalid name" }, { status: 400 });
    } else if (
      !email ||
      typeof email !== "string" ||
      !validator.validate(email)
    ) {
      return NextResponse.json({ result: "Invalid email" }, { status: 400 });
    } else if (!message || typeof message !== "string") {
      return NextResponse.json({ result: "Invalid message" }, { status: 400 });
    }

    // rate limit check after validation since we only want to rate limit emails sent
    const ip = request.ip ?? request.headers.get("X-Forwarded-For");
    const result = await ratelimit.limit(ip!);
    if (result.success) {
      await sgMail.send({
        from: process.env.SENDGRID_FROM_EMAIL!,
        to: process.env.SENDGRID_TO_EMAIL!,
        templateId: process.env.SENDGRID_TEMPLATE_ID!,
        dynamicTemplateData: {
          name: name,
          email: email,
          message: message,
        },
      });
      return NextResponse.json({ result: "Email Sent!" }, { status: 201 });
    } else {
      return NextResponse.json(
        { result: "rate limit exceeded" },
        { status: 429 }
      );
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { result: "error", error: errorMessage },
      { status: 500 }
    );
  }
}
