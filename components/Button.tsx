import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantClasses = {
  primary:
    "bg-brand-primary text-brand-text-on-primary hover:bg-brand-primary-light",
  secondary:
    "bg-brand-secondary text-brand-text-on-secondary hover:bg-brand-secondary-light",
  accent: "bg-brand-accent text-brand-primary hover:opacity-90",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-md font-bold transition-all ${variantClasses[variant]} ${sizeClasses[size]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
