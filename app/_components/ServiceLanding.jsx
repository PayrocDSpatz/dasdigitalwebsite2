import { ArrowRight, Check } from "lucide-react";
import { CASE_STUDIES, CONTACT, SERVICE_PAGES, SITE_URL } from "./site";

// One page written for a specific search ("AI automation for small business", …).
// Rendered on the server so search engines get the full text, the page's own
// metadata, and its structured data (Service, FAQPage, BreadcrumbList).

const glowCard =
  "shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_20px_40px_-25px_rgba(168,85,247,0.45)]";
const purpleBtn =
  "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-fuchsia-500";

export default function ServiceLanding({ path, kicker, title, intro, problems, offers, proof, steps, faqs, serviceName, areaServed = "United States" }) {
  const url = `${SITE_URL}${path}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      serviceType: serviceName,
      url,
      description: intro,
      areaServed,
      provider: { "@type": "Organization", name: "DAS Digital", url: SITE_URL, email: CONTACT.email, telephone: CONTACT.phone },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DAS Digital", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: title, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#070910] bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_60%)] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-white/10 bg-[#070910]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="font-semibold">DAS Digital</a>
          <a href="/#lead" className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${purpleBtn}`}>
            Get a free automation plan <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-14 sm:py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">{kicker}</div>
          <h1 className="mt-3 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">{intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="/#lead" className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold ${purpleBtn}`}>
              Get my free automation plan <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/[0.08]">
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{problems.title}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {problems.items.map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-fuchsia-400" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{offers.title}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offers.items.map((o) => (
              <div key={o.title} className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard}`}>
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className={`rounded-[2rem] border-2 border-purple-500 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-10 ${glowCard}`}>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{proof.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">{proof.intro}</p>
            <ul className="mt-6 space-y-3">
              {proof.items.map((p) => (
                <li key={p.name} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-black"><Check className="h-3 w-3" /></span>
                  <span>
                    {p.href ? <a href={p.href} className="font-semibold text-purple-300 underline-offset-2 hover:underline">{p.name}</a> : <span className="font-semibold text-white">{p.name}</span>}
                    {": "}{p.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
          <ol className="mt-6 grid gap-6 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-6 ${glowCard}`}>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold">{i + 1}</div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Questions</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-3xl border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer list-none text-base font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="py-14 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get a free automation plan</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
            Tell us what slows your team down. You get a prioritized plan in 72 hours, with no long sales call.
          </p>
          <a href="/#lead" className={`mt-6 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold ${purpleBtn}`}>
            Start here <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:px-6 md:grid-cols-3">
          <div>
            <a href="/" className="text-lg font-semibold">DAS Digital</a>
            <div className="mt-2 text-white/60">Automation • AI • Operations • Dashboards</div>
            <div className="mt-3 space-y-1 text-white/70">
              <a href={`mailto:${CONTACT.email}`} className="block hover:text-white">{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone}`} className="block hover:text-white">{CONTACT.phoneDisplay}</a>
            </div>
          </div>
          <nav aria-label="Services">
            <div className="font-semibold">Services</div>
            <ul className="mt-2 space-y-1 text-white/70">
              {SERVICE_PAGES.filter((p) => p.href !== path).map((p) => (
                <li key={p.href}><a href={p.href} className="hover:text-white">{p.label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Work">
            <div className="font-semibold">Work</div>
            <ul className="mt-2 space-y-1 text-white/70">
              {CASE_STUDIES.map((p) => (
                <li key={p.href}><a href={p.href} className="hover:text-white">{p.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
