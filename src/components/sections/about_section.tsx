import { useTranslation } from 'react-i18next';
import { FiBriefcase, FiCode, FiGlobe } from 'react-icons/fi';

import { SectionContainer } from '../common/section_container';
import { SectionHeading } from '../common/section_heading';

function AboutSection() {
  const { t } = useTranslation();

  const details = [
    {
      icon: FiBriefcase,
      title: t('about.experienceTitle'),
      text: t('about.experienceText'),
    },
    {
      icon: FiCode,
      title: t('about.technologiesTitle'),
      text: t('about.technologiesText'),
    },
    {
      icon: FiGlobe,
      title: t('about.languagesTitle'),
      text: `${t('about.portuguese')} · ${t('about.english')}`,
    },
  ];

  return (
    <section id="about" className="py-28 lg:py-36">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={t('about.eyebrow')}
              title={t('about.title')}
            />

            <div
              className="mt-10 space-y-6 text-lg leading-8"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>
          </div>

          <div className="grid gap-5">
            {details.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <article
                  key={detail.title}
                  className="glass-card interactive-card rounded-3xl p-7"
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                      style={{
                        background: 'var(--color-primary-soft)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Icon />
                    </span>

                    <div>
                      <span
                        className="text-xs font-bold"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        0{index + 1}
                      </span>

                      <h3 className="mt-1 text-xl font-bold">
                        {detail.title}
                      </h3>

                      <p
                        className="mt-3 leading-7"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {detail.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export { AboutSection };