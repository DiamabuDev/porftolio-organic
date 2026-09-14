'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 48px 40px', display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
      <span className="text-muted" style={{ fontSize: '13px' }}>
        © {currentYear} Diana Marcela Maldonado Burgos · Spanish (native) · English (professional)
      </span>
      <span className="text-muted" style={{ fontSize: '13px' }}>
        Built with the Organic design system
      </span>
    </footer>
  );
}
