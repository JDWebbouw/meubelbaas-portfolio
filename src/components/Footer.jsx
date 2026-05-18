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
    <footer style={{ background: '#1A1208' }} className="text-stone-300 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🪵</span>
              <span className="font-bold text-xl text-white">MeubelBaas Portfolio</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-4 max-w-sm">
              Een professionele e-commerce analyse van MeubelBaas, opgesteld als onderdeel van
              Module 6 E-commerce Analyse.
            </p>
            <div className="flex flex-wrap gap-2">
              {['E-commerce Analyse', 'Module 6', 'Shopify', 'B2C'].map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: 'rgba(139,94,60,0.3)', color: '#D4A97A' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Navigatie</h4>
            <ul className="space-y-2">
              {sections.slice(0, 7).map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(ids[i])}
                    className="text-stone-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-all"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Analyses</h4>
            <ul className="space-y-2">
              {sections.slice(7).map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(ids[i + 7])}
                    className="text-stone-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-stone-500 text-sm text-center sm:text-left">
            Gemaakt door{' '}
            <span className="font-semibold" style={{ color: '#D4A97A' }}>Jayden Bouwman</span>
            {' '}– E-commerce Specialist
          </div>

          <div className="flex items-center gap-4">
            <div className="text-stone-500 text-xs">Module 6 • Schooljaar 2025-2026</div>
            <a
              href="https://www.meubelbaas.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-stone-400 hover:text-white text-xs transition-colors"
            >
              MeubelBaas.nl
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
