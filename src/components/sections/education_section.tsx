import { useTranslation } from 'react-i18next';

const certifications = [
  {
    name: 'Desenvolvimento Web Full Stack',
    institution: 'Digital House',
    details: '264 hours',
  },
  {
    name: 'Python',
    institution: 'Danki Code',
    details: '',
  },
  {
    name: 'n8n — AI Process Automation',
    institution: 'Online',
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
    <section
      id="education"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: 'var(--color-primary)' }}
        >
          {t('education.eyebrow')}
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
          {t('education.title')}
        </h2>

        <p
          className="mt-6 max-w-3xl text-lg leading-8"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {t('education.description')}
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <article
            className="rounded-3xl border p-8"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: 'var(--color-primary)' }}
            >
              {t('education.degreeLabel')}
            </p>

            <h3 className="mt-5 text-2xl font-bold">
              {t('education.degree')}
            </h3>

            <p
              className="mt-4 text-lg"
              style={{ color: 'var(--color-text-muted)' }}
            >
              UNISINOS — Universidade do Vale do Rio dos Sinos
            </p>

            <p
              className="mt-3"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t('education.degreeStatus')}
            </p>
          </article>

          <div>
            <h3 className="text-2xl font-bold">
              {t('education.certificationsTitle')}
            </h3>

            <div className="mt-6 grid gap-4">
              {certifications.map((certification) => (
                <article
                  key={certification.name}
                  className="rounded-2xl border p-5"
                  style={{
                    background: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <h4 className="font-semibold">{certification.name}</h4>

                  <p
                    className="mt-2 text-sm"
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
      </div>
    </section>
  );
}

export { EducationSection };