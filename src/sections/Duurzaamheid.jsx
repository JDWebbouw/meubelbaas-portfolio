import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { Leaf, CheckCircle } from 'lucide-react'

const huidig = [
  { item: 'Materiaalrecycling', status: 'actief', detail: 'MeubelBaas recyclet gebruikte materialen en verpakkingen.' },
  { item: 'Duurzame verpakkingen', status: 'actief', detail: 'Gerecycled verpakkingsmateriaal wordt toegepast.' },
  { item: 'Mangohout herkomst', status: 'deels', detail: 'Mangohout is een bijproduct van mangoteelt; relatief duurzaam.' },
  { item: 'CO₂-compensatie', status: 'onbekend', detail: 'Geen zichtbare compensatieregeling voor transportuitstoot.' },
  { item: 'Duurzaamheidslabel', status: 'onbekend', detail: 'Geen erkend duurzaamheidskeurmerk zichtbaar (bijv. FSC).' },
  { item: 'Communicatie op website', status: 'deels', detail: 'Duurzaamheidsinformatie is aanwezig maar niet prominent zichtbaar.' },
]

const verbeterpunten = [
  { icon: '🌱', title: 'FSC-keurmerk', desc: 'Vraag een FSC-certificering aan voor het gebruikte hout om duurzaamheid aantoonbaar te maken.' },
  { icon: '🚛', title: 'CO₂-neutraal transport', desc: 'Compenseer de transportuitstoot via een erkend compensatieprogramma.' },
  { icon: '📣', title: 'Duurzaamheidspagina', desc: 'Maak een aparte pagina op de website over de duurzaamheidsaanpak van MeubelBaas.' },
  { icon: '♻️', title: 'Circulaire economie', desc: 'Introduzeer een inruilprogramma voor oude meubels als grondstof voor nieuwe productie.' },
  { icon: '📦', title: 'Zero-waste verpakking', desc: 'Streef naar volledig plastic vrije verpakkingen uiterlijk 2026.' },
  { icon: '🤝', title: 'MVO rapportage', desc: 'Publiceer jaarlijks een MVO-rapport over milieu- en sociale impact.' },
]

const sdgs = [
  { nr: 12, label: 'Verantwoorde consumptie', color: '#BF8B2E' },
  { nr: 13, label: 'Klimaatactie', color: '#3F7E44' },
  { nr: 15, label: 'Leven op het land', color: '#56C02B' },
  { nr: 17, label: 'Partnerschap', color: '#19486A' },
]

const statusStyle = {
  actief: { bg: '#ECFDF5', color: '#10B981', label: 'Actief' },
  deels: { bg: '#FFFBEB', color: '#F59E0B', label: 'Deels' },
  onbekend: { bg: '#FEF2F2', color: '#EF4444', label: 'Aandacht' },
}

export default function Duurzaamheid() {
  return (
    <SectionWrapper id="duurzaamheid">
      <SectionHeader
        label="Duurzaamheid & MVO"
        title="Maatschappelijk Verantwoord Ondernemen"
        subtitle="Analyse van de huidige duurzaamheidsprestaties van MeubelBaas en concrete verbeterpunten voor een groenere toekomst."
      />

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Huidige situatie */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={20} style={{ color: '#10B981' }} />
            <h3 className="font-bold text-stone-800 text-lg">Huidige duurzaamheidssituatie</h3>
          </div>
          <div className="space-y-3">
            {huidig.map((h, i) => {
              const s = statusStyle[h.status]
              return (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-stone-100">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: s.bg, color: s.color }}
                  >
                    {h.status === 'actief' ? '✓' : h.status === 'deels' ? '~' : '!'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-stone-800">{h.item}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: s.bg, color: s.color }}>
                        {s.label}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-0.5">{h.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Verbeterpunten */}
        <div>
          <h3 className="font-bold text-stone-800 text-lg mb-4">Verbeterpunten duurzaamheid</h3>
          <div className="grid grid-cols-1 gap-3">
            {verbeterpunten.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-stone-100 flex items-start gap-3 hover:shadow-sm hover:border-green-200 transition-all"
              >
                <span className="text-2xl">{v.icon}</span>
                <div>
                  <div className="font-semibold text-stone-800 text-sm mb-1">{v.title}</div>
                  <div className="text-stone-500 text-xs leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SDGs */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-6">
        <h3 className="font-bold text-stone-800 mb-4">Relevante Sustainable Development Goals (SDG's)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sdgs.map((sdg, i) => (
            <div
              key={i}
              className="rounded-xl p-4 text-center text-white font-bold"
              style={{ background: sdg.color }}
            >
              <div className="text-3xl font-extrabold mb-1">SDG {sdg.nr}</div>
              <div className="text-xs font-medium opacity-90">{sdg.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mangohout USP */}
      <div
        className="rounded-2xl p-6 flex items-start gap-4"
        style={{ background: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)' }}
      >
        <span className="text-3xl">🌳</span>
        <div>
          <h4 className="font-bold text-green-800 mb-1">Mangohout: een relatief duurzame keuze</h4>
          <p className="text-green-700 text-sm leading-relaxed">
            Mangohout is een bijproduct van de mangoteelt. Bomen die geen vrucht meer dragen worden gekapt
            en hergebruikt als meubelhout. Dit voorkomt verspilling en maakt het een duurzamere keuze ten
            opzichte van primaire houtsoorten. MeubelBaas kan dit sterker communiceren als USP.
          </p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {['Bijproduct mangofruitteelt', 'Vermindert ontbossing', 'Lange levensduur'].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-green-200 text-green-800 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
