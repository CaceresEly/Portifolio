const projects = [
  {
    title: 'Activity Management App',
    description:
      'Power Apps solution integrated with SharePoint, Power Automate and Power BI to manage activities, track status and monitor weekly planning.',
    stack: ['Power Apps', 'SharePoint', 'Power Automate', 'Power BI'],
  },
  {
    title: 'Invoice Generation System',
    description:
      'Business solution to generate PDF invoices using Power Apps, Power Automate and JavaScript document processing.',
    stack: ['Power Apps', 'Power Automate', 'JavaScript', 'SharePoint'],
  },
  {
    title: 'IBM Notes to SharePoint Migration',
    description:
      'Automation process for converting, organizing and migrating corporate documents from IBM Notes to SharePoint.',
    stack: ['Python', 'SharePoint', 'Power Automate'],
  },
  {
    title: 'AI Trading Automation',
    description:
      'Python-based automation project integrated with MetaTrader to process market signals and manage trading operations.',
    stack: ['Python', 'MetaTrader', 'Automation', 'AI'],
  },
];

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: 'var(--color-primary)' }}
        >
          Featured Projects
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
          Real solutions for automation, business apps and web development.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border p-8 transition hover:-translate-y-1"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p
                className="mt-4 leading-7"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProjectsSection };