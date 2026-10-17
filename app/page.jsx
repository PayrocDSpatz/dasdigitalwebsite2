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
  X,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";
import LeadForm from "./_components/LeadForm";
import { CONTACT, SERVICES, serviceHref } from "./_components/site";

const description =
  "DAS Digital provides practical digital consulting services for small businesses: professional websites, AI phone answering and automated follow-ups. Based in South Florida. Call or send us a message today.";

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
    items: ["Customer follow-ups and reminders", "Lead management and CRM integration", "Email and SMS workflows", "Payment links and invoices for quick payment"],
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

const POS_SYSTEMS = [
  { name: "Clover", desc: "Countertop, handheld and online ordering setups for restaurants, retail and service businesses." },
  { name: "Square", desc: "Point of sale, payments and appointments for shops, cafes, salons and mobile businesses." },
];

const WEBSITES = [
  {
    title: "Palm Beach Farrier Supply",
    desc: "A website for a farrier supply store in Wellington, Florida: products, store hours, directions and contact.",
    src: "/work/palm-beach-farrier-supply.jpg",
    alt: "Home page of the Palm Beach Farrier Supply website: the headline \u201cEverything for the farrier, just down the road from the show grounds\u201d beside a photo of a farrier leading a horse at sunrise",
  },
];

const RECENT_WORK = [
  { kind: "Software", title: "Field service platform", desc: "Dispatch, invoicing and service plans for HVAC, plumbing, lawn, pool and pest crews.", href: "/work/servicepro" },
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
                  Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

        {/* Website before and after */}
        <section className="border-t border-slate-100 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Website design"
              title="What a website redesign can look like"
              intro="An example of a typical service business website before and after a redesign. The business shown is made up for illustration."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <BeforeSite />
              <AfterSite />
            </div>
          </div>
        </section>

        {/* POS systems */}
        <section id="pos" className="scroll-mt-20 border-t border-slate-100 pb-20 pt-4">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-purple-700">Point of sale</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">POS systems we work with</h2>
              <p className="mt-4 text-slate-600">
                We help you pick the right point-of-sale system, get it set up, and make it work with the rest of your business.
              </p>
              <p className="mt-4 text-slate-600">
                Have specific requirements or need certain features? Call us at{" "}
                <a href={`tel:${CONTACT.phone}`} className="whitespace-nowrap font-semibold text-slate-900 hover:text-purple-700">
                  {CONTACT.phoneDisplay}
                </a>{" "}
                and we'll help you find the right fit.
              </p>
              <a href="#lead" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-900">
                Ask about POS for your business <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {POS_SYSTEMS.map((x) => (
                <li key={x.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-2xl font-bold tracking-tight text-slate-900">{x.name}</span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mx-auto mt-8 max-w-6xl px-4 text-xs leading-relaxed text-slate-500 sm:px-6">
            Clover is a trademark of Clover Network, LLC. Square is a trademark of Block, Inc. All product names, logos and brands
            are the property of their respective owners and are used here only to identify the systems we work with. DAS Digital
            is an independent company and is not affiliated with, sponsored by or endorsed by Clover Network, LLC or Block, Inc.
          </p>
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
            <p className="mb-12 rounded-2xl bg-purple-700 px-6 py-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Keep it simple. Keep it honest. Keep it working.
            </p>
            <SectionHeading kicker="Why DAS Digital" title="Practical technology, from people who've run a business" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {REASONS.map((r) => (
                <div key={r.title}>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.desc}</p>
                </div>
              ))}
            </div>
            <div id="about" className="mt-12 scroll-mt-20 grid gap-6 rounded-2xl border border-purple-100 bg-purple-50/50 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
              <span aria-hidden="true" className="grid h-16 w-16 place-items-center rounded-full bg-purple-700 text-xl font-bold text-white">DS</span>
              <div>
                <h3 className="text-xl font-semibold">About me</h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
                  Hi, I'm David Spatz. I was born in New Jersey, moved to Florida when I was 10, and grew up in the Miami area. I
                  also grew up in the restaurant business, so I know what it's like to run a busy place where every customer and
                  every minute counts.
                </p>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
                  Since then I've started my own consulting company and worked as an executive for payment processing companies.
                  Through all of it, my passion has been helping businesses find solutions that make their day easier. That's what
                  DAS Digital is about: practical technology, explained in plain language, from someone who has been on your side of
                  the counter.
                </p>
              </div>
            </div>
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="font-semibold">Recent work</h3>
              <p className="mt-1 text-sm text-slate-600">Websites and software we've designed and built for local businesses and hands-on industries.</p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {WEBSITES.map((w) => (
                  <li key={w.title}>
                    <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                      <div className="relative aspect-[2/1] border-b border-slate-200">
                        <Image src={w.src} alt={w.alt} fill sizes="(min-width: 768px) 536px, 100vw" className="object-cover object-left-top" />
                      </div>
                      <figcaption className="p-5">
                        <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">Website</span>
                        <span className="mt-1 block font-semibold text-slate-900">{w.title}</span>
                        <span className="mt-1 block text-sm text-slate-600">{w.desc}</span>
                      </figcaption>
                    </figure>
                  </li>
                ))}
                {RECENT_WORK.map((w) => (
                  <li key={w.title}>
                    <a
                      href={w.href}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600"
                    >
                      <DispatchMock />
                      <span className="flex flex-1 flex-col p-5">
                        <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">{w.kind}</span>
                        <span className="mt-1 font-semibold text-slate-900">{w.title}</span>
                        <span className="mt-1 text-sm text-slate-600">{w.desc}</span>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-700 group-hover:text-purple-900">
                          Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="lead" className="scroll-mt-20 bg-purple-50/60 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-purple-700">Let's talk</p>
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

// A simplified dispatch board, standing in for a screenshot of the field service platform.
function DispatchMock() {
  const jobs = [
    { time: "8:00", job: "AC tune-up", tech: "Crew A", tone: "bg-emerald-100 text-emerald-700", status: "Done" },
    { time: "10:30", job: "Water heater install", tech: "Crew B", tone: "bg-sky-100 text-sky-700", status: "On site" },
    { time: "1:00", job: "Lawn service plan", tech: "Crew A", tone: "bg-amber-100 text-amber-700", status: "En route" },
    { time: "3:30", job: "Pool inspection", tech: "Crew C", tone: "bg-slate-200 text-slate-600", status: "Scheduled" },
  ];
  return (
    <span aria-hidden="true" className="block aspect-[2/1] border-b border-slate-200 bg-slate-50 p-4 sm:p-5">
      <span className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-800">Today's jobs</span>
        <span className="rounded-md bg-purple-700 px-2.5 py-1 text-[11px] font-semibold text-white">+ New job</span>
      </span>
      <span className="mt-3 block space-y-2">
        {jobs.map((j) => (
          <span key={j.time} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs">
            <span className="w-9 font-medium text-slate-500">{j.time}</span>
            <span className="flex-1 truncate font-medium text-slate-800">{j.job}</span>
            <span className="hidden text-slate-500 sm:inline">{j.tech}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${j.tone}`}>{j.status}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

// Before/after mockups of a made-up plumbing company. Pure markup, illustrative only.
function MockFrame({ label, tone, children, notes }) {
  return (
    <figure>
      <div className="flex items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tone}`}>{label}</span>
      </div>
      <div aria-hidden="true" className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
        <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 h-4 flex-1 rounded bg-white" />
        </div>
        {children}
      </div>
      <figcaption>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {notes.map((n) => (
            <li key={n} className="flex gap-2">
              {label === "After" ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-700" aria-hidden="true" />
              ) : (
                <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              )}{" "}
              {n}
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

function BeforeSite() {
  return (
    <MockFrame
      label="Before"
      tone="bg-slate-200 text-slate-700"
      notes={[
        "Cluttered layout that's hard to read on a phone",
        "Phone number buried in small text",
        "No clear next step for the visitor",
      ]}
    >
      <div className="h-[340px] bg-[#e9e6dc] p-4 font-serif text-[#222]">
        <div className="border-b-4 border-double border-[#1d3f8f] pb-2 text-center">
          <div className="text-xl font-bold text-[#1d3f8f]">EXAMPLE PLUMBING CO.</div>
          <div className="text-[10px] italic">Quality Work at Fair Prices</div>
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-x-2 text-[10px] text-[#1a0dab] underline">
          <span>Home</span>|<span>About Us</span>|<span>Services</span>|<span>Coupons</span>|<span>Links</span>|<span>Gallery</span>|<span>Contact</span>
        </div>
        <div className="mt-3 text-center text-sm font-bold text-[#b00]">*** WELCOME TO OUR WEB SITE!!! ***</div>
        <div className="mt-2 grid grid-cols-[1fr_80px] gap-3">
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded-sm bg-[#bdb8a9]" />
            <div className="h-2 w-11/12 rounded-sm bg-[#bdb8a9]" />
            <div className="h-2 w-full rounded-sm bg-[#bdb8a9]" />
            <div className="h-2 w-10/12 rounded-sm bg-[#bdb8a9]" />
            <div className="h-2 w-full rounded-sm bg-[#bdb8a9]" />
            <div className="h-2 w-9/12 rounded-sm bg-[#bdb8a9]" />
            <div className="h-2 w-full rounded-sm bg-[#bdb8a9]" />
            <div className="h-2 w-8/12 rounded-sm bg-[#bdb8a9]" />
          </div>
          <div className="grid h-20 place-items-center border-2 border-dashed border-[#999] text-center text-[9px] text-[#666]">photo coming soon</div>
        </div>
        <div className="mt-4 text-[10px] text-[#1a0dab] underline">Click here for more information</div>
        <div className="mt-6 text-center text-[8px] text-[#555]">Call us at 555-0100 &middot; Mon-Fri 8-5 &middot; Best viewed in Internet Explorer</div>
      </div>
    </MockFrame>
  );
}

function AfterSite() {
  return (
    <MockFrame
      label="After"
      tone="bg-purple-100 text-purple-800"
      notes={[
        "A clear headline that says what you do and where",
        "Call and booking buttons right at the top",
        "Clean, mobile-friendly design that builds trust",
      ]}
    >
      <div className="h-[340px] bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
          <span className="text-sm font-bold text-sky-900">Example Plumbing</span>
          <span className="rounded-md bg-sky-700 px-2.5 py-1 text-[10px] font-semibold text-white">Call (555) 010-0000</span>
        </div>
        <div className="bg-gradient-to-br from-sky-50 to-white px-4 py-5">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-sky-700">Licensed local plumbers</div>
          <div className="mt-1.5 text-xl font-bold leading-tight text-slate-900">Fast, friendly plumbing repairs, same-day when you need it</div>
          <div className="mt-2 text-[11px] text-slate-600">Leaks, clogs, water heaters and more. Upfront pricing before we start.</div>
          <div className="mt-3 flex gap-2">
            <span className="rounded-md bg-sky-700 px-3 py-1.5 text-[11px] font-semibold text-white">Book a visit</span>
            <span className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-800">Call now</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 px-4 py-3">
          {["Drain cleaning", "Water heaters", "Leak repair"].map((t) => (
            <div key={t} className="rounded-lg border border-slate-200 p-2">
              <div className="h-5 w-5 rounded bg-sky-100" />
              <div className="mt-1.5 text-[10px] font-semibold text-slate-800">{t}</div>
              <div className="mt-1 h-1.5 w-full rounded-sm bg-slate-100" />
              <div className="mt-1 h-1.5 w-3/4 rounded-sm bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
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
