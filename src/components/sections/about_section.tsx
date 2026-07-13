import { useTranslation } from 'react-i18next';

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: 'var(--color-primary)' }}
          >
            {t('about.eyebrow')}
          </p>

          <h2 className="text-4xl font-bold">{t('about.title')}</h2>

          <p
            className="mt-8 text-lg leading-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('about.paragraph1')}
          </p>

          <p
            className="mt-6 text-lg leading-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('about.paragraph2')}
          </p>

          <p
            className="mt-6 text-lg leading-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('about.paragraph3')}
          </p>
        </div>

        <div className="grid gap-6">
          <div
            className="rounded-2xl border p-6"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h3 className="text-xl font-semibold">
              {t('about.experienceTitle')}
            </h3>

            <p
              className="mt-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t('about.experienceText')}
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h3 className="text-xl font-semibold">
              {t('about.technologiesTitle')}
            </h3>

            <p
              className="mt-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t('about.technologiesText')}
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h3 className="text-xl font-semibold">
              {t('about.languagesTitle')}
            </h3>

            <p
              className="mt-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t('about.portuguese')}
              <br />
              {t('about.english')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };