import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  Compass,
  Globe,
  Hammer,
  Home,
  LifeBuoy,
  PhoneCall,
  ShoppingBag,
  Store,
  UtensilsCrossed,
  Workflow,
  Wrench,
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
    summary: "Modern websites that bring in customers.",
    cta: "Learn more",
  },
  {
    key: "ai-receptionist",
    icon: PhoneCall,
    summary: "Never miss a call, day or night.",
    cta: "Learn more",
  },
  {
    key: "automation",
    icon: Workflow,
    summary: "Follow-ups, reminders and invoices on autopilot.",
    cta: "Learn more",
  },
  {
    key: "consulting",
    icon: Compass,
    summary: "Straight advice on the right tools for you.",
    cta: "Learn more",
  },
];


const STEPS = [
  { title: "Discover", desc: "We learn how your business runs." },
  { title: "Recommend", desc: "A clear plan and price, in plain English." },
  { title: "Implement", desc: "We set it all up and test it with you." },
  { title: "Support", desc: "We're here when you need us." },
];

const INDUSTRIES = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Hammer, label: "Contractors" },
  { icon: Wrench, label: "Home services" },
  { icon: Building2, label: "Professional services" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Store, label: "Other local businesses" },
];


const POS_SYSTEMS = [
  { name: "Clover", desc: "Countertop, handheld and online ordering setups for restaurants, retail and service businesses." },
  { name: "Square", desc: "Point of sale, payments and appointments for shops, cafes, salons and mobile businesses." },
];

