"use client";

import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap,
  Wrench,
  CalendarCheck,
  FileText,
  BarChart3,
  Users,
  Settings,
  Truck,
  ShieldCheck,
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

const trades = [
  { emoji: "🌡️", name: "HVAC", detail: "AC tune-ups, furnace PMs, emergency calls, new system installs. Comfort Club recurring contracts." },
  { emoji: "🔧", name: "Plumbing", detail: "Drain cleaning, water heater service, leak detection, emergency dispatch. Annual inspection plans." },
  { emoji: "🌿", name: "Lawn & Landscape", detail: "Mowing, fertilization, irrigation, seasonal cleanups. Weekly through Spring/Fall contract cadences." },
  { emoji: "💧", name: "Pool Service", detail: "Weekly cleaning, chemistry balancing, pool openings and closings. Automated recurring visit scheduling." },
  { emoji: "🪲", name: "Pest Control", detail: "General pest, termite, mosquito, rodent. Monthly, quarterly, and seasonal treatment plans." },
];

const features = [
  {
    icon: <CalendarCheck className="h-5 w-5 text-purple-400" />,
    title: "Dispatch & Routing",
    body: "Drag-and-drop daily schedule board with crew assignment. Auto-route trucks by stop proximity. Techs see their day on mobile — no paper run sheets, no morning briefing required.",
  },
  {
    icon: <Users className="h-5 w-5 text-purple-400" />,
    title: "Customer Records",
    body: "Every property, visit note, and service history in one place. Full search across customers and jobs. Built so a dispatcher or tech can find anything in two taps.",
  },
  {
    icon: <FileText className="h-5 w-5 text-purple-400" />,
    title: "Invoicing & Payments",
    body: "Bill from the truck the moment a job closes. Card, ACH, check. QuickBooks sync keeps the books clean without manual export. Overdue tracking surfaces what needs follow-up.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-purple-400" />,
    title: "Service Plans & Contracts",
    body: "Recurring maintenance contracts — Comfort Club, Quarterly, Spring/Fall — that auto-schedule and auto-invoice. Plan retention metrics built into the reporting layer.",
  },
  {
    icon: <Wrench className="h-5 w-5 text-purple-400" />,
    title: "Equipment Tracking",
    body: "Make, model, serial number, install date, warranty expiration. Full service history per unit. Techs arrive knowing what they're walking into instead of asking the customer.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-purple-400" />,
    title: "Reports That Matter",
    body: "Revenue per crew, close rate, plan retention, overdue invoices. KPIs owners actually use to run the business — not just vanity metrics from a generic BI tool.",
  },
];

const stackItems = [
  { label: "Frontend", value: "React 18 + Vite" },
  { label: "Backend / DB", value: "Firebase / Firestore" },
  { label: "Auth", value: "Firebase Auth" },
  { label: "Routing", value: "Client-side SPA (App Shell pattern)" },
  { label: "Styling", value: "Custom CSS design system (tokens + components)" },
  { label: "Data layer", value: "DataContext with Firestore real-time listeners + mock data mode" },
  { label: "Payments", value: "Invoicing + QuickBooks sync layer" },
  { label: "Deployment", value: "Vite build → Vercel / static hosting" },
];

const outcomes = [
  { before: "Paper run sheets & phone dispatch", after: "Live drag-and-drop dispatch board", note: "Crews see their day on mobile; dispatchers see all trucks in real time" },
  { before: "Invoicing back at the office", after: "Bill from the truck at job close", note: "Faster collection, less admin lag, fewer invoices that fall through the cracks" },
  { before: "Maintenance contracts tracked in spreadsheets", after: "Auto-scheduling service plans", note: "Contracts run themselves — no manual follow-up to book the next visit" },
];

