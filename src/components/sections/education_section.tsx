import { useTranslation } from 'react-i18next';
import { FiAward, FiBookOpen } from 'react-icons/fi';

import { SectionContainer } from '../common/section_container';
import { SectionHeading } from '../common/section_heading';

const certifications = [
  {
    name: 'Desenvolvimento Web Full Stack',
    institution: 'Digital House',
    details: '264 horas',
  },
  {
    name: 'Python',
    institution: 'Danki Code',
    details: '',
  },
  {
    name: 'n8n — Automação de Processos com IA',
    institution: 'Curso profissional',
    details: '',
  },
  {
    name: 'Microsoft Copilot',
    institution: 'DIO',
    details: '',
  },
];

function EducationSection() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-28 lg:py-36">
      <SectionContainer>
        <SectionHeading
          eyebrow={t('education.eyebrow')}
          title={t('education.title')}
          description={t('education.description')}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="glass-card interactive-card rounded-[2rem] p-8 lg:p-10">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
              style={{
                background: 'var(--color-primary-soft)',
                color: 'var(--color-primary)',
              }}
            >
              <FiBookOpen />
            </span>

            <p
              className="mt-8 text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: 'var(--color-primary)' }}
            >
              {t('education.degreeLabel')}
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight lg:text-3xl">
              {t('education.degree')}
            </h3>

            <p
              className="mt-5 text-lg leading-7"
              style={{ color: 'var(--color-text-muted)' }}
            >
              UNISINOS — Universidade do Vale do Rio dos Sinos
            </p>

            <span
              className="mt-6 inline-flex rounded-full border px-4 py-2 text-sm font-semibold"
              style={{
                borderColor: 'var(--color-border-strong)',
                background: 'var(--color-primary-soft)',
                color: 'var(--color-primary)',
              }}
            >
              {t('education.degreeStatus')}
            </span>
          </article>

          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold">
              <FiAward style={{ color: 'var(--color-primary)' }} />
              {t('education.certificationsTitle')}
            </h3>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {certifications.map((certification, index) => (
                <article
                  key={certification.name}
                  className="glass-card interactive-card rounded-3xl p-6"
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    0{index + 1}
                  </span>

                  <h4 className="mt-3 text-lg font-bold">
                    {certification.name}
                  </h4>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {certification.institution}

                    {certification.details
                      ? ` · ${certification.details}`
                      : ''}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export { EducationSection };