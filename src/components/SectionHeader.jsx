export default function SectionHeader({ label, title, subtitle, dark = false }) {
  return (
    <div className="mb-12">
      {label && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          style={dark
            ? { background: 'rgba(139,94,60,0.4)', color: '#D4A97A' }
            : { background: '#F5EDE0', color: '#8B5E3C' }}
        >
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold mb-3 leading-tight ${dark ? 'text-white' : 'text-stone-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${dark ? 'text-stone-400' : 'text-stone-500'}`}>{subtitle}</p>
      )}
      <div className="mt-4 w-16 h-1 rounded-full" style={{ background: '#8B5E3C' }} />
    </div>
  )
}
