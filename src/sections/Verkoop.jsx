import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { CheckCircle } from 'lucide-react'

const tactics = [
  {
    title: 'A/B-testing',
    desc: 'Test productpagina-elementen zoals CTA-knoppen, productfoto\'s en beschrijvingsteksten om de conversieratio verder te verhogen.',
    impact: 'Hoog',
    effort: 'Middel',
    color: '#3B82F6',
  },
  {
    title: 'Prijspsychologie',
    desc: 'Gebruik prijzen als €999 i.p.v. €1.000 en toon de oorspronkelijke prijs naast de verkoopprijs om de perceptie te verbeteren.',
    impact: 'Middel',
    effort: 'Laag',
    color: '#10B981',
  },
  {
    title: 'E-mailmarketing',
    desc: 'Implementeer geautomatiseerde e-mailflows: welkomstmail, verlaten winkelwagen, en heractivatiecampagne.',
    impact: 'Hoog',
    effort: 'Middel',
    color: '#6366F1',
  },
  {
    title: 'Retargeting',
    desc: 'Zet Google Ads retargeting in voor bezoekers die de website hebben verlaten zonder te kopen.',
    impact: 'Hoog',
    effort: 'Laag',
    color: '#F59E0B',
  },
  {
    title: 'Social proof',
    desc: 'Voeg meer klantreviews, beoordelingen en foto\'s van klanten toe aan productpagina\'s.',
    impact: 'Middel',
    effort: 'Laag',
    color: '#8B5CF6',
  },
  {
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

const impactColor = {
  Hoog: { bg: '#F0FDF4', color: '#16A34A' },
  Middel: { bg: '#FFFBEB', color: '#D97706' },
  Laag: { bg: '#F7F5F2', color: '#6B6B6B' },
}
const effortColor = {
  Hoog: { bg: '#FEF2F2', color: '#DC2626' },
  Middel: { bg: '#FFFBEB', color: '#D97706' },
  Laag: { bg: '#F0FDF4', color: '#16A34A' },
}

export default function Verkoop() {
  return (
    <SectionWrapper id="verkoop">
      <SectionHeader
        label="Strategie"
        title="Verkoopstrategie & Conversieoptimalisatie"
        subtitle="Concrete tactieken om de conversieratio verder te verbeteren en de gemiddelde orderwaarde te verhogen."
      />

      <div className="bg-white rounded-lg p-6 mb-8" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <h3 className="font-semibold mb-6" style={{ color: '#1A1A1A' }}>Conversiefunnel</h3>
        <div className="space-y-3">
          {funnel.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-right" style={{ color: '#6B6B6B' }}>{step.label}</div>
              <div className="flex-1 rounded-full h-9 relative overflow-hidden" style={{ background: '#F3F4F6' }}>
                <div
                  className="h-full rounded-full flex items-center justify-end pr-3"
                  style={{
                    width: `${step.pct}%`,
                    background: '#1A1A1A',
                    opacity: 0.85 - i * 0.12,
                    transition: 'width 0.7s ease',
                  }}
                >
                  <span className="text-white text-xs font-semibold">{step.pct}%</span>
                </div>
              </div>
              <div className="w-16 text-sm font-semibold text-right" style={{ color: '#1A1A1A' }}>
                {step.value.toLocaleString('nl-NL')}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs mt-4" style={{ color: '#9CA3AF' }}>
          * Huidige conversieratio: 20,8% — significant hoger dan het branchegemiddelde van 2-4%.
        </p>
      </div>

      <h3 className="font-semibold text-lg mb-5" style={{ color: '#1A1A1A' }}>Optimalisatietactieken</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {tactics.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-5"
            style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <div className="w-1 h-8 rounded-full mb-4" style={{ background: t.color }} />
            <h4 className="font-semibold mb-2" style={{ color: '#1A1A1A' }}>{t.title}</h4>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>{t.desc}</p>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 rounded font-medium" style={{ background: impactColor[t.impact].bg, color: impactColor[t.impact].color }}>
                Impact: {t.impact}
              </span>
              <span className="text-xs px-2 py-1 rounded font-medium" style={{ background: effortColor[t.effort].bg, color: effortColor[t.effort].color }}>
                Moeite: {t.effort}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing block — left-border style */}
      <div
        className="rounded-lg p-6"
        style={{ background: '#F7F5F2', borderLeft: '3px solid #1A1A1A' }}
      >
        <h3 className="font-semibold text-lg mb-4" style={{ color: '#1A1A1A' }}>Prijspsychologie in de praktijk</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { before: '€1.000', after: '€999', tip: 'Charme pricing: net onder de €1.000-grens' },
            { before: '€750', after: '€699', tip: 'Drempelprijs vermijden voor hogere conversie' },
            { before: 'Standaard', after: 'Meest gekozen', tip: 'Anchoring: highlight het middenproduct' },
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-lg p-4" style={{ border: '1px solid #E8E4DE' }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm line-through" style={{ color: '#9CA3AF' }}>{p.before}</span>
                <span className="font-semibold text-sm" style={{ color: '#1A1A1A' }}>{p.after}</span>
              </div>
              <p className="text-xs" style={{ color: '#6B6B6B' }}>{p.tip}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-start gap-2">
          <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
          <p className="text-sm" style={{ color: '#6B6B6B' }}>
            Prijspsychologie kan de conversieratio met 5-15% verhogen zonder de productmarge aan te tasten.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
