const technologies = [
  'React',
  'TypeScript',
  'Power Apps',
  'Power Automate',
  'SharePoint',
  'Python',
  'Node.js',
  'Azure',
];

function HeroSection() {
  return (
    <section
    id="home"
    className="flex min-h-screen w-full items-center justify-center px-6 pt-24"
    >
    <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: 'var(--color-primary)' }}
          >
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Lucas Cáceres
          </h1>

          <h2
            className="mt-6 text-2xl font-semibold md:text-3xl"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Full Stack Developer & Power Platform Specialist
          </h2>

          <p
            className="mt-6 max-w-2xl text-lg leading-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            I build scalable web applications, enterprise automation solutions
            and integrated systems using React, Power Platform, SharePoint,
            Python and APIs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-background)',
              }}
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:scale-105"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border px-4 py-2 text-sm"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div
          className="rounded-3xl border p-8 shadow-xl"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-primary)' }}
          >
            Portfolio Focus
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <strong>Frontend</strong>
              <p style={{ color: 'var(--color-text-muted)' }}>
                React, TypeScript and modern UI architecture.
              </p>
            </div>

            <div>
              <strong>Business Apps</strong>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Power Apps, Power Automate and SharePoint solutions.
              </p>
            </div>

            <div>
              <strong>Automation</strong>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Python scripts, API integrations and process optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };