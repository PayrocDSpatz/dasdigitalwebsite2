import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  Compass,
  Globe,
  Hammer,
  Home,
  Inbox,
  LifeBuoy,
  Link2,
  MonitorSmartphone,
  PhoneCall,
  PhoneMissed,
  Search,
  ShoppingBag,
  Store,
  UtensilsCrossed,
  Workflow,
  Wrench,
} from "lucide-react";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";
import LeadForm from "./_components/LeadForm";
import { CONTACT, SERVICES, serviceHref } from "./_components/site";

const description =
  "DAS Digital provides practical digital consulting services for small businesses: professional websites, AI phone answering and automated follow-ups. Based in South Florida. Request a free consultation.";

export const metadata = {
  title: { absolute: "DAS Digital | Digital Consulting Services for Small Business" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "DAS Digital | Smarter Technology. Simpler Business.",
    description,
    url: "https://dasdigitalai.com",
    siteName: "DAS Digital",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "DAS Digital | Smarter Technology. Simpler Business.", description },
};

const byKey = Object.fromEntries(SERVICES.map((s) => [s.key, s]));

const SERVICE_CARDS = [
  {
    key: "website",
    icon: Globe,
    summary: "A fast, professional website that explains what you do and turns visitors into inquiries.",
    items: ["New websites and redesigns", "Mobile-friendly design", "Local SEO", "Hosting, updates and support"],
    cta: "Discuss Your Website",
  },
  {
    key: "ai-receptionist",
    icon: PhoneCall,
    summary: "Answer more calls after hours and when you're busy, and capture the details of every caller.",
    items: ["AI-powered phone answering", "After-hours and overflow calls", "Appointment requests and lead capture", "Call summaries and notifications"],
    cta: "Ask About AI Receptionists",
  },
  {
    key: "automation",
    icon: Workflow,
    summary: "Follow-ups, reminders and data entry that happen on their own, so nothing waits on someone's memory.",
    items: ["Customer follow-ups and reminders", "Lead management and CRM integration", "Email and SMS workflows", "Forms and customer onboarding"],
    cta: "Explore Business Automation",
  },
  {
    key: "consulting",
    icon: Compass,
    summary: "Straight advice on choosing, connecting and getting more out of the systems you already pay for.",
    items: ["Technology assessments", "Software selection and setup", "Payment processing and POS", "Systems integration"],
    cta: "Talk to Us About Your Systems",
  },
];

const PROBLEMS = [
  { icon: PhoneMissed, title: "Missed calls", desc: "Calls that go to voicemail after hours or during a busy rush often go to a competitor instead.", fix: "ai-receptionist" },
  { icon: MonitorSmartphone, title: "An outdated website", desc: "A slow site that looks dated on a phone makes a good business look smaller than it is.", fix: "website" },
  { icon: Inbox, title: "Repetitive admin work", desc: "Hours each week spent copying information, sending reminders and chasing paperwork.", fix: "automation" },
  { icon: Search, title: "Leads that slip through", desc: "Inquiries that sit in an inbox for days, or never get a second follow-up.", fix: "automation" },
  { icon: Link2, title: "Systems that don't talk", desc: "A CRM, a calendar, a POS and spreadsheets that all hold part of the picture.", fix: "consulting" },
];

const STEPS = [
  { title: "Discover", desc: "We learn how your business runs today: where calls, leads and paperwork go, and what slows you down." },
  { title: "Recommend", desc: "You get a clear plan in plain language, with what to do first and what it will cost." },
  { title: "Implement", desc: "We build and set everything up, connect it to the tools you already use, and test it with you." },
  { title: "Support", desc: "We stay available for updates, questions and improvements after launch." },
];

const INDUSTRIES = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Hammer, label: "Contractors" },
  { icon: Wrench, label: "Home services" },
  { icon: Building2, label: "Professional services" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Store, label: "Other local businesses" },
];

