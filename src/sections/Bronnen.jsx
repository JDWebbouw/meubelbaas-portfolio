import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { ExternalLink } from 'lucide-react'

const bronnen = [
  {
    categorie: 'Bedrijfsinformatie',
    items: [
      {
        apa: 'MeubelBaas. (2024). Over ons. Geraadpleegd op 18 mei 2026, van https://www.meubelbaas.nl',
        url: 'https://www.meubelbaas.nl',
        type: 'Website',
      },
    ],
  },
  {
    categorie: 'E-commerce & Marketing',
    items: [
      {
        apa: 'Chaffey, D., & Ellis-Chadwick, F. (2022). Digital Marketing: Strategy, Implementation and Practice (7e druk). Pearson Education.',
        url: null,
        type: 'Boek',
      },
      {
        apa: 'Google. (2024). Think with Google: See, Think, Do, Care framework. Geraadpleegd van https://www.thinkwithgoogle.com',
        url: 'https://www.thinkwithgoogle.com',
        type: 'Website',
      },
      {
        apa: 'Shopify. (2024). What is a good ecommerce conversion rate? Geraadpleegd van https://www.shopify.com',
        url: 'https://www.shopify.com',
        type: 'Website',
      },
      {
        apa: 'Klaviyo. (2024). Email marketing benchmarks. Geraadpleegd van https://www.klaviyo.com',
        url: null,
        type: 'Rapport',
      },
    ],
  },
  {
    categorie: 'Concurrenten',
    items: [
      {
        apa: 'HUUS. (2024). Homepagina. Geraadpleegd van https://www.huus.nl',
        url: null,
        type: 'Website',
      },
      {
        apa: 'GOOS. (2024). Homepagina. Geraadpleegd van https://www.goos.nl',
        url: null,
        type: 'Website',
      },
      {
        apa: 'Meubella. (2024). Homepagina. Geraadpleegd van https://www.meubella.nl',
        url: null,
        type: 'Website',
      },
    ],
  },
  {
    categorie: 'Wetgeving & Compliance',
    items: [
      {
        apa: 'Autoriteit Persoonsgegevens. (2024). Wat is de AVG? Geraadpleegd van https://www.autoriteitpersoonsgegevens.nl',
        url: 'https://www.autoriteitpersoonsgegevens.nl',
        type: 'Website',
      },
      {
        apa: 'Europese Unie. (2016). Verordening (EU) 2016/679 (AVG/GDPR). Publicatieblad van de Europese Unie.',
        url: null,
        type: 'Wetgeving',
      },
    ],
  },
  {
    categorie: 'Duurzaamheid & MVO',
    items: [
      {
        apa: 'Forest Stewardship Council. (2024). FSC-certificering. Geraadpleegd van https://www.fsc.org',
        url: null,
        type: 'Website',
      },
      {
        apa: 'United Nations. (2015). Transforming our world: The 2030 Agenda for Sustainable Development. VN Publicatie.',
        url: null,
        type: 'Rapport',
      },
    ],
  },
  {
    categorie: 'Prijsstrategie & Conversie',
    items: [
      {
        apa: 'Cialdini, R. B. (2007). Influence: The Psychology of Persuasion. Harper Business.',
        url: null,
        type: 'Boek',
      },
      {
        apa: 'Nielsen Norman Group. (2024). UX Design for E-commerce. Geraadpleegd van https://www.nngroup.com',
        url: null,
        type: 'Website',
      },
    ],
  },
]

const typeColor = {
  Website: { bg: '#EFF6FF', color: '#3B82F6' },
  Boek: { bg: '#F5EDE0', color: '#8B5E3C' },
  Rapport: { bg: '#ECFDF5', color: '#10B981' },
  Wetgeving: { bg: '#FEF2F2', color: '#EF4444' },
}

export default function Bronnen() {
  return (
    <SectionWrapper id="bronnen">
      <SectionHeader
        label="Bronnen"
        title="Literatuur & Bronvermelding"
        subtitle="Alle gebruikte bronnen zijn hieronder vermeld conform APA-stijl (7e editie)."
      />

      <div className="space-y-6">
        {bronnen.map((cat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span
                className="w-2 h-6 rounded-full flex-shrink-0"
                style={{ background: '#8B5E3C' }}
              />
              {cat.categorie}
            </h3>
            <div className="space-y-3">
              {cat.items.map((bron, j) => {
                const tc = typeColor[bron.type] || typeColor.Website
                return (
                  <div
                    key={j}
                    className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 group hover:bg-stone-100 transition-colors"
                  >
                    <span
                      className="text-xs px-2 py-1 rounded-md font-semibold flex-shrink-0 mt-0.5"
                      style={{ background: tc.bg, color: tc.color }}
                    >
                      {bron.type}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-stone-600 leading-relaxed font-mono">{bron.apa}</p>
                    </div>
                    {bron.url && (
                      <a
                        href={bron.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                        style={{ color: '#8B5E3C' }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* APA Note */}
      <div
        className="mt-6 rounded-xl p-4 text-sm"
        style={{ background: '#F5EDE0', color: '#8B5E3C' }}
      >
        <strong>Noot:</strong> Alle bronnen zijn vermeld conform de APA Publication Manual (7e editie).
        Geraadpleegd in het kader van Module 6 E-commerce Analyse, schooljaar 2025-2026.
      </div>
    </SectionWrapper>
  )
}
