'use client';

export default function BackgroundSection() {
  const education = [
    {
      year: '2023 — 2024',
      school: 'Niagara College, Ontario',
      program: 'Computer Programming - data analysis focus',
      detail: 'Formal training in programming, databases, and analytics after seven years of applied research work.'
    },
    {
      year: 'Law degree',
      school: 'Universidad Externado de Colombia',
      program: 'Abogada (Law)',
      detail: 'Bogotá, Colombia. The grounding behind my work in regulation-heavy domains.'
    },
    {
      year: '2021 — 2022',
      school: 'Continuing education',
      program: 'Coursera certifications',
      detail: 'AI & Law (Lund); Digital Governance (Erasmus Rotterdam & Leeds); Legal Tech & the Digital Transformation of Law (Austral); Legal Tech & Startups (IE); International Humanitarian Law, with honors (Leiden).'
    }
  ];

  const roles = [
    {
      years: 'Oct 2024 — Aug 2026',
      org: 'PYLytics',
      title: 'Full Stack Engineer — Data & Analytics',
      detail: 'Owned the analytics layer of a physical-therapy platform end to end: gathered requirements from three distinct user groups, modelled the data, and built the dashboards for doctors, patients, and clinic admins, plus the survey design behind treatment-outcome measurement.'
    },
    {
      years: 'May 2024 — Sep 2024',
      org: 'Walker Advanced Manufacturing Innovation Centre, Niagara College — with Soil Optix',
      title: 'Data Engineer & Analyst',
      detail: 'Built Airflow pipelines and Python processing over an Elasticsearch database, and shipped the Superset dashboard tracking system reliability for a gamma-ray soil-scanning product.'
    },
    {
      years: 'Feb 2023 — May 2024',
      org: 'Xtuner SAS',
      title: 'Business & Data Analyst',
      detail: 'Translated business questions into recurring Power BI reporting: gathered requirements, modelled the data, and built the dashboards the team used to prioritise.'
    },
    {
      years: '2022',
      org: 'SISMA Mujer, Bogotá',
      title: 'Policy Analyst',
      detail: 'Analysed data on issues affecting women\'s rights in Colombia and produced reports proposing ways to improve policy effectiveness.'
    },
    {
      years: '2018 — 2021',
      org: 'ACOPI Bogotá-Cundinamarca · Cundinamarca Administrative Tribunal',
      title: 'Earlier: legal & economic research roles',
      detail: 'Research, analysis, and Excel dashboards on legislation affecting SMEs. presented to members of Congress, alongside a judicial clerkship in administrative law.'
    }
  ];

  return (
    <section id="background" style={{ maxWidth: '1180px', margin: '0 auto', padding: '96px 48px' }}>
      <span className="tag tag-outline" style={{ padding: '8px 20px', fontSize: '13px' }}>
        Education &amp; experience
      </span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', marginTop: '44px' }}>
        <div>
          <h2 style={{ fontSize: '34px', margin: '0 0 28px' }}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            {education.map((e, idx) => (
              <div key={idx} style={{ background: 'var(--color-surface)', borderRadius: 'calc(var(--radius-lg) * 1.15)', padding: '24px 26px' }}>
                <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px', color: 'var(--color-accent-2-700)' }}>
                  {e.year}
                </p>
                <h4 style={{ fontSize: '21px', margin: '0 0 6px' }}>
                  {e.school}
                </h4>
                <p style={{ fontSize: '15px', margin: '0 0 8px', color: 'var(--color-accent-700)' }}>
                  {e.program}
                </p>
                <p style={{ fontSize: '14px', lineHeight: 1.6, margin: 0, opacity: 0.8 }}>
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: '34px', margin: '0 0 28px' }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {roles.map((r, idx) => (
              <div key={idx} style={{ padding: '24px 0', borderTop: '1px solid var(--color-divider)' }}>
                <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px', color: 'var(--color-accent-2-700)' }}>
                  {r.years}
                </p>
                <h4 style={{ fontSize: '21px', margin: '0 0 4px' }}>
                  {r.title}
                </h4>
                <p style={{ fontSize: '14.5px', margin: '0 0 8px', color: 'var(--color-accent-700)' }}>
                  {r.org}
                </p>
                <p style={{ fontSize: '14px', lineHeight: 1.6, margin: 0, opacity: 0.8, maxWidth: '52ch' }}>
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
