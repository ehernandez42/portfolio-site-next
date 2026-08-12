"use client";

import { useFormStatus } from "react-dom";
import { ChangeEvent, useEffect, useState, useActionState } from "react";
import { sendEmail } from "@/app/contact/actions/email-action";

const initialState = { message: "", status: "idle", errors: undefined };
const blank = { name: "", email: "", company: "", projectType: "", timeline: "", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button className="atlas-submit" disabled={pending}>{pending ? "Sending inquiry…" : "Send project inquiry"} <span aria-hidden="true">↗</span></button>;
}

export default function ContactForm() {
  const [values, setValues] = useState(blank);
  const [state, action] = useActionState(sendEmail, initialState);
  useEffect(() => { if (state.status === "success") setValues(blank); }, [state.status]);
  const change = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setValues((old) => ({ ...old, [event.target.name]: event.target.value }));

  return <form className="atlas-form atlas-inquiry-form" action={action}>
    <div className="atlas-form-intro"><h3>Start a project conversation.</h3><p>Share the shape of the problem—no formal brief or budget estimate needed.</p></div>
    {state.message && <p className={`atlas-form-message ${state.status === "error" ? "is-error" : ""}`} role="status">{state.message}</p>}
    <div className="atlas-form-row">
      <label>Your name<input required name="name" value={values.name} onChange={change} placeholder="Jane Smith" autoComplete="name" /></label>
      <label>Work email<input required type="email" name="email" value={values.email} onChange={change} placeholder="jane@company.com" autoComplete="email" /></label>
    </div>
    <label>What are you looking to build?
      <select required name="projectType" value={values.projectType} onChange={change}><option value="" disabled>Choose the closest fit</option><option>New product or MVP</option><option>Existing app or system improvement</option><option>AI-powered workflow or feature</option><option>Not sure yet — I want to explore</option></select>
    </label>
    <div className="atlas-form-row">
      <label>Company or team <span>(optional)</span><input name="company" value={values.company} onChange={change} placeholder="Company name" autoComplete="organization" /></label>
      <label>Desired timing <span>(optional)</span><input name="timeline" value={values.timeline} onChange={change} placeholder="e.g. This quarter" /></label>
    </div>
    <label>What would make this project successful?<textarea required name="message" value={values.message} onChange={change} placeholder="A few sentences about the problem, people using it, or where you need help." rows={5} /></label>
    <div className="atlas-submit-row"><SubmitButton /><p>I’ll review the details and reply by email.</p></div>
  </form>;
}
