"use client";

import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { CONTACT } from "./site";

const field =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/30";

// The free guide form. Once the server confirms the request was saved, it shows
// the download link (and says a copy is on its way by email when that step is on).
export default function GuideForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [result, setResult] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.pathname }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.ok) throw new Error("not saved");
      setResult({ ...json, email: data.email });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Thanks! Your guide is ready.</h2>
        <p className="mt-2 text-slate-600">
          {result.emailed ? `We also sent a copy to ${result.email}.` : "Save it now so you can come back to it any time."}
        </p>
        <a
          href={result.file}
          download
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <Download className="h-4 w-4" aria-hidden="true" /> Download the guide (PDF)
        </a>
        <p className="mt-6 text-sm text-slate-600">
          Want help putting it to work? Call{" "}
          <a href={`tel:${CONTACT.phone}`} className="font-semibold text-purple-700 hover:text-purple-900">{CONTACT.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold text-slate-900">Get your free copy</h2>
      <div className="mt-5 grid gap-4">
        <Field label="Name" name="name" autoComplete="name" />
        <Field label="Email" name="email" type="email" autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        {/* Hidden from people; bots that fill it are ignored. */}
        <div aria-hidden="true" className="absolute left-[-9999px]">
          <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          Sorry, that didn't go through. Please try again, or call{" "}
          <a href={`tel:${CONTACT.phone}`} className="font-semibold underline">{CONTACT.phoneDisplay}</a> or email{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">{CONTACT.email}</a> and we'll send it to you.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Get the Free Guide"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-xs text-slate-500">
        By sending this form, you're OK with DAS Digital emailing or calling you about this guide and how we can help.
        We never sell your information. See our{" "}
        <a href="/privacy" className="underline hover:text-purple-700">Privacy Policy</a>.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", autoComplete }) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-slate-800">{label}<span className="text-purple-700"> *</span></span>
      <input name={name} type={type} required autoComplete={autoComplete} className={field} />
    </label>
  );
}
