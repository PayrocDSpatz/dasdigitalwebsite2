import { ArrowRight } from "lucide-react";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { INDUSTRIES } from "./industries";
import { CONTACT, LOCATION, breadcrumbs } from "../_components/site";

// Hub for the trade pages under /automation/<slug>, so the parent URL isn't a 404 and each trade page has a parent.
const path = "/automation";
const description =
  "AI receptionists and automation for South Florida trades and shops: HVAC, plumbers, electricians, roofers, landscapers and boutiques.";

export const metadata = {
  title: "Automation by Trade",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Automation by Trade | DAS Digital", description, url: path, type: "website" },
};

export default function Page() {
  const trades = Object.entries(INDUSTRIES);
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs([{ name: "Automation by trade", href: path }])) }} />
      <SiteHeader />
      <main id="main">
        <section className="border-b border-slate-100 bg-gradient-to-b from-purple-50/70 to-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-sm font-semibold text-purple-700">Automation by trade</p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">What we set up for your trade</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Every trade loses time in its own way. Pick yours to see how an AI receptionist and a few simple automations
              help you answer every call, follow up on every estimate and get paid faster.
            </p>
            <p className="mt-4 text-sm text-slate-500">{LOCATION.summary}</p>
          </div>
        </section>

        <section className="py-16">
          <ul className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
            {trades.map(([slug, t]) => (
              <li key={slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-semibold">{t.kicker}</h2>
                <p className="mt-2 text-slate-600">{t.title}</p>
                <a href={`/automation/${slug}`} className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-purple-700 hover:text-purple-900">
                  See what we set up <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-6xl px-4 text-slate-600 sm:px-6">
            Don't see your trade? <a href="/#lead" className="font-semibold text-purple-700 hover:text-purple-900">Send us a message</a> or call{" "}
            <a href={`tel:${CONTACT.phone}`} className="font-semibold text-slate-900 hover:text-purple-700">{CONTACT.phoneDisplay}</a>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
