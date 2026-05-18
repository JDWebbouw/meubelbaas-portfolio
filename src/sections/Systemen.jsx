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
  goed: { icon: <CheckCircle size={14} />, color: '#10B981', bg: '#F0FDF4', label: 'Goed' },
  matig: { icon: <AlertCircle size={14} />, color: '#D97706', bg: '#FFFBEB', label: 'Verbeterbaar' },
  slecht: { icon: <XCircle size={14} />, color: '#DC2626', bg: '#FEF2F2', label: 'Aandachtspunt' },
}

const integrations = [
  { name: 'Google Ads', status: 'Actief', desc: 'Primaire advertentiekanaal' },
  { name: 'Google Analytics', status: 'Actief', desc: 'Websitetracking en rapportage' },
  { name: 'Facebook Pixel', status: 'Beperkt', desc: 'Aanwezig, weinig benut' },
  { name: 'Klaviyo / e-mail', status: 'Niet actief', desc: 'E-mailautomatisering ontbreekt' },
  { name: 'Review platform', status: 'Niet actief', desc: 'Geen reviewplatform gekoppeld' },
  { name: 'Transportpartner', status: 'Actief', desc: 'Bezorging via logistieke partner' },
]

const statusDot = {
  'Actief': '#10B981',
  'Beperkt': '#D97706',
  'Niet actief': '#DC2626',
}

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

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-semibold text-lg mb-4" style={{ color: '#1A1A1A' }}>Shopify platformbeoordeling</h3>
          <div className="space-y-2.5">
            {shopifyFeatures.map((f, i) => {
              const cfg = statusConfig[f.status]
              return (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 flex items-start gap-3"
                  style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: cfg.bg, color: cfg.color }}
                  >
                    {cfg.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm" style={{ color: '#1A1A1A' }}>{f.naam}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded font-medium flex-shrink-0"
                        style={{ background: cfg.bg, color: cfg.color }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: '#9CA3AF' }}>{f.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4" style={{ color: '#1A1A1A' }}>Systeemintegraties</h3>
          <div className="space-y-2.5 mb-5">
            {integrations.map((int, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 flex items-center gap-4"
                style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: statusDot[int.status] || '#9CA3AF' }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm" style={{ color: '#1A1A1A' }}>{int.name}</span>
                    <span className="text-xs" style={{ color: '#9CA3AF' }}>{int.status}</span>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{int.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Aanbevelingen — left-border style */}
          <div className="rounded-lg p-5" style={{ background: '#F7F5F2', borderLeft: '3px solid #1A1A1A' }}>
            <h4 className="font-semibold mb-3" style={{ color: '#1A1A1A' }}>Aanbevelingen digitale systemen</h4>
            <ul className="space-y-2">
              {aanbevelingen.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#6B6B6B' }}>
                  <CheckCircle size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <h3 className="font-semibold mb-4" style={{ color: '#1A1A1A' }}>Waarom Shopify de juiste keuze is</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: 'Veiligheid', desc: 'PCI-compliant betaalverwerking en SSL standaard inbegrepen.' },
            { title: 'Schaalbaarheid', desc: 'Groeit mee met het bedrijf, van startup tot enterprise.' },
            { title: 'Integraties', desc: '8.000+ apps beschikbaar in de Shopify App Store.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: '#F7F5F2' }}>
              <div>
                <div className="font-medium text-sm mb-1" style={{ color: '#1A1A1A' }}>{item.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#6B6B6B' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
