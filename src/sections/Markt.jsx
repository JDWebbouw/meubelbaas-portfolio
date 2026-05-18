import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'

const swotData = {
  strengths: [
    'Groot online assortiment mangohouten meubels',
    '7 dagen per week bereikbaar',
    'Zowel fysieke winkel als outlet in Apeldoorn',
    'Hoge conversieratio van 20,8%',
    'Actief op Google Ads',
    'Shopify als stabiel e-commerceplatform',
  ],
  weaknesses: [
    'Hoge transportschade als veelvoorkomende klacht',
    'Beperkte e-mailmarketing inzet',
    'Geen retargetingstrategie',
    'Beperkte organische vindbaarheid (SEO)',
    'Weinig zichtbare klantreviews',
  ],
  opportunities: [
    'Groeiende vraag naar duurzame meubels',
    'Uitbreiding naar andere productcategorieën',
    'Sterkere inzet op social commerce',
    'Loyaliteitsprogramma implementeren',
    'Betere duurzaamheidscommunicatie als USP',
  ],
  threats: [
    'Sterke concurrentie van HUUS, GOOS en Meubella',
    'Stijgende transportkosten',
    'Prijsgevoeligheid in de meubelsector',
    'Economische onzekerheid bij consumenten',
    'Toenemende privacyregelgeving (AVG)',
  ],
}

const competitors = [
  { name: 'MeubelBaas', assortiment: 85, online: 80, duurzaam: 65, prijs: 70, service: 80, color: '#8B5E3C' },
  { name: 'HUUS', assortiment: 90, online: 85, duurzaam: 75, prijs: 60, service: 75, color: '#3B82F6' },
  { name: 'GOOS', assortiment: 75, online: 70, duurzaam: 80, prijs: 75, service: 70, color: '#10B981' },
  { name: 'Meubella', assortiment: 80, online: 75, duurzaam: 60, prijs: 80, service: 72, color: '#F59E0B' },
]

const swotConfig = [
  { key: 'strengths', label: 'Sterktes', color: '#10B981', bg: '#ECFDF5', icon: '💪' },
  { key: 'weaknesses', label: 'Zwaktes', color: '#EF4444', bg: '#FEF2F2', icon: '⚠️' },
  { key: 'opportunities', label: 'Kansen', color: '#3B82F6', bg: '#EFF6FF', icon: '🚀' },
  { key: 'threats', label: 'Bedreigingen', color: '#F59E0B', bg: '#FFFBEB', icon: '⚡' },
]

export default function Markt() {
  return (
    <SectionWrapper id="markt">
      <SectionHeader
        label="Marktanalyse"
        title="Markt- en Concurrentieanalyse"
        subtitle="SWOT-analyse van MeubelBaas en een vergelijking met de belangrijkste concurrenten in de Nederlandse meubelsector."
      />

      {/* SWOT */}
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {swotConfig.map(({ key, label, color, bg, icon }) => (
          <div
            key={key}
            className="rounded-2xl p-6 border"
            style={{ background: bg, borderColor: color + '30' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{icon}</span>
              <h3 className="font-bold text-lg" style={{ color }}>{label}</h3>
            </div>
            <ul className="space-y-2">
              {swotData[key].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Concurrentievergelijking */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
        <h3 className="font-bold text-stone-800 text-lg mb-6">Concurrentievergelijking</h3>

        <div className="space-y-6">
          {['assortiment', 'online', 'duurzaam', 'prijs', 'service'].map(metric => (
            <div key={metric}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-stone-600 capitalize">
                  {metric === 'online' ? 'Online aanwezigheid' :
                   metric === 'duurzaam' ? 'Duurzaamheid' :
                   metric === 'prijs' ? 'Prijsniveau' :
                   metric === 'service' ? 'Klantenservice' : 'Assortiment'}
                </span>
              </div>
              <div className="space-y-2">
                {competitors.map(comp => (
                  <div key={comp.name} className="flex items-center gap-3">
                    <span className="text-xs font-medium w-24 text-stone-500">{comp.name}</span>
                    <div className="flex-1 bg-stone-100 rounded-full h-4 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${comp[metric]}%`,
                          background: comp.color,
                        }}
                      />
                    </div>
                    <span className="text-xs font-bold w-8 text-right" style={{ color: comp.color }}>
                      {comp[metric]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-stone-100">
          {competitors.map(comp => (
            <div key={comp.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: comp.color }} />
              <span className="text-xs font-medium text-stone-600">{comp.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusie marktanalyse */}
      <div
        className="mt-6 rounded-2xl p-6"
        style={{ background: 'linear-gradient(135deg, #F5EDE0, #EDD9C0)' }}
      >
        <h4 className="font-bold text-stone-800 mb-2">Conclusie marktpositie</h4>
        <p className="text-stone-600 text-sm leading-relaxed">
          MeubelBaas heeft een sterke marktpositie dankzij de combinatie van online webshop en fysieke
          winkellocaties. De hoge conversieratio (20,8%) is een significante sterktes ten opzichte van
          de concurrentie. Verbeterpotentieel ligt met name in duurzaamheidscommunicatie en digitale
          marketing om HUUS en GOOS voor te blijven.
        </p>
      </div>
    </SectionWrapper>
  )
}
