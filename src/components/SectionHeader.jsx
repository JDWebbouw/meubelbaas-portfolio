export default function SectionHeader({ label, title, subtitle, dark = false }) {
  return (
    <div className="mb-14">
      {label && (
        <p
          className="mb-5"
          style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: dark ? 'rgba(255,255,255,0.35)' : '#6B6B6B',
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
          }}
        >
          {label}
        </p>
      )}

      <h2
        className="font-bold leading-[1.08] mb-4"
        style={{
          fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
          color: dark ? '#FFFFFF' : '#1A1A1A',
          fontFamily: 'Playfair Display, Georgia, serif',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="leading-relaxed max-w-2xl"
          style={{
            fontSize: 'clamp(0.925rem, 1.4vw, 1.025rem)',
            color: dark ? 'rgba(255,255,255,0.4)' : '#6B6B6B',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {subtitle}
        </p>
      )}

      <div className="mt-6 flex items-center gap-2">
        <div
          className="h-[1.5px] w-10"
          style={{ background: dark ? 'rgba(255,255,255,0.25)' : '#1A1A1A' }}
        />
        <div
          className="h-[1.5px] w-4"
          style={{ background: dark ? 'rgba(255,255,255,0.1)' : '#1A1A1A', opacity: 0.25 }}
        />
      </div>
    </div>
  )
}
