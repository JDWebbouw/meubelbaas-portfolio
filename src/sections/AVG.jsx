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
  ok: { icon: <CheckCircle size={16} />, color: '#10B981', bg: '#ECFDF5', label: 'Voldoet' },
  matig: { icon: <AlertCircle size={16} />, color: '#F59E0B', bg: '#FFFBEB', label: 'Deels' },
  onbekend: { icon: <AlertCircle size={16} />, color: '#EF4444', bg: '#FEF2F2', label: 'Aandacht' },
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

      {/* Score overview */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
          <div className="text-4xl font-extrabold mb-1" style={{ color: '#10B981' }}>{okCount}/{checks.length}</div>
          <div className="text-stone-500 text-sm">AVG-checks voldaan</div>
          <div className="mt-3 h-2 bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-green-400" style={{ width: `${(okCount/checks.length)*100}%` }} />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
          <Shield size={32} className="mx-auto mb-2" style={{ color: '#8B5E3C' }} />
          <div className="font-bold text-stone-800 text-sm">Shopify</div>
          <div className="text-stone-500 text-xs mt-1">GDPR-compliant platform</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
          <Lock size={32} className="mx-auto mb-2" style={{ color: '#3B82F6' }} />
          <div className="font-bold text-stone-800 text-sm">SSL Beveiliging</div>
          <div className="text-stone-500 text-xs mt-1">Actief op de website</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* AVG checklist */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-bold text-stone-800 mb-4">AVG Compliance Check</h3>
          <div className="space-y-3">
            {checks.map((check, i) => {
              const cfg = statusMap[check.status]
              return (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: cfg.bg, color: cfg.color }}
                  >
                    {cfg.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-stone-800">{check.item}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                        style={{ background: cfg.bg, color: cfg.color }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">{check.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* AVG principes */}
        <div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-4">
            <h3 className="font-bold text-stone-800 mb-4">De 6 AVG-principes</h3>
            <div className="space-y-3">
              {avgPrincipes.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 text-white"
                    style={{ background: '#8B5E3C' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800 text-sm">{p.principe}</div>
                    <div className="text-stone-500 text-xs mt-0.5">{p.uitleg}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{ background: 'linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)' }}
          >
            <h4 className="font-bold text-white mb-2">📋 Aanbevelingen AVG</h4>
            <ul className="space-y-2">
              {[
                'Stel een formele datalekprocedure op',
                'Documenteer het bewaarbeleid voor klantdata',
                'Voer een Privacy Impact Assessment (PIA) uit',
                'Train medewerkers in AVG-bewustzijn',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-amber-100 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-300 flex-shrink-0" />
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
