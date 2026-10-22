import { CheckCircle2 } from "lucide-react";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import GuideForm from "../_components/GuideForm";
import { GUIDE } from "../_components/guide";

const description = `Download your free copy of "${GUIDE.title}" from DAS Digital: a short, plain-English guide for business owners.`;

export const metadata = {
  title: `Free Guide: ${GUIDE.title}`,
  description,
  alternates: { canonical: "/free-guide" },
  openGraph: { title: `Free Guide: ${GUIDE.title} | DAS Digital`, description, url: "/free-guide", type: "website" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main id="main" className="bg-gradient-to-b from-purple-50/70 to-white">
        <div className="mx-auto grid max-w-5xl items-start gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_minmax(0,420px)] md:py-20">
          <div>
            <p className="text-sm font-semibold text-purple-700">Free guide: download your copy</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{GUIDE.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{GUIDE.intro}</p>
            <h2 className="mt-8 font-semibold text-slate-900">What's inside</h2>
            <ul className="mt-3 space-y-3">
              {GUIDE.points.map((p) => (
                <li key={p} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <GuideForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
