const experiences = [
  {
    role: 'Power Platform Developer',
    company: 'ARLANXEO',
    location: 'Porto Alegre, Brazil · Remote',
    period: '2024 — Present',
    description:
      'Development of enterprise solutions focused on process automation, system integrations and corporate workflow optimization with international teams.',
    highlights: [
      'Built Power Apps integrated with SharePoint, Power Automate and Power BI.',
      'Automated Excel data migration, status tracking and weekly planning workflows.',
      'Developed invoice generation solutions with PDF automation.',
      'Created HR request management systems with automated email summaries.',
      'Automated IBM Notes to SharePoint document migration using Python and Power Automate.',
    ],
    stack: [
      'Power Apps',
      'Power Automate',
      'SharePoint',
      'Power BI',
      'Python',
      'JavaScript',
      'Copilot Studio',
    ],
  },
];

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: 'var(--color-primary)' }}
        >
          Experience
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
          Practical experience building enterprise applications.
        </h2>

        <div className="mt-14 space-y-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="rounded-3xl border p-8"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{experience.role}</h3>

                  <p
                    className="mt-2 text-lg font-semibold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {experience.company}
                  </p>

                  <p
                    className="mt-2"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {experience.location}
                  </p>
                </div>

                <span
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {experience.period}
                </span>
              </div>

              <p
                className="mt-8 max-w-4xl leading-7"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {experience.description}
              </p>

              <ul className="mt-8 space-y-3">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 leading-7"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {experience.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ExperienceSection };