import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map(i => i.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2 font-bold text-lg"
              style={{ color: '#8B5E3C' }}
            >
              <span className="text-2xl">🪵</span>
              <span>MeubelBaas</span>
              <span className="text-xs font-normal ml-1 px-2 py-0.5 rounded-full text-white" style={{ background: '#8B5E3C' }}>
                Portfolio
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 8).map(item => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === item.href.replace('#', '')
                      ? 'text-white'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                  style={active === item.href.replace('#', '') ? { background: '#8B5E3C' } : {}}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setMenuOpen(true)}
                className="ml-2 px-3 py-1.5 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-100 transition-all"
              >
                Meer ▾
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / full menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-stone-100">
              <span className="font-bold" style={{ color: '#8B5E3C' }}>Navigatie</span>
              <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-stone-100 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                    active === item.href.replace('#', '')
                      ? 'text-white'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                  style={active === item.href.replace('#', '') ? { background: '#8B5E3C' } : {}}
                >
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border border-current opacity-50">
                    {i + 1}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
