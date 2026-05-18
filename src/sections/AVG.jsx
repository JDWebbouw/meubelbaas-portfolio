import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { Shield, CheckCircle, AlertCircle, Lock } from 'lucide-react'

const checks = [
  { item: 'Privacybeleid op website', status: 'ok', detail: 'MeubelBaas heeft een privacybeleid gepubliceerd op de website.' },
  { item: 'Cookiemelding', status: 'ok', detail: 'Bezoekers worden geïnformeerd over het gebruik van cookies.' },
  { item: 'Klantdata via Shopify', status: 'ok', detail: 'Klantgegevens worden automatisch beheerd en beveiligd door Shopify.' },
  { item: 'SSL-beveiliging', status: 'ok', detail: 'De website is beveiligd met een SSL-certificaat (https).' },
  { item: 'Dataminimalisatie', status: 'matig', detail: 'Het is onduidelijk of alleen noodzakelijke data wordt verzameld.' },
  { item: 'Bewaarbeleid klantdata', status: 'matig', detail: 'Er is geen expliciete documentatie over hoe lang data wordt bewaard.' },
  { item: 'Recht op vergetelheid', status: 'matig', detail: 'Klanten kunnen data laten verwijderen via Shopify-functionaliteit.' },
  { item: 'Datalekprocedure', status: 'onbekend', detail: 'Er is geen zichtbare procedure voor het melden van datalekken.' },
]

const statusMap = {
  ok: { icon: <CheckCircle size={14} />, color: '#10B981', bg: '#F0FDF4', label: 'Voldoet' },
  matig: { icon: <AlertCircle size={14} />, color: '#D97706', bg: '#FFFBEB', label: 'Deels' },
  onbekend: { icon: <AlertCircle size={14} />, color: '#DC2626', bg: '#FEF2F2', label: 'Aandacht' },
}

const avgPrincipes = [
  { principe: 'Rechtmatigheid', uitleg: 'Verwerking op basis van toestemming of contractuele noodzaak.' },
  { principe: 'Doelbinding', uitleg: 'Data alleen verwerken voor het opgegeven doel.' },
  { principe: 'Dataminimalisatie', uitleg: 'Zo min mogelijk persoonsgegevens verzamelen.' },
  { principe: 'Juistheid', uitleg: 'Klantdata actueel en correct houden.' },
  { principe: 'Opslagbeperking', uitleg: 'Data niet langer bewaren dan noodzakelijk.' },
  { principe: 'Beveiliging', uitleg: 'Passende technische maatregelen ter bescherming van data.' },
]

export default function AVG() {
  const okCount = checks.filter(c => c.status === 'ok').length

  return (
    <SectionWrapper id="avg">
      <SectionHeader
        label="AVG & Privacy"
        title="Dataveiligheid & AVG-compliance"
        subtitle="Analyse van de privacywetgeving naleving en databeheer van MeubelBaas conform de AVG (GDPR)."
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg p-6 text-center" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div className="text-4xl font-bold mb-1" style={{ color: '#10B981', fontFamily: 'Playfair Display, serif' }}>
            {okCount}/{checks.length}
          </div>
          <div className="text-sm" style={{ color: '#6B6B6B' }}>AVG-checks voldaan</div>
          <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: '#F3F4F6' }}>
            <div className="h-full rounded-full bg-green-400" style={{ width: `${(okCount/checks.length)*100}%` }} />
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <Shield size={28} className="mx-auto mb-2" style={{ color: '#6B6B6B' }} />
          <div className="font-semibold text-sm" style={{ color: '#1A1A1A' }}>Shopify</div>
          <div className="text-xs mt-1" style={{ color: '#9CA3AF' }}>GDPR-compliant platform</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <Lock size={28} className="mx-auto mb-2" style={{ color: '#3B82F6' }} />
          <div className="font-semibold text-sm" style={{ color: '#1A1A1A' }}>SSL Beveiliging</div>
          <div className="text-xs mt-1" style={{ color: '#9CA3AF' }}>Actief op de website</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-semibold mb-4" style={{ color: '#1A1A1A' }}>AVG Compliance Check</h3>
          <div className="space-y-3">
            {checks.map((check, i) => {
              const cfg = statusMap[check.status]
              return (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: cfg.bg, color: cfg.color }}
                  >
                    {cfg.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium" style={{ color: '#1A1A1A' }}>{check.item}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded font-medium flex-shrink-0"
                        style={{ background: cfg.bg, color: cfg.color }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#9CA3AF' }}>{check.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg p-6 mb-4" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <h3 className="font-semibold mb-4" style={{ color: '#1A1A1A' }}>De 6 AVG-principes</h3>
            <div className="space-y-3">
              {avgPrincipes.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: '#F7F5F2' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5 text-white"
                    style={{ background: '#1A1A1A', fontSize: '10px' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-medium text-sm" style={{ color: '#1A1A1A' }}>{p.principe}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#6B6B6B' }}>{p.uitleg}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aanbevelingen — left-border style */}
          <div className="rounded-lg p-5" style={{ background: '#F7F5F2', borderLeft: '3px solid #1A1A1A' }}>
            <h4 className="font-semibold mb-3" style={{ color: '#1A1A1A' }}>Aanbevelingen AVG</h4>
            <ul className="space-y-2">
              {[
                'Stel een formele datalekprocedure op',
                'Documenteer het bewaarbeleid voor klantdata',
                'Voer een Privacy Impact Assessment (PIA) uit',
                'Train medewerkers in AVG-bewustzijn',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#6B6B6B' }}>
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#1A1A1A' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
