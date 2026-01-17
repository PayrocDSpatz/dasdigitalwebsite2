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

/**
 * Single-file landing page for DAS Digital.
 * Requires TailwindCSS + lucide-react.
 */

const brand = {
  name: "DAS Digital",
  tagline:
    "We build automation + AI systems that save time, cut costs, and create predictable growth.",
  primaryCta: { label: "Get My Free Automation Plan", href: "#lead" },
  secondaryCta: { label: "See What We Build", href: "#what" },
};

const glowCard =
  "shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_20px_40px_-25px_rgba(168,85,247,0.45)]";

const purpleBtn =
  "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-fuchsia-500";

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
    <style jsx>{`
      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
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

const Card = ({ icon, title, children }) => (
  <div
    className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard} backdrop-blur`}
  >
    <div className="flex items-start gap-3">
      <div className="mt-1 rounded-2xl border border-white/10 bg-black/30 p-3">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="mt-2 text-sm leading-relaxed text-white/70">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition hover:bg-white/[0.07]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-base font-semibold text-white">{q}</div>
        <ChevronDown
          className={`h-5 w-5 text-white/70 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open ? <div className="mt-3 text-sm leading-relaxed text-white/70">{a}</div> : null}
    </button>
  );
};

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

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
      {/* Animated Purple Gradient Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,rgba(168,85,247,0.25),rgba(139,92,246,0.25),rgba(99,102,241,0.25),rgba(236,72,153,0.25))] bg-[length:400%_400%]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl animate-float" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/25 blur-3xl animate-float-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-gradient {
            animation: gradient 18s ease infinite;
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float 16s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070910]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Zap className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{brand.name}</div>
              <div className="text-xs text-white/60">Automation • AI • Ops</div>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#what">
              What we build
            </a>
            <a className="hover:text-white" href="#proof">
              Proof
            </a>
            <a className="hover:text-white" href="#process">
              Process
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </div>

          <a
            href={brand.primaryCta.href}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${purpleBtn}`}
          >
            {brand.primaryCta.label} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
                <ShieldCheck className="h-4 w-4" /> Original build • Dopamine-style layout • Your brand
              </div>
              <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Build an <span className="text-white">Automation + AI Engine</span> that runs your workflows and turns follow-ups into revenue.
              </h1>
              <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                {brand.tagline} We audit what you do today, remove friction, then deploy a done-for-you stack (Smartsheet,
                Make/Zapier, CRM, email, reporting) with documentation so you own the playbook.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={brand.primaryCta.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold ${purpleBtn}`}
                >
                  {brand.primaryCta.label} <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={brand.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.08]"
                >
                  {brand.secondaryCta.label}
                </a>
              </div>

              <p className="mt-3 text-xs text-white/60">
                Delivered in 72 hours • No long sales call • Clear next steps
              </p>
              <p className="mt-2 text-xs text-white/55 sm:hidden">
                Tip: rotate your phone for the best view of the live mock dashboard.
              </p>

              <div className="mt-8 sm:mt-10 space-y-4">
                <MarqueeRow
                  items={[
                    "Stop manual busywork",
                    "Instant routing & approvals",
                    "AI email follow-ups",
                    "Dashboards that match reality",
                    "Human-in-the-loop safety",
                  ]}
                />
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className={`rounded-[2rem] border-2 border-purple-500 bg-gradient-to-b from-white/10 to-white/5 p-4 sm:p-6 ${glowCard} overflow-hidden`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">AI Growth / Ops Engine</div>
                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                    Live mock
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <BarChart3 className="h-4 w-4" /> KPI Snapshot
                    </div>
                    <div className="mt-3 text-3xl font-semibold">+18%</div>
                    <div className="mt-1 text-xs text-white/60">Cycle time reduced</div>

                    <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                      <div className="h-2 w-2/3 rounded-full bg-white/70" />
                    </div>

                    <div className="mt-3 flex h-10 items-end gap-1">
                      {[
                        "40%",
                        "65%",
                        "55%",
                        "80%",
                        "60%",
                      ].map((h, i) => (
                        <div
                          key={i}
                          className="w-3 rounded bg-purple-400/70"
                          style={{ height: h }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Workflow className="h-4 w-4" /> Workflow
                    </div>
                    <ul className="mt-3 space-y-2 text-sm">
                      {["Capture", "Validate", "Route", "Notify"].map((t) => (
                        <li key={t} className="flex items-center gap-2 text-white/80">
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10">
                            <Check className="h-3 w-3" />
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:col-span-2 rounded-3xl border border-white/10 bg-black/20 p-4">
                    <div className="text-xs text-white/60">What this replaces</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {pain.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-2xl" />
            </div>
          </div>
        </section>

        {/* Problem / Contrast */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" id="what">
          <SectionTitle
            kicker="Why most systems fail"
            title="Most teams don’t have a growth/ops engine — they have duct tape."
            subtitle="If your processes live in people’s heads (or scattered tools), the business can’t scale predictably. We install a system that converts work into outcomes — reliably."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div
              className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard}`}
            >
              <div className="text-sm font-semibold text-white">Typical “agency / consultant” model</div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {["Sells deliverables, not results", "Outsources execution", "Hands you reports and disappears", "No documentation or ownership"].map(
                  (t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-white/10" />
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div
              className={`rounded-3xl border-2 border-purple-500 bg-gradient-to-b from-white/10 to-white/5 p-6 ${glowCard}`}
            >
              <div className="text-sm font-semibold text-white">DAS Digital model</div>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {["We embed with your team and execute", "Automate end-to-end (capture → approvals → updates → notifications)", "AI-assisted follow-ups with human checks", "Documentation + handoff so you own the playbook"].map(
                  (t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-white text-black">
                        <Check className="h-3 w-3" />
                      </span>
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card icon={<Workflow className="h-5 w-5" />} title="Workflow automation">
              Smartsheet + Make/Zapier scenarios that route work, validate data, update systems, and notify stakeholders.
            </Card>
            <Card icon={<Mail className="h-5 w-5" />} title="AI-powered follow-up">
              Lead and customer follow-ups that feel human — with guardrails, approvals, and audit trails.
            </Card>
            <Card icon={<BarChart3 className="h-5 w-5" />} title="Executive dashboards">
              KPIs that reconcile to source systems so leadership can trust the numbers.
            </Card>
          </div>
        </section>

        {/* Proof */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" id="proof">
          <SectionTitle
            kicker="Proof"
            title="Before → After outcomes you can feel"
            subtitle="Swap chaos for clarity. These are common results once the engine is installed (your numbers will vary)."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { before: "Manual handoffs", after: "Automated routing", note: "Less waiting, fewer errors" },
              { before: "Slow follow-up", after: "Instant responses", note: "Higher conversion, better CX" },
              { before: "Unknown status", after: "Live dashboards", note: "Visibility across teams" },
            ].map((x) => (
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

        {/* Process */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" id="process">
          <SectionTitle
            kicker="How it works"
            title="A simple, done-for-you process"
            subtitle="We move fast, document everything, and leave you with a system you can run in-house."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Audit + roadmap",
                desc: "We map your workflows, data sources, and bottlenecks. You get a prioritized plan with quick wins + a 30/60/90 build path.",
              },
              {
                step: "2",
                title: "Build + integrate",
                desc: "We implement automations, dashboards, and AI-assisted communications with guardrails, permissions, and testing.",
              },
              {
                step: "3",
                title: "Handoff + optimize",
                desc: "Documentation, SOPs, training, and iterative improvements. You own the playbook — no vendor lock-in.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard}`}
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow shadow-purple-500/40">
                  {s.step}
                </div>
                <div className="mt-4 text-lg font-semibold">{s.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead form */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" id="lead">
          <div
            className={`rounded-[2.25rem] border-2 border-purple-500 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur ${glowCard} sm:p-10`}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
                  <Sparkles className="h-4 w-4" /> Free plan
                </div>
                <h3 className="mt-4 text-balance text-3xl font-semibold">
                  Get a free Automation Plan in 72 hours
                </h3>
                <p className="mt-3 text-white/70">
                  Tell us what you’re trying to automate (or what’s breaking). We’ll respond with a clear blueprint: tools, steps,
                  timeline, and rough ROI.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {[
                    "No fluff. Clear next actions.",
                    "Includes quick wins + longer-term build.",
                    "Guardrails + security considerations.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-white text-black">
                        <Check className="h-3 w-3" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {!submitted ? (
              <form
                className="rounded-3xl border border-white/10 bg-black/20 p-6"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.target;
                  const data = new FormData(form);

                  await fetch("https://formspree.io/f/mjgggdbg", {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" },
                  });

                  setSubmitted(true);
                  form.reset();
                }}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Automation Plan Request"
                />

                <div className="grid gap-4">
                  <label className="grid gap-1 text-sm">
                    <span className="text-white/80">Name</span>
                    <input
                      required
                      name="name"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/20"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="grid gap-1 text-sm">
                    <span className="text-white/80">Email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/20"
                      placeholder="you@company.com"
                    />
                  </label>

                  <label className="grid gap-1 text-sm">
                    <span className="text-white/80">What are you trying to automate?</span>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/20"
                      placeholder="Example: intake → approval → update CRM → notify customer"
                    />
                  </label>

                  <button
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold ${purpleBtn}`}
                    type="submit"
                  >
                    Send request <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="text-xl font-semibold text-purple-400">Form submitted!</h4>
                <p className="mt-3 text-white/70">Thank you — we received your request and will be in touch shortly.</p>
              </div>
            )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" id="faq">
          <SectionTitle kicker="FAQ" title="Answers to common questions" />
          <div className="mt-10 grid gap-4">
            <FAQItem
              q="Do you work with Smartsheet + Make.com?"
              a="Yes — those are two of our core tools. We also work with Zapier, Google Workspace, Microsoft 365, HubSpot/Salesforce, QuickBooks, and custom APIs when needed."
            />
            <FAQItem
              q="Will we own everything you build?"
              a="Yes. You own the automations, sheets, docs, prompts, and SOPs. We design for handoff so you’re not dependent on us long-term."
            />
            <FAQItem
              q="How fast can we see impact?"
              a="Most teams see quick wins in days (routing, notifications, data validation). Larger multi-system builds typically take 2–8 weeks depending on scope."
            />
            <FAQItem
              q="Can you add AI safely without sending sensitive data everywhere?"
              a="Yes. We can implement approvals, redaction, role-based controls, and ‘human in the loop’ steps. For sensitive environments, we’ll suggest the safest architecture available."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-lg font-semibold">{brand.name}</div>
                <div className="mt-2 text-sm text-white/70">
                  Automation • AI • Operations • Dashboards
                </div>

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
                  href={brand.primaryCta.href}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold ${purpleBtn}`}
                >
                  {brand.primaryCta.label} <ArrowRight className="h-4 w-4" />
                </a>
                <div className="mt-3 text-xs text-white/50">
                  © {new Date().getFullYear()} {brand.name}. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
