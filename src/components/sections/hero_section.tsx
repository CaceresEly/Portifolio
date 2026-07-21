import { useTranslation } from 'react-i18next';
import {
  FiArrowDown,
  FiArrowRight,
  FiCode,
  FiDownload,
  FiEye,
  FiLayers,
  FiZap,
} from 'react-icons/fi';

import { SectionContainer } from '../common/section_container';
import { TechnologyBadge } from '../common/technology_badge';

const technologies = [
  'React',
  'TypeScript',
  'Power Apps',
  'Power Automate',
  'SharePoint',
  'Python',
  'Node.js',
  'Azure',
];

function HeroSection() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const isPortuguese = currentLanguage === 'pt-BR';

  const resumePath = isPortuguese
    ? '/documents/curriculo_lucas_caceres_pt_br.pdf'
    : '/documents/resume_lucas_caceres_en.pdf';

  const resumeFileName = isPortuguese
    ? 'Curriculo_Lucas_Caceres.pdf'
    : 'Lucas_Caceres_Resume.pdf';

  const focusItems = [
    {
      icon: FiCode,
      title: t('hero.frontendTitle'),
      description: t('hero.frontendDescription'),
    },
    {
      icon: FiLayers,
      title: t('hero.businessTitle'),
      description: t('hero.businessDescription'),
    },
    {
      icon: FiZap,
      title: t('hero.automationTitle'),
      description: t('hero.automationDescription'),
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-36"
    >
      <div
        className="absolute -left-32 top-32 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'var(--color-primary-soft)' }}
      />

      <div
        className="absolute -right-32 bottom-16 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'rgba(56, 189, 248, 0.08)' }}
      />

      <SectionContainer className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div
              className="mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold"
              style={{
                borderColor: 'var(--color-border-strong)',
                background: 'var(--color-primary-soft)',
                color: 'var(--color-primary)',
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                  style={{ background: 'var(--color-primary)' }}
                />

                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ background: 'var(--color-primary)' }}
                />
              </span>

              {t('hero.eyebrow')}
            </div>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl">
              Lucas
              <span className="gradient-text block">Cáceres</span>
            </h1>

            <h2
              className="mt-7 max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl"
              style={{ color: 'var(--color-text-soft)' }}
            >
              {t('hero.subtitle')}
            </h2>

            <p
              className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t('hero.description')}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={resumePath}
                download={resumeFileName}
                className="flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1"
                style={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-background)',
                  boxShadow: 'var(--shadow-primary)',
                }}
              >
                <FiDownload />
                {t('hero.download')}
              </a>

              <a
                href={resumePath}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1"
                style={{
                  borderColor: 'var(--color-border-strong)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-primary)',
                }}
              >
                <FiEye />
                {t('hero.preview')}
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1"
                style={{ color: 'var(--color-text)' }}
              >
                {t('hero.contact')}
                <FiArrowRight />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <TechnologyBadge key={technology}>
                  {technology}
                </TechnologyBadge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-5 rounded-[2.5rem] blur-2xl"
              style={{ background: 'var(--color-primary-soft)' }}
            />

            <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.3em]"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {t('hero.focus')}
                  </p>

                  <p
                    className="mt-2 text-sm"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Full Stack · Power Platform · Automation
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="space-y-4">
                {focusItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="interactive-card rounded-2xl border p-5"
                      style={{
                        borderColor: 'var(--color-border)',
                        background: 'var(--color-background-secondary)',
                      }}
                    >
                      <div className="flex gap-4">
                        <span
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
                          style={{
                            background: 'var(--color-primary-soft)',
                            color: 'var(--color-primary)',
                          }}
                        >
                          <Icon />
                        </span>

                        <div>
                          <div className="flex items-center gap-3">
                            <span
                              className="text-xs font-bold"
                              style={{ color: 'var(--color-primary)' }}
                            >
                              0{index + 1}
                            </span>

                            <h3 className="font-bold">{item.title}</h3>
                          </div>

                          <p
                            className="mt-2 text-sm leading-6"
                            style={{ color: 'var(--color-text-muted)' }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mt-16 flex w-fit items-center gap-3 text-sm font-semibold"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full border"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <FiArrowDown />
          </span>

          Scroll
        </a>
      </SectionContainer>
    </section>
  );
}

export { HeroSection };