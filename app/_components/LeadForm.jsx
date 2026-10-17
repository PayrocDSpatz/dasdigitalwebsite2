"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "./site";

const SERVICE_OPTIONS = ["Website Design", "AI Receptionists", "Business Automation", "Technology Consulting", "Not sure yet"];

const field =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/30";

// The consultation request form. Shows "thank you" only once the server confirms the
// inquiry was saved; otherwise it asks the visitor to call or email instead.
export default function LeadForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.pathname }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.ok) throw new Error("not saved");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Thank you, we received your request.</h3>
        <p className="mt-2 text-slate-600">We'll be in touch soon. If it's urgent, call {CONTACT.phoneDisplay}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Business name" name="business" autoComplete="organization" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <label className="grid gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-slate-800">What can we help with?</span>
          <select name="service" defaultValue="Not sure yet" className={field}>
            {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-slate-800">Tell us a little about your project <span className="text-purple-700">*</span></span>
          <textarea name="message" required rows={4} className={`${field} resize-y`} placeholder="For example: we miss calls after 5 pm and our website is out of date." />
        </label>
        {/* Hidden from people; bots that fill it are ignored. */}
        <div aria-hidden="true" className="absolute left-[-9999px]">
          <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          Sorry, your request didn't go through. Please call{" "}
          <a href={`tel:${CONTACT.phone}`} className="font-semibold underline">{CONTACT.phoneDisplay}</a> or email{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">{CONTACT.email}</a>.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request a Free Consultation"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required, autoComplete }) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-slate-800">{label}{required ? <span className="text-purple-700"> *</span> : null}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={field} />
    </label>
  );
}
