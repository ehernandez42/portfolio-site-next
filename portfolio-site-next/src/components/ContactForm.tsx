"use client";
import { useFormStatus, useFormState } from "react-dom";
import React, { ChangeEvent, useState, useEffect } from "react";
import { sendEmail } from "@/app/contact/actions/email-action";

export interface contactProps {
  name: string;
  email: string;
  message: string;
}

let initialState = {
  message: "",
  errors: undefined,
  fieldValues: {
    name: "",
    email: "",
    message: "",
  },
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="w-full bg-sawad-lime text-black font-semibold py-3 rounded-full hover:brightness-110 transition disabled:opacity-50"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function ContactForm() {
  const [contactForm, setContactForm] = useState<contactProps>({
    name: "",
    email: "",
    message: "",
  });
  const [formState, formAction] = useFormState(sendEmail, initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    setContactForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (
      formState.message ===
      "Thanks for reaching out. I'll respond shortly."
    ) {
      setContactForm({ name: "", email: "", message: "" });
    }
  }, [formState]);

  return (
    <div id="Contact">
      <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-8">
        Get in Touch
      </h2>
      {formState.message && (
        <div className="text-sawad-lime text-sm mb-6">{formState.message}</div>
      )}
      <form className="space-y-5" action={formAction}>
        <input
          type="text"
          name="name"
          value={contactForm.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full bg-[#111827] border border-[#1f2937] rounded-xl px-5 py-3 text-white text-sm placeholder:text-sawad-muted focus:border-sawad-lime focus:outline-none transition"
        />
        <input
          type="email"
          name="email"
          value={contactForm.email}
          onChange={handleChange}
          placeholder="name@site.com"
          className="w-full bg-[#111827] border border-[#1f2937] rounded-xl px-5 py-3 text-white text-sm placeholder:text-sawad-muted focus:border-sawad-lime focus:outline-none transition"
        />
        <textarea
          name="message"
          value={contactForm.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          className="w-full bg-[#111827] border border-[#1f2937] rounded-xl px-5 py-3 text-white text-sm placeholder:text-sawad-muted focus:border-sawad-lime focus:outline-none transition resize-none"
        />
        <SubmitButton />
      </form>
    </div>
  );
}
