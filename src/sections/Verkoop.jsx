import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { CheckCircle } from 'lucide-react'

const tactics = [
  {
    icon: '🧪',
    title: 'A/B-testing',
    desc: 'Test productpagina-elementen zoals CTA-knoppen, productfoto\'s en beschrijvingsteksten om de conversieratio verder te verhogen.',
    impact: 'Hoog',
    effort: 'Middel',
    color: '#3B82F6',
  },
  {
    icon: '💲',
    title: 'Prijspsychologie',
    desc: 'Gebruik prijzen als €999 i.p.v. €1.000 en toon de oorspronkelijke prijs naast de verkoopprijs om de perceptie te verbeteren.',
    impact: 'Middel',
    effort: 'Laag',
    color: '#10B981',
  },
  {
    icon: '📧',
    title: 'E-mailmarketing',
    desc: 'Implementeer geautomatiseerde e-mailflows: welkomstmail, verlaten winkelwagen, en heractivatiecampagne.',
    impact: 'Hoog',
    effort: 'Middel',
    color: '#8B5E3C',
  },
  {
    icon: '🎯',
    title: 'Retargeting',
    desc: 'Zet Google Ads retargeting in voor bezoekers die de website hebben verlaten zonder te kopen.',
    impact: 'Hoog',
    effort: 'Laag',
    color: '#F59E0B',
  },
  {
    icon: '⭐',
    title: 'Social proof',
    desc: 'Voeg meer klantreviews, beoordelingen en foto\'s van klanten toe aan productpagina\'s.',
    impact: 'Middel',
    effort: 'Laag',
    color: '#8B5CF6',
  },
  {
    icon: '📱',
    title: 'Mobiele optimalisatie',
    desc: 'Verbeter de mobiele checkout-ervaring en paginasnelheid voor smartphones en tablets.',
    impact: 'Hoog',
    effort: 'Hoog',
    color: '#EF4444',
  },
]

const funnel = [
  { label: 'Bezoekers', value: 4000, pct: 100 },
  { label: 'Productpagina\'s', value: 2800, pct: 70 },
  { label: 'Winkelwagen', value: 1200, pct: 30 },
  { label: 'Checkout', value: 950, pct: 24 },
  { label: 'Aankoop', value: 833, pct: 20.8 },
]

const impactColor = { Hoog: 'bg-green-100 text-green-700', Middel: 'bg-amber-100 text-amber-700', Laag: 'bg-stone-100 text-stone-600' }
const effortColor = { Hoog: 'bg-red-100 text-red-600', Middel: 'bg-yellow-100 text-yellow-700', Laag: 'bg-green-100 text-green-700' }

export default function Verkoop() {
  return (
    <SectionWrapper id="verkoop">
      <SectionHeader
        label="Strategie"
        title="Verkoopstrategie & Conversieoptimalisatie"
        subtitle="Concrete tactieken om de conversieratio verder te verbeteren en de gemiddelde orderwaarde te verhogen."
      />

      {/* Conversion funnel */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-8">
        <h3 className="font-bold text-stone-800 mb-6 text-lg">Conversiefunnel</h3>
        <div className="space-y-3">
          {funnel.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-stone-600 text-right">{step.label}</div>
              <div className="flex-1 bg-stone-100 rounded-full h-10 relative overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-4 transition-all duration-700"
                  style={{
                    width: `${step.pct}%`,
                    background: `linear-gradient(90deg, #D4A97A, #8B5E3C)`,
                    opacity: 1 - i * 0.12,
                  }}
                >
                  <span className="text-white text-xs font-bold">{step.pct}%</span>
                </div>
              </div>
              <div className="w-16 text-sm font-bold text-stone-700 text-right">
                {step.value.toLocaleString('nl-NL')}
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-xs mt-4">
          * Huidige conversieratio: 20,8% — significant hoger dan het branchegemiddelde van 2-4%.
        </p>
      </div>

      {/* Tactics grid */}
      <h3 className="font-bold text-stone-800 text-lg mb-5">Optimalisatietactieken</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {tactics.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
              style={{ background: t.color + '15' }}
            >
              {t.icon}
            </div>
            <h4 className="font-bold text-stone-800 mb-2">{t.title}</h4>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">{t.desc}</p>
            <div className="flex gap-2">
              <span className={`text-xs px-2 py-1 rounded-lg font-semibold ${impactColor[t.impact]}`}>
                Impact: {t.impact}
              </span>
              <span className={`text-xs px-2 py-1 rounded-lg font-semibold ${effortColor[t.effort]}`}>
                Moeite: {t.effort}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Prijspsychologie detail */}
      <div
        className="rounded-2xl p-6"
        style={{ background: 'linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)' }}
      >
        <h3 className="font-bold text-white text-lg mb-4">💡 Prijspsychologie in de praktijk</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { before: '€1.000', after: '€999', tip: 'Charme pricing: net onder de €1.000-grens' },
            { before: '€750', after: '€699', tip: 'Drempelprijs vermijden voor hogere conversie' },
            { before: 'Standaard', after: 'Meest gekozen', tip: 'Anchoring: highlight het middenproduct' },
          ].map((p, i) => (
            <div key={i} className="bg-white/15 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white/60 line-through text-sm">{p.before}</span>
                <span className="text-amber-300 font-bold">{p.after}</span>
              </div>
              <p className="text-amber-100 text-xs">{p.tip}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-start gap-2">
          <CheckCircle size={16} className="text-amber-300 mt-0.5 flex-shrink-0" />
          <p className="text-amber-100 text-sm">
            Prijspsychologie kan de conversieratio met 5-15% verhogen zonder de productmarge aan te tasten.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
