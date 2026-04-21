export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface SocialLink {
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube";
  href: string;
}

export interface SiteConfig {
  universityName: string;
  tagline: string;
  logoPath: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    primaryLight: string;
    secondaryLight: string;
    textOnPrimary: string;
    textOnSecondary: string;
    background: string;
    surface: string;
    textPrimary: string;
    textMuted: string;
  };
  navigation: NavItem[];
  footer: {
    columns: FooterColumn[];
    socialLinks: SocialLink[];
    copyrightText: string;
    tagline: string;
  };
}
