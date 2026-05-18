export default function SectionHeader({ label, title, subtitle, dark = false }) {
  return (
    <div className="mb-14">
      {label && (
        <div
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full mb-6"
          style={
            dark
              ? { background: 'rgba(255,255,255,0.08)', color: '#FCD34D' }
              : { background: 'rgba(139,94,60,0.09)', color: '#8B5E3C' }
          }
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: dark ? '#FCD34D' : '#8B5E3C', opacity: 0.7 }}
          />
          {label}
        </div>
      )}

      <h2
        className="font-bold leading-[1.08] tracking-tight mb-4"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: dark ? '#fff' : '#1c1008',
          fontFamily: 'Syne, Plus Jakarta Sans, sans-serif',
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="leading-relaxed max-w-2xl"
          style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: dark ? 'rgba(255,255,255,0.45)' : '#78716c',
          }}
        >
          {subtitle}
        </p>
      )}

      <div className="mt-6 flex items-center gap-2">
        <div
          className="h-[2px] w-12 rounded-full"
          style={{ background: 'linear-gradient(90deg, #8B5E3C, #D4A97A)' }}
        />
        <div
          className="h-[2px] w-4 rounded-full"
          style={{ background: '#D4A97A', opacity: 0.3 }}
        />
      </div>
    </div>
  )
}
