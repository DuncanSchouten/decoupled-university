interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-brand-surface rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      <div className="h-1 bg-brand-accent" />
      <div className="p-6">
        {icon && (
          <div className="text-brand-accent mb-4 text-3xl">{icon}</div>
        )}
        <h3 className="font-heading text-xl font-bold text-brand-text-primary mb-2">
          {title}
        </h3>
        <p className="text-brand-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
