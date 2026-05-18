import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Over MeubelBaas', href: '#over' },
  { label: 'Customer Journey', href: '#journey' },
  { label: 'Marktanalyse', href: '#markt' },
  { label: 'KPI Dashboard', href: '#kpi' },
  { label: 'Verkoopstrategie', href: '#verkoop' },
  { label: 'Digitale Systemen', href: '#systemen' },
  { label: 'Financieel', href: '#financieel' },
  { label: 'AVG', href: '#avg' },
  { label: 'Duurzaamheid', href: '#duurzaamheid' },
  { label: 'Verbeteradvies', href: '#advies' },
  { label: 'Conclusie', href: '#conclusie' },
  { label: 'Reflectie', href: '#reflectie' },
  { label: 'Bronnen', href: '#bronnen' },
]

const primaryNav = navItems.slice(0, 5)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navItems.map(i => i.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating pill nav */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className="flex items-center gap-1 px-2.5 py-2 rounded-full"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.70)',
            border: '1px solid rgba(232,228,222,0.8)',
            boxShadow: scrolled
              ? '0 4px 24px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.9) inset'
              : '0 2px 12px rgba(0,0,0,0.04)',
            transition: 'all 0.5s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full flex-shrink-0 transition-all duration-300"
            style={{ color: '#1A1A1A' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            <span className="font-semibold text-sm tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              MeubelBaas
            </span>
          </button>

          <div className="w-px h-4 bg-[#E8E4DE] mx-0.5 hidden md:block flex-shrink-0" />

          {/* Primary nav links — desktop only */}
          <div className="hidden md:flex items-center gap-0.5">
            {primaryNav.map(item => {
              const isActive = active === item.href.replace('#', '')
              return (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                  style={{
                    background: isActive ? '#1A1A1A' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#6B6B6B',
                    transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = '#1A1A1A' } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B6B6B' } }}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu openen"
            className="ml-1 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{ background: menuOpen ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.04)' }}
          >
            <div className="relative w-[18px] h-[12px]">
              <span className="absolute left-0 w-full h-[1.5px] rounded-full bg-[#1A1A1A] origin-center"
                style={{ top: menuOpen ? '50%' : '0', transform: menuOpen ? 'translateY(-50%) rotate(45deg)' : 'none', transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)' }} />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] rounded-full bg-[#1A1A1A]"
                style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)', transition: 'all 0.3s' }} />
              <span className="absolute left-0 w-full h-[1.5px] rounded-full bg-[#1A1A1A] origin-center"
                style={{ bottom: menuOpen ? '50%' : '0', transform: menuOpen ? 'translateY(50%) rotate(-45deg)' : 'none', transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)' }} />
            </div>
          </button>
        </nav>
      </div>

      {/* Full-screen overlay */}
      <div
        className="fixed inset-0 z-40"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.5s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(26,26,26,0.97)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          onClick={() => setMenuOpen(false)}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full py-24 overflow-y-auto">
          <div
            className="mb-10 text-center"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
              transitionDelay: menuOpen ? '50ms' : '0ms',
            }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.28em]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Navigatie
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-0.5 max-w-xl w-full px-8">
            {navItems.map((item, i) => {
              const isActive = active === item.href.replace('#', '')
              return (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-left group"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                    transition: 'all 0.45s cubic-bezier(0.32,0.72,0,1)',
                    transitionDelay: menuOpen ? `${90 + i * 28}ms` : '0ms',
                  }}
                >
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent', transition: 'background 0.2s' }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                  >
                    <span className="text-[10px] font-medium tabular-nums" style={{ color: 'rgba(255,255,255,0.2)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium" style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                      {item.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          <div
            className="mt-10"
            style={{ opacity: menuOpen ? 0.35 : 0, transition: 'opacity 0.4s', transitionDelay: menuOpen ? '520ms' : '0ms' }}
          >
            <button onClick={() => setMenuOpen(false)}
              className="text-[10px] font-medium uppercase tracking-[0.25em] transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              Klik buiten of druk ESC
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
