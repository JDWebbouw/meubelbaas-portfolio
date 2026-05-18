import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { Leaf } from 'lucide-react'

const huidig = [
  { item: 'Materiaalrecycling', status: 'actief', detail: 'MeubelBaas recyclet gebruikte materialen en verpakkingen.' },
  { item: 'Duurzame verpakkingen', status: 'actief', detail: 'Gerecycled verpakkingsmateriaal wordt toegepast.' },
  { item: 'Mangohout herkomst', status: 'deels', detail: 'Mangohout is een bijproduct van mangoteelt; relatief duurzaam.' },
  { item: 'CO₂-compensatie', status: 'onbekend', detail: 'Geen zichtbare compensatieregeling voor transportuitstoot.' },
  { item: 'Duurzaamheidslabel', status: 'onbekend', detail: 'Geen erkend duurzaamheidskeurmerk zichtbaar (bijv. FSC).' },
  { item: 'Communicatie op website', status: 'deels', detail: 'Duurzaamheidsinformatie is aanwezig maar niet prominent zichtbaar.' },
]

const verbeterpunten = [
  { title: 'FSC-keurmerk', desc: 'Vraag een FSC-certificering aan voor het gebruikte hout om duurzaamheid aantoonbaar te maken.' },
  { title: 'CO₂-neutraal transport', desc: 'Compenseer de transportuitstoot via een erkend compensatieprogramma.' },
  { title: 'Duurzaamheidspagina', desc: 'Maak een aparte pagina op de website over de duurzaamheidsaanpak van MeubelBaas.' },
  { title: 'Circulaire economie', desc: 'Introduceer een inruilprogramma voor oude meubels als grondstof voor nieuwe productie.' },
  { title: 'Zero-waste verpakking', desc: 'Streef naar volledig plastic vrije verpakkingen uiterlijk 2026.' },
  { title: 'MVO rapportage', desc: 'Publiceer jaarlijks een MVO-rapport over milieu- en sociale impact.' },
]

const sdgs = [
  { nr: 12, label: 'Verantwoorde consumptie', color: '#B45309' },
  { nr: 13, label: 'Klimaatactie', color: '#1D4ED8' },
  { nr: 15, label: 'Leven op het land', color: '#15803D' },
  { nr: 17, label: 'Partnerschap', color: '#1E3A5F' },
]

const statusStyle = {
  actief: { bg: '#F0FDF4', color: '#16A34A', label: 'Actief' },
  deels: { bg: '#FFFBEB', color: '#D97706', label: 'Deels' },
  onbekend: { bg: '#FEF2F2', color: '#DC2626', label: 'Aandacht' },
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
        <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={18} style={{ color: '#10B981' }} />
            <h3 className="font-semibold" style={{ color: '#1A1A1A' }}>Huidige duurzaamheidssituatie</h3>
          </div>
          <div className="space-y-2.5">
            {huidig.map((h, i) => {
              const s = statusStyle[h.status]
              return (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ border: '1px solid #E8E4DE' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5"
                    style={{ background: s.bg, color: s.color }}
                  >
                    {h.status === 'actief' ? '✓' : h.status === 'deels' ? '~' : '!'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium" style={{ color: '#1A1A1A' }}>{h.item}</span>
                      <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ background: s.bg, color: s.color }}>
                        {s.label}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{h.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4" style={{ color: '#1A1A1A' }}>Verbeterpunten duurzaamheid</h3>
          <div className="space-y-2.5">
            {verbeterpunten.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 flex items-start gap-3"
                style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#1A1A1A' }} />
                <div>
                  <div className="font-medium text-sm mb-0.5" style={{ color: '#1A1A1A' }}>{v.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: '#6B6B6B' }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <h3 className="font-semibold mb-4" style={{ color: '#1A1A1A' }}>Relevante Sustainable Development Goals (SDG's)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {sdgs.map((sdg, i) => (
            <div
              key={i}
              className="rounded-lg p-4 text-center text-white font-semibold"
              style={{ background: sdg.color }}
            >
              <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>SDG {sdg.nr}</div>
              <div className="text-xs font-normal opacity-90">{sdg.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mangohout block — left-border style */}
      <div className="rounded-lg p-6" style={{ background: '#F7F5F2', borderLeft: '3px solid #1A1A1A' }}>
        <h4 className="font-semibold mb-2" style={{ color: '#1A1A1A' }}>Mangohout: een relatief duurzame keuze</h4>
        <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B6B6B' }}>
          Mangohout is een bijproduct van de mangoteelt. Bomen die geen vrucht meer dragen worden gekapt
          en hergebruikt als meubelhout. Dit voorkomt verspilling en maakt het een duurzamere keuze ten
          opzichte van primaire houtsoorten. MeubelBaas kan dit sterker communiceren als USP.
        </p>
        <div className="flex gap-2 flex-wrap">
          {['Bijproduct mangofruitteelt', 'Vermindert ontbossing', 'Lange levensduur'].map(tag => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded font-medium"
              style={{ background: '#FFFFFF', border: '1px solid #E8E4DE', color: '#6B6B6B' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
