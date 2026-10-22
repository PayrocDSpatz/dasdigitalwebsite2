import { ArrowRight, Check, MapPin, PhoneCall } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import LeadForm from "./LeadForm";
import { AREA_SERVED, CONTACT, LOCATION, PROVIDER, SITE_URL, breadcrumbs } from "./site";

// One page written for a specific search ("automation consultant Florida", …), in the light site design.
// Rendered on the server so search engines get the full text, the page's own
// metadata, and its structured data (Service, FAQPage, BreadcrumbList).

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";

export default function ServiceLanding({ path, kicker, title, intro, problems, offers, proof, steps, faqs, serviceName, showAreas = false }) {
  const url = `${SITE_URL}${path}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      serviceType: serviceName,
      url,
      description: intro,
      areaServed: AREA_SERVED,
      provider: PROVIDER,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    breadcrumbs([{ name: title, href: path }]),
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-purple-50/70 to-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-sm font-semibold text-purple-700">{kicker}</p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">{intro}</p>
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
        </section>

        {/* Problems */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-purple-700">Sound familiar?</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{problems.title}</h2>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {problems.items.map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-600" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Offers */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-purple-700">What we do</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{offers.title}</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {offers.items.map((o) => (
                <div key={o.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-semibold">{o.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <h2 className="text-3xl font-bold tracking-tight">{proof.title}</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{proof.intro}</p>
              <ul className="mt-6 space-y-3">
                {proof.items.map((p) => (
                  <li key={p.name} className="flex items-start gap-3 text-slate-700">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" />
                    <span>
                      {p.href ? <a href={p.href} className="font-semibold text-purple-700 underline-offset-2 hover:underline">{p.name}</a> : <span className="font-semibold text-slate-900">{p.name}</span>}
                      {": "}{p.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {showAreas ? <AreasWeServe /> : null}

        {/* How it works */}
        <section className="border-t border-slate-100 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-purple-700">How it works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Three simple steps</h2>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
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
              {faqs.map((f) => (
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

// The counties DAS Digital serves in person, from the shared LOCATION facts.
export function AreasWeServe({ className = "bg-slate-50" }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-purple-700">Areas we serve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Local to South Florida</h2>
          <p className="mt-4 text-slate-600">
            We're based in {LOCATION.city} and work with businesses across these three counties, in person or by phone.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {LOCATION.counties.map((c) => (
            <li key={c} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 font-medium text-slate-800">
              <MapPin className="h-5 w-5 text-purple-700" aria-hidden="true" /> {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
