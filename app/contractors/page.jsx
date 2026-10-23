export const metadata = {
  title: "Contractor Websites, AI Receptionists & Automation | DAS Digital AI",
  description: "Websites, AI receptionists and business automation for roofing, HVAC, plumbing and electrical contractors. Try a live demo and book a free 15-minute conversation.",
};

const booking = "https://calendar.app.google/u5a71bR4tkf4KMsx6";
const riley = "https://dasdigitalai.com/ai-receptionist#try-riley";
const roofing = "https://roofing-demo.dasdigitalai.com";

const offerings = [
  { icon: "☎", title: "Never miss an opportunity", body: "Give callers a helpful first response even when your crew is on a job." },
  { icon: "↗", title: "Turn visits into inquiries", body: "A modern website with clear calls to action helps customers reach you quickly." },
  { icon: "⚡", title: "Cut the busywork", body: "Connect inquiries, scheduling and follow-ups so fewer details fall through the cracks." },
];

export default function ContractorsPage() {
  return (
    <main style={{fontFamily:"Arial, Helvetica, sans-serif",background:"#0f0b1d",color:"#fff",minHeight:"100vh"}}>
      <style>{`
        .contractor-wrap{max-width:1120px;margin:auto;padding:0 24px}
        .contractor-nav{display:flex;justify-content:space-between;align-items:center;gap:18px;padding:25px 0}
        .contractor-brand{font-size:19px;font-weight:800;letter-spacing:.04em;color:#fff;text-decoration:none}
        .contractor-hero{padding:94px 0 88px;background:radial-gradient(ellipse at 75% 20%,#5430a6 0%,#21133e 42%,#0f0b1d 75%)}
        .contractor-eyebrow{color:#c8adff;font-size:13px;font-weight:700;letter-spacing:.17em;text-transform:uppercase}
        .contractor-h1{font-size:clamp(42px,7vw,76px);line-height:1.06;letter-spacing:-.045em;max-width:850px;margin:22px 0}
        .contractor-lead{font-size:clamp(17px,2vw,21px);line-height:1.6;max-width:690px;color:#ddd4ed}
        .contractor-actions{display:flex;gap:13px;flex-wrap:wrap;margin-top:32px}
        .contractor-btn{display:inline-block;padding:16px 24px;border-radius:10px;font-weight:750;text-decoration:none;text-align:center;transition:transform .15s}
        .contractor-btn:hover{transform:translateY(-2px)}
        .contractor-primary{background:#a77aff;color:#160b29}
        .contractor-secondary{border:1px solid #a994ce;color:#fff;background:#ffffff0b}
        .contractor-pills{display:flex;gap:10px;flex-wrap:wrap;margin-top:42px}
        .contractor-pill{border:1px solid #ffffff30;border-radius:999px;padding:9px 15px;color:#e3d9f1;font-size:13px}
        .contractor-section{padding:75px 0}
        .contractor-h2{font-size:clamp(30px,4vw,46px);letter-spacing:-.035em;margin:0 0 16px}
        .contractor-muted{color:#c6bdd5;line-height:1.7}
        .contractor-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px}
        .contractor-card{background:#211733;border:1px solid #ffffff18;padding:30px;border-radius:18px}
        .contractor-card h3{font-size:21px;margin:15px 0 10px}
        .contractor-card p{color:#d2c8df;line-height:1.65}
        .contractor-icon{font-size:32px;color:#c9a9ff}
        .contractor-feature{background:#1c1230;border-top:1px solid #ffffff1a;border-bottom:1px solid #ffffff1a}
        .contractor-split{display:grid;grid-template-columns:1fr 1fr;gap:55px;align-items:center}
        .contractor-demo{padding:30px;border:1px solid #8062b8;background:#2a1b49;border-radius:20px}
        .contractor-demo strong{display:block;font-size:24px;margin-bottom:12px}
        .contractor-footer{padding:34px 0;border-top:1px solid #ffffff24;color:#bdb1cd;font-size:14px}
        @media(max-width:760px){.contractor-grid,.contractor-split{grid-template-columns:1fr}.contractor-hero{padding:64px 0}.contractor-section{padding:55px 0}.contractor-nav .contractor-btn{padding:11px 14px;font-size:12px}.contractor-actions .contractor-btn{width:100%}}
      `}</style>
      <div className="contractor-wrap">
        <nav className="contractor-nav" aria-label="Main navigation">
          <a className="contractor-brand" href="/">DAS DIGITAL AI</a>
          <a className="contractor-btn contractor-secondary" href={booking} target="_blank" rel="noopener noreferrer">Book a Free Call ↗</a>
        </nav>
      </div>
      <section className="contractor-hero">
        <div className="contractor-wrap">
          <div className="contractor-eyebrow">Built for home-service businesses</div>
          <h1 className="contractor-h1">More Calls. More Booked Jobs. Less Busywork.</h1>
          <p className="contractor-lead">You're busy running jobs. We help roofing, HVAC, plumbing and electrical companies build a stronger online presence, respond to new inquiries and simplify the work behind the scenes.</p>
          <div className="contractor-actions">
            <a className="contractor-btn contractor-primary" href={riley} target="_blank" rel="noopener noreferrer">Talk to Riley — Live AI Demo ↗</a>
            <a className="contractor-btn contractor-secondary" href={booking} target="_blank" rel="noopener noreferrer">Book a Free 15-Minute Call</a>
          </div>
          <div className="contractor-pills"><span className="contractor-pill">Roofing</span><span className="contractor-pill">HVAC</span><span className="contractor-pill">Plumbing</span><span className="contractor-pill">Electrical</span></div>
        </div>
      </section>
      <section className="contractor-section">
        <div className="contractor-wrap">
          <h2 className="contractor-h2">Make it easier for customers to choose you.</h2>
          <p className="contractor-muted">Practical tools that fit the way contractors actually work.</p>
          <div className="contractor-grid">{offerings.map((item)=><article className="contractor-card" key={item.title}><div className="contractor-icon" aria-hidden="true">{item.icon}</div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      </section>
      <section className="contractor-section contractor-feature">
        <div className="contractor-wrap contractor-split">
          <div>
            <div className="contractor-eyebrow">See it for yourself</div>
            <h2 className="contractor-h2">Don't just take our word for it.</h2>
            <p className="contractor-muted">Try Riley, our AI receptionist demo. Ask about services, request an estimate or pretend you're a homeowner calling after hours. See how a virtual receptionist could handle that first conversation.</p>
            <div className="contractor-actions"><a className="contractor-btn contractor-primary" href={riley} target="_blank" rel="noopener noreferrer">Try Riley Now ↗</a></div>
          </div>
          <div className="contractor-demo"><div className="contractor-eyebrow">Website example</div><strong>See a roofing website concept</strong><p className="contractor-muted">A sample site showing how clear messaging and estimate requests can help turn website visitors into leads.</p><a className="contractor-btn contractor-secondary" href={roofing} target="_blank" rel="noopener noreferrer">View Roofing Demo ↗</a></div>
        </div>
      </section>
      <section className="contractor-section">
        <div className="contractor-wrap" style={{textAlign:"center",maxWidth:760}}>
          <div className="contractor-eyebrow">Let's talk</div>
          <h2 className="contractor-h2">What could work better in your business?</h2>
          <p className="contractor-muted">Give us 15 minutes to learn about your business. We'll talk through where a better website, faster response or a simple automation might make a difference. No pressure, just a conversation.</p>
          <div className="contractor-actions" style={{justifyContent:"center"}}><a className="contractor-btn contractor-primary" href={booking} target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Call ↗</a></div>
        </div>
      </section>
      <footer className="contractor-footer"><div className="contractor-wrap">© {new Date().getFullYear()} DAS Digital AI · <a href="/" style={{color:"#d6bfff"}}>Back to main website</a></div></footer>
    </main>
  );
}