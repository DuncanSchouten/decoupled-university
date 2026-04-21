interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-text-primary">
        {title}
      </h2>
      <div
        className={`h-1 w-16 bg-brand-accent mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p className="mt-4 text-brand-text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
