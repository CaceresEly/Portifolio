import { useTranslation } from 'react-i18next';
import { FiBriefcase, FiCheck } from 'react-icons/fi';

import { SectionContainer } from '../common/section_container';
import { SectionHeading } from '../common/section_heading';
import { TechnologyBadge } from '../common/technology_badge';

const stack = [
  'Power Apps',
  'Power Automate',
  'SharePoint',
  'Power BI',
  'Python',
  'JavaScript',
  'Copilot Studio',
];

function ExperienceSection() {
  const { t } = useTranslation();

  const highlights = [
    t('experience.highlight1'),
    t('experience.highlight2'),
    t('experience.highlight3'),
    t('experience.highlight4'),
    t('experience.highlight5'),
  ];

  return (
    <section
      id="experience"
      className="py-28 lg:py-36"
      style={{ background: 'var(--color-background-secondary)' }}
    >
      <SectionContainer>
        <SectionHeading
          eyebrow={t('experience.eyebrow')}
          title={t('experience.title')}
        />

        <div className="relative mt-16">
          <span
            className="absolute bottom-0 left-7 top-0 hidden w-px md:block"
            style={{ background: 'var(--color-border-strong)' }}
          />

          <article className="glass-card relative rounded-[2rem] p-8 md:ml-20 lg:p-12">
            <span
              className="absolute -left-[5.2rem] top-12 hidden h-14 w-14 items-center justify-center rounded-full text-xl md:flex"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-background)',
                boxShadow: 'var(--shadow-primary)',
              }}
            >
              <FiBriefcase />
            </span>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-3xl font-bold">
                  {t('experience.role')}
                </h3>

                <p
                  className="mt-3 text-xl font-bold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  ARLANXEO
                </p>

                <p
                  className="mt-2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {t('experience.location')}
                </p>
              </div>

              <span
                className="w-fit rounded-full border px-5 py-2 text-sm font-bold"
                style={{
                  borderColor: 'var(--color-border-strong)',
                  background: 'var(--color-primary-soft)',
                  color: 'var(--color-primary)',
                }}
              >
                {t('experience.period')}
              </span>
            </div>

            <p
              className="mt-9 max-w-4xl text-lg leading-8"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t('experience.description')}
            </p>

            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-4 rounded-2xl border p-5"
                  style={{
                    borderColor: 'var(--color-border)',
                    background: 'var(--color-background-secondary)',
                  }}
                >
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs"
                    style={{
                      background: 'var(--color-primary-soft)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <FiCheck />
                  </span>

                  <p
                    className="leading-7"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {stack.map((technology) => (
                <TechnologyBadge key={technology}>
                  {technology}
                </TechnologyBadge>
              ))}
            </div>
          </article>
        </div>
      </SectionContainer>
    </section>
  );
}

export { ExperienceSection };