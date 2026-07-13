import { useTranslation } from 'react-i18next';

function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.activityTitle'),
      description: t('projects.activityDescription'),
      stack: ['Power Apps', 'SharePoint', 'Power Automate', 'Power BI'],
    },
    {
      title: t('projects.invoiceTitle'),
      description: t('projects.invoiceDescription'),
      stack: ['Power Apps', 'Power Automate', 'JavaScript', 'SharePoint'],
    },
    {
      title: t('projects.migrationTitle'),
      description: t('projects.migrationDescription'),
      stack: ['Python', 'SharePoint', 'Power Automate'],
    },
    {
      title: t('projects.tradingTitle'),
      description: t('projects.tradingDescription'),
      stack: ['Python', 'MetaTrader', 'Automation', 'AI'],
    },
  ];

  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: 'var(--color-primary)' }}
        >
          {t('projects.eyebrow')}
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
          {t('projects.title')}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border p-8 transition hover:-translate-y-1"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p
                className="mt-4 leading-7"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((technology) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProjectsSection };