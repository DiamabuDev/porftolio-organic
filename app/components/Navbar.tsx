'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-30"
      style={{
        background: 'color-mix(in srgb, var(--color-bg) 88%, transparent)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="nav" style={{ maxWidth: '1180px', margin: '0 auto', padding: '18px 48px' }}>
        <Link href="#top" className="nav-brand">
          Diana Maldonado
        </Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#work">Projects</Link>
        <Link href="#background">Background</Link>
        <Link href="#resume" className="btn btn-primary" style={{ padding: '10px 22px', color: 'var(--color-bg)' }}>
          Resume
        </Link>
      </div>
    </header>
  );
}
