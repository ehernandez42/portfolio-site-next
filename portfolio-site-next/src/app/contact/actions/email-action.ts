"use server";

import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(_prevState: unknown, formData: FormData) {
  const fields = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    company: String(formData.get("company") || ""),
    projectType: String(formData.get("projectType") || ""),
    timeline: String(formData.get("timeline") || ""),
    message: String(formData.get("message") || ""),
  };

  try {
    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["eleazarfhernandez@gmail.com"],
      subject: `Project inquiry from ${fields.name}`,
      react: EmailTemplate(fields) as React.ReactElement,
    });
    if (error) throw error;
    return { status: "success", message: "Thanks — your inquiry is on its way. I’ll reply by email." };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Your inquiry didn’t send. Please try again, or reach out through LinkedIn." };
  }
}
