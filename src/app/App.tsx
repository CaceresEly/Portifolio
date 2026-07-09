import { useTheme } from '../hooks/use_theme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <section
        className="rounded-3xl border p-12 text-center shadow-xl"
        style={{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <p
          className="mb-4 text-sm tracking-[0.3em]"
          style={{ color: 'var(--color-primary)' }}
        >
          PORTFOLIO SETUP
        </p>

        <h1 className="text-5xl font-bold">
          Lucas Cáceres Portfolio
        </h1>

        <p
          className="mt-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          React • TypeScript • Tailwind CSS
        </p>

        <button
          onClick={toggleTheme}
          className="mt-10 rounded-full border px-6 py-3 transition hover:scale-105"
          style={{
            borderColor: 'var(--color-primary)',
            color: 'var(--color-primary)',
          }}
        >
          {theme === 'dark'
            ? '🌙 Dark Mode'
            : '☀️ Light Mode'}
        </button>
      </section>
    </main>
  );
}

export default App;