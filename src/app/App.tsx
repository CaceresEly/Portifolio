import { Navbar } from '../components/layout/navbar';

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center px-6"
        >
          <div
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
              Navbar, theme system and portfolio layout foundation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;