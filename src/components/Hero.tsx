import { ArrowRight, DownloadSimple, MapPin } from "@phosphor-icons/react";
import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark">//</span> backend engineering · banking & payments</p>
        <h1>I build dependable <span>backend systems.</span></h1>
        <p className="hero-intro">Senior backend engineer with 7+ years of experience across fintech, payments, and education technology. I work on infrastructure, integrations, and product services with a focus on reliability and maintainable delivery.</p>
        <div className="location-line">
          <span><MapPin size={17} aria-hidden="true" /> {profile.location}</span><i aria-hidden="true" />
          <span><span className="availability-dot" /> Open to remote worldwide</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View selected work <ArrowRight size={18} weight="bold" aria-hidden="true" /></a>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}Renaldi-Resume.pdf`} download>Download résumé <DownloadSimple size={18} weight="bold" aria-hidden="true" /></a>
        </div>
      </div>
      <div className="code-panel" aria-label="Backend engineering principles expressed as code">
        <div className="code-line"><span>01</span><code className="comment">// engineer. builder. problem solver.</code></div>
        <div className="code-line"><span>02</span><code>package renaldi</code></div>
        <div className="code-line blank"><span>03</span><code /></div>
        <div className="code-line"><span>04</span><code>type Focus struct {"{"}</code></div>
        <div className="code-line"><span>05</span><code>&nbsp;&nbsp;Reliability&nbsp;&nbsp;&nbsp; string</code></div>
        <div className="code-line"><span>06</span><code>&nbsp;&nbsp;Scalability&nbsp;&nbsp;&nbsp; string</code></div>
        <div className="code-line"><span>07</span><code>&nbsp;&nbsp;Maintainability string</code></div>
        <div className="code-line"><span>08</span><code>{"}"}</code></div>
        <div className="code-line blank"><span>09</span><code /></div>
        <div className="code-line"><span>10</span><code><b>func</b> NewImpact() string {"{"}</code></div>
        <div className="code-line"><span>11</span><code>&nbsp;&nbsp;<b>return</b> <em>&quot;Systems people can depend on.&quot;</em></code></div>
        <div className="code-line"><span>12</span><code>{"}"}</code></div>
      </div>
    </section>
  );
}
