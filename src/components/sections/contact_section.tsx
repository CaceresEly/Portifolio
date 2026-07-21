import { useTranslation } from 'react-i18next';
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';

import { SectionContainer } from '../common/section_container';

function ContactSection() {
  const { t } = useTranslation();

  const contactLinks = [
    {
      icon: FiMail,
      label: t('contact.email'),
      value: 'caceresely10@gmail.com',
      href: 'mailto:caceresely10@gmail.com',
      external: false,
    },
    {
      icon: FiLinkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/lucas-cáceres',
      href: 'https://www.linkedin.com/in/lucas-c%C3%A1ceres-841859206/',
      external: true,
    },
    {
      icon: FiGithub,
      label: t('contact.github'),
      value: 'github.com/ttbns030',
      href: 'https://github.com/ttbns030',
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 lg:py-40"
      style={{ background: 'var(--color-background-secondary)' }}
    >
      <div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'var(--color-primary-soft)' }}
      />

      <SectionContainer className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="text-sm font-bold uppercase tracking-[0.35em]"
            style={{ color: 'var(--color-primary)' }}
          >
            {t('contact.eyebrow')}
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {t('contact.title')}
          </h2>

          <p
            className="mx-auto mt-7 max-w-3xl text-lg leading-8 sm:text-xl"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('contact.description')}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="glass-card interactive-card group rounded-3xl p-7 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                      style={{
                        background: 'var(--color-primary-soft)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Icon />
                    </span>

                    <FiArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>

                  <p
                    className="mt-7 text-xs font-bold uppercase tracking-[0.25em]"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {link.label}
                  </p>

                  <p
                    className="mt-3 break-words text-sm"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {link.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export { ContactSection };