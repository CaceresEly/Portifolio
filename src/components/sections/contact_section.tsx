const contactLinks = [
  {
    label: 'Email',
    value: 'caceresely10@gmail.com',
    href: 'mailto:caceresely10@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/lucas-cáceres',
    href: 'https://www.linkedin.com/in/lucas-c%C3%A1ceres-841859206/',
  },
  {
    label: 'GitHub',
    value: 'github.com/ttbns030',
    href: 'https://github.com/ttbns030',
  },
];

function ContactSection() {
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
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let&apos;s build something together.
        </h2>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-8"
          style={{ color: 'var(--color-text-muted)' }}
        >
          I&apos;m open to opportunities involving React, Power Platform,
          automation, SharePoint, Python and full stack development.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noreferrer'}
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