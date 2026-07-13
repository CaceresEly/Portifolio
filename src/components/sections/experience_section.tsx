import { useTranslation } from 'react-i18next';

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
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: 'var(--color-primary)' }}
        >
          {t('experience.eyebrow')}
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
          {t('experience.title')}
        </h2>

        <article
          className="mt-14 rounded-3xl border p-8"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">{t('experience.role')}</h3>

              <p
                className="mt-2 text-lg font-semibold"
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
              className="rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-muted)',
              }}
            >
              {t('experience.period')}
            </span>
          </div>

          <p
            className="mt-8 max-w-4xl leading-7"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('experience.description')}
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((highlight) => (
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
            {stack.map((technology) => (
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
      </div>
    </section>
  );
}

export { ExperienceSection };