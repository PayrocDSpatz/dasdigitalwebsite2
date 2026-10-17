import { ArrowRight, BellRing, Check, CreditCard, MessageSquareText, PhoneCall, UserPlus } from "lucide-react";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import LeadForm from "../_components/LeadForm";
import { CONTACT, SITE_URL } from "../_components/site";

const path = "/ai-automation-small-business";
const description =
  "DAS Digital sets up simple business automation for small businesses: automatic follow-ups and reminders, lead tracking, email and text messages, and payment links. Based in South Florida.";

export const metadata = {
  title: "Business Automation for Small Business",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Business Automation for Small Business | DAS Digital", description, url: path, type: "website" },
};

// A phone taking a contactless card payment. Illustrative only.
function TapToPay() {
  return (
    <div aria-hidden="true" className="flex justify-center rounded-xl bg-slate-50 py-5">
      <svg viewBox="0 0 280 170" className="h-40 w-auto">
        <g transform="rotate(-6 170 85)">
          <rect x="96" y="40" width="168" height="92" rx="16" fill="#0f172a" />
          <rect x="104" y="47" width="152" height="78" rx="11" fill="#1e293b" />
          <circle cx="248" cy="86" r="3" fill="#334155" />
          <text x="160" y="80" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff">$185.00</text>
          <text x="160" y="98" textAnchor="middle" fontSize="8" fill="#94a3b8">Invoice #1042</text>
          <circle cx="222" cy="78" r="15" fill="#7e22ce" />
          <g fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
            <path d="M216 72a8 8 0 0 1 0 12" />
            <path d="M221 68a14 14 0 0 1 0 20" />
            <path d="M226 64a20 20 0 0 1 0 28" />
          </g>
        </g>
        <g transform="rotate(-18 70 95)">
          <rect x="18" y="58" width="96" height="62" rx="8" fill="#64748b" />
          <rect x="18" y="58" width="96" height="62" rx="8" fill="url(#cardShine)" />
          <circle cx="94" cy="76" r="7" fill="#cbd5e1" opacity="0.7" />
          <circle cx="102" cy="76" r="7" fill="#e2e8f0" opacity="0.7" />
          <rect x="28" y="72" width="16" height="12" rx="2" fill="#e2e8f0" />
          <rect x="28" y="102" width="44" height="4" rx="2" fill="#cbd5e1" />
        </g>
        <defs>
          <linearGradient id="cardShine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const TASKS = [
  {
    icon: BellRing,
    title: "Follow-ups and reminders",
    desc: "Appointment reminders, “just checking in” messages and review requests go out on time without anyone remembering to send them.",
  },
  {
    icon: UserPlus,
    title: "Keeping track of leads",
    desc: "Every inquiry from your website, phone or email lands in one list, so you can see who called and who still needs an answer.",
  },
  {
    icon: MessageSquareText,
    title: "Emails and text messages",
    desc: "Welcome messages, confirmations and updates are sent automatically when something happens, written in your words.",
  },
  {
    icon: CreditCard,
    title: "Payment links and invoices",
    desc: "Send a customer a link to pay by card right after the job, or take a tap-to-pay payment on your phone, so you get paid faster and chase fewer checks.",
    art: TapToPay,
  },
];

const EXAMPLE = [
  "A customer fills out the form on your website.",
  "They get a text right away saying you received it.",
  "You get an alert, and the lead is added to your list.",
  "If nobody has replied in a day, you get a reminder.",
  "After the job, they get an invoice with a link to pay.",
];

const STEPS = [
  { title: "We talk", desc: "You tell us which tasks eat up your week. We look at the tools you already use." },
  { title: "We set it up", desc: "We build the automation, connect it to your tools and test it with you before it goes live." },
  { title: "We stay in touch", desc: "If something needs changing later, you call us. You own everything we set up." },
];

const FAQS = [
  {
    q: "Do I need new software?",
    a: "Usually not. We start with the tools you already pay for, like your email, calendar, CRM or POS, and only suggest something new if it clearly saves you time or money.",
  },
  {
    q: "Do I need to be good with technology?",
    a: "No. We do the setup and show you how it works. Day to day, most of it runs on its own.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what you want automated. After a short conversation we give you a clear price before any work starts.",
  },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";

export default function Page() {
  const url = `${SITE_URL}${path}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Business automation for small business",
      serviceType: "Business automation",
      url,
      description,
      areaServed: "United States",
      provider: { "@type": "Organization", name: "DAS Digital", url: SITE_URL, email: CONTACT.email, telephone: CONTACT.phone },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DAS Digital", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Business Automation", item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-purple-50/70 to-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-sm font-semibold text-purple-700">Business Automation</p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Let the busywork happen on its own
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              We set up simple automations that send your follow-ups, reminders and invoices for you, so you spend less time on admin and fewer customers slip through the cracks.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lead" className={btnPrimary}>
                Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`tel:${CONTACT.phone}`} className={btnSecondary}>
                <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* What we automate */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-purple-700">What we can take off your plate</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Four common jobs we automate</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {TASKS.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.title}
                    className={`rounded-2xl border border-slate-200 bg-white p-7 shadow-sm ${t.art ? "lg:col-span-3 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-10" : ""}`}
                  >
                    <div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-purple-50 text-purple-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{t.desc}</p>
                    </div>
                    {t.art ? (
                      <div className="mt-6 md:mt-0 md:w-80">
                        <t.art />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Example */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold text-purple-700">An example</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What it looks like in practice</h2>
              <p className="mt-4 text-slate-600">
                Here is one simple setup. Every step happens automatically. Yours would be built around how your business works.
              </p>
            </div>
            <ol className="space-y-3">
              {EXAMPLE.map((step, i) => (
                <li key={step} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-purple-700 text-sm font-semibold text-white">{i + 1}</span>
                  <span className="pt-0.5 text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-purple-700">How it works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Three simple steps</h2>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
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

        {/* FAQ */}
        <section className="border-t border-slate-100 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Common questions</h2>
            <dl className="mt-10 divide-y divide-slate-200">
              {FAQS.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="flex gap-2 text-lg font-semibold">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" /> {f.q}
                  </dt>
                  <dd className="mt-2 pl-7 leading-relaxed text-slate-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section id="lead" className="scroll-mt-20 bg-purple-50/60 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-purple-700">Let's talk</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Tell us what takes up your time</h2>
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
