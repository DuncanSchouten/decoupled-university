import type { SiteConfig } from "./lib/types";

const siteConfig: SiteConfig = {
  universityName: "Decoupled University",
  tagline: "Where Innovation Meets Tradition",
  logoPath: "/images/logo.svg",

  colors: {
    primary: "#1B2A4A",
    secondary: "#8B1A2B",
    accent: "#D4A843",
    primaryLight: "#2C4066",
    secondaryLight: "#A63245",
    textOnPrimary: "#FFFFFF",
    textOnSecondary: "#FFFFFF",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    textPrimary: "#1A1A2E",
    textMuted: "#6B7280",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
  ],

  footer: {
    columns: [
      {
        title: "Academics",
        links: [
          { label: "Programs", href: "/about" },
          { label: "Research", href: "/about" },
          { label: "Faculty", href: "/about" },
          { label: "Libraries", href: "/about" },
        ],
      },
      {
        title: "Campus Life",
        links: [
          { label: "Housing", href: "/about" },
          { label: "Dining", href: "/about" },
          { label: "Athletics", href: "/about" },
          { label: "Student Clubs", href: "/about" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Apply Now", href: "/admissions" },
          { label: "Financial Aid", href: "/admissions" },
          { label: "Visit Campus", href: "/contact" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
    socialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "twitter", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "youtube", href: "#" },
    ],
    copyrightText: "© 2026 Decoupled University. All rights reserved.",
    tagline: "Excellence in Every Endeavor",
  },
};

export default siteConfig;
