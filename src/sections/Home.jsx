import { ArrowDown, ExternalLink } from 'lucide-react'

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(135deg, #FDFAF6 0%, #F5EDE0 50%, #EDD9C0 100%)' }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 -z-10" style={{ background: '#8B5E3C' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 -z-10" style={{ background: '#D4A97A' }} />

      {/* Decorative wood texture lines */}
      <div className="absolute inset-0 -z-10 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px"
            style={{ background: '#8B5E3C', top: `${12 + i * 12}%`, transform: `rotate(${i % 2 === 0 ? '2' : '-1'}deg)` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(139,94,60,0.12)', color: '#8B5E3C' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#8B5E3C' }} />
              Module 6 – E-commerce Analyse
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6" style={{ color: '#2D1F0E' }}>
              Jayden
              <span className="block" style={{ color: '#8B5E3C' }}>Bouwman</span>
            </h1>

            <p className="text-xl font-semibold mb-3" style={{ color: '#6B4226' }}>
              E-commerce Specialist
            </p>

            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-lg">
              In dit portfolio presenteer ik een uitgebreide e-commerce analyse van{' '}
              <strong style={{ color: '#8B5E3C' }}>MeubelBaas</strong> – een Nederlandse meubelwebshop
              gespecialiseerd in mangohouten meubels. Alle analyses, conclusies en verbeteradviezen
              worden hieronder gepresenteerd.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('kpi')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #8B5E3C, #6B4226)' }}
              >
                Bekijk KPI Dashboard
                <ArrowDown size={18} />
              </button>
              <a
                href="https://www.meubelbaas.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:bg-stone-50"
                style={{ borderColor: '#8B5E3C', color: '#8B5E3C' }}
              >
                MeubelBaas.nl
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Bedrijf', value: 'MeubelBaas', icon: '🪵' },
              { label: 'Platform', value: 'Shopify', icon: '🛒' },
              { label: 'Verkoopregio', value: 'NL & BE', icon: '🇳🇱' },
              { label: 'Businessmodel', value: 'B2C', icon: '🤝' },
              { label: 'Maandomzet', value: '€500.000', icon: '💰' },
              { label: 'Conversieratio', value: '20,8%', icon: '📈' },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-1">{card.label}</div>
                <div className="font-bold text-stone-800 text-sm">{card.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo('over')}
            className="flex flex-col items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll naar beneden</span>
            <div className="w-8 h-12 border-2 border-stone-300 rounded-full flex items-start justify-center p-1.5 group-hover:border-stone-400 transition-colors">
              <div className="w-1.5 h-3 rounded-full animate-bounce" style={{ background: '#8B5E3C' }} />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
