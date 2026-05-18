import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

const kostenData = [
  { naam: 'Inkoop', bedrag: 200000, pct: 40 },
  { naam: 'Transport', bedrag: 75000, pct: 15 },
  { naam: 'Advertenties', bedrag: 50000, pct: 10 },
  { naam: 'Personeels-\nkosten', bedrag: 40000, pct: 8 },
  { naam: 'Shopify/Tech', bedrag: 15000, pct: 3 },
  { naam: 'Overig', bedrag: 20000, pct: 4 },
]

const exploitatieData = [
  { maand: 'Jan', omzet: 420000, kosten: 340000, winst: 80000 },
  { maand: 'Feb', omzet: 445000, kosten: 355000, winst: 90000 },
  { maand: 'Mrt', omzet: 480000, kosten: 380000, winst: 100000 },
  { maand: 'Apr', omzet: 510000, kosten: 395000, winst: 115000 },
  { maand: 'Mei', omzet: 495000, kosten: 385000, winst: 110000 },
  { maand: 'Jun', omzet: 500000, kosten: 390000, winst: 110000 },
]

const totaalKosten = kostenData.reduce((s, k) => s + k.bedrag, 0)
const brutomarge = ((500000 - totaalKosten) / 500000 * 100).toFixed(1)

const financialKpis = [
  { label: 'Maandomzet', value: '€500.000', sub: 'Gemiddeld per maand' },
  { label: 'Totale kosten', value: `€${totaalKosten.toLocaleString('nl-NL')}`, sub: 'Geschatte maandkosten' },
  { label: 'Brutomarge', value: `${brutomarge}%`, sub: 'Omzet minus kosten' },
  { label: 'ROI Advertenties', value: '~900%', sub: 'Return on Ad Spend (ROAS)' },
]

export default function Financieel() {
  return (
    <SectionWrapper id="financieel">
      <SectionHeader
        label="Financiële Analyse"
        title="Kostenstructuur & ROI"
        subtitle="Overzicht van de financiële prestaties van MeubelBaas, inclusief kostenstructuur en winstmarge."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {financialKpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-5"
            style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <div className="text-xl font-bold mb-1" style={{ color: '#1A1A1A', fontFamily: 'Playfair Display, serif' }}>
              {kpi.value}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: '#9CA3AF' }}>{kpi.label}</div>
            <div className="text-xs mt-1" style={{ color: '#9CA3AF' }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Kostenstructuur</h3>
          <p className="text-xs mb-5" style={{ color: '#9CA3AF' }}>Verdeling maandelijkse kosten (schatting)</p>
          <div className="space-y-3">
            {kostenData.map((k, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-28 text-xs font-medium text-right leading-tight" style={{ color: '#6B6B6B' }}>
                  {k.naam}
                </div>
                <div className="flex-1 h-6 rounded overflow-hidden" style={{ background: '#F3F4F6' }}>
                  <div
                    className="h-full flex items-center justify-end pr-2 text-white text-xs font-semibold"
                    style={{ width: `${k.pct}%`, background: '#1A1A1A', transition: 'width 0.7s ease' }}
                  >
                    {k.pct}%
                  </div>
                </div>
                <div className="w-20 text-xs font-semibold text-right" style={{ color: '#1A1A1A' }}>
                  €{k.bedrag.toLocaleString('nl-NL')}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 flex justify-between text-sm" style={{ borderTop: '1px solid #E8E4DE' }}>
            <span className="font-medium" style={{ color: '#6B6B6B' }}>Totale kosten</span>
            <span className="font-semibold" style={{ color: '#1A1A1A' }}>€{totaalKosten.toLocaleString('nl-NL')}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Exploitatieoverzicht</h3>
          <p className="text-xs mb-5" style={{ color: '#9CA3AF' }}>Omzet, kosten & winst per maand</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={exploitatieData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false}
                tickFormatter={v => `€${(v/1000).toFixed(0)}k`} />
              <Tooltip formatter={(v) => `€${v.toLocaleString('nl-NL')}`} />
              <Legend formatter={(v) => <span className="text-xs capitalize" style={{ color: '#6B7280' }}>{v}</span>} />
              <Bar dataKey="omzet" name="Omzet" fill="#9CA3AF" radius={[3,3,0,0]} />
              <Bar dataKey="kosten" name="Kosten" fill="#D1D5DB" radius={[3,3,0,0]} />
              <Bar dataKey="winst" name="Winst" fill="#1A1A1A" radius={[3,3,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ROI block — left-border style */}
      <div className="mt-6 rounded-lg p-6" style={{ background: '#F7F5F2', borderLeft: '3px solid #1A1A1A' }}>
        <h3 className="font-semibold text-lg mb-4" style={{ color: '#1A1A1A' }}>ROI Analyse – Google Ads</h3>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { label: 'Advertentiebudget', value: '€50.000/mnd' },
            { label: 'Gegenereerde omzet', value: '€500.000/mnd' },
            { label: 'ROAS', value: '10x (1000%)' },
            { label: 'Cost per Order', value: '±€60' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-4 text-center" style={{ border: '1px solid #E8E4DE' }}>
              <div className="font-semibold text-base" style={{ color: '#1A1A1A', fontFamily: 'Playfair Display, serif' }}>
                {item.value}
              </div>
              <div className="text-xs mt-1" style={{ color: '#6B6B6B' }}>{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4" style={{ color: '#6B6B6B' }}>
          * De advertentie-ROI van MeubelBaas is uitzonderlijk hoog. Verdere budgetuitbreiding
          bij behoud van deze ROAS kan leiden tot significante omzetgroei.
        </p>
      </div>
    </SectionWrapper>
  )
}
