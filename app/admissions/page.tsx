import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Admissions",
};

const steps = [
  {
    step: 1,
    title: "Research Programs",
    description:
      "Explore our 200+ programs across eight colleges to find your perfect fit.",
  },
  {
    step: 2,
    title: "Submit Application",
    description:
      "Complete the online application with your transcripts, essays, and recommendations.",
  },
  {
    step: 3,
    title: "Interview",
    description:
      "Select programs require an interview — a chance for us to learn about you.",
  },
  {
    step: 4,
    title: "Decision",
    description:
      "Receive your admissions decision and explore financial aid options.",
  },
];

const undergrad = [
  "Minimum 3.0 GPA (weighted)",
  "SAT/ACT scores (test-optional for 2026)",
  "Personal essay (500-650 words)",
  "Two letters of recommendation",
  "High school transcript",
  "Extracurricular activities resume",
];

const graduate = [
  "Bachelor's degree from accredited institution",
  "Minimum 3.2 GPA in major coursework",
  "GRE/GMAT scores (program-dependent)",
  "Statement of purpose",
  "Three letters of recommendation",
  "Research experience (for PhD programs)",
];

const dates = [
  { deadline: "November 1, 2026", type: "Early Decision", status: "Priority" },
  {
    deadline: "January 15, 2027",
    type: "Regular Decision",
    status: "Standard",
  },
  { deadline: "March 1, 2027", type: "Transfer Students", status: "Standard" },
  {
    deadline: "Rolling",
    type: "Graduate Programs",
    status: "Varies by program",
  },
];

export default function Admissions() {
  return (
    <>
      <Hero
        title="Admissions"
        subtitle="Your journey begins with a single step. We're here to guide you through every stage of the application process."
        size="compact"
        ctaText="Start Your Application"
        ctaHref="#apply"
      />

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Application Process"
            subtitle="Four straightforward steps to joining our community."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-brand-surface rounded-lg p-6 shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-accent/10 rounded-bl-full" />
                <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-primary font-bold flex items-center justify-center text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Admission Requirements"
            subtitle="What you need to prepare for your application."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div
                className="p-4"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-light) 100%)",
                }}
              >
                <h3 className="font-heading text-xl font-bold text-brand-text-on-primary">
                  Undergraduate
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {undergrad.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 text-brand-text-primary"
                  >
                    <svg
                      className="w-5 h-5 text-brand-accent shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div
                className="p-4"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-secondary) 0%, var(--brand-secondary-light) 100%)",
                }}
              >
                <h3 className="font-heading text-xl font-bold text-brand-text-on-secondary">
                  Graduate
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {graduate.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 text-brand-text-primary"
                  >
                    <svg
                      className="w-5 h-5 text-brand-accent shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Key Dates"
            subtitle="Important deadlines for prospective students."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dates.map((date) => (
              <div
                key={date.type}
                className="bg-brand-surface rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-brand-accent font-heading text-lg font-bold mb-1">
                  {date.deadline}
                </div>
                <div className="text-brand-text-primary font-bold mb-2">
                  {date.type}
                </div>
                <div className="text-brand-text-muted text-sm">
                  {date.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="apply"
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-secondary) 0%, var(--brand-primary) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-text-on-primary mb-4">
            Start Your Application
          </h2>
          <p className="text-brand-text-on-primary/80 text-lg mb-8 max-w-2xl mx-auto">
            The application takes approximately 30 minutes to complete. You can
            save your progress and return at any time.
          </p>
          <Button variant="accent" size="lg" href="#">
            Apply Online
          </Button>
        </div>
      </section>
    </>
  );
}