export default function ServiceProCaseStudy() {
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
            <a className="font-medium text-purple-400 hover:text-purple-300" href="/work/farritech">Work</a>
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
                ServicePro
              </h1>
              <p className="mt-4 text-xl font-medium text-purple-400">
                Field service management platform built for the trades.
              </p>
              <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
                HVAC shops, plumbers, lawn crews, pool techs, and pest operators all run the same playbook — but most manage it from a clipboard, a whiteboard, and a group text. ServicePro is a full-stack SaaS built to replace all of it: dispatch, customer records, invoicing, recurring service plans, equipment history, and owner-level reporting. One platform, five trades, zero paper.
              </p>
            </div>

            {/* Snapshot card */}
            <div className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-8 ${glowCard} backdrop-blur`}>
              <div className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-6">Project snapshot</div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Product type", value: "SaaS Platform" },
                  { label: "Industry", value: "Field Service / Trades" },
                  { label: "Trades supported", value: "HVAC, Plumbing, Lawn, Pool, Pest" },
                  { label: "Build method", value: "AI-assisted dev" },
                  { label: "Stack", value: "React + Vite + Firebase" },
                  { label: "Pricing model", value: "Per-truck subscription" },
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
            title="Trades businesses run on memory and paper"
            subtitle="Field service companies with 2–15 trucks face the same operational drag: dispatch happens by phone, invoicing lags by days, and maintenance contracts live in someone's head. The tools that exist were built for enterprise — too expensive, too complex, and designed for the office rather than the truck."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "📋", pain: "Dispatch by whiteboard or group text", detail: "No real-time visibility. Crew changes require calls. Routing is whoever knows the area best." },
              { icon: "📄", pain: "Invoicing happens in the office — later", detail: "Jobs close in the field; billing happens tomorrow. Cash flow lags. Some jobs never get invoiced at all." },
              { icon: "🔁", pain: "Maintenance contracts managed manually", detail: "Spring/Fall tune-ups, monthly pest treatments, weekly pool visits — all tracked in spreadsheets or not tracked at all." },
            ].map((p) => (
              <div key={p.pain} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="font-semibold text-white">{p.pain}</div>
                <div className="mt-2 text-sm text-white/60">{p.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trades */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="Five Trades, One Platform"
            title="Configured for the work you actually do"
            subtitle="ServicePro ships with trade-specific defaults — service codes, recurrence patterns, equipment categories, and terminology — so each trade feels like the platform was built just for them."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((t) => (
              <div key={t.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-3xl mb-3">{t.emoji}</div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="mt-2 text-sm text-white/60">{t.detail}</div>
              </div>
            ))}
            {/* sixth card — the "built different" card */}
            <div className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard} flex flex-col justify-center`}>
              <div className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-2">Designed around the truck</div>
              <div className="text-sm text-white/70">Mobile-first UI for techs in the field. Big tap targets. Works offline. No five-step menus to log a service note.</div>
            </div>
          </div>
        </section>

        {/* Before → After */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="Outcomes"
            title="Before → After"
            subtitle="What changes when the platform replaces the clipboard."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {outcomes.map((x) => (
              <div key={x.before} className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard}`}>
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
            title="Full ops platform, from dispatch to reporting"
            subtitle="Every module was spec'd around actual field service workflows — not adapted from generic SaaS templates."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title}>
                {f.body}
              </FeatureCard>
            ))}
          </div>
        </section>

        {/* Key stats */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-10 ${glowCard} backdrop-blur`}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 mb-3">
                <Sparkles className="h-4 w-4" /> Platform benchmarks
              </div>
              <h2 className="text-2xl font-semibold text-white">Built for real results</h2>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { value: "38%", label: "Revenue lift in year one (avg.)" },
                { value: "6 hrs", label: "Office time saved per week per dispatcher" },
                { value: "92%", label: "Maintenance plan retention" },
                { value: "< 1 hr", label: "From signup to first invoice" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{s.value}</div>
                  <div className="mt-2 text-sm text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing model callout */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="Business Model"
            title="Per truck, not per click"
            subtitle="Pricing designed so the platform scales with the business — not against it."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { tier: "Solo", price: "$49/truck/mo", tagline: "One-truck operators", features: ["1 user", "Unlimited customers & jobs", "Mobile app", "Invoicing & payments"] },
              { tier: "Crew", price: "$129/truck/mo", tagline: "The shop standard", highlight: true, features: ["Up to 5 users", "Service Plans & Contracts", "Equipment tracking", "QuickBooks sync", "Priority support"] },
              { tier: "Fleet", price: "$299/truck/mo", tagline: "Multi-crew & commercial", features: ["Up to 15 users", "Multi-location", "API access", "Custom reporting", "Dedicated success manager"] },
            ].map((p) => (
              <div
                key={p.tier}
                className={`rounded-3xl p-6 backdrop-blur ${
                  p.highlight
                    ? `border-2 border-purple-500 bg-white/5 ${glowCard}`
                    : "border border-white/10 bg-white/5"
                }`}
              >
                {p.highlight && (
                  <div className="mb-3 text-xs font-semibold tracking-widest text-purple-400 uppercase">Most popular</div>
                )}
                <div className="text-lg font-semibold text-white">{p.tier}</div>
                <div className="text-2xl font-bold text-purple-400 mt-1">{p.price}</div>
                <div className="text-sm text-white/50 mt-1">{p.tagline}</div>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="text-purple-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="Tech Stack"
            title="Fast, lean, real-time"
            subtitle="Built for rapid iteration and zero server management overhead."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
            {stackItems.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                  i < stackItems.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="w-36 shrink-0 text-xs font-semibold uppercase tracking-widest text-purple-400">
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
            title="Domain expertise + AI-assisted development"
            subtitle="ServicePro wasn't built by a traditional software team. It was built the DAS Digital way — deep knowledge of the problem space, AI coding tools for execution speed, and real infrastructure from day one."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Know the industry",
                body: "Field service operations share DNA with payments and merchant services — recurring relationships, route density, contract management, fast cash flow. That domain fluency shaped every product decision.",
              },
              {
                step: "02",
                title: "Design for the truck first",
                body: "Most FSM software was built for the office and ported to mobile as an afterthought. ServicePro started with the tech in the field — big targets, readable in sunlight, no unnecessary steps.",
              },
              {
                step: "03",
                title: "Ship with AI, not a dev team",
                body: "Claude and other AI coding tools handled architecture, component generation, and Firebase integration. A platform that would have taken a 3-person team six months shipped in weeks.",
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

        {/* Also see FarriTech */}
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-1">Also in this portfolio</div>
              <div className="font-semibold text-white">FarriTech — SaaS for professional farriers</div>
              <div className="text-sm text-white/60 mt-1">QR booking, Stripe payments, Twilio SMS, Firebase, barn-ready mobile PWA.</div>
            </div>
            <a
              href="/work/farritech"
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${outlineBtn}`}
            >
              View FarriTech <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-10 text-center ${glowCard} backdrop-blur`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 mb-4">
              <Sparkles className="h-4 w-4" /> Want something like this?
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              We build platforms like ServicePro for your industry.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              SaaS product, internal ops tool, or client-facing workflow system — DAS Digital brings payments and operations domain expertise together with AI-assisted development to ship fast without a full dev team.
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