const REASONS = [
  { title: "Practical experience", desc: "Built by someone who has spent years running operations, payments and sales teams, not just writing code." },
  { title: "Sized to your business", desc: "Recommendations that fit your budget and your team, not complicated enterprise systems." },
  { title: "You own what we build", desc: "Your website, workflows and data stay yours, with documentation so you're never locked in." },
  { title: "Support after launch", desc: "A real person to call when something needs changing, long after the project is done." },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-purple-50/70 to-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold text-purple-700">Digital consulting services for small businesses</p>
              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Smarter Technology. Simpler Business.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
                Websites, AI-powered customer communications, and business automation solutions that help your business work smarter and grow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead" className={btnPrimary}>
                  Request a Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={`tel:${CONTACT.phone}`} className={btnSecondary}>
                  <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {CONTACT.phoneDisplay}
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">Based in South Florida. Working with businesses across the US.</p>
            </div>

            <HeroIllustration />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="What we do"
              title="Four ways we help your business run better"
              intro="Start with one, or let us recommend the right mix after a short conversation."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {SERVICE_CARDS.map((c) => {
                const s = byKey[c.key];
                const Icon = c.icon;
                return (
                  <article key={c.key} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-purple-50 text-purple-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{s.label}</h3>
                    <p className="mt-2 text-slate-600">{c.summary}</p>
                    <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                      {c.items.map((i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-700" aria-hidden="true" /> {i}
                        </li>
                      ))}
                    </ul>
                    <a href={s.ready ? s.href : "#lead"} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-900">
                      {c.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Problems we solve" title="Sound familiar?" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((p) => {
                const Icon = p.icon;
                const s = byKey[p.fix];
                return (
                  <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <Icon className="h-6 w-6 text-purple-700" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                    <a href={serviceHref(s)} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple-700 hover:text-purple-900">
                      {s.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="How we work" title="A simple, four-step process" />
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="border-t-2 border-purple-700 pt-5">
                  <span className="text-sm font-semibold text-purple-700">Step {i + 1}</span>
                  <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-purple-300">Industries we serve</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built for local businesses</h2>
              <p className="mt-4 text-slate-300">
                We work with owner-led businesses where every call, lead and hour counts.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((x) => {
                const Icon = x.icon;
                return (
                  <li key={x.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                    <Icon className="h-5 w-5 text-purple-300" aria-hidden="true" />
                    <span className="font-medium">{x.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Why DAS Digital */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Why DAS Digital" title="Practical technology, from people who've run a business" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {REASONS.map((r) => (
                <div key={r.title}>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold">Recent work</h3>
                <p className="mt-1 text-sm text-slate-600">Software we've designed and built for small, hands-on industries.</p>
              </div>
              <div className="flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:gap-6">
                <a href="/work/farritech" className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-900">
                  FarriTech: software for farriers <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="/work/servicepro" className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-900">
                  Field service software for the trades <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation */}
        <section id="lead" className="scroll-mt-20 bg-purple-50/60 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-purple-700">Free consultation</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Tell us what's slowing your business down</h2>
              <p className="mt-4 text-slate-600">
                Share a few details and we'll get back to you to set up a conversation. No obligation and no jargon.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <p className="text-slate-600">Prefer to talk now?</p>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-purple-700">
                  <PhoneCall className="h-5 w-5 text-purple-700" aria-hidden="true" /> {CONTACT.phoneDisplay}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="block font-medium text-slate-700 hover:text-purple-700">{CONTACT.email}</a>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function SectionHeading({ kicker, title, intro }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold text-purple-700">{kicker}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-slate-600">{intro}</p> : null}
    </div>
  );
}

// A simple picture of what the services do day to day. Illustrative only: no figures or claims.
function HeroIllustration() {
  const rows = [
    { icon: Globe, title: "New website inquiry", note: "Sent to your inbox and CRM" },
    { icon: PhoneCall, title: "After-hours call answered", note: "Caller details captured" },
    { icon: CalendarClock, title: "Appointment reminder", note: "Sent to the customer automatically" },
    { icon: LifeBuoy, title: "Follow-up scheduled", note: "No lead left waiting" },
  ];
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-purple-900/5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Home className="h-4 w-4 text-purple-700" /> Your business, today
          </div>
          <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700">Example</span>
        </div>
        <ul className="mt-4 space-y-3">
          {rows.map((r) => {
            const Icon = r.icon;
            return (
              <li key={r.title} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-purple-700 ring-1 ring-slate-200">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-800">{r.title}</div>
                  <div className="text-xs text-slate-500">{r.note}</div>
                </div>
                <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-600" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
