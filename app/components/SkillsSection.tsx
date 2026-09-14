'use client';

export default function SkillsSection() {
  const skillGroups = [
    {
      title: 'Languages & data engineering',
      items: ['Python, SQL', 'Apache Airflow (pipeline orchestration, production DAGs)', 'Data cleaning & normalization', 'Data modeling & pipeline architecture', 'Git/GitLab (version control, code review & documentation)']
    },
    {
      title: 'Databases & data analytics',
      items: ['Snowflake, PostgreSQL, DuckDB', 'Schema design, query optimization & performance', 'Metrics & KPI definition', 'Requirements gathering & stakeholder reporting', 'Survey & instrument design']
    },
    {
      title: 'Business intelligence & visualization',
      items: ['Power BI', 'Tableau', 'Apache Superset', 'Streamlit', 'Full-stack dashboard development']
    },
    {
      title: 'AI & research',
      items: ['LLM applications (RAG, prompt engineering)', 'OpenAI, Anthropic, LangChain', 'Elasticsearch (search & indexing)', 'Healthcare analytics & patient outcomes', 'Policy, regulatory & economic research']
    }
  ];

  return (
    <section id="skills" style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', maxWidth: '100%', margin: '0 auto', padding: '64px 32px' }}>
      <span className="tag tag-outline" style={{ padding: '8px 20px', fontSize: '13px' }}>
        Technical skills
      </span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '44px 40px', marginTop: '40px' }}>
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h3 style={{ fontSize: '22px', margin: '0 0 18px', color: 'var(--color-accent-700)' }}>
              {group.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px' }}>
              {group.items.map((item, itemIdx) => (
                <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '8px', height: '8px', flex: 'none', borderRadius: '999px', background: 'var(--color-accent-2-500)' }}></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
