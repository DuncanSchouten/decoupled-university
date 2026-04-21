import Link from "next/link";
import Image from "next/image";
import siteConfig from "../site.config";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="bg-brand-primary sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={siteConfig.logoPath}
              alt=""
              width={44}
              height={44}
              className="text-brand-accent"
              style={{ color: "var(--brand-accent)" }}
            />
            <div className="flex flex-col">
              <span className="text-brand-accent font-heading text-lg sm:text-xl font-bold leading-tight">
                {siteConfig.universityName}
              </span>
              <span className="hidden sm:block text-brand-text-on-primary/70 text-xs leading-tight">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-text-on-primary hover:text-brand-accent transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="bg-brand-accent text-brand-primary px-5 py-2 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
