import { useTranslation } from 'react-i18next';

function ContactSection() {
  const { t } = useTranslation();

  const contactLinks = [
    {
      label: t('contact.email'),
      value: 'caceresely10@gmail.com',
      href: 'mailto:caceresely10@gmail.com',
      external: false,
    },
    {
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/lucas-cáceres',
      href: 'https://www.linkedin.com/in/lucas-c%C3%A1ceres-841859206/',
      external: true,
    },
    {
      label: t('contact.github'),
      value: 'github.com/ttbns030',
      href: 'https://github.com/ttbns030',
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: 'var(--color-primary)' }}
        >
          {t('contact.eyebrow')}
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          {t('contact.title')}
        </h2>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-8"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {t('contact.description')}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="rounded-3xl border p-6 text-left transition hover:-translate-y-1"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <span
                className="text-sm font-semibold uppercase tracking-[0.25em]"
                style={{ color: 'var(--color-primary)' }}
              >
                {link.label}
              </span>

              <p
                className="mt-4 break-words text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ContactSection };