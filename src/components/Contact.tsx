import {
  ArrowRight, Check, Copy, EnvelopeSimple,
  GithubLogo, LinkedinLogo, MapPin, WarningCircle,
} from "@phosphor-icons/react";
import { profile } from "../data/portfolio";
import { useClipboard } from "../hooks/useClipboard";
import { Brand } from "./Brand";

export function Contact() {
  const { copy, status } = useClipboard();
  const copyLabel = status === "copied" ? "Copied" : status === "error" ? "Copy failed" : "Copy email";

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner wrap">
        <div className="footer-callout"><p className="kicker light">Want to compare notes?</p><h2>Let’s talk about<br />reliable systems.</h2><p>I’m always interested in thoughtful conversations about backend engineering, payments, and product infrastructure.</p></div>
        <div className="footer-contact">
          <div className="contact-row"><EnvelopeSimple size={21} aria-hidden="true" /><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div className="contact-row"><MapPin size={21} aria-hidden="true" /><span>{profile.location} ({profile.timezone})</span></div>
          <div className="contact-actions">
            <button type="button" onClick={() => void copy(profile.email)}>
              {status === "copied" ? <Check size={18} aria-hidden="true" /> : status === "error" ? <WarningCircle size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              <span aria-live="polite">{copyLabel}</span>
            </button>
            <a href={`mailto:${profile.email}`}>Get in touch <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Renaldi on GitHub"><GithubLogo size={20} aria-hidden="true" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Renaldi on LinkedIn"><LinkedinLogo size={20} aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-base wrap"><Brand compact /><span>© 2026 Renaldi.</span><span>Updated August 22, 2026</span></div>
    </footer>
  );
}
