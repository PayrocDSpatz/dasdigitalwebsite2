import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { CONTACT } from "../_components/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How DAS Digital collects, uses and protects the information you share through this website.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "October 17, 2026";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated {UPDATED}</p>

        <div className="mt-10 space-y-8 leading-relaxed text-slate-700">
          <Section title="What we collect">
            When you fill out the contact form, we collect what you enter: your name, business name, email, phone number,
            the service you're interested in and your message. If you call or email us, we receive the details you share.
          </Section>
          <Section title="How we use it">
            We use your information only to reply to you, talk about your project and provide our services. We don't sell or
            rent your information, and we don't add you to a mailing list without asking.
          </Section>
          <Section title="Where it's stored">
            Form messages are saved to a private Google Sheet and sent to our email so we can respond. This website is hosted
            by Vercel. These providers handle data for us under their own privacy and security terms.
          </Section>
          <Section title="Cookies and analytics">
            We may use Google Analytics to understand how visitors use the site, such as which pages are viewed. It uses
            cookies and does not tell us who you are. You can block cookies in your browser settings.
          </Section>
          <Section title="Your choices">
            You can ask us to see, correct or delete the information you've sent us. Just email{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-purple-700 hover:text-purple-900">{CONTACT.email}</a>.
          </Section>
          <Section title="Changes">
            If we change this policy, we'll update it on this page with a new date.
          </Section>
          <Section title="Contact">
            Questions? Email{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-purple-700 hover:text-purple-900">{CONTACT.email}</a>{" "}
            or call{" "}
            <a href={`tel:${CONTACT.phone}`} className="font-medium text-purple-700 hover:text-purple-900">{CONTACT.phoneDisplay}</a>.
          </Section>
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
