'use client';

export default function CTASection() {
  return (
    <section style={{ maxWidth: '100%', margin: '0 auto 96px', padding: '0 32px' }}>
      <div style={{ background: 'var(--color-accent-2-200)', borderRadius: 'calc(var(--radius-lg) * 1.6)', padding: '72px 64px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>
        <h2 style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', lineHeight: 1.14, margin: 0 }}>
          Have a question sitting in a spreadsheet somewhere?
        </h2>
        <div>
          <p style={{ fontSize: '16.5px', lineHeight: 1.65, margin: '0 0 24px' }}>
            Open to data analyst, business analyst, data engineer, and analytics engineer roles in Canada and remote. Tell me what you're trying to decide.
          </p>
          <a className="btn btn-primary" href="mailto:diana.maldonado130@gmail.com" style={{ padding: '14px 28px' }}>
            diana.maldonado130@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
