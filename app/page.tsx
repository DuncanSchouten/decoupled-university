import Hero from "@/components/Hero";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import siteConfig from "../site.config";

const stats = [
  { value: "1892", label: "Founded" },
  { value: "12,000+", label: "Students" },
  { value: "200+", label: "Programs" },
  { value: "95%", label: "Employment Rate" },
];

const features = [
  {
    title: "Academic Excellence",
    description:
      "Our rigorous curriculum spans over 200 programs across eight colleges, combining theoretical foundations with hands-on research opportunities.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6.5" />
      </svg>
    ),
  },
  {
    title: "Research Innovation",
    description:
      "Our faculty and students drive groundbreaking research with $180M in annual funding, tackling challenges from climate science to artificial intelligence.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Campus Life",
    description:
      "From 150+ student organizations to Division I athletics, our vibrant campus community offers countless ways to connect, grow, and create lasting memories.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title={siteConfig.universityName}
        subtitle={siteConfig.tagline}
        ctaText="Apply Now"
        ctaHref="/admissions"
        secondaryCtaText="Explore Programs"
        secondaryCtaHref="/about"
      />

      {/* Stats Bar */}
      <section className="bg-brand-surface border-y border-brand-text-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-brand-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-brand-text-muted text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Discover what makes Decoupled University a leader in higher education."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-secondary) 0%, var(--brand-primary) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-text-on-primary mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-brand-text-on-primary/80 text-lg mb-8 max-w-2xl mx-auto">
            Join a community of scholars, innovators, and leaders. Your journey
            at {siteConfig.universityName} starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" href="/admissions">
              Start Your Application
            </Button>
            <Button variant="primary" size="lg" href="/contact">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
