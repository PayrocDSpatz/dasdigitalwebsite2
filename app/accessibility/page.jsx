import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { CONTACT } from "../_components/site";

export const metadata = {
  title: "Accessibility Statement",
  description: "DAS Digital wants everyone to be able to use this website. Here's what we do and how to reach us if something isn't working for you.",
  alternates: { canonical: "/accessibility" },
  openGraph: { title: "Accessibility Statement | DAS Digital", description: "DAS Digital wants everyone to be able to use this website. Here's what we do and how to reach us if something isn't working for you.", url: "/accessibility", type: "website" },
};

const UPDATED = "October 17, 2026";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight">Accessibility Statement</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated {UPDATED}</p>

        <div className="mt-10 space-y-8 leading-relaxed text-slate-700">
          <Section title="Our goal">
            We want everyone to be able to use this website, including people who use screen readers, keyboards or other
            assistive tools. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
          </Section>
          <Section title="What we do">
            We describe images for screen readers, label every form field, use clear headings, keep text easy to read against
            its background, and make sure the site works with a keyboard alone. We check our pages with accessibility testing
            tools when we make changes.
          </Section>
          <Section title="Still working on it">
            No website is perfect, and we keep improving ours. If something is hard to use, please let us know so we can fix
            it.
          </Section>
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Need help or found a problem?</h2>
            <p className="mt-2">
              Call us at{" "}
              <a href={`tel:${CONTACT.phone}`} className="font-medium text-purple-700 underline hover:text-purple-900">{CONTACT.phoneDisplay}</a>{" "}
              or email{" "}
              <a href={`mailto:${CONTACT.email}`} className="font-medium text-purple-700 underline hover:text-purple-900">{CONTACT.email}</a>.
              Tell us the page and what went wrong, and we'll get back to you. We're also happy to share any information from
              this site another way, such as by phone or email.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
