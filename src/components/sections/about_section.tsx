function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: 'var(--color-primary)' }}
          >
            About Me
          </p>

          <h2 className="text-4xl font-bold">
            Building enterprise solutions that make people's work easier.
          </h2>

          <p
            className="mt-8 text-lg leading-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            I'm a Full Stack Developer currently working as a Power Platform
            Developer at ARLANXEO, where I build enterprise applications,
            automate business processes and integrate corporate systems used by
            international teams.
          </p>

          <p
            className="mt-6 text-lg leading-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            My daily work combines React, JavaScript, Python, SharePoint,
            Power Apps, Power Automate and Power BI to deliver scalable
            solutions focused on productivity, digital transformation and user
            experience.
          </p>

          <p
            className="mt-6 text-lg leading-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Besides Microsoft technologies, I enjoy building modern web
            applications, studying software architecture and exploring AI,
            automation and cloud technologies.
          </p>
        </div>

        <div className="grid gap-6">
          <div
            className="rounded-2xl border p-6"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h3 className="text-xl font-semibold">
              💼 Experience
            </h3>

            <p
              className="mt-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Power Platform Developer at ARLANXEO developing enterprise
              solutions for international teams.
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h3 className="text-xl font-semibold">
              🚀 Main Technologies
            </h3>

            <p
              className="mt-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              React • TypeScript • Power Apps • Power Automate •
              SharePoint • Python • Node.js • Power BI
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h3 className="text-xl font-semibold">
              🌎 Languages
            </h3>

            <p
              className="mt-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Portuguese (Native)
              <br />
              English (Advanced)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };