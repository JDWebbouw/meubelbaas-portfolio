import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

const maandData = [
  { maand: 'Jan', omzet: 420000, bezoekers: 3400, bestellingen: 700 },
  { maand: 'Feb', omzet: 445000, bezoekers: 3600, bestellingen: 742 },
  { maand: 'Mrt', omzet: 480000, bezoekers: 3900, bestellingen: 800 },
  { maand: 'Apr', omzet: 510000, bezoekers: 4100, bestellingen: 850 },
  { maand: 'Mei', omzet: 495000, bezoekers: 4000, bestellingen: 825 },
  { maand: 'Jun', omzet: 500000, bezoekers: 4000, bestellingen: 833 },
]

const verkeerData = [
  { name: 'Google Ads', value: 65, color: '#4B5563' },
  { name: 'Organisch', value: 20, color: '#9CA3AF' },
  { name: 'Direct', value: 10, color: '#D1D5DB' },
  { name: 'Social', value: 5, color: '#E5E7EB' },
]

const kpis = [
  { label: 'Maandomzet', value: '€500.000', sub: '+3,1% t.o.v. vorige maand', trend: 'up' },
  { label: 'Bezoekers/maand', value: '4.000', sub: 'Stabiel t.o.v. vorige maand', trend: 'neutral' },
  { label: 'Gem. orderwaarde', value: '€600', sub: 'Per bestelling', trend: 'neutral' },
  { label: 'Bestellingen', value: '±833', sub: 'Per maand', trend: 'up' },
  { label: 'Conversieratio', value: '20,8%', sub: 'Branchegemiddelde: 2-4%', trend: 'up' },
  { label: 'Retourpercentage', value: '6%', sub: 'Grotendeels door transportschade', trend: 'down' },
  { label: 'Bounce rate', value: '38%', sub: 'Landingspagina\'s optimaliseren', trend: 'neutral' },
  { label: 'Gem. sessieduur', value: '3:24 min', sub: 'Positief teken van betrokkenheid', trend: 'up' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-3" style={{ border: '1px solid #E8E4DE' }}>
        <p className="font-semibold text-sm mb-2" style={{ color: '#1A1A1A' }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="text-xs" style={{ color: p.color }}>
            {p.name}: {typeof p.value === 'number' && p.value > 1000
              ? `€${p.value.toLocaleString('nl-NL')}`
              : p.value.toLocaleString('nl-NL')}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function KpiDashboard() {
  return (
    <SectionWrapper id="kpi">
      <SectionHeader
        label="KPI Dashboard"
        title="Prestatie-indicatoren"
        subtitle="Overzicht van de belangrijkste KPI's van MeubelBaas op basis van de beschikbare data."
        dark
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-5"
            style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div />
              <div>
                {kpi.trend === 'up' && <TrendingUp size={14} className="text-green-400" />}
                {kpi.trend === 'down' && <TrendingDown size={14} className="text-red-400" />}
                {kpi.trend === 'neutral' && <Minus size={14} style={{ color: '#6B7280' }} />}
              </div>
            </div>
            <div className="text-xl font-bold mb-1" style={{ color: '#1A1A1A', fontFamily: 'Playfair Display, serif' }}>
              {kpi.value}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: '#6B7280' }}>
              {kpi.label}
            </div>
            <div className="text-xs" style={{ color: '#9CA3AF' }}>{kpi.sub}</div>
            <div className="mt-3 h-px bg-white/10">
              <div className="h-full w-3/4" style={{ background: 'rgba(255,255,255,0.3)' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Maandelijkse omzet</h3>
          <p className="text-xs mb-5" style={{ color: '#9CA3AF' }}>Januari – Juni (in euro's)</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={maandData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="omzetGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1A1A1A" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#1A1A1A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false}
                tickFormatter={v => `€${(v/1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="omzet" name="Omzet" stroke="#1A1A1A" strokeWidth={2}
                fill="url(#omzetGrad)" dot={{ fill: '#1A1A1A', r: 3 }} activeDot={{ r: 5 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Bezoekers & Bestellingen</h3>
          <p className="text-xs mb-5" style={{ color: '#9CA3AF' }}>Januari – Juni</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={maandData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="bezoekers" name="Bezoekers" fill="#D1D5DB" radius={[3,3,0,0]} />
              <Bar dataKey="bestellingen" name="Bestellingen" fill="#1A1A1A" radius={[3,3,0,0]} />
              <Legend formatter={(v) => <span className="text-xs" style={{ color: '#6B7280' }}>{v}</span>} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Verkeersbronnen</h3>
          <p className="text-xs mb-5" style={{ color: '#9CA3AF' }}>Verdeling per kanaal (%)</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={verkeerData} cx="50%" cy="50%" innerRadius={55} outerRadius={85}
                dataKey="value" nameKey="name" paddingAngle={2}>
                {verkeerData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
              <Legend formatter={(v) => <span className="text-xs" style={{ color: '#6B7280' }}>{v}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #E8E4DE', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-semibold mb-4" style={{ color: '#1A1A1A' }}>Benchmark vs. branche</h3>
          <div className="space-y-4">
            {[
              { label: 'Conversieratio', mb: '20,8%', branch: '2-4%', good: true },
              { label: 'Bounce rate', mb: '38%', branch: '45-55%', good: true },
              { label: 'Retourpercentage', mb: '6%', branch: '10-15%', good: true },
              { label: 'Gem. orderwaarde', mb: '€600', branch: '€300-400', good: true },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm w-36" style={{ color: '#6B6B6B' }}>{row.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>{row.mb}</span>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>vs.</span>
                  <span className="text-sm" style={{ color: '#9CA3AF' }}>{row.branch}</span>
                  <span className="text-xs font-medium" style={{ color: '#10B981' }}>✓</span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-4 p-3 rounded text-xs"
            style={{ background: '#F7F5F2', color: '#6B6B6B', borderLeft: '3px solid #1A1A1A' }}
          >
            MeubelBaas scoort op alle benchmarkpunten boven het branchegemiddelde.
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
