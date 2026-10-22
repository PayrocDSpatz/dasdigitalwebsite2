// Content for the trade pages under /automation/<slug>. Each is written for searches like
// "HVAC automation" or "AI receptionist for plumbers". Keep claims to what DAS Digital
// actually sets up; no client names, results or numbers we can't back up.

const COMMON_FAQS = [
  {
    q: "Do I need new software?",
    a: "Usually not. We start with the tools you already pay for, like your phone, email, calendar, scheduling software or POS, and only suggest something new if it clearly saves you time or money.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what you want set up. After a short conversation we give you a clear price before any work starts.",
  },
  {
    q: "Do you work outside South Florida?",
    a: "We're based in West Palm Beach and serve Palm Beach, Broward and Miami-Dade counties. Much of the setup is done remotely, so we can also help businesses elsewhere in the US.",
  },
];

export const INDUSTRIES = {
  "hvac-companies": {
    short: "HVAC companies",
    metaTitle: "Automation & AI Receptionist for HVAC Companies",
    description:
      "AI receptionists and automation for HVAC companies in South Florida: answer every service call, send tune-up reminders and follow up on estimates.",
    kicker: "Automation for HVAC companies",
    title: "Answer every AC call, even when you're on a roof",
    intro:
      "When it's 95 degrees, every missed call is a customer calling the next company. We set up an AI receptionist and simple automations so HVAC companies answer every call, follow up on every estimate and keep maintenance customers coming back.",
    serviceName: "Automation and AI receptionist for HVAC companies",
    problems: {
      title: "Where HVAC companies lose jobs",
      items: [
        "Calls go to voicemail while the techs are on jobs, and those callers book someone else",
        "After-hours \"my AC is out\" calls that nobody answers until morning",
        "Estimates for new systems that never get a follow-up",
        "Maintenance plan customers who forget their spring and fall tune-ups",
        "Invoices that wait until the end of the week to go out",
        "No reviews coming in, even after a good job",
      ],
    },
    jobs: {
      title: "What we can set up for your HVAC business",
      items: [
        { title: "AI receptionist", desc: "Answers when you can't, takes the caller's name, address and what's wrong, flags no-cooling emergencies and texts you the details right away." },
        { title: "Estimate follow-up", desc: "A friendly text or email goes out a few days after every estimate, so system replacements don't go cold." },
        { title: "Maintenance reminders", desc: "Tune-up reminders go out on schedule to every maintenance customer, with a link or number to book." },
        { title: "Appointment confirmations", desc: "Customers get a confirmation and an \"on the way\" text, so fewer jobs end with nobody home." },
        { title: "Invoices and payment links", desc: "Send a card payment link right after the job, or take a tap-to-pay payment on your phone." },
        { title: "Review requests", desc: "Happy customers get a text with a link to leave a Google review, so new customers find you first." },
      ],
    },
    example: [
      "A homeowner calls at 9 PM because the AC stopped cooling.",
      "Your AI receptionist answers, gets their address and the problem, and marks it urgent.",
      "You get a text with the details, and the lead is added to your list.",
      "The customer gets a text confirming you received their call.",
      "After the job, they get an invoice with a link to pay and a review request.",
    ],
    faqs: [
      { q: "Can the AI receptionist tell an emergency from a routine call?", a: "Yes. We set it up to ask the right questions, like whether the system is cooling at all, and to flag urgent calls so you see them first." },
      ...COMMON_FAQS,
    ],
  },

  plumbers: {
    short: "Plumbers",
    metaTitle: "Automation & AI Receptionist for Plumbers",
    description:
      "AI receptionists and automation for plumbers in South Florida: answer emergency calls 24/7, confirm appointments and follow up on every quote.",
    kicker: "Automation for plumbers",
    title: "Never miss another emergency plumbing call",
    intro:
      "Leaks and backups don't wait for business hours, and people call the first plumber who answers. We set up an AI receptionist and simple automations so plumbing companies catch every call, follow up on every quote and get paid before they leave the driveway.",
    serviceName: "Automation and AI receptionist for plumbers",
    problems: {
      title: "Where plumbing companies lose jobs",
      items: [
        "Emergency calls at night or on weekends that go to voicemail",
        "Calls missed while you're under a sink with your hands full",
        "Quotes for repipes and water heaters that never get a follow-up",
        "Customers who aren't home when the plumber arrives",
        "Chasing checks and unpaid invoices days after the job",
        "Writing down the same caller details over and over",
      ],
    },
    jobs: {
      title: "What we can set up for your plumbing business",
      items: [
        { title: "AI receptionist", desc: "Answers when you can't, takes the caller's details and the problem, flags leaks and backups as urgent and texts you right away." },
        { title: "Quote follow-up", desc: "Water heater, repipe and remodel quotes get an automatic follow-up, so they don't go to another company." },
        { title: "Appointment texts", desc: "Customers get a confirmation and an \"on the way\" text, so you aren't knocking on empty houses." },
        { title: "Lead list", desc: "Every call, form and email lands in one list, so you can see who still needs a call back." },
        { title: "Payment on the spot", desc: "Send a payment link right after the job, or take a tap-to-pay card payment on your phone." },
        { title: "Review requests", desc: "Customers get a text asking for a Google review once the job is paid." },
      ],
    },
    example: [
      "A homeowner calls on Sunday morning with water coming through the ceiling.",
      "Your AI receptionist answers, gets the address and what's happening, and marks it urgent.",
      "You get a text with the details and can call them straight back.",
      "Before you arrive, they get an \"on the way\" text.",
      "When you're done, they get a payment link and, later, a review request.",
    ],
    faqs: [
      { q: "Will the AI receptionist give out prices?", a: "Only if you want it to. Most plumbers have it take the details and promise a call back, and we set it up the way you prefer." },
      ...COMMON_FAQS,
    ],
  },

  electricians: {
    short: "Electricians",
    metaTitle: "Automation & AI Receptionist for Electricians",
    description:
      "AI receptionists and automation for electricians in South Florida: answer every call, sort service calls from project quotes and get paid faster.",
    kicker: "Automation for electricians",
    title: "Answer every call without putting down the tools",
    intro:
      "Electricians can't answer the phone in the middle of a panel job. We set up an AI receptionist and simple automations so electrical contractors catch every caller, follow up on every quote and spend less time on paperwork.",
    serviceName: "Automation and AI receptionist for electricians",
    problems: {
      title: "Where electrical contractors lose time and jobs",
      items: [
        "Calls missed during jobs, and callers who don't leave a voicemail",
        "Quotes for panel upgrades, EV chargers and generators that go cold",
        "Small service calls mixed in with big project inquiries",
        "Customers who forget the appointment or the inspection date",
        "Invoices sent late and payments chased by hand",
        "Evenings spent returning calls and typing up notes",
      ],
    },
    jobs: {
      title: "What we can set up for your electrical business",
      items: [
        { title: "AI receptionist", desc: "Answers when you can't, asks what the job is, separates service calls from project quotes and texts you the details." },
        { title: "Quote follow-up", desc: "Panel upgrade, EV charger and generator quotes get an automatic follow-up a few days later." },
        { title: "Appointment and inspection reminders", desc: "Customers get reminders before the visit and before inspections, so the job isn't held up." },
        { title: "Lead list", desc: "Every call, form and email lands in one list, so nothing gets lost in a notebook or a text thread." },
        { title: "Invoices and payment links", desc: "Send a card payment link when the job is done, or take a tap-to-pay payment on your phone." },
        { title: "Review requests", desc: "Customers get a text with a link to your Google reviews after the job." },
      ],
    },
    example: [
      "A homeowner calls about installing an EV charger while you're on a job.",
      "Your AI receptionist answers, asks about the panel and the car, and takes their details.",
      "You get a text with the request, and the lead is added to your list.",
      "After you send the quote, they get a follow-up if they haven't replied in a few days.",
      "When the job is done, they get an invoice with a link to pay.",
    ],
    faqs: [
      { q: "Can it handle both residential and commercial calls?", a: "Yes. We set up the questions so it can tell a homeowner's service call from a commercial project inquiry and route each one the way you want." },
      ...COMMON_FAQS,
    ],
  },

  roofers: {
    short: "Roofers",
    metaTitle: "Automation & AI Receptionist for Roofing Companies",
    description:
      "AI receptionists and automation for roofers in South Florida: answer every call after a storm, book inspections and follow up on estimates.",
    kicker: "Automation for roofing companies",
    title: "Catch every roofing lead, especially after a storm",
    intro:
      "After a storm the phone doesn't stop, and the roofer who answers first gets the inspection. We set up an AI receptionist and simple automations so roofing companies capture every lead, book inspections and follow up on every estimate.",
    serviceName: "Automation and AI receptionist for roofing companies",
    problems: {
      title: "Where roofing companies lose jobs",
      items: [
        "A flood of calls after a storm that nobody can keep up with",
        "Leak calls that go to voicemail while the crew is on a roof",
        "Inspections booked by phone tag",
        "Big estimates that never get a follow-up",
        "Customers calling to ask when the crew is coming",
        "Final payments that take weeks to collect",
      ],
    },
    jobs: {
      title: "What we can set up for your roofing business",
      items: [
        { title: "AI receptionist", desc: "Answers every call, asks about leaks and damage, takes the address and texts you the details, even when hundreds call after a storm." },
        { title: "Inspection booking", desc: "Callers get a link or a callback to set up a roof inspection, without the phone tag." },
        { title: "Estimate follow-up", desc: "Roof replacement estimates get automatic follow-ups, so they don't sit unanswered." },
        { title: "Job updates", desc: "Customers get a text when materials are ordered, when the crew is scheduled and when the job is done." },
        { title: "Payment links", desc: "Send deposit and final payment links by text, so you get paid without chasing checks." },
        { title: "Review requests", desc: "Customers get a text with a link to your Google reviews when the roof is done." },
      ],
    },
    example: [
      "After a storm, a homeowner calls about a leak while your phone is ringing nonstop.",
      "Your AI receptionist answers, asks about the damage and takes their address.",
      "You get a text with the details, and the lead is added to your list.",
      "The homeowner gets a text with options to book an inspection.",
      "After the estimate, they get a follow-up; after the job, a payment link and a review request.",
    ],
    faqs: [
      { q: "Can it keep up with a spike in calls after a storm?", a: "Yes. The AI receptionist can answer many calls at the same time, so callers aren't stuck on hold or sent to voicemail." },
      ...COMMON_FAQS,
    ],
  },

  landscapers: {
    short: "Landscapers",
    metaTitle: "Automation & AI Receptionist for Landscapers & Lawn Care",
    description:
      "AI receptionists and automation for landscapers in South Florida: answer every call, send service reminders and collect payments automatically.",
    kicker: "Automation for landscapers and lawn care",
    title: "Spend your day on lawns, not on the phone",
    intro:
      "Landscapers are outside all day, over the noise of the mowers, with no time to answer calls or send invoices. We set up an AI receptionist and simple automations so landscaping and lawn care companies answer every new customer, keep regulars on schedule and get paid on time.",
    serviceName: "Automation and AI receptionist for landscaping companies",
    problems: {
      title: "Where landscaping companies lose time and money",
      items: [
        "Calls missed because you can't hear the phone over the equipment",
        "Estimates for new properties that never get a follow-up",
        "Customers who aren't told about a rain delay or a schedule change",
        "Monthly invoices that go out late or not at all",
        "Payments chased one customer at a time",
        "Seasonal services like mulch or tree trimming that you forget to offer",
      ],
    },
    jobs: {
      title: "What we can set up for your landscaping business",
      items: [
        { title: "AI receptionist", desc: "Answers when you can't, takes the caller's address and what they need, and texts you the details right away." },
        { title: "Estimate follow-up", desc: "New property estimates get an automatic follow-up, so you win more of the jobs you quote." },
        { title: "Schedule texts", desc: "Customers get a text about service days, rain delays and schedule changes without you calling each one." },
        { title: "Recurring invoices", desc: "Monthly invoices go out on time with a link to pay by card, so you're not chasing checks." },
        { title: "Seasonal offers", desc: "A text or email goes to your customers when it's time for mulch, trimming or a cleanup." },
        { title: "Review requests", desc: "New customers get a text asking for a Google review after their first service." },
      ],
    },
    example: [
      "A new homeowner calls while your crew is mowing.",
      "Your AI receptionist answers, takes their address and the services they want.",
      "You get a text with the details, and the lead is added to your list.",
      "After you send the estimate, they get a follow-up if they haven't replied.",
      "Once they sign up, invoices go out every month with a link to pay.",
    ],
    faqs: [
      { q: "Can it handle recurring customers?", a: "Yes. We set up reminders, schedule texts and monthly invoices for your regular customers, and keep new inquiries separate." },
      ...COMMON_FAQS,
    ],
  },

  boutiques: {
    short: "Boutiques",
    metaTitle: "Automation & AI Receptionist for Boutiques & Retail Shops",
    description:
      "AI receptionists and automation for South Florida boutiques: answer customer calls, text new arrivals and bring regular customers back.",
    kicker: "Automation for boutiques and retail shops",
    title: "Keep customers coming back without spending hours on it",
    intro:
      "Boutique owners do it all: the floor, the buying, the social posts and the phone. We set up an AI receptionist and simple automations so shops answer every call, stay in touch with regular customers and bring them back to the store.",
    serviceName: "Automation and AI receptionist for boutiques",
    problems: {
      title: "Where boutiques lose sales",
      items: [
        "The phone rings while you're helping a customer in the store",
        "The same questions every day: hours, parking, \"do you have this in a medium?\"",
        "Regular customers who don't hear about new arrivals or sales",
        "Holds and special orders that are never picked up",
        "Customer emails and phone numbers collected but never used",
        "Few online reviews, even from loyal customers",
      ],
    },
    jobs: {
      title: "What we can set up for your shop",
      items: [
        { title: "AI receptionist", desc: "Answers calls when you're busy, handles questions like hours and directions, and texts you anything that needs a person." },
        { title: "New arrival texts and emails", desc: "Let your regular customers know when new styles or a sale arrive, without writing each message by hand." },
        { title: "Holds and special orders", desc: "Customers get a text when their item is ready and a reminder if it hasn't been picked up." },
        { title: "Customer list from your POS", desc: "We use the customer details already in your Square or Clover system to stay in touch." },
        { title: "Birthday and thank-you messages", desc: "A short message, or an offer, goes out on its own to bring customers back." },
        { title: "Review requests", desc: "Customers get a text asking for a Google review after they shop with you." },
      ],
    },
    example: [
      "A customer calls to ask if you have a dress in her size while you're with someone.",
      "Your AI receptionist answers, takes her name, number and what she's looking for.",
      "You get a text with the request and can set the item aside.",
      "She gets a text when it's ready, and a reminder if she hasn't picked it up.",
      "After she buys, she gets a thank-you message and a review request.",
    ],
    faqs: [
      { q: "Does this work with Square or Clover?", a: "Yes. We work with the POS you already use and connect your customer list to the texts and emails we set up." },
      ...COMMON_FAQS,
    ],
  },
};
