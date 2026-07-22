import { useTranslation } from 'react-i18next';
import {
  FiArrowUpRight,
  FiFileText,
  FiGrid,
  FiRepeat,
  FiTrendingUp,
} from 'react-icons/fi';

import { SectionContainer } from '../common/section_container';
import { SectionHeading } from '../common/section_heading';
import { TechnologyBadge } from '../common/technology_badge';

function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    {
      icon: FiGrid,
      title: t('projects.activityTitle'),
      description: t('projects.activityDescription'),
      stack: ['Power Apps', 'SharePoint', 'Power Automate', 'Power BI'],
    },
    {
      icon: FiFileText,
      title: t('projects.invoiceTitle'),
      description: t('projects.invoiceDescription'),
      stack: ['Power Apps', 'Power Automate', 'JavaScript', 'SharePoint'],
    },
    {
      icon: FiRepeat,
      title: t('projects.migrationTitle'),
      description: t('projects.migrationDescription'),
      stack: ['Python', 'SharePoint', 'Power Automate'],
    },
    {
      icon: FiTrendingUp,
      title: t('projects.tradingTitle'),
      description: t('projects.tradingDescription'),
      stack: ['Python', 'MetaTrader', 'Automation', 'AI'],
    },
  ];

  return (
    <section id="projects" className="py-28 lg:py-36">
      <SectionContainer>
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
        />

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="glass-card interactive-card group flex flex-col rounded-[2rem] p-6 sm:min-h-96 sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                    style={{
                      background: 'var(--color-primary-soft)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon />
                  </span>

                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-bold"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      0{index + 1}
                    </span>

                    <FiArrowUpRight
                      className="text-xl transition group-hover:-translate-y-1 group-hover:translate-x-1"
                      style={{ color: 'var(--color-text-muted)' }}
                    />
                  </div>
                </div>

                <h3 className="mt-9 text-2xl font-bold leading-tight lg:text-3xl">
                  {project.title}
                </h3>

                <p
                  className="mt-5 flex-1 text-lg leading-8"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.stack.map((technology) => (
                    <TechnologyBadge key={technology}>
                      {technology}
                    </TechnologyBadge>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}

export { ProjectsSection };
