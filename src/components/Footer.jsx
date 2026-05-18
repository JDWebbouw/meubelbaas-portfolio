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
    <footer className="relative" style={{ background: '#1A1208' }}>
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(139,94,60,0.5) 25%, rgba(212,169,122,0.7) 50%, rgba(139,94,60,0.5) 75%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-xl">🪵</span>
              <span
                className="font-bold text-lg text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                MeubelBaas Portfolio
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-sm">
              Een professionele e-commerce analyse van MeubelBaas, opgesteld als onderdeel van
              Module 6 E-commerce Analyse.
            </p>
            <div className="flex flex-wrap gap-2">
              {['E-commerce Analyse', 'Module 6', 'Shopify', 'B2C'].map(tag => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1.5 rounded-full font-semibold"
                  style={{ background: 'rgba(139,94,60,0.22)', color: '#D4A97A' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Nav column 1 */}
          <div>
            <h4
              className="font-bold text-stone-400 mb-5 text-[10px] uppercase tracking-[0.22em]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Navigatie
            </h4>
            <ul className="space-y-2.5">
              {sections.slice(0, 7).map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(ids[i])}
                    className="text-stone-500 hover:text-stone-200 text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)' }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav column 2 */}
          <div>
            <h4
              className="font-bold text-stone-400 mb-5 text-[10px] uppercase tracking-[0.22em]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Analyses
            </h4>
            <ul className="space-y-2.5">
              {sections.slice(7).map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(ids[i + 7])}
                    className="text-stone-500 hover:text-stone-200 text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)' }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="text-stone-600 text-sm text-center sm:text-left">
            Gemaakt door{' '}
            <span className="font-semibold" style={{ color: '#D4A97A' }}>Jayden Bouwman</span>
            {' '}– E-commerce Specialist
          </div>

          <div className="flex items-center gap-5">
            <span className="text-stone-700 text-xs">Module 6 · Schooljaar 2025-2026</span>
            <a
              href="https://www.meubelbaas.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-stone-500 hover:text-stone-300 text-xs font-medium transition-all duration-300"
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
