import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FiGlobe,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from 'react-icons/fi';

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
  const [hasScrolled, setHasScrolled] = useState(false);

  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', ...navItems.map((item) => item.sectionId)];

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function toggleLanguage() {
    const nextLanguage = currentLanguage === 'en' ? 'pt-BR' : 'en';

    void i18n.changeLanguage(nextLanguage);

    localStorage.setItem('language', nextLanguage);
    document.documentElement.lang = nextLanguage;
    setIsMenuOpen(false);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled ? 'border-b py-0' : 'border-transparent py-2'
      }`}
      style={{
        background: hasScrolled
          ? 'color-mix(in srgb, var(--color-background) 82%, transparent)'
          : 'transparent',
        borderColor: 'var(--color-border)',
        backdropFilter: hasScrolled ? 'blur(20px)' : 'none',
      }}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3 font-bold"
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-background)',
              boxShadow: 'var(--shadow-primary)',
            }}
          >
            LC
          </span>

          <span className="hidden text-lg tracking-tight sm:block">
            Lucas Cáceres
          </span>
        </a>

        <div
          className="hidden items-center gap-1 rounded-full border p-1.5 lg:flex"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
            backdropFilter: 'blur(18px)',
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium transition"
                style={{
                  color: isActive
                    ? 'var(--color-primary)'
                    : 'var(--color-text-muted)',
                  background: isActive
                    ? 'var(--color-primary-soft)'
                    : 'transparent',
                }}
              >
                {t(item.label)}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
            aria-label="Change language"
          >
            <FiGlobe />

            <span className="hidden sm:inline">
              {currentLanguage === 'en' ? 'PT-BR' : 'EN'}
            </span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border text-lg transition hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border text-xl lg:hidden"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="px-6 pb-5 lg:hidden">
          <div
            className="mx-auto flex max-w-7xl flex-col gap-1 rounded-3xl border p-3"
            style={{
              background: 'var(--color-surface-solid)',
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-5 py-3 text-sm font-medium"
                  style={{
                    color: isActive
                      ? 'var(--color-primary)'
                      : 'var(--color-text-muted)',
                    background: isActive
                      ? 'var(--color-primary-soft)'
                      : 'transparent',
                  }}
                >
                  {t(item.label)}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };