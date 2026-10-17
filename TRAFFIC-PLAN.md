# DAS Digital: traffic plan

What's on the site to bring visitors in, the one-time setup that has to be done by hand, and copy
ready to post. Copy only uses claims the site already makes; don't add client names, results or
numbers we can't back up.

## On the site

| Page | Written for searches like |
|---|---|
| `/ai-automation-small-business` | AI automation for small business, workflow automation consultant |
| `/merchant-services-sales-tools` | merchant services sales tools, ISO sales software, payments sales enablement |
| `/custom-saas-development` | custom SaaS development, vertical SaaS developer, build software for my industry |
| `/automation-consultant-florida` | automation consultant Florida, AI consultant Florida |
| `/work/farritech`, `/work/servicepro` | case studies; now with their own titles and descriptions |

Every page has its own title, description and canonical link, structured data (business, service,
FAQ, breadcrumb), and a link-preview image. All are in `sitemap.xml` and linked from the footer.

## One-time setup (by hand)

1. **Google Analytics.** Create a GA4 property for dasdigitalai.com (Admin → Create property →
   Web). Copy its Measurement ID (`G-…`). In Vercel → the project → Settings → Environment
   Variables, add `NEXT_PUBLIC_GA_ID` = that ID for Production, then redeploy. Until then no tag
   is added.
2. **Google Search Console.** Add `dasdigitalai.com` as a Domain property (verify with the DNS TXT
   record), then Sitemaps → submit `https://dasdigitalai.com/sitemap.xml`. Use URL Inspection →
   Request indexing on the home page and the four service pages.
3. **Bing Webmaster Tools.** Import the site from Search Console (one click); this also covers
   DuckDuckGo and Yahoo.
4. **Google Business Profile.** Create or claim "DAS Digital" as a service-area business in
   Florida, category "Business management consultant", with the phone, the website, and the
   services listed above. Ask past clients and colleagues for reviews.
5. **LinkedIn.** Put dasdigitalai.com in the personal profile's website field and Featured
   section, and create a DAS Digital company page pointing to it.
6. **Check link previews** at https://www.linkedin.com/post-inspector/ after deploying.

## LinkedIn posts

**1. The builder story**
> I spent 20+ years in merchant services: operations, payment implementations, migrating 10,000+
> merchants. I kept seeing the same friction: slow quotes, duplicate leads, reps who dread the
> first call, reports nobody trusts.
>
> So I started building the tools myself. Twelve so far, from a lead-review queue for Zoho to a
> full SaaS platform for farriers.
>
> That's what DAS Digital does now: turn operational problems into working software.
> dasdigitalai.com

**2. FarriTech**
> Farriers run real businesses from the cab of a truck: scheduling, invoicing, getting paid.
> FarriTech puts it all on their phone: QR booking, invoices, card payments, SMS reminders,
> horse records and route planning.
>
> The full case study: dasdigitalai.com/work/farritech

**3. For payments teams**
> If you run a merchant services sales team: where do your reps lose the most time? Finding new
> businesses, quoting, CRM ownership fights, or the first call?
>
> We've built tools for each one. dasdigitalai.com/merchant-services-sales-tools

**4. Small business automation**
> Most small businesses don't need more software. They need the tools they already have to talk
> to each other, and follow-ups that go out without someone remembering to send them.
>
> Free automation plan in 72 hours, no long sales call: dasdigitalai.com/ai-automation-small-business

## Google Ads (Search)

One campaign per service page, each sending clicks to its own page. Start small (e.g. $10–20/day
per campaign), use phrase and exact match, and add negatives such as `jobs`, `salary`, `course`,
`free download`, `template`.

**AI automation for small business** → `/ai-automation-small-business`
- Headlines: AI Automation for Small Business · Stop Doing Busywork by Hand · Free Automation Plan
  in 72 Hours · Smartsheet, Make.com & Zapier · You Own Everything We Build
- Descriptions: We automate routing, approvals, follow-up and reporting, with human checks where
  AI touches customers. · Tell us where the time goes. Get a prioritized plan in 72 hours.
- Keywords: small business automation, ai automation for small business, workflow automation
  consultant, zapier consultant, make.com consultant, smartsheet automation

**Merchant services** → `/merchant-services-sales-tools`
- Headlines: Sales Tools for Merchant Services · Built by a 20-Year Payments Operator · Leads,
  Quotes, Routes & Training · Stop Duplicate Leads in Zoho · Faster POS Quotes for Reps
- Descriptions: Lead generation, bilingual quoting, CRM lead review and cold-call training,
  built for payments sales teams. · Tools for ISOs and agent offices, connected to your CRM.
- Keywords: merchant services sales tools, iso sales software, merchant services lead
  generation, pos quoting tool, payments sales training

**Custom SaaS** → `/custom-saas-development`
- Headlines: Custom SaaS for Your Industry · From Workflow to Working Software · Booking,
  Invoicing & Payments · See FarriTech & Our Field Service Platform · You Own the Code
- Descriptions: We build vertical software around how your trade actually works. · Scheduling,
  payments, SMS and customer portals in one mobile-first app.
- Keywords: custom saas development, vertical saas developer, build software for my business,
  custom scheduling software, field service software development

**Florida** → `/automation-consultant-florida` (target Florida only)
- Headlines: Florida Automation Consultant · AI & Workflow Automation in Florida · Free Plan in
  72 Hours · Call (954) 673-3041
- Keywords: automation consultant florida, ai consultant florida, business automation florida,
  workflow automation fort lauderdale, ai consultant south florida

## Tracking

Once GA4 is live, mark the lead form submission as a conversion (Admin → Events → mark the form
event as a key event) and link GA4 to Google Ads, so each campaign is judged on leads, not clicks.
Review Search Console's Performance report monthly: queries with impressions but few clicks are
the next pages and headlines to write.
