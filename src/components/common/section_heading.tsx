type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? 'mx-auto max-w-4xl text-center'
          : 'max-w-4xl'
      }
    >
      <p
        className="mb-5 text-sm font-bold uppercase tracking-[0.32em]"
        style={{ color: 'var(--color-primary)' }}
      >
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-7 text-lg leading-8 sm:text-xl ${
            centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'
          }`}
          style={{ color: 'var(--color-text-muted)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };