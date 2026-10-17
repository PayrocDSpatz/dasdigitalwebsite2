import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { CONTACT } from "../_components/site";

const description =
  "Meet David Spatz, founder of DAS Digital. Raised in the Miami area and in the restaurant business, he helps small businesses find simple technology that works.";

export const metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About | DAS Digital", description, url: "/about", type: "profile" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main id="main">
        <section className="border-b border-slate-100 bg-gradient-to-b from-purple-50/70 to-white">
          <div className="mx-auto grid max-w-4xl items-center gap-8 px-4 py-16 sm:grid-cols-[auto_1fr] sm:px-6 sm:py-20">
            <Image
              src="/about/david-spatz-headshot.jpg"
              alt="David Spatz"
              width={160}
              height={160}
              priority
              className="h-36 w-36 rounded-full object-cover ring-4 ring-white shadow-lg sm:h-40 sm:w-40"
            />
            <div>
              <p className="text-sm font-semibold text-purple-700">About me</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Hi, I'm David Spatz.</h1>
              <p className="mt-4 text-lg text-slate-600">Founder of DAS Digital.</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl space-y-5 px-4 text-lg leading-relaxed text-slate-700 sm:px-6">
            <p>
              I was born in New Jersey, moved to Florida when I was 10, and grew up in the Miami area. I also grew up in the
              restaurant business, so I know what it's like to run a busy place where every customer and every minute counts.
            </p>
            <p>
              In 1984 I started DAS Consulting Services to help customers with their businesses. Along the way I also worked as
              an executive for payment processing companies. Through all of it, my passion has been helping businesses find
              solutions that make their day easier.
            </p>
            <p>
              Recently we updated what we offer, and DAS Consulting Services is now DAS Digital.
            </p>
            <p>
              That's what DAS Digital is about: practical technology, explained in plain language, from someone who has been on
              your side of the counter.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl px-4 sm:px-6">
            <p className="rounded-2xl bg-purple-700 px-6 py-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Keep it simple. Keep it honest. Keep it working.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/#lead" className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
                Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-purple-300 hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
                <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
