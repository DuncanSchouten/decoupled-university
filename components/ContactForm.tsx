"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-brand-surface rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-brand-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-brand-text-primary mb-2">
          Thank You!
        </h3>
        <p className="text-brand-text-muted">
          We&apos;ve received your message and will respond within 2 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="bg-brand-surface rounded-lg shadow-md p-8"
    >
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-brand-text-primary font-medium text-sm mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2.5 rounded-md border border-brand-text-muted/30 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white text-brand-text-primary"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-brand-text-primary font-medium text-sm mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-2.5 rounded-md border border-brand-text-muted/30 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white text-brand-text-primary"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-brand-text-primary font-medium text-sm mb-2">
          Subject
        </label>
        <select
          required
          className="w-full px-4 py-2.5 rounded-md border border-brand-text-muted/30 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white text-brand-text-primary"
        >
          <option value="">Select a subject...</option>
          <option value="admissions">Admissions Inquiry</option>
          <option value="financial-aid">Financial Aid</option>
          <option value="campus-visit">Campus Visit</option>
          <option value="academics">Academic Programs</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-brand-text-primary font-medium text-sm mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-2.5 rounded-md border border-brand-text-muted/30 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white text-brand-text-primary resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <Button type="submit" variant="accent" size="lg">
        Send Message
      </Button>
    </form>
  );
}
