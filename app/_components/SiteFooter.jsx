import Wordmark from "./Wordmark";
import { CASE_STUDIES, CONTACT, SERVICES, serviceHref } from "./site";

const MORE = [
  { href: "/about", label: "About" },
  { href: "/custom-saas-development", label: "Custom software" },
  { href: "/merchant-services-sales-tools", label: "Merchant services tools" },
  { href: "/automation-consultant-florida", label: "South Florida" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 text-sm sm:px-6 md:grid-cols-4">
        <div>
          <Wordmark />
          <p className="mt-3 text-slate-600">Smarter Technology. Simpler Business.</p>
          <div className="mt-4 space-y-1">
            <a href={`tel:${CONTACT.phone}`} className="block font-medium text-slate-800 hover:text-purple-700">{CONTACT.phoneDisplay}</a>
            <a href={`mailto:${CONTACT.email}`} className="block font-medium text-slate-800 hover:text-purple-700">{CONTACT.email}</a>
          </div>
        </div>
        <FooterList title="Services" items={SERVICES.map((s) => ({ href: serviceHref(s), label: s.label }))} />
        <FooterList title="More" items={MORE} />
        <FooterList title="Work" items={CASE_STUDIES} />
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} DAS Digital. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="/privacy" className="hover:text-purple-700">Privacy Policy</a>
            <span>Formerly DAS Consulting Services.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <nav aria-label={title}>
      <div className="font-semibold text-slate-900">{title}</div>
      <ul className="mt-3 space-y-2 text-slate-600">
        {items.map((i) => (
          <li key={i.label}><a href={i.href} className="hover:text-purple-700">{i.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
