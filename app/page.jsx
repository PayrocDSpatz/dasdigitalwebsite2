"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  Zap,
  ShieldCheck,
  BarChart3,
  Workflow,
  Mail,
  Phone,
} from "lucide-react";

const brand = {
  name: "DAS Digital",
  tagline:
    "We build automation + AI systems that save time, cut costs, and create predictable growth.",
  primaryCta: { label: "Get My Free Automation Plan", href: "#lead" },
  secondaryCta: { label: "See What We Build", href: "#what" },
};

const MarqueeRow = ({ items }) => (
  <div className="relative overflow-hidden hidden sm:block">
    <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-6 py-2">
      {items.concat(items).map((t, idx) => (
        <span
          key={`${t}-${idx}`}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {kicker && (
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
        <Sparkles className="h-4 w-4" /> {kicker}
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl font-semibold">{title}</h2>
    {subtitle && <p className="mt-4 text-white/70">{subtitle}</p>}
  </div>
);

const Card = ({ icon, title, children }) => (
  <div className="rounded-3xl border-2 border-purple-500 bg-white/5 p-6 shadow">
    <div className="flex items-start gap-3">
      <div className="mt-1 rounded-2xl bg-black/30 p-3">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 text-white/70 text-sm">{children}</div>
      </div>
    </div>
  </div>
);

export default function Page() {
  const pain = useMemo(
    () => [
      "Too many manual steps",
      "Leads not followed up consistently",
      "Dashboards that don’t match reality",
      "Tools that don’t talk to each other",
      "Busy teams, slow execution",
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#070910] text-white">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">

          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold">
              Build an Automation + AI Engine
            </h1>

            <p className="mt-5 text-white/70">
              {brand.tagline}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#lead"
                className="rounded-2xl bg-purple-600 px-6 py-3 font-semibold text-white text-center"
              >
                {brand.primaryCta.label}
              </a>

              <a
                href="#what"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center"
              >
                {brand.secondaryCta.label}
              </a>
            </div>

            <MarqueeRow
              items={[
                "Stop manual busywork",
                "Instant routing",
                "AI follow-ups",
                "Live dashboards",
              ]}
            />
          </div>

          {/* MOCK */}
          <div className="rounded-2xl border-2 border-purple-500 p-4 sm:p-6">
            <div className="text-sm mb-2">Live Mock Dashboard</div>
            <div className="h-32 bg-purple-500/20 rounded"></div>
          </div>

        </div>
      </section>

      {/* CARDS */}
      <section className="mx-auto max-w-6xl px-4 py-16" id="what">
        <SectionTitle
          kicker="Why most systems fail"
          title="Most teams don’t have a growth engine."
        />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card icon={<Workflow />} title="Workflow Automation">
            Smartsheet + Make/Zapier automations.
          </Card>
          <Card icon={<Mail />} title="AI Follow-Up">
            Human sounding AI outreach.
          </Card>
          <Card icon={<BarChart3 />} title="Dashboards">
            KPIs you can trust.
          </Card>
        </div>
      </section>

      {/* FORM */}
      <section id="lead" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border-2 border-purple-500 p-8">

          <h3 className="text-2xl font-semibold">
            Get a Free Automation Plan
          </h3>

          <form
            action="https://formspree.io/f/mjgggdbg"
            method="POST"
            className="mt-6 grid gap-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Automation Plan Request"
            />

            <input
              name="name"
              placeholder="Your name"
              required
              className="rounded-xl p-3 bg-white/10"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="rounded-xl p-3 bg-white/10"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="What are you trying to automate?"
              required
              className="rounded-xl p-3 bg-white/10"
            />

            <button
              type="submit"
              className="rounded-xl bg-purple-600 py-3 font-semibold"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 p-8 text-sm text-white/70">
        <div>{brand.name}</div>
        <div className="mt-3 flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:david@dasdigitalai.com"
            className="text-purple-400"
          >
            david@dasdigitalai.com
          </a>
          <a href="tel:19546733041" className="text-purple-400">
            (954) 673-3041
          </a>
        </div>
      </footer>
    </div>
  );
}
