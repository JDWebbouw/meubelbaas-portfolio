import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const shopifyFeatures = [
  { naam: 'Betalingsverwerking', status: 'goed', desc: 'Meerdere betaalmethoden beschikbaar via Shopify Payments.' },
  { naam: 'Voorraadbeheer', status: 'goed', desc: 'Realtime voorraadupdates en automatische notificaties.' },
  { naam: 'Mobiele responsiviteit', status: 'goed', desc: 'Shopify-thema\'s zijn standaard mobiel geoptimaliseerd.' },
  { naam: 'SEO-functionaliteit', status: 'matig', desc: 'Basisopties aanwezig; verdere SEO-uitbreiding is nodig.' },
  { naam: 'E-mailmarketing integratie', status: 'matig', desc: 'Shopify Email aanwezig, maar beperkt ingezet.' },
  { naam: 'CRM-functionaliteit', status: 'matig', desc: 'Klantdata beschikbaar, maar weinig segmentatie gebruikt.' },
  { naam: 'Rapportage & Analytics', status: 'goed', desc: 'Uitgebreide dashboards beschikbaar in Shopify Admin.' },
  { naam: 'Retargetingkoppeling', status: 'slecht', desc: 'Geen actieve retargetingcampagne opgezet via Shopify.' },
]

const statusConfig = {
  goed: { icon: <CheckCircle size={16} />, color: '#10B981', bg: '#ECFDF5', label: 'Goed' },
  matig: { icon: <AlertCircle size={16} />, color: '#F59E0B', bg: '#FFFBEB', label: 'Verbeterbaar' },
  slecht: { icon: <XCircle size={16} />, color: '#EF4444', bg: '#FEF2F2', label: 'Aandachtspunt' },
}

const integrations = [
  { name: 'Google Ads', status: '✅ Actief', desc: 'Primaire advertentiekanaal', icon: '🎯' },
  { name: 'Google Analytics', status: '✅ Actief', desc: 'Websitetracking en rapportage', icon: '📊' },
  { name: 'Facebook Pixel', status: '⚠️ Beperkt', desc: 'Aanwezig, weinig benut', icon: '📘' },
  { name: 'Klaviyo / e-mail', status: '❌ Niet actief', desc: 'E-mailautomatisering ontbreekt', icon: '📧' },
  { name: 'Review platform', status: '❌ Niet actief', desc: 'Geen reviewplatform gekoppeld', icon: '⭐' },
  { name: 'Transportpartner', status: '✅ Actief', desc: 'Bezorging via logistieke partner', icon: '🚚' },
]

const aanbevelingen = [
  'Implementeer Klaviyo of Shopify Email voor e-mailautomatisering',
  'Koppel een reviewplatform zoals Trustpilot of Kiyoh aan Shopify',
  'Activeer Facebook Pixel retargeting voor verlaten winkelwagens',
  'Voer geavanceerde klantsegmentatie in via het CRM',
  'Gebruik Shopify Analytics voor wekelijkse KPI-rapportages',
]

export default function Systemen() {
  return (
    <SectionWrapper id="systemen">
      <SectionHeader
        label="Digitale Systemen"
        title="Shopify & CRM Analyse"
        subtitle="Beoordeling van de digitale infrastructuur van MeubelBaas en aanbevelingen voor optimalisatie."
      />

      {/* Shopify beoordeling */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-bold text-stone-800 text-lg mb-4">Shopify platformbeoordeling</h3>
          <div className="space-y-3">
            {shopifyFeatures.map((f, i) => {
              const cfg = statusConfig[f.status]
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-stone-100 flex items-start gap-3 hover:shadow-sm transition-shadow"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: cfg.bg, color: cfg.color }}
                  >
                    {cfg.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-stone-800 text-sm">{f.naam}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                        style={{ background: cfg.bg, color: cfg.color }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                    <p className="text-stone-500 text-xs mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-stone-800 text-lg mb-4">Systeemintegraties</h3>
          <div className="space-y-3 mb-6">
            {integrations.map((int, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-stone-100 flex items-center gap-4 hover:shadow-sm transition-shadow"
              >
                <span className="text-2xl">{int.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-stone-800 text-sm">{int.name}</span>
                    <span className="text-xs text-stone-500">{int.status}</span>
                  </div>
                  <p className="text-stone-400 text-xs mt-0.5">{int.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Aanbevelingen */}
          <div
            className="rounded-2xl p-5"
            style={{ background: 'linear-gradient(135deg, #F5EDE0, #EDD9C0)' }}
          >
            <h4 className="font-bold text-stone-800 mb-3">Aanbevelingen digitale systemen</h4>
            <ul className="space-y-2">
              {aanbevelingen.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                  <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E3C' }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Shopify voordelen samenvatting */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
        <h3 className="font-bold text-stone-800 mb-4">Waarom Shopify de juiste keuze is</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '🔒', title: 'Veiligheid', desc: 'PCI-compliant betaalverwerking en SSL standaard inbegrepen.' },
            { icon: '📈', title: 'Schaalbaarheid', desc: 'Groeit mee met het bedrijf, van startup tot enterprise.' },
            { icon: '🔗', title: 'Integraties', desc: '8.000+ apps beschikbaar in de Shopify App Store.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-stone-50">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-semibold text-stone-800 text-sm mb-1">{item.title}</div>
                <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
