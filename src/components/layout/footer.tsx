import { useTranslation } from 'react-i18next';
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';

import { SectionContainer } from '../common/section_container';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-10"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-background)',
      }}
    >
      <SectionContainer>
        <div className="flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl font-bold"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-background)',
              }}
            >
              LC
            </span>

            <div>
              <p className="font-bold">Lucas Cáceres</p>

              <p
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {t('footer.role')}
              </p>
            </div>
          </div>

          <p
            className="text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            © {currentYear} Lucas Cáceres. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ttbns030"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-1"
              style={{ borderColor: 'var(--color-border)' }}
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/lucas-c%C3%A1ceres-841859206/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-1"
              style={{ borderColor: 'var(--color-border)' }}
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <a
              href="#home"
              className="flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition hover:-translate-y-1"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-primary)',
              }}
            >
              {t('footer.backToTop')}
              <FiArrowUp />
            </a>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}

export { Footer };