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

  // Lock body scroll when menu is open
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
          className="flex items-center gap-1 px-2.5 py-2 rounded-full transition-all duration-700"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: scrolled ? 'rgba(253,250,246,0.88)' : 'rgba(253,250,246,0.55)',
            border: scrolled ? '1px solid rgba(139,94,60,0.15)' : '1px solid rgba(255,255,255,0.6)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(45,31,14,0.10), 0 1px 0 rgba(255,255,255,0.8) inset'
              : '0 2px 16px rgba(45,31,14,0.05), 0 1px 0 rgba(255,255,255,0.6) inset',
            transition: 'all 0.7s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-stone-100/70 flex-shrink-0"
          >
            <span className="text-base leading-none">🪵</span>
            <span
              className="font-bold text-sm tracking-tight leading-none"
              style={{ color: '#8B5E3C', fontFamily: 'Syne, sans-serif' }}
            >
              MeubelBaas
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-stone-200 mx-0.5 hidden md:block flex-shrink-0" />

          {/* Primary nav links — desktop only */}
          <div className="hidden md:flex items-center gap-0.5">
            {primaryNav.map(item => {
              const isActive = active === item.href.replace('#', '')
              return (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #8B5E3C, #6B4226)' : 'transparent',
                    color: isActive ? '#fff' : '#57534e',
                    boxShadow: isActive ? '0 2px 8px rgba(139,94,60,0.35)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(120,90,60,0.08)' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Hamburger / close button */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu openen"
            className="ml-1 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{ background: menuOpen ? 'rgba(139,94,60,0.15)' : 'rgba(120,90,60,0.07)' }}
          >
            <div className="relative w-[18px] h-[12px]">
              <span
                className="absolute left-0 w-full h-[1.5px] rounded-full bg-stone-700 origin-center transition-all duration-400"
                style={{
                  top: menuOpen ? '50%' : '0',
                  transform: menuOpen ? 'translateY(-50%) rotate(45deg)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                }}
              />
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] rounded-full bg-stone-700 transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)' }}
              />
              <span
                className="absolute left-0 w-full h-[1.5px] rounded-full bg-stone-700 origin-center transition-all duration-400"
                style={{
                  bottom: menuOpen ? '50%' : '0',
                  transform: menuOpen ? 'translateY(50%) rotate(-45deg)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                }}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Full-screen overlay menu */}
      <div
        className="fixed inset-0 z-40"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.6s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(26,18,8,0.93)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
          }}
          onClick={() => setMenuOpen(false)}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full py-24 overflow-y-auto">
          {/* Brand */}
          <div
            className="mb-10 text-center"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.5s cubic-bezier(0.32,0.72,0,1)',
              transitionDelay: menuOpen ? '60ms' : '0ms',
            }}
          >
            <span className="text-2xl">🪵</span>
            <p className="text-stone-500 text-[10px] font-bold mt-1.5 uppercase tracking-[0.25em]">Navigatie</p>
          </div>

          {/* Nav grid */}
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
                    transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s cubic-bezier(0.32,0.72,0,1)',
                    transitionDelay: menuOpen ? `${100 + i * 32}ms` : '0ms',
                  }}
                >
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                    style={{ background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent' }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                  >
                    <span
                      className="text-[10px] font-bold tabular-nums"
                      style={{ color: isActive ? '#FCD34D' : 'rgba(255,255,255,0.2)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-semibold text-sm transition-colors duration-200"
                      style={{
                        color: isActive ? '#FCD34D' : 'rgba(255,255,255,0.55)',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Close hint */}
          <div
            className="mt-10"
            style={{
              opacity: menuOpen ? 0.4 : 0,
              transition: 'opacity 0.4s',
              transitionDelay: menuOpen ? '560ms' : '0ms',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.25em] hover:text-stone-200 transition-colors"
            >
              Klik buiten of druk ESC
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
