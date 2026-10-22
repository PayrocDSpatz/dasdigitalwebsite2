import {
  ArrowRight,
  BookOpen,
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
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";
import LeadForm from "./_components/LeadForm";
import { AreasWeServe } from "./_components/ServiceLanding";
import RecentWork from "./_components/RecentWork";
import { GUIDE } from "./_components/guide";
import { CONTACT, FOUNDED, INDUSTRY_PAGES, LOCATION, SERVICES, serviceHref } from "./_components/site";

const description =
  "DAS Digital provides digital consulting services for small businesses: websites, AI receptionists and automation. Based in West Palm Beach, Florida.";

export const metadata = {
  title: { absolute: "DAS Digital | AI Receptionists & Digital Consulting Services, South Florida" },
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

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";

const FACTS = [
  { label: "What we do", value: "Website design, AI receptionists, business automation and technology consulting for small businesses." },
  { label: "Where we are", value: `${LOCATION.city}, Florida. We serve Palm Beach, Broward and Miami-Dade counties.` },
  { label: "Since", value: `${FOUNDED}, as DAS Consulting Services. Now DAS Digital.` },
  { label: "Founder", value: "David Spatz" },
  { label: "Contact", value: `${CONTACT.phoneDisplay} · ${CONTACT.email}` },
];

const FAQS = [
  {
    q: "What does DAS Digital do?",
    a: "We help small businesses with four things: websites that bring in customers, AI receptionists that answer every call, automation for follow-ups, reminders and invoices, and straight advice on which technology to use.",
  },
  {
    q: "Where is DAS Digital located?",
    a: "We're based in West Palm Beach, Florida, and work with businesses in Palm Beach, Broward and Miami-Dade counties.",
  },
  {
    q: "What is an AI receptionist?",
    a: "It answers your business phone when you can't, takes the caller's name, number and what they need, flags urgent calls and texts you the details right away. It can answer in English or Spanish.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what you need. After a short conversation we give you a clear price before any work starts.",
  },
  {
    q: "Is DAS Digital the same company as DAS Consulting Services?",
    a: `Yes. David Spatz started DAS Consulting Services in ${FOUNDED}. It's now DAS Digital.`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-purple-50/70 to-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold text-purple-700">Smarter Technology. Simpler Business.</p>
              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Websites, AI receptionists and automation for South Florida businesses
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
                Digital consulting services for small businesses. We set up the technology that helps your business run smoother, and explain it in plain English.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead" className={btnPrimary}>
                  Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={`tel:${CONTACT.phone}`} className={btnSecondary}>
                  <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {CONTACT.phoneDisplay}
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">{LOCATION.summary}</p>
            </div>

            <HeroIllustration />
          </div>
        </section>

        {/* Recent work */}
        <section id="work" className="scroll-mt-20 pt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RecentWork />
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

        {/* AI receptionist example */}
        <section className="border-t border-slate-100 bg-gradient-to-b from-white to-purple-50/60 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-purple-700">AI Receptionists</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Never miss a call</h2>
              <p className="mt-4 max-w-lg text-lg text-slate-600">
                When you can't pick up, your AI receptionist answers, takes down the details and texts you right away.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#lead" className={btnPrimary}>
                  Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="/ai-receptionist#try-riley" className="inline-flex items-center gap-1.5 px-2 text-sm font-semibold text-purple-700 hover:text-purple-900">
                  Talk to Riley, our AI receptionist <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <PhoneTextMock />
          </div>
        </section>

        {/* Free guide */}
        <section aria-labelledby="free-guide-heading" className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-8 rounded-2xl bg-purple-700 px-6 py-10 text-white sm:px-10 md:grid-cols-[auto_1fr_auto]">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15">
                <BookOpen className="h-8 w-8" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-purple-100">Free guide</p>
                <h2 id="free-guide-heading" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{GUIDE.title}</h2>
                <ul className="mt-4 space-y-1.5 text-purple-50">
                  {GUIDE.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/free-guide"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-purple-800 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get the Free Guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Free website review */}
        <section id="review" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-purple-700">Free website review</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Is your website up to today's standards?</h2>
              <p className="mt-4 text-slate-600">
                We check 10 areas, from speed and mobile to Google and AI search, and show you what to fix first. Free, no obligation.
              </p>
              <div className="mt-6 rounded-xl border-l-4 border-purple-700 bg-white px-5 py-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Good to know</div>
                <ul className="mt-2 space-y-1.5">
                  {ADA_FACTS.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] text-slate-500">
                  Source:{" "}
                  <a href="https://www.mondaq.com/unitedstates/constitutional-administrative-law/1745806/ada-title-iii-federal-lawsuit-filings-fall-slightly-to-8667-in-2025" className="underline hover:text-purple-700" target="_blank" rel="noopener noreferrer">Seyfarth Shaw 2025 ADA report</a>.
                </p>
              </div>
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
            <div className="mt-8">
              <p className="text-sm text-white/70">See what we set up for your trade:</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {INDUSTRY_PAGES.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:border-purple-300 hover:text-purple-200">
                      {p.short}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/automation" className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-purple-200 hover:text-white">
                    All trades <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why DAS Digital */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="rounded-2xl bg-purple-700 px-6 py-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Keep it simple. Keep it honest. Keep it working.
            </p>
          </div>
        </section>

        <AreasWeServe />

        {/* About DAS Digital: plain facts and common questions, written so search engines and AI tools can quote them */}
        <section id="faq" className="scroll-mt-20 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-purple-700">About DAS Digital</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The short version</h2>
              <dl className="mt-8 space-y-4 text-sm">
                {FACTS.map((f) => (
                  <div key={f.label} className="border-l-2 border-purple-700 pl-4">
                    <dt className="font-semibold text-slate-900">{f.label}</dt>
                    <dd className="mt-0.5 text-slate-600">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Common questions</h3>
              <dl className="mt-6 divide-y divide-slate-200">
                {FAQS.map((f) => (
                  <div key={f.q} className="py-5">
                    <dt className="flex gap-2 text-lg font-semibold">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" /> {f.q}
                    </dt>
                    <dd className="mt-2 pl-7 leading-relaxed text-slate-600">{f.a}</dd>
                  </div>
                ))}
              </dl>
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
  { label: "ADA accessibility", score: 64 },
  { label: "Security & privacy", score: 90 },
  { label: "Tracking", score: 20 },
  { label: "AI search", score: 25 },
];

const ADA_FACTS = [
  "Florida had the second most ADA lawsuits in the country in 2025.",
  "Well-known brands like Winn-Dixie and Domino's have faced lawsuits over website accessibility.",
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
        Sample scorecard. For illustration purposes only.
      </figcaption>
    </figure>
  );
}


// A text message the business owner gets after the AI receptionist takes a call. Made-up example.
function PhoneTextMock() {
  return (
    <figure className="mx-auto w-full max-w-[290px]">
      <div
        role="img"
        aria-label="Example text messages. Urgent call: Mary Jones just called about a leaky pipe and needs emergency service. Missed call: Bob Adams would like a quote on a new AC system."
        className="rounded-[2.75rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl shadow-purple-900/20"
      >
        <div aria-hidden="true" className="overflow-hidden rounded-[2.1rem] bg-white">
          <div className="flex justify-center pt-2">
            <span className="h-5 w-24 rounded-full bg-slate-900" />
          </div>
          <div className="border-b border-slate-100 px-4 pb-3 pt-3 text-center">
            <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-purple-700 text-white">
              <PhoneCall className="h-5 w-5" />
            </span>
            <div className="mt-1 text-xs font-semibold text-slate-800">AI Receptionist</div>
          </div>
          <div className="space-y-2 px-3 pb-6 pt-4">
            <div className="text-center text-[10px] text-slate-500">Today 7:42 PM</div>
            <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-slate-100 px-3.5 py-2.5 text-[13px] leading-snug text-slate-800">
              <div className="font-semibold text-red-700">🚨 Urgent call</div>
              <div className="mt-1">Mary Jones just called about a leaky pipe. She needs emergency service.</div>
              <div className="mt-2 text-slate-600">Callback: (555) 014-2290</div>
            </div>
            <div className="ml-auto max-w-[60%] rounded-2xl rounded-br-md bg-purple-700 px-3.5 py-2.5 text-[13px] leading-snug text-white">
              Calling her now 👍
            </div>
            <div className="pt-2 text-center text-[10px] text-slate-500">8:15 PM</div>
            <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-slate-100 px-3.5 py-2.5 text-[13px] leading-snug text-slate-800">
              <div className="font-semibold text-purple-700">📞 Missed call</div>
              <div className="mt-1">Bob Adams would like a quote on a new AC system.</div>
              <div className="mt-2 text-slate-600">Callback: (555) 014-7731</div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-slate-500">Example texts. For illustration purposes only.</figcaption>
    </figure>
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
