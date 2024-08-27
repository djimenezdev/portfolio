"use server";

import { z } from "zod";
import sgMail from "@sendgrid/mail";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import { fromError, isZodErrorLike } from "zod-validation-error";

export type ErrorFields = {
  email: string;
  name: string;
  message: string;
  other: string;
};
// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Initialize Upstash Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Create a new ratelimiter, that allows 2 requests per day
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(2, "1 d"),
  prefix: "ratelimit:email:",
});

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function sendEmail(formData: FormData) {
  const emailFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const validatedFields = schema.parse(emailFormData);

    // Get the user's IP address
    const forwardedFor = headers().get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "Unknown";

    // Check the rate limit
    const { success } = await ratelimit.limit(ip);
    console.log(success);
    if (!success) {
      return {
        success: false,
        message: "Rate limit exceeded. Please try again later.",
        errors: {
          other: "Rate limit exceeded. Please try again later.",
        },
        zodError: false,
      };
    }

    const { name, email, message } = validatedFields;
    const msg = {
      from: process.env.SENDGRID_FROM_EMAIL!,
      to: process.env.SENDGRID_TO_EMAIL!,
      templateId: process.env.SENDGRID_TEMPLATE_ID!,
      dynamicTemplateData: {
        name: name,
        email: email,
        message: message,
      },
    };

    await sgMail.send(msg);
    return {
      success: true,
      message: "Email sent successfully!",
      errors: null,
      zodError: false,
    };
  } catch (error) {
    const isZodError = isZodErrorLike(error);
    const errors: Partial<ErrorFields> = {};
    if (isZodError) {
      const validationError = fromError(error);
      // return error json response
      for (const detail of validationError.details) {
        const path = detail.path[0] as keyof ErrorFields;
        const message = detail.message;
        errors[path] = message;
      }

      return {
        success: false,
        zodError: true,
        message: validationError.toString(),
        errors: errors,
      };
    } else {
      // convert error to string
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      return {
        success: false,
        message: errorMessage,
        errors: { other: errorMessage },
        zodError: false,
      };
    }
  }
}
