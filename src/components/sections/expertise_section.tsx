import { useTranslation } from 'react-i18next';
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiLayers,
} from 'react-icons/fi';

import { SectionContainer } from '../common/section_container';
import { SectionHeading } from '../common/section_heading';
import { TechnologyBadge } from '../common/technology_badge';

function ExpertiseSection() {
  const { t } = useTranslation();

  const expertiseGroups = [
    {
      icon: FiLayers,
      title: t('expertise.enterpriseTitle'),
      description: t('expertise.enterpriseDescription'),
      skills: [
        'Power Apps',
        'Power Automate',
        'SharePoint',
        'Power BI',
        'Copilot Studio',
      ],
    },
    {
      icon: FiCode,
      title: t('expertise.fullStackTitle'),
      description: t('expertise.fullStackDescription'),
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'REST APIs',
        'HTML',
        'CSS',
      ],
    },
    {
      icon: FiCpu,
      title: t('expertise.automationTitle'),
      description: t('expertise.automationDescription'),
      skills: [
        'Python',
        'AI Agents',
        'n8n',
        'Document Processing',
        'IBM Notes Migration',
      ],
    },
    {
      icon: FiCloud,
      title: t('expertise.toolsTitle'),
      description: t('expertise.toolsDescription'),
      skills: ['Git', 'Azure', 'MySQL', 'PostgreSQL', 'Next.js', 'Vue'],
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 lg:py-36"
      style={{ background: 'var(--color-background-secondary)' }}
    >
      <SectionContainer>
        <SectionHeading
          eyebrow={t('expertise.eyebrow')}
          title={t('expertise.title')}
          description={t('expertise.description')}
          centered
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {expertiseGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="glass-card interactive-card rounded-[2rem] p-8 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                    style={{
                      background: 'var(--color-primary-soft)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon />
                  </span>

                  <span
                    className="text-4xl font-bold opacity-20"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold lg:text-3xl">
                  {group.title}
                </h3>

                <p
                  className="mt-4 text-base leading-7 lg:text-lg"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {group.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <TechnologyBadge key={skill}>
                      {skill}
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

export { ExpertiseSection };