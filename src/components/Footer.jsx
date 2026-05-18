import { ExternalLink } from 'lucide-react'

const sections = [
  'Home', 'Over MeubelBaas', 'Customer Journey', 'Marktanalyse',
  'KPI Dashboard', 'Verkoopstrategie', 'Digitale Systemen', 'Financieel',
  'AVG', 'Duurzaamheid', 'Verbeteradvies', 'Conclusie', 'Reflectie', 'Bronnen',
]

const ids = [
  'home', 'over', 'journey', 'markt', 'kpi', 'verkoop',
  'systemen', 'financieel', 'avg', 'duurzaamheid', 'advies', 'conclusie', 'reflectie', 'bronnen',
]

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative" style={{ background: '#1A1A1A' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-2">
            <p
              className="font-semibold text-base text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              MeubelBaas Portfolio
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: '#9CA3AF' }}>
              Een professionele e-commerce analyse van MeubelBaas, opgesteld als onderdeel van
              Module 6 E-commerce Analyse.
            </p>
            <div className="flex flex-wrap gap-2">
              {['E-commerce Analyse', 'Module 6', 'Shopify', 'B2C'].map(tag => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1.5 rounded-full font-medium"
                  style={{ background: 'rgba(255,255,255,0.07)', color: '#9CA3AF' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="font-medium mb-5 text-[10px] uppercase tracking-[0.22em]"
              style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}
            >
              Navigatie
            </h4>
            <ul className="space-y-2.5">
              {sections.slice(0, 7).map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(ids[i])}
                    className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: '#9CA3AF', transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#9CA3AF' }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-medium mb-5 text-[10px] uppercase tracking-[0.22em]"
              style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}
            >
              Analyses
            </h4>
            <ul className="space-y-2.5">
              {sections.slice(7).map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(ids[i + 7])}
                    className="text-sm inline-block transition-all duration-300 hover:translate-x-1"
                    style={{ color: '#9CA3AF', transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#9CA3AF' }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="text-sm text-center sm:text-left" style={{ color: '#6B7280' }}>
            Gemaakt door{' '}
            <span className="font-medium text-white">Jayden Bouwman</span>
            {' '}— E-commerce Specialist
          </div>

          <div className="flex items-center gap-5">
            <span className="text-xs" style={{ color: '#4B5563' }}>Module 6 · Schooljaar 2025-2026</span>
            <a
              href="https://www.meubelbaas.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-300"
              style={{ color: '#9CA3AF' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9CA3AF' }}
            >
              MeubelBaas.nl
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
