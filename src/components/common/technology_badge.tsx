type TechnologyBadgeProps = {
  children: React.ReactNode;
};

function TechnologyBadge({ children }: TechnologyBadgeProps) {
  return (
    <span
      className="rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-primary-soft)',
        color: 'var(--color-text-soft)',
      }}
    >
      {children}
    </span>
  );
}

export { TechnologyBadge };