const WEBSITES = [
  {
    title: "Palm Beach Farrier Supply",
    desc: "A farrier supply store in Wellington, Florida.",
    src: "/work/palm-beach-farrier-supply.jpg",
    alt: "Home page of the Palm Beach Farrier Supply website: the headline \u201cEverything for the farrier, just down the road from the show grounds\u201d beside a photo of a farrier leading a horse at sunrise",
  },
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
                Websites, AI phone answering and automation that help your business run smoother.
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
              title="How we help"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_CARDS.map((c) => {
                const s = byKey[c.key];
                const Icon = c.icon;
                return (
                  <article key={c.key} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-purple-50 text-purple-700">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{s.label}</h3>
                    <p className="mt-2 text-slate-600">{c.summary}</p>
                    <a href={s.ready ? s.href : "#lead"} className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-900">
                      {c.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Free website review */}
        <section id="review" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-purple-700">Free website review</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">See how your website scores</h2>
              <p className="mt-4 text-slate-600">
                We check 10 areas, from speed and mobile to Google and AI search, and show you what to fix first. Free, no obligation.
              </p>
              <a href="#lead" className={`mt-8 ${btnPrimary}`}>
                Get My Free Review <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <WebsiteScorecard />
          </div>
        </section>

        {/* POS systems */}
        <section id="pos" className="scroll-mt-20 border-t border-slate-100 pb-20 pt-4">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-purple-700">Point of sale</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">POS systems we work with</h2>
              <p className="mt-4 text-slate-600">
                We help you pick it, set it up and connect it.
              </p>
              <p className="mt-4 text-slate-600">
                Need specific features? Call us at{" "}
                <a href={`tel:${CONTACT.phone}`} className="whitespace-nowrap font-semibold text-slate-900 hover:text-purple-700">
                  {CONTACT.phoneDisplay}
                </a>
                .
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

        {/* How we work */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="How we work" title="Four simple steps" />
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
            <p className="rounded-2xl bg-purple-700 px-6 py-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Keep it simple. Keep it honest. Keep it working.
            </p>
            <div id="about" className="mt-12 scroll-mt-20 grid gap-6 rounded-2xl border border-purple-100 bg-purple-50/50 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
              <Image src="/about/david-spatz.jpg" alt="David Spatz" width={80} height={80} className="h-20 w-20 rounded-full object-cover ring-4 ring-white" />
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
                <li>
                  <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <TopCutMock />
                    <figcaption className="p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">Website &middot; Sample design</span>
                      <span className="mt-1 block font-semibold text-slate-900">Top Cut Lawn and Landscaping</span>
                      <span className="mt-1 block text-sm text-slate-600">
                        A sample lawn care website. (Made-up business.)
                      </span>
                    </figcaption>
                  </figure>
                </li>
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
                Tell us what you need. We'll get back to you fast.
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

// A sample website scorecard for the made-up Example Plumbing site. Illustrative only.
const SCORECARD = [
  { label: "Speed", score: 52 },
  { label: "Mobile", score: 38 },
  { label: "Google search (SEO)", score: 45 },
  { label: "Content", score: 60 },
  { label: "Design", score: 55 },
  { label: "Calls to action", score: 30 },
  { label: "Accessibility", score: 64 },
  { label: "Security", score: 90 },
  { label: "Tracking", score: 20 },
  { label: "AI search", score: 25 },
];

const TOP_FIXES = ["Add a call button at the top", "Make text and buttons bigger on phones", "Track where your leads come from"];

function scoreTone(n) {
  if (n >= 80) return { bar: "bg-emerald-500", text: "text-emerald-700" };
  if (n >= 50) return { bar: "bg-amber-400", text: "text-amber-700" };
  return { bar: "bg-red-500", text: "text-red-700" };
}

function WebsiteScorecard() {
  const overall = Math.round(SCORECARD.reduce((t, r) => t + r.score, 0) / SCORECARD.length);
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-7">
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Website scorecard</div>
          <div className="mt-1 font-semibold text-slate-900">Example Plumbing Co.</div>
          <span className="mt-2 inline-block rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700">Sample report</span>
        </div>
        <div className="text-right">
          <div className={`text-4xl font-bold ${scoreTone(overall).text}`}>{overall}</div>
          <div className="text-xs text-slate-500">out of 100</div>
        </div>
      </div>
      <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {SCORECARD.map((r) => {
          const tone = scoreTone(r.score);
          return (
            <li key={r.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-800">{r.label}</span>
                <span className={`font-semibold ${tone.text}`}>{r.score}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-slate-100" role="presentation">
                <div className={`h-1.5 rounded-full ${tone.bar}`} style={{ width: `${r.score}%` }} />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 rounded-xl bg-purple-50 p-4">
        <div className="text-sm font-semibold text-purple-900">Top 3 fixes</div>
        <ol className="mt-2 space-y-1.5 text-sm text-slate-700">
          {TOP_FIXES.map((f, i) => (
            <li key={f} className="flex gap-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-purple-700 text-[11px] font-semibold text-white">{i + 1}</span>
              {f}
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
        Sample scorecard for a made-up business, for illustration.
      </figcaption>
    </figure>
  );
}

// A made-up lawn care company's home page, drawn in markup. Illustrative only.
function TopCutMock() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br pb-5 sm:aspect-[2/1] sm:pb-0 from-green-800 via-green-700 to-emerald-600">
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[repeating-linear-gradient(100deg,rgba(255,255,255,0.06)_0_14px,rgba(0,0,0,0.06)_14px_28px)]" />
      <div className="relative flex items-center justify-between px-4 py-2.5 sm:px-5">
        <span className="text-sm font-extrabold tracking-tight text-white">
          TOP CUT <span className="font-semibold text-lime-300">Lawn &amp; Landscaping</span>
        </span>
        <span className="hidden gap-3 text-[10px] text-green-100 sm:flex">
          <span>Services</span>
          <span>Gallery</span>
          <span>Contact</span>
        </span>
      </div>
      <div className="relative px-4 pt-3 sm:px-5 sm:pt-5">
        <div className="max-w-[70%] text-lg font-bold leading-tight text-white sm:text-2xl">A greener lawn without lifting a finger</div>
        <div className="mt-1.5 text-[10px] text-green-100 sm:text-xs">Weekly mowing, landscaping and cleanups. Free quotes.</div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-md bg-lime-400 px-3 py-1.5 text-[10px] font-semibold text-green-950 sm:text-xs">Get a free quote</span>
          <span className="rounded-md border border-white/60 px-3 py-1.5 text-[10px] font-semibold text-white sm:text-xs">Call now</span>
        </div>
      </div>
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
