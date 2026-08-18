import type { IconType } from "react-icons";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiVite,
  SiDjango,
  SiPython,
  SiSupabase,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithubactions,
  SiVercel,
} from "react-icons/si";

/**
 * Central place for all editable portfolio content.
 * Swap out the values below with your own — nothing else needs to change.
 */

export const SITE = {
  name: "Kevin Rey Mejares",
  initials: "KRM",
  role: "Full-Stack Developer | Mobile & Web Application Developer",
  tagline:
    "I design and build fast, accessible, and delightful mobile and web experiences — from pixel to production.",
  location: "Remote · Philippines",
  email: "kevinmejares20@gmail.com",
  resumeUrl: "/resume.pdf",
  bio: [
    "My first real taste of a professional technical environment came during a 160-hour Work Immersion in the Technical Department of AyalaLand Malls, Inc. at Ayala Center Cebu back in Senior High School — a small experience that gave me an early, hands-on sense of how real technical teams operate, and one that pointed me toward development as a path.",
    "Since 2023, I've been the team lead and a full-stack mobile developer on E.M.P.O.W.E.R, an offline-first Flutter application built for DSWD's Sustainable Livelihood Program associations — community-run micro-enterprises that often operate with little to no internet access. Over the past three years I've helped design and build its inventory, sales, and financial modules, engineered a self-contained offline license-activation system using Ed25519 signatures and HMAC verification, and led the migration of our codebase to a clean, governed repository as our nine-person team scaled.",
    "Outside of that, I build to learn: SneakerGrit is a full e-commerce storefront I built from scratch with vanilla JavaScript and a live Supabase backend — no framework, no build step — and PisoGen is a coin-operated phone-rental kiosk platform I run as my own small business, spanning a Flutter kiosk app and two React dashboards backed by a Django/Supabase API. I'm currently studying at Cebu Technological University — Ginatilan Extension Campus, and I'm always looking for the next problem worth solving.",
  ],
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-rey-mejares-0744b3423/", icon: FiLinkedin },
  { label: "Email", href: `mailto:${SITE.email}`, icon: FiMail },
  { label: "Twitter", href: "https://twitter.com/yourusername", icon: FiTwitter },
];

export type Skill = { name: string; icon: IconType };
export type SkillGroup = { category: string; skills: Skill[] };

export const SKILLS: SkillGroup[] = [
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "Python", icon: SiPython },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "empower-dswd-slp",
    title: "E.M.P.O.W.E.R — DSWD SLP Inventory & Association Management System",
    description:
      "An offline-first Flutter app that lets DSWD Sustainable Livelihood Program associations manage member registration, inventory, point-of-sale, credit tracking, and full financial reporting entirely without internet access. As team lead, I helped build the inventory, sales, and financial modules and designed a self-contained offline license-activation system using Ed25519-signed QR codes and HMAC-verified codes.",
    image: "/images/projects/project-1.svg",
    tags: ["Flutter", "Dart", "Riverpod", "SQLite", "Offline-first"],
    featured: true,
  },
  {
    id: "sneakergrit",
    title: "SneakerGrit — E-Commerce Web App",
    description:
      "A responsive e-commerce storefront for footwear and bags, built as a single-page app with vanilla JavaScript and a live Supabase backend — no framework, no build step. Covers the full customer journey from browsing and filtering to a multi-step checkout, plus a complete admin back office with product, order, and inventory management.",
    image: "/images/projects/project-2.svg",
    tags: ["JavaScript", "Supabase", "PostgreSQL", "HTML5", "CSS3"],
    featured: true,
  },
  {
    id: "pisogen",
    title: "PisoGen — Coin-Operated Kiosk Rental Platform",
    description:
      "An end-to-end platform for running a coin-operated phone-rental kiosk business: a Flutter app on the kiosk hardware itself, plus separate Admin and Owner React dashboards for remote fleet control, license activation with device-fingerprint binding, and revenue reporting — backed by a Django/Supabase API.",
    image: "/images/projects/project-3.svg",
    tags: ["Flutter", "React", "Vite", "Django", "Supabase"],
  },
];

export type ExperienceItem = {
  id: string;
  type: "work" | "education";
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-empower",
    type: "work",
    role: "Team Lead & Full-Stack Mobile Developer",
    org: "E.M.P.O.W.E.R — DSWD SLP Inventory & Association Management System",
    period: "2023 — Present",
    location: "Cebu, PH",
    description:
      "Leading a nine-person team building an offline-first Flutter app that DSWD Sustainable Livelihood Program associations use to manage inventory, sales, credit, and financial reporting without relying on internet access.",
    bullets: [
      "Contributed across inventory, sales, and financial modules of the app",
      "Designed and implemented an offline license-activation system using Ed25519 signatures and HMAC verification",
      "Led the migration of the codebase to a clean, governed repository as the team scaled",
    ],
  },
  {
    id: "exp-ctu",
    type: "education",
    role: "Student",
    org: "Cebu Technological University — Ginatilan Extension Campus",
    period: "2023 — Present",
    location: "Ginatilan, Cebu, PH",
    description: "",
    bullets: [],
  },
  {
    id: "exp-pisogen",
    type: "work",
    role: "Founder & Developer",
    org: "PisoGen — Coin-Operated Kiosk Rental Platform",
    period: "2024 — 2025",
    location: "Cebu, PH",
    description:
      "Built and ran an end-to-end platform for a coin-operated phone-rental kiosk business — a Flutter app running on the kiosk hardware itself, plus separate Admin and Owner React dashboards for remote fleet management.",
    bullets: [
      "Built the kiosk-side Flutter app alongside Admin and Owner React dashboards",
      "Designed a license-activation system with device-fingerprint binding to prevent license sharing across kiosks",
      "Migrated the backend from Django REST Framework to Supabase Edge Functions without a full client rewrite",
    ],
  },
  {
    id: "exp-ayalaland",
    type: "work",
    role: "Work Immersion Trainee",
    org: "AyalaLand Malls, Inc. — Ayala Center Cebu (Technical Department)",
    period: "Nov 2019",
    location: "Cebu City, PH",
    description:
      "Completed a 160-hour Work Immersion in the Technical Department as part of Senior High School at Talamban National High School — early hands-on exposure to a real technical operations environment.",
    bullets: [],
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image?: string;
  credentialUrl?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-ayalaland-immersion",
    name: "160-Hour Work Immersion — Technical Department",
    issuer: "AyalaLand Malls, Inc. — Ayala Center Cebu",
    date: "December 2019",
    image: "/images/certificates/ayalaland-work-immersion.jpg",
  },
];
