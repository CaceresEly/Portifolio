import { useTheme } from '../hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-50 transition-colors duration-300 data-[theme=light]:bg-slate-50 data-[theme=light]:text-slate-950">
      <section className="text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Portfolio Setup
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Lucas Cáceres Portfolio
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          Current theme: {theme}
        </p>

        <button
          type="button"
          onClick={toggleTheme}
          className="mt-8 rounded-full border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Toggle theme
        </button>
      </section>
    </main>
  );
}

export default App;