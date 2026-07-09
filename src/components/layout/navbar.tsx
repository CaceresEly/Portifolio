import { useTheme } from '../../hooks/use_theme';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        background: 'color-mix(in srgb, var(--color-background) 85%, transparent)',
        borderColor: 'var(--color-border)',
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold">
          Lucas Cáceres
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border px-4 py-2 text-sm font-medium transition hover:scale-105"
          style={{
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}

export { Navbar };