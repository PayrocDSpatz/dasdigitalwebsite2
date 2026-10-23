export const metadata = {
  title: "HVAC Websites & AI Receptionists in South Florida | DAS Digital AI",
  description: "Local South Florida websites, AI receptionists and automation for HVAC companies. Based in West Palm Beach, serving Palm Beach, Broward and Miami-Dade.",
};

const booking = "https://calendar.app.google/u5a71bR4tkf4KMsx6";
const riley = "https://dasdigitalai.com/ai-receptionist#try-riley";
const roofing = "https://roofing-demo.dasdigitalai.com";

const offerings = [
  { icon: "☎", title: "Catch the after-hours AC emergency", body: "Give callers a helpful first response even when your crew is on a job." },
  { icon: "↗", title: "Make booking a service visit easier", body: "A modern website with clear calls to action helps customers reach you quickly." },
  { icon: "⚡", title: "Follow up on estimates automatically", body: "Connect inquiries, scheduling and follow-ups so fewer details fall through the cracks." },
];

export default function HVACContractorsPage() {
  return (
    <main style={{fontFamily:"Arial, Helvetica, sans-serif",background:"#0f0b1d",color:"#fff",minHeight:"100vh"}}>
      <style>{`
        .contractor-wrap{max-width:1120px;margin:auto;padding:0 24px}
        .contractor-nav{display:flex;justify-content:space-between;align-items:center;gap:18px;padding:25px 0}
        .contractor-brand{font-size:19px;font-weight:800;letter-spacing:.04em;color:#fff;text-decoration:none}
        .contractor-hero{padding:74px 0 72px;background:linear-gradient(90deg,#eef5ff 0%,#edf5ff 43%,#edf5ffef 54%,#edf5ff00 83%),url("/trade-heroes/hvac.svg") right center/cover no-repeat, none right center/cover no-repeat;position:relative;color:#16112a;min-height:590px}
        .contractor-eyebrow{color:#6c28e6;font-size:13px;font-weight:700;letter-spacing:.17em;text-transform:uppercase}
        .contractor-h1{font-size:clamp(42px,6vw,72px);line-height:1.06;letter-spacing:-.045em;max-width:690px;margin:22px 0}
        .contractor-lead{font-size:clamp(17px,2vw,21px);line-height:1.6;max-width:630px;color:#29213c}
        .contractor-actions{display:flex;gap:13px;flex-wrap:wrap;margin-top:32px}
        .contractor-btn{display:inline-block;padding:16px 24px;border-radius:10px;font-weight:750;text-decoration:none;text-align:center;transition:transform .15s}
        .contractor-btn:hover{transform:translateY(-2px)}
        .contractor-primary{background:#6416ef;color:#fff}
        .contractor-secondary{border:1px solid #a994ce;color:#fff;background:#ffffff0b}.contractor-hero .contractor-secondary{background:#fff;color:#401393;border-color:#6f34dd}
        .contractor-pills{display:flex;gap:10px;flex-wrap:wrap;margin-top:42px}
        .contractor-pill{border:1px solid #6b3fa055;border-radius:999px;padding:9px 15px;color:#3b2463;font-size:13px;background:#ffffffaa}
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
        @media(max-width:760px){.contractor-hero{background:linear-gradient(90deg,#eef5ffeb,#eef5ffdd),url("/trade-heroes/hvac.svg") center/cover no-repeat, none center/cover no-repeat;min-height:0}.contractor-grid,.contractor-split{grid-template-columns:1fr}.contractor-hero{padding:64px 0}.contractor-section{padding:55px 0}.contractor-nav .contractor-btn{padding:11px 14px;font-size:12px}.contractor-actions .contractor-btn{width:100%}}
      `}</style>
      <div className="contractor-wrap">
        <nav className="contractor-nav" aria-label="Main navigation">
          <a className="contractor-brand" href="/" aria-label="DAS Digital AI home"><img src="/brand/das-digitalai-logo-horizontal.svg" alt="DAS Digital AI — Smart Solutions, Modern Websites, AI Automation" style={{display:"block",width:"min(350px,48vw)",height:"auto",background:"#fff",borderRadius:8,padding:"5px 9px"}} /></a>
          <a className="contractor-btn contractor-secondary" href={booking} target="_blank" rel="noopener noreferrer">Book a Free Call ↗</a>
        </nav>
      </div>
      <section className="contractor-hero">
        <div className="contractor-wrap">
          <div className="contractor-eyebrow">Your local South Florida technology partner</div>
          <h1 className="contractor-h1">The AC Breaks at 5. <span style={{color:"#6d24e9"}}>Your Phone Rings at 5:01.</span></h1>
          <p className="contractor-lead">Customers need help now. Your team might be on a ladder, in an attic or finishing another service call. We're a local South Florida business helping HVAC companies capture service calls, schedule estimates and follow up faster—with modern websites, AI receptionists and smart automation.</p>
          <div className="contractor-actions">
            <a className="contractor-btn contractor-primary" href={riley} target="_blank" rel="noopener noreferrer">☎ Try Our AI Receptionist ↗</a>
            <a className="contractor-btn contractor-secondary" href={booking} target="_blank" rel="noopener noreferrer">Book a Free 15-Minute Call</a>
          </div>
          <p className="contractor-muted" style={{marginTop:24,fontSize:14,color:"#382751",fontWeight:600}}>Locally based in West Palm Beach · Serving Palm Beach, Broward &amp; Miami-Dade counties</p><div className="contractor-pills"><span className="contractor-pill">HVAC</span><span className="contractor-pill">Local South Florida</span><span className="contractor-pill">AI Receptionist</span></div>
        </div>
      </section>
      <section className="contractor-section">
        <div className="contractor-wrap">
          <h2 className="contractor-h2">When the heat is on, don't let a call go cold.</h2>
          <p className="contractor-muted">Practical tools, with a local team you can actually talk to. No faceless agency or one-size-fits-all approach.</p>
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
          <div className="contractor-demo"><div className="contractor-eyebrow">Website example</div><strong>See a contractor website concept</strong><p className="contractor-muted">See how a well-designed contractor website can turn visitors into estimate requests. The sample is a roofing example; we can tailor the same approach for HVAC companies.</p><a className="contractor-btn contractor-secondary" href={roofing} target="_blank" rel="noopener noreferrer">View Website Example ↗</a></div>
        </div>
      </section>
      <section className="contractor-section">
        <div className="contractor-wrap" style={{textAlign:"center",maxWidth:760}}>
          <div className="contractor-eyebrow">Let's talk</div>
          <h2 className="contractor-h2">What could work better for your HVAC business?</h2>
          <p className="contractor-muted">We’re local, and we’d love to learn about your business. Give us 15 minutes to talk. We'll talk through where a better website, faster response or a simple automation might make a difference. No pressure, just a conversation.</p>
          <div className="contractor-actions" style={{justifyContent:"center"}}><a className="contractor-btn contractor-primary" href={booking} target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Call ↗</a></div>
        </div>
      </section>
      <footer className="contractor-footer"><div className="contractor-wrap">© {new Date().getFullYear()} DAS Digital AI · <a href="/" style={{color:"#d6bfff"}}>Back to main website</a></div></footer>
    </main>
  );
}