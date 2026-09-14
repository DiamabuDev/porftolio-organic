'use client';

export default function ProjectsSection() {
  const projects = [
    {
      tag: 'Healthcare · Product analytics',
      date: '2026',
      title: 'Dashboards three audiences could each act on',
      summary: 'Patient satisfaction, therapist performance, and clinic performance in one analytics layer, scoped separately for doctors, patients, and admins.',
      img: '📊',
      href: '#'
    },
    {
      tag: 'Survey design · Outcomes',
      date: '2025',
      title: 'Measuring whether physical therapy actually worked',
      summary: 'Designed the admission and follow-up surveys behind treatment-outcome reporting, so improvement over time could be compared reliably.',
      img: '📋',
      href: '#'
    },
    {
      tag: 'Data engineering · AgTech',
      date: '2024',
      title: 'A reliability dashboard for gamma-ray soil scanning',
      summary: 'Airflow pipelines and Elasticsearch data behind a Superset dashboard tracking endpoint health, usage, and the problem areas needing attention.',
      img: '🌾',
      href: '#'
    },
    {
      tag: 'Business intelligence',
      date: '2023',
      title: 'Power BI reporting for internal decision-making',
      summary: 'Business research turned into dashboards and recurring reports the team used to prioritise, replacing one-off spreadsheet requests.',
      img: '📈',
      href: '#'
    },
    {
      tag: 'Policy analysis',
      date: '2022',
      title: "What the data says about women's rights policy in Colombia",
      summary: 'Research and analysis for SISMA Mujer, ending in reports proposing concrete ways to make existing policy more effective.',
      img: '⚖️',
      href: '#'
    },
    {
      tag: 'Economic research',
      date: '2019',
      title: 'Tax-policy evidence taken to Congress',
      summary: 'Research reports and Excel dashboards on regulation affecting SMEs, presented to members of Congress and used in constitutional litigation.',
      img: '📑',
      href: '#'
    }
  ];

  return (
    <section id="work" style={{ maxWidth: '1180px', margin: '0 auto', padding: '104px 48px 64px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px', marginBottom: '56px' }}>
        <div>
          <p className="text-muted" style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Projects
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 3.4vw, 46px)', margin: 0 }}>
            Case studies, written out
          </h2>
        </div>
        <p className="text-muted" style={{ fontSize: '14px', margin: 0 }}>
          {projects.length} projects
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px 56px' }}>
        {projects.map((p, idx) => (
          <a
            key={idx}
            className="proj-card"
            href={p.href}
            style={{
              display: 'block',
              color: 'inherit',
              background: 'var(--color-surface)',
              borderRadius: 'calc(var(--radius-lg) * 1.15)',
              padding: '18px 18px 26px',
              marginTop: idx % 2 === 1 ? '72px' : '0px'
            }}
          >
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div
                className="proj-shot washed"
                style={{
                  aspectRatio: '16/10',
                  background: 'repeating-linear-gradient(135deg, var(--color-neutral-300) 0 9px, var(--color-neutral-200) 9px 18px)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '12px',
                  fontSize: '48px',
                  justifyContent: 'center'
                }}
              >
                {p.img}
              </div>
            </div>
            <div style={{ padding: '22px 12px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="tag tag-accent" style={{ fontSize: '11.5px' }}>
                  {p.tag}
                </span>
                <span className="text-muted" style={{ fontSize: '12px' }}>
                  {p.date}
                </span>
              </div>
              <h3 style={{ fontSize: '24px', lineHeight: 1.2, margin: '0 0 12px' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.65, margin: '0 0 16px', opacity: 0.82 }}>
                {p.summary}
              </p>
              <span className="proj-more" style={{ fontSize: '14px', color: 'var(--color-accent-700)', borderBottom: '1px solid var(--color-accent-300)', paddingBottom: '2px' }}>
                Read more
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
