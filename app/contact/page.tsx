import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

const contactInfo = [
  {
    title: "Visit Us",
    detail: "100 University Drive\nAcademia, CA 94301",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Call or Email",
    detail: "(555) 123-4567\nadmissions@decoupled.edu",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Office Hours",
    detail: "Monday – Friday: 8am – 5pm\nSaturday: 9am – 1pm (by appointment)",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const departments = [
  {
    name: "Office of Admissions",
    email: "admissions@decoupled.edu",
    phone: "(555) 123-4567",
  },
  {
    name: "Financial Aid Office",
    email: "finaid@decoupled.edu",
    phone: "(555) 123-4568",
  },
  {
    name: "Registrar's Office",
    email: "registrar@decoupled.edu",
    phone: "(555) 123-4569",
  },
  {
    name: "Student Affairs",
    email: "studentaffairs@decoupled.edu",
    phone: "(555) 123-4570",
  },
  {
    name: "IT Help Desk",
    email: "helpdesk@decoupled.edu",
    phone: "(555) 123-4571",
  },
];

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions about admissions, programs, campus visits, or anything else."
        size="compact"
      />

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-brand-surface rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-brand-accent/15 flex items-center justify-center mx-auto mb-4 text-brand-accent">
                  {info.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-text-primary mb-2">
                  {info.title}
                </h3>
                <p className="text-brand-text-muted text-sm whitespace-pre-line">
                  {info.detail}
                </p>
              </div>
            ))}
          </div>

          <SectionHeading
            title="Send Us a Message"
            subtitle="Fill out the form below and we'll get back to you within 2 business days."
          />
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Department Directory"
            subtitle="Contact a specific department directly."
          />
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden divide-y divide-brand-text-muted/10">
              {departments.map((dept) => (
                <div
                  key={dept.name}
                  className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <h3 className="font-bold text-brand-text-primary">
                      {dept.name}
                    </h3>
                    <p className="text-brand-text-muted text-sm">
                      {dept.email}
                    </p>
                  </div>
                  <span className="text-brand-text-muted text-sm">
                    {dept.phone}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
