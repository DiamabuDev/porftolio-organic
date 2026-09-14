'use client';

export default function HeroSection() {
  return (
    <section id="top" style={{ maxWidth: '100%', margin: '0 auto', padding: '76px 32px 96px', position: 'relative' }}>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '48px', alignItems: 'center' }}>
        <div>
          <p className="text-muted" style={{ fontSize: '16px', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 22px' }}>
            Data &amp; Analytics Portfolio
          </p>
          <h1 style={{ fontSize: 'clamp(46px, 5.4vw, 78px)', lineHeight: 1.04, margin: '0 0 26px' }}>
            Hi, I am <span style={{ color: 'var(--color-accent)' }}>Diana Maldonado</span>
          </h1>
          <p style={{ fontSize: '19px', lineHeight: 1.6, maxWidth: '44ch', margin: '0 0 34px' }}>
            I work across the whole path from raw data to decision-making. Pipelines, models, dashboards, and the analysis behind them.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a className="btn btn-primary" href="#work" style={{ padding: '13px 26px' }}>
              See my projects
            </a>
            <a className="btn btn-secondary" href="#resume" style={{ padding: '13px 26px' }}>
              Download resume
            </a>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '34px', flexWrap: 'wrap' }}>
            <a className="tag tag-neutral" href="mailto:diana.maldonado130@gmail.com" style={{ padding: '7px 16px', fontSize: '12px' }}>
              diana.maldonado130@gmail.com
            </a>
            <a className="tag tag-neutral" href="https://linkedin.com/in/dianamaldonado" style={{ padding: '7px 16px', fontSize: '12px' }}>
              LinkedIn
            </a>
            <a className="tag tag-neutral" href="#top" style={{ padding: '7px 16px', fontSize: '12px' }}>
              Bogotá · Niagara, ON
            </a>
          </div>
        </div>
        <div style={{ position: 'relative', borderRadius: '0 0 50% 50% / 0 0 42% 42%', overflow: 'hidden', width: '100%' }}>
          <div style={{ aspectRatio: '1', backgroundColor: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '48px' }}>👤</span>
          </div>
        </div>
      </div>
    </section>
  );
}
