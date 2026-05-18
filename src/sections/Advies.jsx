import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { ArrowRight, Target } from 'lucide-react'

const adviezen = [
  {
    nr: 1,
    titel: 'Verminder transportschade',
    categorie: 'Operationeel',
    prioriteit: 'Hoog',
    tijdspad: 'Korte termijn',
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
    tijdspad: 'Korte termijn',
    color: '#6366F1',
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
    tijdspad: 'Middellange termijn',
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
    tijdspad: 'Korte termijn',
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
    tijdspad: 'Korte termijn',
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
    tijdspad: 'Korte termijn',
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

const prioriteitStyle = {
  Hoog: { bg: '#FEF2F2', color: '#DC2626' },
  Middel: { bg: '#FFFBEB', color: '#D97706' },
  Laag: { bg: '#F0FDF4', color: '#16A34A' },
}

export default function Advies() {
  return (
    <SectionWrapper id="advies">
      <SectionHeader
        label="Verbeteradvies"
        title="Concrete Aanbevelingen"
        subtitle="Op basis van de analyses zijn de volgende zes verbeteradviezen opgesteld voor MeubelBaas, gerangschikt op prioriteit."
      />

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Hoge prioriteit', count: adviezen.filter(a => a.prioriteit === 'Hoog').length, ...prioriteitStyle.Hoog },
          { label: 'Middel prioriteit', count: adviezen.filter(a => a.prioriteit === 'Middel').length, ...prioriteitStyle.Middel },
          { label: 'Lage prioriteit', count: adviezen.filter(a => a.prioriteit === 'Laag').length, ...prioriteitStyle.Laag },
        ].map((p, i) => (
          <div key={i} className="rounded-lg p-5 text-center" style={{ background: p.bg, border: '1px solid #E8E4DE' }}>
            <div className="text-3xl font-bold mb-1" style={{ color: p.color, fontFamily: 'Playfair Display, serif' }}>{p.count}</div>
            <div className="text-xs font-medium" style={{ color: '#6B6B6B' }}>{p.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {adviezen.map((advies, i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <div className="flex">
              <div className="w-1 flex-shrink-0" style={{ background: advies.color }} />
              <div className="flex-1 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="font-semibold text-base mb-1" style={{ color: '#1A1A1A' }}>
                      {advies.nr}. {advies.titel}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ background: '#F7F5F2', color: '#6B6B6B' }}>
                        {advies.categorie}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded font-medium"
                        style={{ background: prioriteitStyle[advies.prioriteit].bg, color: prioriteitStyle[advies.prioriteit].color }}
                      >
                        {advies.prioriteit}
                      </span>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>{advies.tijdspad}</span>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: '#9CA3AF' }}>Probleem</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{advies.probleem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: '#9CA3AF' }}>Actiestappen</h4>
                    <ul className="space-y-1">
                      {advies.oplossing.map((stap, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs" style={{ color: '#6B6B6B' }}>
                          <ArrowRight size={10} className="mt-0.5 flex-shrink-0" style={{ color: advies.color }} />
                          {stap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: '#9CA3AF' }}>Verwacht resultaat</h4>
                    <div
                      className="text-sm font-medium p-3 rounded"
                      style={{ background: '#F7F5F2', color: '#1A1A1A', borderLeft: '2px solid #1A1A1A' }}
                    >
                      <Target size={13} className="inline mr-1" style={{ color: '#6B6B6B' }} />
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
