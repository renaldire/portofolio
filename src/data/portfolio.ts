export interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  impact: string;
  stack: string;
  detail: string;
}

export interface Principle {
  icon: "target" | "stack" | "eye" | "team";
  title: string;
  copy: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  copy: string;
}

export interface CareerMetric {
  icon: "pulse" | "growth" | "briefcase" | "globe";
  value: string;
  label: string;
  note: string;
}

export const profile = {
  name: "Renaldi",
  role: "Backend Engineer",
  email: "renaldi.re28@gmail.com",
  location: "Jakarta, Indonesia",
  timezone: "UTC+7",
  github: "https://github.com/renaldire",
  linkedin: "https://linkedin.com/in/renaldi-re28",
} as const;

export const navigation = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
] as const;

export const projects: readonly Project[] = [
  {
    id: "regional-payments-infrastructure",
    number: "01",
    name: "Regional Payments Infrastructure",
    description: "A regional infrastructure migration for payment and disbursement services.",
    impact: "Reduced infrastructure latency by 70% and improved service performance across the region.",
    stack: "Node.js, TypeScript, PostgreSQL, Redis",
    detail: "Led a regional infrastructure migration at Xendit while helping keep customer-facing disbursement flows reliable. The work involved rollout planning, observability, and coordination across regional services.",
  },
  {
    id: "bank-direct-integrations",
    number: "02",
    name: "Bank Direct Integrations",
    description: "Direct bank connections supporting payment operations in Indonesia and the Philippines.",
    impact: "Lowered payment processing costs by 30% and strengthened partner collaboration.",
    stack: "Node.js, TypeScript, Event-driven services",
    detail: "Implemented and maintained bank integrations, worked directly with partner teams, and handled production issues to keep regional payment operations dependable.",
  },
  {
    id: "automatic-reconciliation",
    number: "03",
    name: "Automatic Reconciliation",
    description: "An automated workflow for reconciling high-volume disbursement activity.",
    impact: "Reduced manual operational work and made reconciliation more consistent and traceable.",
    stack: "TypeScript, PostgreSQL, MongoDB, Redis",
    detail: "Designed backend services around repeatable reconciliation rules, clear failure handling, and operational visibility so teams could resolve exceptions faster.",
  },
  {
    id: "school-management-platform",
    number: "04",
    name: "School Management Platform",
    description: "A multi-market platform for schools and education teams across Southeast Asia.",
    impact: "Built product features and later supported technical delivery as an engineering squad lead.",
    stack: "NestJS, Vue, PostgreSQL, MongoDB",
    detail: "At LittleLives, built product features, reviewed system designs and API contracts, and coordinated engineering delivery with product partners across Singapore and global markets.",
  },
];

export const principles: readonly Principle[] = [
  { icon: "target", title: "Outcome-first", copy: "Start with the user and business problem. Architecture should serve a measurable outcome." },
  { icon: "stack", title: "Right abstractions", copy: "Keep boundaries clear, reduce accidental complexity, and design services that can evolve." },
  { icon: "eye", title: "Operational clarity", copy: "Build in logs, diagnostics, and failure visibility so production behavior is understandable." },
  { icon: "team", title: "Engineering for teams", copy: "Use clear contracts, documentation, and ownership to help teams ship with confidence." },
];

export const experience: readonly Experience[] = [
  {
    period: "Aug 2026 — Present",
    role: "Senior Backend Engineer",
    company: "DKatalis · Technology team behind Bank Jago",
    copy: "Developing and maintaining backend capabilities for the Bank Jago Business user application, supporting reliable day-to-day banking experiences for business customers.",
  },
  {
    period: "Feb 2025 — Jun 2026",
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

export const careerMetrics: readonly CareerMetric[] = [
  { icon: "pulse", value: "70%", label: "Latency reduction", note: "Xendit infrastructure migration" },
  { icon: "growth", value: "30%", label: "Lower processing cost", note: "Xendit bank integrations" },
  { icon: "briefcase", value: "7+", label: "Years building", note: "Fintech, payments & edtech" },
  { icon: "globe", value: "3", label: "Regional markets", note: "Indonesia, Singapore & Philippines" },
];

export const skills = [
  "TypeScript", "Go", "Kotlin", "JavaScript", "Node.js", "NestJS",
  "Spring Boot", "React", "Flutter", "PostgreSQL", "MongoDB", "Redis",
  "RabbitMQ", "GCP Pub/Sub", "Docker", "AWS", "GCP",
] as const;
