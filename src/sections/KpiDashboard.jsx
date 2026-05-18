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
  { name: 'Google Ads', value: 65, color: '#4285F4' },
  { name: 'Organisch', value: 20, color: '#8B5E3C' },
  { name: 'Direct', value: 10, color: '#D4A97A' },
  { name: 'Social', value: 5, color: '#10B981' },
]

const kpis = [
  {
    label: 'Maandomzet',
    value: '€500.000',
    sub: '+3,1% t.o.v. vorige maand',
    trend: 'up',
    icon: '💰',
    color: '#10B981',
  },
  {
    label: 'Bezoekers/maand',
    value: '4.000',
    sub: 'Stabiel t.o.v. vorige maand',
    trend: 'neutral',
    icon: '👥',
    color: '#3B82F6',
  },
  {
    label: 'Gem. orderwaarde',
    value: '€600',
    sub: 'Per bestelling',
    trend: 'neutral',
    icon: '🛒',
    color: '#8B5E3C',
  },
  {
    label: 'Bestellingen',
    value: '±833',
    sub: 'Per maand',
    trend: 'up',
    icon: '📦',
    color: '#F59E0B',
  },
  {
    label: 'Conversieratio',
    value: '20,8%',
    sub: 'Branchegemiddelde: 2-4%',
    trend: 'up',
    icon: '📈',
    color: '#10B981',
  },
  {
    label: 'Retourpercentage',
    value: '6%',
    sub: 'Grotendeels door transportschade',
    trend: 'down',
    icon: '↩️',
    color: '#EF4444',
  },
  {
    label: 'Bounce rate',
    value: '38%',
    sub: 'Landingspagina\'s optimaliseren',
    trend: 'neutral',
    icon: '🔄',
    color: '#8B5CF6',
  },
  {
    label: 'Gem. sessieduur',
    value: '3:24 min',
    sub: 'Positief teken van betrokkenheid',
    trend: 'up',
    icon: '⏱️',
    color: '#D4A97A',
  },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-stone-100 rounded-xl shadow-lg p-3">
        <p className="font-bold text-stone-800 text-sm mb-2">{label}</p>
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{kpi.icon}</span>
              <div>
                {kpi.trend === 'up' && <TrendingUp size={16} className="text-green-500" />}
                {kpi.trend === 'down' && <TrendingDown size={16} className="text-red-500" />}
                {kpi.trend === 'neutral' && <Minus size={16} className="text-stone-400" />}
              </div>
            </div>
            <div className="text-2xl font-extrabold text-stone-900 mb-1">{kpi.value}</div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">{kpi.label}</div>
            <div className="text-xs text-stone-400">{kpi.sub}</div>
            <div className="mt-3 h-1 rounded-full bg-stone-100">
              <div className="h-full rounded-full w-3/4" style={{ background: kpi.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Omzet chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-bold text-stone-800 mb-1">Maandelijkse omzet</h3>
          <p className="text-stone-400 text-xs mb-5">Januari – Juni (in euro's)</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={maandData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="omzetGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5E3C" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8B5E3C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
              <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false}
                tickFormatter={v => `€${(v/1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="omzet" name="Omzet" stroke="#8B5E3C" strokeWidth={2.5}
                fill="url(#omzetGrad)" dot={{ fill: '#8B5E3C', r: 4 }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bezoekers / bestellingen */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-bold text-stone-800 mb-1">Bezoekers & Bestellingen</h3>
          <p className="text-stone-400 text-xs mb-5">Januari – Juni</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={maandData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
              <XAxis dataKey="maand" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="bezoekers" name="Bezoekers" fill="#D4A97A" radius={[4,4,0,0]} />
              <Bar dataKey="bestellingen" name="Bestellingen" fill="#8B5E3C" radius={[4,4,0,0]} />
              <Legend formatter={(v) => <span className="text-xs text-stone-600">{v}</span>} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic pie */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-bold text-stone-800 mb-1">Verkeersbronnen</h3>
          <p className="text-stone-400 text-xs mb-5">Verdeling per kanaal (%)</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={verkeerData} cx="50%" cy="50%" innerRadius={55} outerRadius={85}
                dataKey="value" nameKey="name" paddingAngle={3}>
                {verkeerData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
              <Legend formatter={(v) => <span className="text-xs text-stone-600">{v}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Benchmark */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-bold text-stone-800 mb-4">Benchmark vs. branche</h3>
          <div className="space-y-4">
            {[
              { label: 'Conversieratio', mb: '20,8%', branch: '2-4%', good: true },
              { label: 'Bounce rate', mb: '38%', branch: '45-55%', good: true },
              { label: 'Retourpercentage', mb: '6%', branch: '10-15%', good: true },
              { label: 'Gem. orderwaarde', mb: '€600', branch: '€300-400', good: true },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-stone-600 w-36">{row.label}</span>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold ${row.good ? 'text-green-600' : 'text-red-500'}`}>
                    {row.mb}
                  </span>
                  <span className="text-xs text-stone-400">vs.</span>
                  <span className="text-sm text-stone-400">{row.branch}</span>
                  <span className="text-green-500 text-sm">✓</span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-4 p-3 rounded-xl text-xs"
            style={{ background: '#ECFDF5', color: '#065F46' }}
          >
            MeubelBaas scoort op alle benchmarkpunten boven het branchegemiddelde.
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
