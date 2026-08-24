import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Briefcase, CalendarBlank,
  ChartLineUp, Check, Code, Copy, DownloadSimple, EnvelopeSimple, Eye,
  GithubLogo, Globe, LinkedinLogo, List, MapPin, Pulse, Stack, Target,
  UsersThree, X,
} from "@phosphor-icons/react";

const projects = [
  {
    number: "01",
    name: "Regional Payments Infrastructure",
    description: "A regional infrastructure migration for payment and disbursement services.",
    impact: "Reduced infrastructure latency by 70% and improved service performance across the region.",
    stack: "Node.js, TypeScript, PostgreSQL, Redis",
    detail: "Led a regional infrastructure migration at Xendit while helping keep customer-facing disbursement flows reliable. The work involved rollout planning, observability, and coordination across regional services.",
  },
  {
    number: "02",
    name: "Bank Direct Integrations",
    description: "Direct bank connections supporting payment operations in Indonesia and the Philippines.",
    impact: "Lowered payment processing costs by 30% and strengthened partner collaboration.",
    stack: "Node.js, TypeScript, Event-driven services",
    detail: "Implemented and maintained bank integrations, worked directly with partner teams, and handled production issues to keep regional payment operations dependable.",
  },
  {
    number: "03",
    name: "Automatic Reconciliation",
    description: "An automated workflow for reconciling high-volume disbursement activity.",
    impact: "Reduced manual operational work and made reconciliation more consistent and traceable.",
    stack: "TypeScript, PostgreSQL, MongoDB, Redis",
    detail: "Designed backend services around repeatable reconciliation rules, clear failure handling, and operational visibility so teams could resolve exceptions faster.",
  },
  {
    number: "04",
    name: "School Management Platform",
    description: "A multi-market platform for schools and education teams across Southeast Asia.",
    impact: "Built product features and later supported technical delivery as an engineering squad lead.",
    stack: "NestJS, Vue, PostgreSQL, MongoDB",
    detail: "At LittleLives, built product features, reviewed system designs and API contracts, and coordinated engineering delivery with product partners across Singapore and global markets.",
  },
];

const principles = [
  { icon: Target, title: "Outcome-first", copy: "Start with the user and business problem. Architecture should serve a measurable outcome." },
  { icon: Stack, title: "Right abstractions", copy: "Keep boundaries clear, reduce accidental complexity, and design services that can evolve." },
  { icon: Eye, title: "Operational clarity", copy: "Build in logs, diagnostics, and failure visibility so production behavior is understandable." },
  { icon: UsersThree, title: "Engineering for teams", copy: "Use clear contracts, documentation, and ownership to help teams ship with confidence." },
];

const experience = [
  {
    period: "Aug 2026 — Present",
    role: "Senior Backend Engineer",
    company: "DKatalis · Technology team behind Bank Jago",
    copy: "Developing and maintaining backend capabilities for the Bank Jago Business user application, supporting reliable day-to-day banking experiences for business customers.",
  },
  {
    period: "Feb 2025 — Jul 2026",
    role: "Engineer Squad Lead",
    company: "LittleLives",
    copy: "Led technical design and delivery across backend and frontend systems while coordinating planning, priorities, and engineering quality with product partners.",
  },
  {
    period: "Apr 2024 — Feb 2025",
    role: "Senior Software Engineer",
    company: "LittleLives",
    copy: "Built microservices for Singapore and global products, improved operational visibility, and supported integrations including Singpass and ECDA.",
  },
  {
    period: "Oct 2021 — Jan 2024",
    role: "Software Engineer → Senior Software Engineer",
    company: "Xendit",
    copy: "Led selected infrastructure improvements and contributed to bank integrations, disbursement, and reconciliation services across regional products.",
  },
  {
    period: "2019 — 2021",
    role: "Backend Developer",
    company: "Tunaiku · Amar Bank",
    copy: "Contributed to lending backend services using Go, GCP Pub/Sub, PostgreSQL, Redis, MongoDB, Elasticsearch, and BigQuery.",
  },
];

