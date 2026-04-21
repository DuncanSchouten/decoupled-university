import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import siteConfig from "../../site.config";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    title: "Innovation",
    description:
      "We embrace new ideas and technologies, pushing the boundaries of knowledge to solve tomorrow's challenges today.",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of academic honesty, ethical conduct, and transparency in everything we do.",
  },
  {
    title: "Inclusivity",
    description:
      "We celebrate diverse perspectives and foster an environment where every voice is heard and valued.",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the positive change our students, faculty, and research create in the world.",
  },
];

const milestones = [
  {
    year: "1892",
    title: "Founded",
    description:
      "Established as a small liberal arts college with 47 students and a vision to transform education.",
  },
  {
    year: "1945",
    title: "University Status",
    description:
      "Granted university charter, expanding to include graduate programs and professional schools.",
  },
  {
    year: "1978",
    title: "Research Excellence",
    description:
      "Designated as a Carnegie R1 research university, recognizing our commitment to cutting-edge scholarship.",
  },
  {
    year: "2003",
    title: "Global Campus",
    description:
      "Opened international campuses and exchange programs, connecting students with 40+ countries worldwide.",
  },
  {
    year: "2024",
    title: "Digital Innovation",
    description:
      "Launched our decoupled digital platform, pioneering the future of higher education technology.",
  },
];

export default function About() {
  return (
    <>
      <Hero
        title={`About ${siteConfig.universityName}`}
        subtitle="Over a century of excellence in education, research, and community."
        size="compact"
      />

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -top-4 -left-2 text-6xl text-brand-accent/30 font-heading">
              &ldquo;
            </div>
            <blockquote className="text-xl sm:text-2xl font-heading text-brand-text-primary leading-relaxed pl-8 border-l-4 border-brand-accent">
              To cultivate curious minds, advance human knowledge, and empower
              graduates to lead with purpose — bridging the timeless values of
              liberal education with the transformative potential of technology.
            </blockquote>
            <p className="mt-6 text-brand-text-muted text-sm uppercase tracking-wider pl-8">
              Our Mission
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our History"
            subtitle="Key moments that shaped who we are."
          />
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={milestone.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-brand-primary font-bold text-sm shrink-0">
                    {milestone.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full min-h-8 bg-brand-accent/30 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-xl font-bold text-brand-text-primary">
                    {milestone.title}
                  </h3>
                  <p className="text-brand-text-muted mt-1 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-light) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "8", label: "Colleges" },
              { value: "650+", label: "Faculty" },
              { value: "$180M", label: "Research Funding" },
              { value: "40+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-brand-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-brand-text-on-primary/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
