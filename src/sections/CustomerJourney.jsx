import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

const phases = [
  {
    phase: 'See',
    color: '#3B82F6',
    bg: '#EFF6FF',
    icon: '👁️',
    desc: 'Bewustwording – de klant ontdekt MeubelBaas voor het eerst.',
    touchpoints: ['Google Ads campagnes', 'Social media (Instagram, Facebook)', 'Mond-tot-mondreclame', 'Organische zoekresultaten'],
    knelpunten: ['Beperkte organische vindbaarheid', 'Weinig merkbekendheid buiten Apeldoorn'],
    verbeterpunten: ['SEO-strategie versterken', 'Social media content uitbreiden'],
  },
  {
    phase: 'Think',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    icon: '🤔',
    desc: 'Overweging – de klant vergelijkt producten en beoordeelt de webshop.',
    touchpoints: ['Productpagina\'s bekijken', 'Reviews lezen', 'Prijzen vergelijken', 'Webshop navigeren'],
    knelpunten: ['Weinig reviews zichtbaar', 'Productbeschrijvingen soms beperkt', 'Gebrek aan A/B-testing'],
    verbeterpunten: ['Meer reviews stimuleren', 'A/B-tests op productpagina\'s', 'Betere productfotografie'],
  },
  {
    phase: 'Do',
    color: '#10B981',
    bg: '#ECFDF5',
    icon: '🛒',
    desc: 'Aankoop – de klant plaatst een bestelling via de webshop.',
    touchpoints: ['Winkelwagen aanmaken', 'Checkout doorlopen', 'Betaling afronden', 'Bevestigingsmail ontvangen'],
    knelpunten: ['Retourpercentage 6% door transportschade', 'Checkout optimalisatie gewenst'],
    verbeterpunten: ['Betere verpakking en kwaliteitscontrole', 'Checkout vereenvoudigen'],
  },
  {
    phase: 'Care',
    color: '#F59E0B',
    bg: '#FFFBEB',
    icon: '❤️',
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

      <div className="space-y-6">
        {phases.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-0">
              {/* Phase indicator */}
              <div
                className="w-2 flex-shrink-0 self-stretch"
                style={{ background: p.color }}
              />
              <div className="flex-1 p-6">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <div
                    className="flex items-center gap-3 px-4 py-2 rounded-xl"
                    style={{ background: p.bg }}
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <div className="font-bold text-lg" style={{ color: p.color }}>{p.phase}</div>
                      <div className="text-xs text-stone-500">{p.desc}</div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-400 mb-2 flex items-center gap-1">
                      <ArrowRight size={12} /> Touchpoints
                    </h4>
                    <ul className="space-y-1">
                      {p.touchpoints.map((t, j) => (
                        <li key={j} className="text-sm text-stone-600 flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-400 mb-2 flex items-center gap-1">
                      <AlertCircle size={12} /> Knelpunten
                    </h4>
                    <ul className="space-y-1">
                      {p.knelpunten.map((k, j) => (
                        <li key={j} className="text-sm text-red-600 flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-400" />
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-400 mb-2 flex items-center gap-1">
                      <CheckCircle size={12} /> Verbeterpunten
                    </h4>
                    <ul className="space-y-1">
                      {p.verbeterpunten.map((v, j) => (
                        <li key={j} className="text-sm text-green-700 flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-500" />
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

      {/* Journey flow diagram */}
      <div className="mt-8 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
        <h3 className="font-bold text-stone-800 mb-4">Klantreis visualisatie</h3>
        <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
          {phases.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white shadow-sm"
                style={{ background: p.color }}
              >
                <span>{p.icon}</span>
                <span>{p.phase}</span>
              </div>
              {i < phases.length - 1 && (
                <ArrowRight size={20} className="text-stone-300 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-4">
          De customer journey bij MeubelBaas begint bij bewustwording via Google Ads en eindigt idealiter
          bij herhaalaankopen door loyale klanten. Het verbeteren van iedere fase leidt tot hogere conversie en klanttevredenheid.
        </p>
      </div>
    </SectionWrapper>
  )
}
