import { useTranslation } from 'react-i18next';

import { useTheme } from '../../hooks/use_theme';

const navItems = [
  { label: 'navbar.about', href: '#about' },
  { label: 'navbar.skills', href: '#skills' },
  { label: 'navbar.projects', href: '#projects' },
  { label: 'navbar.experience', href: '#experience' },
  { label: 'navbar.contact', href: '#contact' },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    const nextLanguage = i18n.language === 'en' ? 'pt-BR' : 'en';

    i18n.changeLanguage(nextLanguage);
    localStorage.setItem('language', nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl"
      style={{
        background:
          'color-mix(in srgb, var(--color-background) 86%, transparent)',
        borderColor: 'var(--color-border)',
      }}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-base font-bold tracking-tight md:text-lg">
          Lucas Cáceres
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition hover:opacity-70"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t(item.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border px-4 py-2 text-sm font-medium transition hover:scale-105"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
          >
            {i18n.language === 'en' ? 'PT-BR' : 'EN'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border text-lg transition hover:scale-105"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
}

export { Navbar };