"use client";

import { useState } from "react";
import Link from "next/link";
import siteConfig from "../site.config";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-brand-text-on-primary p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-brand-primary-light shadow-xl z-50">
          <nav className="flex flex-col px-4 py-6 gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-brand-text-on-primary hover:text-brand-accent transition-colors font-medium py-3 px-4 rounded-md hover:bg-brand-primary/50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="bg-brand-accent text-brand-primary px-5 py-3 rounded-md font-bold text-center mt-4 hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
