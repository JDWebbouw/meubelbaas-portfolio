import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { ArrowRight, Target } from 'lucide-react'

const adviezen = [
  {
    nr: 1,
    titel: 'Verminder transportschade',
    categorie: 'Operationeel',
    prioriteit: 'Hoog',
    impact: '⭐⭐⭐',
    tijdspad: 'Korte termijn',
    icon: '📦',
    color: '#EF4444',
    probleem: 'Transportschade is de meest voorkomende klacht en zorgt voor een retourpercentage van 6%.',
    oplossing: [
      'Investeer in betere, stevigere verpakkingen specifiek voor zwaar mangohout',
      'Voer een kwaliteitscontrole in voordat producten worden verzonden',
      'Selecteer bezorgpartners met een gespecialiseerd track-record in meubeltransport',
      'Gebruik schuimrubber en hoekverstevigingen bij alle grote producten',
    ],
    verwacht: 'Reductie retourpercentage van 6% naar <3%',
  },
  {
    nr: 2,
    titel: 'Verbeter e-mailmarketing',
    categorie: 'Marketing',
    prioriteit: 'Hoog',
    impact: '⭐⭐⭐',
    tijdspad: 'Korte termijn',
    icon: '📧',
    color: '#8B5E3C',
    probleem: 'E-mailmarketing en retargeting worden niet of nauwelijks ingezet, wat kansen voor herhaalaankopen mist.',
    oplossing: [
      'Implementeer Klaviyo of Shopify Email voor automatische flows',
      'Stel een verlaten winkelwagen e-mail in (5-15% herstelpercentage)',
      'Maak een welkomstsequentie voor nieuwe klanten',
      'Verstuur maandelijkse nieuwsbrieven met nieuwe collecties',
    ],
    verwacht: '+10-20% extra omzet via het e-mailkanaal',
  },
  {
    nr: 3,
    titel: 'A/B-tests op productpagina\'s',
    categorie: 'Conversie',
    prioriteit: 'Middel',
    impact: '⭐⭐',
    tijdspad: 'Middellange termijn',
    icon: '🧪',
    color: '#3B82F6',
    probleem: 'Productpagina\'s worden niet systematisch geoptimaliseerd op basis van data.',
    oplossing: [
      'Test verschillende CTA-knopteksten ("Bestel nu" vs. "Voeg toe aan winkelwagen")',
      'Experimenteer met de plaatsing van klantreviews',
      'Test productfotografie: lifestyle vs. witte achtergrond',
      'Gebruik Google Optimize of VWO voor eenvoudige A/B-tests',
    ],
    verwacht: '+5-15% verbetering op de geteste productpagina\'s',
  },
  {
    nr: 4,
    titel: 'Communiceer duurzaamheid duidelijker',
    categorie: 'Merkbouw',
    prioriteit: 'Middel',
    impact: '⭐⭐',
    tijdspad: 'Korte termijn',
    icon: '🌱',
    color: '#10B981',
    probleem: 'De duurzaamheidsaanpak van MeubelBaas is niet prominent zichtbaar voor bezoekers.',
    oplossing: [
      'Maak een aparte "Duurzaamheid" pagina op de website',
      'Voeg een duurzaamheidsbadge toe op productpagina\'s',
      'Communiceer het voordeel van mangohout als bijproduct in productteksten',
      'Vraag een FSC-keurmerk aan voor de houtleveranciers',
    ],
    verwacht: 'Verhoogde merkwaarde en vertrouwen bij milieubewuste consumenten',
  },
  {
    nr: 5,
    titel: 'Implementeer prijspsychologie',
    categorie: 'Prijsstrategie',
    prioriteit: 'Laag',
    impact: '⭐⭐',
    tijdspad: 'Korte termijn',
    icon: '💲',
    color: '#F59E0B',
    probleem: 'Prijzen worden niet strategisch gepresenteerd om aankoopbeslissingen te beïnvloeden.',
    oplossing: [
      'Gebruik "charmeprijzen": €999 i.p.v. €1.000',
      'Toon doorgestreepte adviesprijs naast verkoopprijs',
      'Implementeer "Meest populair" badges bij bestsellers',
      'Bied bundelkortingen aan voor meerdere producten',
    ],
    verwacht: '+3-8% hogere conversieratio door psychologische prijsstelling',
  },
  {
    nr: 6,
    titel: 'Monitor KPI\'s structureel',
    categorie: 'Analyse',
    prioriteit: 'Hoog',
    impact: '⭐⭐⭐',
    tijdspad: 'Korte termijn',
    icon: '📊',
    color: '#8B5CF6',
    probleem: 'KPI\'s worden niet wekelijks gemonitord, waardoor kansen en problemen laat worden gesignaleerd.',
    oplossing: [
      'Stel wekelijkse KPI-rapporten in via Shopify Analytics',
      'Koppel Google Analytics 4 voor diepgaandere websiteanalyse',
      'Maak een maandelijkse reviewmeeting met management',
      'Stel automatische alerts in bij afwijkingen in conversie of retourpercentage',
    ],
    verwacht: 'Snellere besluitvorming en proactieve optimalisatie',
  },
]

