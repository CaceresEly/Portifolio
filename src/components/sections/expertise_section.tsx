import { useTranslation } from 'react-i18next';

function ExpertiseSection() {
  const { t } = useTranslation();

  const expertiseGroups = [
    {
      title: t('expertise.enterpriseTitle'),
      description: t('expertise.enterpriseDescription'),
      skills: [
        'Power Apps',
        'Power Automate',
        'SharePoint',
        'Power BI',
        'Copilot Studio',
      ],
    },
    {
      title: t('expertise.fullStackTitle'),
      description: t('expertise.fullStackDescription'),
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'REST APIs',
        'HTML',
        'CSS',
      ],
    },
    {
      title: t('expertise.automationTitle'),
      description: t('expertise.automationDescription'),
      skills: [
        'Python',
        'AI Agents',
        'n8n',
        'Document Processing',
        'IBM Notes Migration',
      ],
    },
    {
      title: t('expertise.toolsTitle'),
      description: t('expertise.toolsDescription'),
      skills: ['Git', 'Azure', 'MySQL', 'PostgreSQL', 'Next.js', 'Vue'],
    },
  ];

  return (
    <section
      id="skills"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: 'var(--color-primary)' }}
        >
          {t('expertise.eyebrow')}
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
          {t('expertise.title')}
        </h2>

        <p
          className="mt-6 max-w-3xl text-lg leading-8"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {t('expertise.description')}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {expertiseGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border p-8 transition hover:-translate-y-1"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="text-2xl font-bold">{group.title}</h3>

              <p
                className="mt-4 leading-7"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {skill}
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

export { ExpertiseSection };