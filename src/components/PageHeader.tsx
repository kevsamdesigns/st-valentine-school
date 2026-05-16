interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export const PageHeader = ({ title, subtitle, eyebrow }: PageHeaderProps) => (
  <section className="bg-gradient-cta text-primary-foreground py-20 md:py-24">
    <div className="container text-center">
      {eyebrow && (
        <p className="text-primary-glow font-semibold uppercase tracking-[0.3em] text-xs mb-4">{eyebrow}</p>
      )}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-up">{title}</h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);
