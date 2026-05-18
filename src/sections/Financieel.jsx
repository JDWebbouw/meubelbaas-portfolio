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

export default function Financieel() {
  return (
    <SectionWrapper id="financieel">
      <SectionHeader
        label="Financiële Analyse"
        title="Kostenstructuur & ROI"
        subtitle="Overzicht van de financiële prestaties van MeubelBaas, inclusief kostenstructuur en winstmarge."
      />

      {/* Financiële KPI's */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Maandomzet', value: '€500.000', icon: '💰', sub: 'Gemiddeld per maand' },
          { label: 'Totale kosten', value: `€${totaalKosten.toLocaleString('nl-NL')}`, icon: '📉', sub: 'Geschatte maandkosten' },
          { label: 'Brutomarge', value: `${brutomarge}%`, icon: '📊', sub: 'Omzet minus kosten' },
          { label: 'ROI Advertenties', value: '~900%', icon: '🎯', sub: 'Return on Ad Spend (ROAS)' },
        ].map((kpi, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100"
          >
            <div className="text-2xl mb-2">{kpi.icon}</div>
            <div className="text-xl font-extrabold text-stone-900 mb-1">{kpi.value}</div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">{kpi.label}</div>
            <div className="text-xs text-stone-400 mt-1">{kpi.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Kostenstructuur */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-bold text-stone-800 mb-1">Kostenstructuur</h3>
          <p className="text-stone-400 text-xs mb-5">Verdeling maandelijkse kosten (schatting)</p>
          <div className="space-y-3">
            {kostenData.map((k, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-28 text-xs font-medium text-stone-600 text-right leading-tight">
                  {k.naam}
                </div>
                <div className="flex-1 bg-stone-100 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-2 text-white text-xs font-bold transition-all duration-700"
                    style={{
                      width: `${k.pct}%`,
                      background: `linear-gradient(90deg, #D4A97A, #8B5E3C)`,
                    }}
                  >
                    {k.pct}%
                  </div>
                </div>
                <div className="w-20 text-xs font-bold text-stone-700 text-right">
                  €{k.bedrag.toLocaleString('nl-NL')}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex justify-between text-sm">
            <span className="font-medium text-stone-500">Totale kosten</span>
            <span className="font-bold text-stone-800">€{totaalKosten.toLocaleString('nl-NL')}</span>
          </div>
        </div>

        {/* Exploitatieoverzicht */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-bold text-stone-800 mb-1">Exploitatieoverzicht</h3>
          <p className="text-stone-400 text-xs mb-5">Omzet, kosten & winst per maand</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={exploitatieData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
              <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false}
                tickFormatter={v => `€${(v/1000).toFixed(0)}k`} />
              <Tooltip formatter={(v) => `€${v.toLocaleString('nl-NL')}`} />
              <Legend formatter={(v) => <span className="text-xs text-stone-600 capitalize">{v}</span>} />
              <Bar dataKey="omzet" name="Omzet" fill="#D4A97A" radius={[3,3,0,0]} />
              <Bar dataKey="kosten" name="Kosten" fill="#8B5E3C" radius={[3,3,0,0]} />
              <Bar dataKey="winst" name="Winst" fill="#10B981" radius={[3,3,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ROI analyse */}
      <div
        className="mt-6 rounded-2xl p-6"
        style={{ background: 'linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)' }}
      >
        <h3 className="font-bold text-white text-lg mb-4">📊 ROI Analyse – Google Ads</h3>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { label: 'Advertentiebudget', value: '€50.000/mnd' },
            { label: 'Gegenereerde omzet', value: '€500.000/mnd' },
            { label: 'ROAS', value: '10x (1000%)' },
            { label: 'Cost per Order', value: '±€60' },
          ].map((item, i) => (
            <div key={i} className="bg-white/15 rounded-xl p-4 text-center">
              <div className="text-amber-300 font-bold text-lg">{item.value}</div>
              <div className="text-amber-100 text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-amber-100 text-sm mt-4">
          * De advertentie-ROI van MeubelBaas is uitzonderlijk hoog. Verdere budgetuitbreiding
          bij behoud van deze ROAS kan leiden tot significante omzetgroei.
        </p>
      </div>
    </SectionWrapper>
  )
}
