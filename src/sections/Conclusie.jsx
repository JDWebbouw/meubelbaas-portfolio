import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { CheckCircle } from 'lucide-react'

const samenvattingen = [
  {
    titel: 'Customer Journey',
    conclusie: 'De klantreis bij MeubelBaas verloopt goed in de See- en Do-fase door effectief Google Ads gebruik. De Care-fase (retentie) verdient extra aandacht via e-mailmarketing.',
  },
  {
    titel: 'Markt & Concurrentie',
    conclusie: 'MeubelBaas heeft een sterke positie in de nichemarkt voor mangohouten meubels. Ten opzichte van HUUS en GOOS zijn er kansen in duurzaamheidscommunicatie en digitale marketing.',
  },
  {
    titel: 'KPI Prestaties',
    conclusie: 'De KPI\'s zijn uitzonderlijk sterk: conversieratio van 20,8% is ver boven het branchegemiddelde. Verbeterpotentieel ligt in reductie van het retourpercentage.',
  },
  {
    titel: 'Verkoopstrategie',
    conclusie: 'Prijspsychologie en A/B-testing zijn eenvoudig te implementeren tactieken met aantoonbaar effect op conversie en omzet.',
  },
  {
    titel: 'Digitale Systemen',
    conclusie: 'Shopify is een solide platform dat goed is ingericht. Kansen liggen in het activeren van e-mailautomatisering en reviewintegraties.',
  },
  {
    titel: 'Financieel',
    conclusie: 'De ROAS van advertenties is uitzonderlijk hoog. Verdere budgetuitbreiding voor Google Ads kan bij gelijkblijvende conversie leiden tot significante omzetgroei.',
  },
  {
    titel: 'AVG & Privacy',
    conclusie: 'MeubelBaas voldoet grotendeels aan de AVG via Shopify. Een formele datalekprocedure en bewaarbeleid dienen nog te worden vastgelegd.',
  },
  {
    titel: 'Duurzaamheid',
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
        className="rounded-lg p-6 mb-8"
        style={{ background: '#F7F5F2', borderLeft: '3px solid #1A1A1A' }}
      >
        <div className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: '#6B6B6B' }}>Onderzoeksvraag</div>
        <p className="text-base font-medium leading-relaxed" style={{ color: '#1A1A1A' }}>
          "Hoe kan MeubelBaas de online klantreis en commerciële prestaties verbeteren door
          optimalisatie van de customer journey, prijsstrategie, digitale systemen en marketing?"
        </p>
      </div>

      {/* Samenvattingen per sectie */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {samenvattingen.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-5"
            style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <h4 className="font-semibold mb-2" style={{ color: '#1A1A1A' }}>{s.titel}</h4>
            <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{s.conclusie}</p>
          </div>
        ))}
      </div>

      {/* Eindconclusie */}
      <div
        className="rounded-lg p-8"
        style={{ background: '#F7F5F2', border: '1px solid #E8E4DE' }}
      >
        <h3 className="font-semibold text-xl mb-4" style={{ color: '#1A1A1A', fontFamily: 'Playfair Display, Georgia, serif' }}>Eindconclusie</h3>
        <p className="leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>
          MeubelBaas is een goed presterend e-commercebedrijf met een sterke marktpositie in de
          nichemarkts voor mangohouten meubels. De hoge conversieratio van 20,8% en de effectieve
          Google Ads inzet zijn significante sterktes die bewust moeten worden beschermd.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>
          De grootste verbeterkansen liggen in: (1) het reduceren van transportschade, (2) het
          activeren van e-mailmarketing en retargeting, en (3) het structureel monitoren van KPI's.
          Deze verbeteringen zijn relatief eenvoudig te implementeren en hebben een hoog ROI-potentieel.
        </p>
        <p className="leading-relaxed" style={{ color: '#6B6B6B' }}>
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
            <div key={i} className="bg-white rounded-lg p-4" style={{ border: '1px solid #E8E4DE' }}>
              <div className="text-xs font-medium mb-1" style={{ color: '#9CA3AF' }}>{item.label}</div>
              <div className="font-semibold text-sm flex items-center gap-2" style={{ color: '#1A1A1A' }}>
                <CheckCircle size={14} style={{ color: '#10B981' }} />
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
