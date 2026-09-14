'use client';

export default function AboutSection() {
  return (
    <section id="about" style={{ maxWidth: '1180px', margin: '0 auto', padding: '88px 48px' }}>
      <p className="text-muted" style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 32px' }}>
        About me
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '72px', alignItems: 'start' }}>
        <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 50px)', lineHeight: 1.14, margin: 0 }}>
          I came to data through <span style={{ color: 'var(--color-accent-2-700)' }}>law and policy</span>, which is why I start with the question, not the query.
        </h2>
        <div>
          <p style={{ fontSize: '16.5px', lineHeight: 1.7 }}>
            Data and analytics professional with an atypical path into tech: seven years building research, dashboards, and data-driven reports for nonprofits, government, and industry before formally training as a programmer.
          </p>
          <p style={{ fontSize: '16.5px', lineHeight: 1.7 }}>
            I own projects end to end, scoping the question with stakeholders, designing how data should be collected, building and orchestrating the pipeline, modelling it for reporting, then shipping the dashboard a decision-maker actually uses.
          </p>
          <a className="btn btn-primary" id="resume" href="#resume" style={{ padding: '13px 26px', marginTop: '14px' }}>
            Download my full resume
          </a>
        </div>
      </div>
    </section>
  );
}
