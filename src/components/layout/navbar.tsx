import { useTheme } from '../../hooks/use_theme';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();

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
              {item.label}
            </a>
          ))}
        </div>

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
      </nav>
    </header>
  );
}

export { Navbar };