const skills = [
  "TypeScript", "Go", "Kotlin", "JavaScript", "Node.js", "NestJS",
  "Spring Boot", "React", "Flutter", "PostgreSQL", "MongoDB", "Redis",
  "RabbitMQ", "GCP Pub/Sub", "Docker", "AWS", "GCP",
];

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="topbar">
      <a className="brand" href="#top" onClick={close} aria-label="Renaldi, home">
        <strong>Renaldi</strong><span aria-hidden="true">//</span><span>backend engineer</span>
      </a>
      <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
        {open ? <X size={22} /> : <List size={22} />}
      </button>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        <a href="#work" onClick={close}>Work</a>
        <a href="#approach" onClick={close}>Approach</a>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#about" onClick={close}>About</a>
        <a className="nav-contact" href="#contact" onClick={close}>Contact <ArrowUpRight size={16} weight="bold" /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark">//</span> backend engineering · banking & payments</p>
        <h1>I build dependable <span>backend systems.</span></h1>
        <p className="hero-intro">Senior backend engineer with 7+ years of experience across fintech, payments, and education technology. I work on infrastructure, integrations, and product services with a focus on reliability and maintainable delivery.</p>
        <div className="location-line">
          <span><MapPin size={17} /> Jakarta, Indonesia</span><i aria-hidden="true" />
          <span><span className="availability-dot" /> Open to remote worldwide</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View selected work <ArrowRight size={18} weight="bold" /></a>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}Renaldi-Resume.pdf`} download>Download résumé <DownloadSimple size={18} weight="bold" /></a>
        </div>
      </div>
      <div className="code-panel" aria-label="Backend engineering principles expressed as code">
        <div className="code-line"><span>01</span><code className="comment">// engineer. builder. problem solver.</code></div>
        <div className="code-line"><span>02</span><code>package renaldi</code></div>
        <div className="code-line blank"><span>03</span><code /></div>
        <div className="code-line"><span>04</span><code>type Focus struct {'{'}</code></div>
        <div className="code-line"><span>05</span><code>&nbsp;&nbsp;Reliability&nbsp;&nbsp;&nbsp; string</code></div>
        <div className="code-line"><span>06</span><code>&nbsp;&nbsp;Scalability&nbsp;&nbsp;&nbsp; string</code></div>
        <div className="code-line"><span>07</span><code>&nbsp;&nbsp;Maintainability string</code></div>
        <div className="code-line"><span>08</span><code>{'}'}</code></div>
        <div className="code-line blank"><span>09</span><code /></div>
        <div className="code-line"><span>10</span><code><b>func</b> NewImpact() string {'{'}</code></div>
        <div className="code-line"><span>11</span><code>&nbsp;&nbsp;<b>return</b> <em>"Systems people can depend on."</em></code></div>
        <div className="code-line"><span>12</span><code>{'}'}</code></div>
      </div>
    </section>
  );
}

function Metrics() {
  const metrics = [
    { icon: Pulse, value: "70%", label: "Latency reduction", note: "Xendit infrastructure migration" },
    { icon: ChartLineUp, value: "30%", label: "Lower processing cost", note: "Xendit bank integrations" },
    { icon: Briefcase, value: "7+", label: "Years building", note: "Fintech, payments & edtech" },
    { icon: Globe, value: "3", label: "Regional markets", note: "Indonesia, Singapore & Philippines" },
  ];
  return (
    <section className="metrics wrap" aria-label="Career highlights">
      {metrics.map(({ icon: Icon, value, label, note }) => (
        <div className="metric" key={label}><Icon size={27} /><div><strong>{value}</strong><b>{label}</b><span>{note}</span></div></div>
      ))}
    </section>
  );
}

function Work() {
  const [active, setActive] = useState(-1);
  return (
    <section className="section wrap" id="work">
      <div className="section-heading">
        <div><p className="kicker">Selected work</p><h2>Selected engineering work.</h2></div>
        <span className="section-note">Payments · Banking · Regional products</span>
      </div>
      <div className="project-list">
        {projects.map((project, index) => {
          const isActive = active === index;
          return (
            <article className={isActive ? "project is-active" : "project"} key={project.name}>
              <button className="project-summary" type="button" onClick={() => setActive(isActive ? -1 : index)} aria-expanded={isActive}>
                <span className="project-number">{project.number}</span>
                <span className="project-title"><strong>{project.name}</strong><small>{project.description}</small></span>
                <span className="project-impact"><i>Impact</i>{project.impact}</span>
                <span className="project-stack"><i>Stack</i>{project.stack}</span>
                <span className="project-arrow">{isActive ? <ArrowDown size={20} /> : <ArrowRight size={20} />}</span>
              </button>
              {isActive && <div className="project-detail"><span>Behind the work</span><p>{project.detail}</p></div>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section approach wrap" id="approach">
      <div className="approach-intro">
        <div><p className="kicker">Architecture thinking</p><h2>Design for change.<br />Optimize for reality.</h2></div>
        <p>I align architecture with business outcomes, choosing practical trade-offs and building systems that teams can observe, operate, and evolve.</p>
      </div>
      <div className="principles">
        {principles.map(({ icon: Icon, title, copy }) => <article key={title}><Icon size={32} /><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section wrap" id="experience">
      <div className="section-heading compact"><div><p className="kicker">Experience</p><h2>Built across finance and technology.</h2></div></div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={`${item.company}-${item.period}`}>
            <div className="timeline-marker"><span>{index + 1}</span></div><time>{item.period}</time>
            <div className="experience-role"><h3>{item.role}</h3><p>{item.company}</p></div><p className="experience-copy">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about wrap" id="about">
      <div className="skill-block"><p className="kicker">Tech I work with</p><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      <div className="about-copy">
        <p className="kicker">About me</p>
        <p>Senior backend engineer and former squad lead with experience across payments, banking, and education platforms. I care about production reliability, clear technical decisions, and helping teams deliver maintainable systems.</p>
        <div className="education"><Code size={21} /><span><strong>B.Sc. Computer Science</strong>Bina Nusantara University · GPA 3.74/4.00</span></div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "renaldi.re28@gmail.com";
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner wrap">
        <div className="footer-callout"><p className="kicker light">Want to compare notes?</p><h2>Let’s talk about<br />reliable systems.</h2><p>I’m always interested in thoughtful conversations about backend engineering, payments, and product infrastructure.</p></div>
        <div className="footer-contact">
          <div className="contact-row"><EnvelopeSimple size={21} /><a href={`mailto:${email}`}>{email}</a></div>
          <div className="contact-row"><MapPin size={21} /><span>Jakarta, Indonesia (UTC+7)</span></div>
          <div className="contact-row"><CalendarBlank size={21} /><span>Available for remote opportunities</span></div>
          <div className="contact-actions"><button type="button" onClick={copyEmail}>{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? "Copied" : "Copy email"}</button><a href={`mailto:${email}`}>Get in touch <ArrowRight size={18} /></a></div>
          <div className="social-links"><a href="https://github.com/renaldire" target="_blank" rel="noreferrer"><GithubLogo size={20} /> GitHub</a><a href="https://linkedin.com/in/renaldi-re28" target="_blank" rel="noreferrer"><LinkedinLogo size={20} /> LinkedIn</a></div>
        </div>
      </div>
      <div className="footer-base wrap"><div className="brand footer-brand"><strong>Renaldi</strong><span>// backend engineer</span></div><span>© 2026 Renaldi. Built for clarity.</span><span>Updated August 22, 2026</span></div>
    </footer>
  );
}

export function App() {
  useEffect(() => {
    const handleKey = (event) => { if (event.key === "Escape") document.activeElement?.blur(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  return <><Nav /><main><Hero /><Metrics /><Work /><Approach /><Experience /><About /></main><Contact /></>;
}
