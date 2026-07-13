import { useTranslation } from 'react-i18next';

import { SectionContainer } from '../common/section_container';

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
      className="flex min-h-screen items-center py-28 md:py-36"
    >
      <SectionContainer>
        <div className="max-w-4xl">
          <p
            className="mb-5 text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: 'var(--color-primary)' }}
          >
            {t('projects.eyebrow')}
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t('projects.title')}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-72 flex-col rounded-3xl border p-8 shadow-lg transition duration-300 hover:-translate-y-2 md:p-10"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                {project.title}
              </h3>

              <p
                className="mt-5 flex-1 text-base leading-8 md:text-lg"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border px-4 py-2 text-sm font-medium"
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
      </SectionContainer>
    </section>
  );
}

export { ProjectsSection };