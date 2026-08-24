import { ArrowRight, DownloadSimple, MapPin } from "@phosphor-icons/react";
import { profile } from "../data/portfolio";
import { CodeShowcase } from "./CodeShowcase";

export function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark">//</span> backend engineering · banking & payments</p>
        <h1>I build dependable <span>backend systems.</span></h1>
        <p className="hero-intro">Senior backend engineer with 7+ years of experience across fintech, payments, and education technology. I work on infrastructure, integrations, and product services with a focus on reliability and maintainable delivery.</p>
        <div className="location-line">
          <span><MapPin size={17} aria-hidden="true" /> {profile.location}</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View selected work <ArrowRight size={18} weight="bold" aria-hidden="true" /></a>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}Renaldi-Resume.pdf`} download>Download résumé <DownloadSimple size={18} weight="bold" aria-hidden="true" /></a>
        </div>
      </div>
      <CodeShowcase />
    </section>
  );
}
