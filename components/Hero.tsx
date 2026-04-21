import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  size?: "full" | "compact";
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  title,
  subtitle,
  size = "full",
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroProps) {
  const isFull = size === "full";

  return (
    <section
      className={`relative overflow-hidden ${isFull ? "min-h-[85vh]" : "min-h-[40vh]"} flex items-center justify-center`}
      style={{
        background: isFull
          ? "linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-light) 40%, var(--brand-secondary) 100%)"
          : "linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-light) 100%)",
      }}
    >
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--brand-secondary) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, var(--brand-accent) 0%, transparent 30%)
          `,
        }}
      />

      {isFull && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(30deg, var(--brand-accent) 12%, transparent 12.5%, transparent 87%, var(--brand-accent) 87.5%, var(--brand-accent)),
              linear-gradient(150deg, var(--brand-accent) 12%, transparent 12.5%, transparent 87%, var(--brand-accent) 87.5%, var(--brand-accent)),
              linear-gradient(30deg, var(--brand-accent) 12%, transparent 12.5%, transparent 87%, var(--brand-accent) 87.5%, var(--brand-accent)),
              linear-gradient(150deg, var(--brand-accent) 12%, transparent 12.5%, transparent 87%, var(--brand-accent) 87.5%, var(--brand-accent))
            `,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
          }}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`font-heading font-bold text-brand-text-on-primary leading-tight ${isFull ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl"}`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`mt-6 text-brand-text-on-primary/80 max-w-2xl mx-auto ${isFull ? "text-lg sm:text-xl" : "text-base sm:text-lg"}`}
          >
            {subtitle}
          </p>
        )}

        {(ctaText || secondaryCtaText) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className="bg-brand-accent text-brand-primary px-8 py-3 rounded-md font-bold text-lg hover:opacity-90 transition-opacity"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="border-2 border-brand-text-on-primary/40 text-brand-text-on-primary px-8 py-3 rounded-md font-bold text-lg hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
