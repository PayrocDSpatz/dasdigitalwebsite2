import { notFound } from "next/navigation";
import IndustryLanding from "../../_components/IndustryLanding";
import RileyDemo from "../../_components/RileyDemo";
import { INDUSTRIES } from "../industries";

export const dynamicParams = false;

// Trade pages that show the live "Talk to Riley" demo right under the hero.
const RILEY_DEMO = new Set(["hvac-companies", "roofers", "landscapers", "boutiques"]);

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = INDUSTRIES[params.slug];
  if (!page) return {};
  const path = `/automation/${params.slug}`;
  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: path },
    openGraph: { title: `${page.metaTitle} | DAS Digital`, description: page.description, url: path, type: "website" },
  };
}

export default function Page({ params }) {
  const page = INDUSTRIES[params.slug];
  if (!page) notFound();
  return (
    <IndustryLanding
      path={`/automation/${params.slug}`}
      parent={{ name: "Automation by trade", href: "/automation" }}
      afterHero={RILEY_DEMO.has(params.slug) ? <RileyDemo className="pt-16" /> : null}
      {...page}
    />
  );
}
