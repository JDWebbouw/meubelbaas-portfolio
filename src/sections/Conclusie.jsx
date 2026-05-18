import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { CheckCircle } from 'lucide-react'

const samenvattingen = [
  {
    titel: 'Customer Journey',
    icon: '🗺️',
    conclusie: 'De klantreis bij MeubelBaas verloopt goed in de See- en Do-fase door effectief Google Ads gebruik. De Care-fase (retentie) verdient extra aandacht via e-mailmarketing.',
  },
  {
    titel: 'Markt & Concurrentie',
    icon: '📊',
    conclusie: 'MeubelBaas heeft een sterke positie in de nichemarkt voor mangohouten meubels. Ten opzichte van HUUS en GOOS zijn er kansen in duurzaamheidscommunicatie en digitale marketing.',
  },
  {
    titel: 'KPI Prestaties',
    icon: '📈',
    conclusie: 'De KPI\'s zijn uitzonderlijk sterk: conversieratio van 20,8% is ver boven het branchegemiddelde. Verbeterpotentieel ligt in reductie van het retourpercentage.',
  },
  {
    titel: 'Verkoopstrategie',
    icon: '🎯',
    conclusie: 'Prijspsychologie en A/B-testing zijn eenvoudig te implementeren tactieken met aantoonbaar effect op conversie en omzet.',
  },
  {
    titel: 'Digitale Systemen',
    icon: '💻',
    conclusie: 'Shopify is een solide platform dat goed is ingericht. Kansen liggen in het activeren van e-mailautomatisering en reviewintegraties.',
  },
  {
    titel: 'Financieel',
    icon: '💰',
    conclusie: 'De ROAS van advertenties is uitzonderlijk hoog. Verdere budgetuitbreiding voor Google Ads kan bij gelijkblijvende conversie leiden tot significante omzetgroei.',
  },
  {
    titel: 'AVG & Privacy',
    icon: '🔒',
    conclusie: 'MeubelBaas voldoet grotendeels aan de AVG via Shopify. Een formele datalekprocedure en bewaarbeleid dienen nog te worden vastgelegd.',
  },
  {
    titel: 'Duurzaamheid',
    icon: '🌱',
    conclusie: 'De keuze voor mangohout is inherent duurzamer. Versterking van de communicatie hierover en eventuele FSC-certificering kunnen dit als USP positioneren.',
  },
]

export default function Conclusie() {
  return (
    <SectionWrapper id="conclusie">
      <SectionHeader
        label="Conclusie"
        title="Samenvatting & Eindconclusie"
        subtitle="Op basis van alle analyses kan worden geconcludeerd dat MeubelBaas een sterk presterend e-commercebedrijf is met duidelijk verbeterpotentieel."
      />

      {/* Onderzoeksvraag */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{ background: 'linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)' }}
      >
        <div className="text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">Onderzoeksvraag</div>
        <p className="text-white text-lg font-medium leading-relaxed">
          "Hoe kan MeubelBaas de online klantreis en commerciële prestaties verbeteren door
          optimalisatie van de customer journey, prijsstrategie, digitale systemen en marketing?"
        </p>
      </div>

      {/* Samenvattingen per sectie */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {samenvattingen.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{s.icon}</span>
              <h4 className="font-bold text-stone-800">{s.titel}</h4>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">{s.conclusie}</p>
          </div>
        ))}
      </div>

      {/* Eindconclusie */}
      <div
        className="rounded-2xl p-8"
        style={{ background: 'linear-gradient(135deg, #F5EDE0, #EDD9C0)' }}
      >
        <h3 className="font-bold text-stone-800 text-xl mb-4">Eindconclusie</h3>
        <p className="text-stone-700 leading-relaxed mb-4">
          MeubelBaas is een goed presterend e-commercebedrijf met een sterke marktpositie in de
          nichemarkts voor mangohouten meubels. De hoge conversieratio van 20,8% en de effectieve
          Google Ads inzet zijn significante sterktes die bewust moeten worden beschermd.
        </p>
        <p className="text-stone-700 leading-relaxed mb-4">
          De grootste verbeterkansen liggen in: (1) het reduceren van transportschade, (2) het
          activeren van e-mailmarketing en retargeting, en (3) het structureel monitoren van KPI's.
          Deze verbeteringen zijn relatief eenvoudig te implementeren en hebben een hoog ROI-potentieel.
        </p>
        <p className="text-stone-700 leading-relaxed">
          Door de aanbevelingen in dit portfolio te implementeren, kan MeubelBaas haar commerciële
          prestaties significant verbeteren en tegelijkertijd haar merkwaarde versterken als
          duurzame, klantgerichte meubelspecialist.
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Belangrijkste kans', value: 'E-mailmarketing activeren' },
            { label: 'Hoogste ROI', value: 'Transportschade reduceren' },
            { label: 'Langetermijn focus', value: 'Duurzaamheid als USP' },
          ].map((item, i) => (
            <div key={i} className="bg-white/70 rounded-xl p-4">
              <div className="text-xs text-stone-500 font-medium mb-1">{item.label}</div>
              <div className="font-bold text-stone-800 text-sm flex items-center gap-2">
                <CheckCircle size={14} style={{ color: '#8B5E3C' }} />
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
