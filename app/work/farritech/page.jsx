"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Sparkles,
  Zap,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  BarChart3,
  Smartphone,
  Users,
  Globe,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

const glowCard =
  "shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_20px_40px_-25px_rgba(168,85,247,0.45)]";

const purpleBtn =
  "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-fuchsia-500";

const outlineBtn =
  "border border-white/20 bg-white/5 text-white hover:bg-white/10";

const Background = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,rgba(168,85,247,0.25),rgba(139,92,246,0.25),rgba(99,102,241,0.25),rgba(236,72,153,0.25))] bg-[length:400%_400%]" />
    <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl animate-float" />
    <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/25 blur-3xl animate-float-slow" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
    <style jsx>{`
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      .animate-gradient { animation: gradient 18s ease infinite; }
      .animate-float { animation: float 10s ease-in-out infinite; }
      .animate-float-slow { animation: float 16s ease-in-out infinite; }
    `}</style>
  </div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {kicker ? (
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80">
        <Sparkles className="h-4 w-4" /> {kicker}
      </div>
    ) : null}
    <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
        {subtitle}
      </p>
    ) : null}
  </div>
);

const FeatureCard = ({ icon, title, children }) => (
  <div className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard} backdrop-blur`}>
    <div className="flex items-start gap-3">
      <div className="mt-1 rounded-2xl border border-white/10 bg-black/30 p-3 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="mt-2 text-sm leading-relaxed text-white/70">{children}</div>
      </div>
    </div>
  </div>
);

const stackItems = [
  { label: "Frontend", value: "React (in-browser Babel, single-file PWA)" },
  { label: "Backend / DB", value: "Firebase / Firestore" },
  { label: "Hosting", value: "Vercel (farritech.com + app.farritech.com)" },
  { label: "Payments", value: "Stripe (subscriptions + invoice pay links)" },
  { label: "SMS", value: "Twilio A2P 10DLC (appointment reminders, notifications)" },
  { label: "Email", value: "Resend (transactional + referral flows)" },
  { label: "Mapping", value: "Google Places Autocomplete + Smart Route" },
  { label: "Auth", value: "Firebase Auth + magic-link customer portal" },
];

const features = [
  {
    icon: <CalendarCheck className="h-5 w-5 text-purple-400" />,
    title: "QR Code Booking System",
    body: "Farriers generate a branded QR code with a custom color picker. Clients scan to book — no app download needed. The composited PNG is downloadable for business cards, trailer decals, and barn flyers.",
  },
  {
    icon: <CreditCard className="h-5 w-5 text-purple-400" />,
    title: "Stripe Payments & Subscriptions",
    body: "Full Stripe Elements integration for both SaaS subscription billing and client invoice payments. Farriers store their own Stripe keys in Firestore. One-time-use payment links, promo codes (3free / 6free), and no-card-required free trials are all supported.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-purple-400" />,
    title: "Twilio SMS & Resend Email",
    body: "A2P 10DLC-registered SMS for appointment reminders and invoice notifications. Resend handles branded transactional email — including referral tracking, magic-link sign-ins, and admin alerts on new signups.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5 text-purple-400" />,
    title: "Horses Due & Visit Scheduling",
    body: "Data model tracks each horse's last visit date and configured interval. The dashboard surfaces horses coming due, so farriers can proactively schedule rather than waiting for clients to call.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-purple-400" />,
    title: "Mileage Log & Smart Route",
    body: "IRS-rate mileage logging for every job. Smart Route surfaces nearby clients on the day's schedule to minimize windshield time — built with Google Places and location-aware sorting.",
  },
  {
    icon: <Smartphone className="h-5 w-5 text-purple-400" />,
    title: "Mobile PWA (Barn-Ready UI)",
    body: "A dedicated mobile.html PWA with high-contrast, barn-friendly UI designed for bright sunlight and dirty hands. Installable on iOS and Android home screens with no app store friction.",
  },
  {
    icon: <Users className="h-5 w-5 text-purple-400" />,
    title: "Customer Portal (Passwordless)",
    body: "Horse owners get a self-service portal via magic-link sign-in — no password to forget. They can view invoices, select multiple outstanding bills, and pay in a single transaction.",
  },
  {
    icon: <Globe className="h-5 w-5 text-purple-400" />,
    title: "Referral System & Growth Tools",
    body: "Built-in referral tracking with Resend email flows and Firestore state management. YouTube tutorial cards and an in-app video tutorial screen accelerate onboarding for non-technical farriers.",
  },
];

const outcomes = [
  { before: "Phone-tag booking", after: "24/7 QR-code self-booking", note: "Clients book without calling; farriers capture appointments automatically" },
  { before: "Paper invoices & cash", after: "Stripe-powered digital payments", note: "Faster collection, automated reminders, full payment history" },
  { before: "Forgetting follow-ups", after: "Horses Due dashboard + SMS alerts", note: "Proactive scheduling before horses go overdue" },
];

export default function FarriTechCaseStudy() {
  return (
    <div className="min-h-screen bg-[#070910] text-white">
      <Background />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070910]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Zap className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">DAS Digital</div>
              <div className="text-xs text-white/60">Automation • AI • Ops</div>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="/#what">What we build</a>
            <a className="hover:text-white" href="/#proof">Proof</a>
            <a className="hover:text-white" href="/#process">Process</a>
            <a className="hover:text-white" href="/#faq">FAQ</a>
          </div>

          <a
            href="/#lead"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${purpleBtn}`}
          >
            Get My Free Plan <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to DAS Digital
          </a>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
                <Sparkles className="h-4 w-4" /> Case Study · SaaS Product Build
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                FarriTech
              </h1>
              <p className="mt-4 text-xl font-medium text-purple-400">
                Business management software built from scratch for professional farriers.
              </p>
              <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
                Farriers are skilled tradespeople running small businesses — but most manage everything by phone, paper, and memory. FarriTech is a full-stack SaaS platform purpose-built for their workflow: QR booking, digital invoicing, Stripe payments, SMS reminders, route optimization, and a horse-health dashboard. Built and shipped entirely using AI-assisted development.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.farritech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${purpleBtn}`}
                >
                  Visit FarriTech.com <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://app.farritech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${outlineBtn}`}
                >
                  Live App <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Stats panel */}
            <div className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-8 ${glowCard} backdrop-blur`}>
              <div className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-6">Project snapshot</div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Product type", value: "SaaS Platform" },
                  { label: "Industry", value: "Equine / Farriery" },
                  { label: "Build method", value: "AI-assisted dev" },
                  { label: "Time to launch", value: "Weeks, not months" },
                  { label: "Integrations", value: "Stripe, Twilio, Firebase, Resend" },
                  { label: "Platforms", value: "Web + Mobile PWA" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xs text-white/50">{s.label}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="The Problem"
            title="Farriers run businesses on paper and memory"
            subtitle="Professional farriers see 6–10 horses a day across multiple properties. Most had no digital tools — booking was phone calls, invoicing was handwritten, and follow-up never happened consistently."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "📞", pain: "Booking by phone or text", detail: "No way for clients to self-schedule; every booking required a back-and-forth." },
              { icon: "📄", pain: "Paper invoices & cash only", detail: "No payment trail, slow collection, and no automated reminders for overdue accounts." },
              { icon: "🐴", pain: "No visibility on due horses", detail: "Horses on 6–8 week cycles — farriers relied on memory or client calls to know who was overdue." },
            ].map((p) => (
              <div key={p.pain} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="font-semibold text-white">{p.pain}</div>
                <div className="mt-2 text-sm text-white/60">{p.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Before → After */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="Outcomes"
            title="Before → After"
            subtitle="What changed once FarriTech was in the workflow."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {outcomes.map((x) => (
              <div
                key={x.before}
                className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard}`}
              >
                <div className="text-xs text-white/60">Before</div>
                <div className="mt-1 text-lg font-semibold">{x.before}</div>
                <div className="mt-5 text-xs font-semibold text-purple-400">AFTER</div>
                <div className="mt-1 text-lg font-semibold">{x.after}</div>
                <div className="mt-3 text-sm text-white/70">{x.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What Was Built */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="What Was Built"
            title="Full-stack SaaS, shipped feature by feature"
            subtitle="Every capability was designed around how farriers actually work — in the barn, on a phone, often with no cell signal until they hit the road."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title}>
                {f.body}
              </FeatureCard>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="Tech Stack"
            title="Modern, lean, and built to scale"
            subtitle="Chosen for rapid iteration, low operational overhead, and zero servers to manage."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
            {stackItems.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                  i < stackItems.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="w-32 shrink-0 text-xs font-semibold uppercase tracking-widest text-purple-400">
                  {item.label}
                </div>
                <div className="text-sm text-white/80">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Was Built */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="How It Was Built"
            title="AI-assisted development — no traditional dev team"
            subtitle="FarriTech was conceived, designed, and shipped by a non-traditional developer using AI coding tools. This is the DAS Digital approach applied to product development."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Define the workflow",
                body: "Deep domain expertise in the problem space (payments, small business ops) shaped every feature decision. The product reflects what farriers actually need, not what a generic SaaS template offers.",
              },
              {
                step: "02",
                title: "Build with AI, iterate fast",
                body: "Claude and other AI coding assistants handled code generation, debugging, and architecture decisions. Features that would take a traditional dev team weeks were shipped in days.",
              },
              {
                step: "03",
                title: "Integrate real infrastructure",
                body: "Production-grade integrations — Stripe, Twilio A2P 10DLC, Firebase, Resend, Vercel — were wired in from the start. No toy demos; live system from day one.",
              },
            ].map((s) => (
              <div key={s.step} className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard}`}>
                <div className="text-3xl font-bold text-purple-500/40">{s.step}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-10 text-center ${glowCard} backdrop-blur`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 mb-4">
              <Sparkles className="h-4 w-4" /> Want something like this?
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              We build systems like FarriTech for your business.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              Whether it's a SaaS product, an internal automation engine, or a client-facing workflow tool — DAS Digital brings domain expertise and AI-assisted development together to ship fast without a full dev team.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/#lead"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${purpleBtn}`}
              >
                Get My Free Automation Plan <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${outlineBtn}`}
              >
                See All Work <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#070910]/80">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-lg font-semibold">DAS Digital</div>
              <div className="mt-2 text-sm text-white/70">Automation • AI • Operations • Dashboards</div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:info@dasdigitalai.com?subject=Automation%20Inquiry"
                    className="text-purple-400 hover:text-purple-300 underline-offset-2 hover:underline break-all"
                  >
                    info@dasdigitalai.com
                  </a>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <Phone className="h-4 w-4" />
                  <a
                    href="tel:19546733041"
                    className="text-purple-400 hover:text-purple-300 underline-offset-2 hover:underline"
                  >
                    (954) 673-3041
                  </a>
                </span>
              </div>
            </div>
            <div className="md:text-right">
              <a
                href="/#lead"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold ${purpleBtn}`}
              >
                Get My Free Automation Plan <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-3 text-xs text-white/50">
                © {new Date().getFullYear()} DAS Digital. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
