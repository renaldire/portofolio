import { profile } from "../data/portfolio";

interface BrandProps {
  compact?: boolean;
  onNavigate?: () => void;
}

export function Brand({ compact = false, onNavigate }: BrandProps) {
  return (
    <a className={`brand${compact ? " footer-brand" : ""}`} href="#top" onClick={onNavigate} aria-label={`${profile.name}, home`}>
      <strong>{profile.name}</strong>
      {!compact && <span aria-hidden="true">//</span>}
      <span>{compact ? "// backend engineer" : "backend engineer"}</span>
    </a>
  );
}
