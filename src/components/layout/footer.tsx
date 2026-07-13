import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t px-6 py-8"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-surface)',
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-semibold">Lucas Cáceres</p>

          <p
            className="mt-1 text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('footer.role')}
          </p>
        </div>

        <p
          className="text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          © {currentYear} Lucas Cáceres. {t('footer.rights')}
        </p>

        <a
          href="#home"
          className="text-sm font-semibold transition hover:opacity-70"
          style={{ color: 'var(--color-primary)' }}
        >
          {t('footer.backToTop')} ↑
        </a>
      </div>
    </footer>
  );
}

export { Footer };