const prioriteitColor = {
  Hoog: 'bg-red-100 text-red-600',
  Middel: 'bg-amber-100 text-amber-700',
  Laag: 'bg-green-100 text-green-700',
}

export default function Advies() {
  return (
    <SectionWrapper id="advies">
      <SectionHeader
        label="Verbeteradvies"
        title="Concrete Aanbevelingen"
        subtitle="Op basis van de analyses zijn de volgende zes verbeteradviezen opgesteld voor MeubelBaas, gerangschikt op prioriteit."
      />

      {/* Prioriteitsoverzicht */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Hoge prioriteit', count: adviezen.filter(a => a.prioriteit === 'Hoog').length, color: '#EF4444', bg: '#FEF2F2' },
          { label: 'Middel prioriteit', count: adviezen.filter(a => a.prioriteit === 'Middel').length, color: '#F59E0B', bg: '#FFFBEB' },
          { label: 'Lage prioriteit', count: adviezen.filter(a => a.prioriteit === 'Laag').length, color: '#10B981', bg: '#ECFDF5' },
        ].map((p, i) => (
          <div key={i} className="rounded-2xl p-5 text-center" style={{ background: p.bg }}>
            <div className="text-3xl font-extrabold mb-1" style={{ color: p.color }}>{p.count}</div>
            <div className="text-xs font-medium text-stone-600">{p.label}</div>
          </div>
        ))}
      </div>

      {/* Advies cards */}
      <div className="space-y-4">
        {adviezen.map((advies, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="flex">
              {/* Left accent */}
              <div className="w-1.5 flex-shrink-0" style={{ background: advies.color }} />
              <div className="flex-1 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: advies.color + '15' }}
                    >
                      {advies.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-stone-900">
                          {advies.nr}. {advies.titel}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-medium">
                          {advies.categorie}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${prioriteitColor[advies.prioriteit]}`}>
                          {advies.prioriteit}
                        </span>
                        <span className="text-xs text-stone-400">{advies.tijdspad}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg" title="Impact">{advies.impact}</div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-400 mb-2">Probleem</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">{advies.probleem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-400 mb-2">Actiestappen</h4>
                    <ul className="space-y-1">
                      {advies.oplossing.map((stap, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-stone-600">
                          <ArrowRight size={10} className="mt-1 flex-shrink-0" style={{ color: advies.color }} />
                          {stap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-400 mb-2">Verwacht resultaat</h4>
                    <div
                      className="text-sm font-medium p-3 rounded-xl"
                      style={{ background: advies.color + '12', color: advies.color }}
                    >
                      <Target size={14} className="inline mr-1" />
                      {advies.verwacht}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
