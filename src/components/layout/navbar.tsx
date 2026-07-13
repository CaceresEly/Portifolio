import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

import { useTheme } from '../../hooks/use_theme';

const navItems = [
  { label: 'navbar.about', href: '#about', sectionId: 'about' },
  { label: 'navbar.skills', href: '#skills', sectionId: 'skills' },
  { label: 'navbar.projects', href: '#projects', sectionId: 'projects' },
  {
    label: 'navbar.experience',
    href: '#experience',
    sectionId: 'experience',
  },
  {
    label: 'navbar.education',
    href: '#education',
    sectionId: 'education',
  },
  { label: 'navbar.contact', href: '#contact', sectionId: 'contact' },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', ...navItems.map((item) => item.sectionId)];

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        const mostVisibleSection = visibleEntries[0];

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection.target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  function toggleLanguage() {
    const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
    const nextLanguage = currentLanguage === 'en' ? 'pt-BR' : 'en';

    void i18n.changeLanguage(nextLanguage);

    localStorage.setItem('language', nextLanguage);
    document.documentElement.lang = nextLanguage;

    setIsMenuOpen(false);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function getLinkStyle(sectionId: string) {
    return {
      color:
        activeSection === sectionId
          ? 'var(--color-primary)'
          : 'var(--color-text-muted)',
    };
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
        <a
          href="#home"
          onClick={closeMenu}
          className="text-base font-bold tracking-tight transition md:text-lg"
          style={{
            color:
              activeSection === 'home'
                ? 'var(--color-primary)'
                : 'var(--color-text)',
          }}
        >
          Lucas Cáceres
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-medium transition hover:opacity-80"
              style={getLinkStyle(item.sectionId)}
            >
              {t(item.label)}

              {activeSection === item.sectionId && (
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-full rounded-full"
                  style={{ background: 'var(--color-primary)' }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Change language"
            className="rounded-full border px-3 py-2 text-xs font-semibold transition hover:scale-105 sm:px-4 sm:text-sm"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
          >
            {(i18n.resolvedLanguage ?? i18n.language) === 'en'
              ? 'PT-BR'
              : 'EN'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border text-lg transition hover:scale-105"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border text-xl lg:hidden"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="border-t px-6 py-5 lg:hidden"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium transition"
                style={{
                  color:
                    activeSection === item.sectionId
                      ? 'var(--color-primary)'
                      : 'var(--color-text-muted)',
                  background:
                    activeSection === item.sectionId
                      ? 'color-mix(in srgb, var(--color-primary) 10%, transparent)'
                      : 'transparent',
                }}
              >
                {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };