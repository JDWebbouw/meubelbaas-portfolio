import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

const phases = [
  {
    phase: 'See',
    color: '#3B82F6',
    bg: '#EFF6FF',
    desc: 'Bewustwording – de klant ontdekt MeubelBaas voor het eerst.',
    touchpoints: ['Google Ads campagnes', 'Social media (Instagram, Facebook)', 'Mond-tot-mondreclame', 'Organische zoekresultaten'],
    knelpunten: ['Beperkte organische vindbaarheid', 'Weinig merkbekendheid buiten Apeldoorn'],
    verbeterpunten: ['SEO-strategie versterken', 'Social media content uitbreiden'],
  },
  {
    phase: 'Think',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    desc: 'Overweging – de klant vergelijkt producten en beoordeelt de webshop.',
    touchpoints: ['Productpagina\'s bekijken', 'Reviews lezen', 'Prijzen vergelijken', 'Webshop navigeren'],
    knelpunten: ['Weinig reviews zichtbaar', 'Productbeschrijvingen soms beperkt', 'Gebrek aan A/B-testing'],
    verbeterpunten: ['Meer reviews stimuleren', 'A/B-tests op productpagina\'s', 'Betere productfotografie'],
  },
  {
    phase: 'Do',
    color: '#10B981',
    bg: '#ECFDF5',
    desc: 'Aankoop – de klant plaatst een bestelling via de webshop.',
    touchpoints: ['Winkelwagen aanmaken', 'Checkout doorlopen', 'Betaling afronden', 'Bevestigingsmail ontvangen'],
    knelpunten: ['Retourpercentage 6% door transportschade', 'Checkout optimalisatie gewenst'],
    verbeterpunten: ['Betere verpakking en kwaliteitscontrole', 'Checkout vereenvoudigen'],
  },
  {
    phase: 'Care',
    color: '#F59E0B',
    bg: '#FFFBEB',
    desc: 'Loyaliteit – de klant wordt behouden voor herhaalaankopen.',
    touchpoints: ['E-mailmarketing', 'Klantenservice', 'Retourproces', 'Loyaliteitsprogramma'],
    knelpunten: ['E-mailmarketing nog niet volledig benut', 'Geen retargeting ingezet'],
    verbeterpunten: ['E-mailautomatisering inrichten', 'Retargeting campagnes starten'],
  },
]

export default function CustomerJourney() {
  return (
    <SectionWrapper id="journey">
      <SectionHeader
        label="Customer Journey"
        title="See – Think – Do – Care Model"
        subtitle="Analyse van de klantreis bij MeubelBaas in vier fases, inclusief knelpunten en verbeterpunten per fase."
      />

      <div className="space-y-4">
        {phases.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <div className="flex items-start gap-0">
              <div className="w-1 flex-shrink-0 self-stretch" style={{ background: p.color }} />
              <div className="flex-1 p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md" style={{ background: p.bg }}>
                    <div className="font-semibold text-base" style={{ color: p.color }}>{p.phase}</div>
                  </div>
                  <p className="text-sm" style={{ color: '#6B6B6B' }}>{p.desc}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-2 flex items-center gap-1" style={{ color: '#9CA3AF' }}>
                      <ArrowRight size={10} /> Touchpoints
                    </h4>
                    <ul className="space-y-1">
                      {p.touchpoints.map((t, j) => (
                        <li key={j} className="text-sm flex items-start gap-2" style={{ color: '#6B6B6B' }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: p.color }} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-2 flex items-center gap-1" style={{ color: '#9CA3AF' }}>
                      <AlertCircle size={10} /> Knelpunten
                    </h4>
                    <ul className="space-y-1">
                      {p.knelpunten.map((k, j) => (
                        <li key={j} className="text-sm flex items-start gap-2 text-red-600">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-red-400" />
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-2 flex items-center gap-1" style={{ color: '#9CA3AF' }}>
                      <CheckCircle size={10} /> Verbeterpunten
                    </h4>
                    <ul className="space-y-1">
                      {p.verbeterpunten.map((v, j) => (
                        <li key={j} className="text-sm flex items-start gap-2 text-green-700">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-green-500" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-6 bg-white rounded-lg p-6"
        style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
      >
        <h3 className="font-semibold mb-4" style={{ color: '#1A1A1A' }}>Klantreis visualisatie</h3>
        <div className="flex flex-wrap items-center gap-3">
          {phases.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-white text-sm"
                style={{ background: p.color }}
              >
                {p.phase}
              </div>
              {i < phases.length - 1 && (
                <ArrowRight size={16} style={{ color: '#D1D5DB', flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
        <p className="text-sm mt-4" style={{ color: '#6B6B6B' }}>
          De customer journey bij MeubelBaas begint bij bewustwording via Google Ads en eindigt idealiter
          bij herhaalaankopen door loyale klanten. Het verbeteren van iedere fase leidt tot hogere conversie en klanttevredenheid.
        </p>
      </div>
    </SectionWrapper>
  )
}
