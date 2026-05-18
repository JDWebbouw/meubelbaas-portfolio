import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import { MapPin, Phone, Users, Package } from 'lucide-react'

const usps = [
  { icon: '🛋️', title: 'Groot assortiment', desc: 'Uitgebreide collectie mangohouten meubels online beschikbaar.' },
  { icon: '📅', title: '7 dagen open', desc: 'Zowel de winkel als website zijn 7 dagen per week bereikbaar.' },
  { icon: '🏪', title: 'Winkel & Outlet', desc: 'Fysieke locaties in Apeldoorn voor een complete winkelervaring.' },
  { icon: '👥', title: 'Jong team', desc: 'Enthousiast en klantgericht team dat altijd klaarstaat.' },
]

const info = [
  { icon: <MapPin size={16} />, label: 'Winkel', value: 'Vlijtseweg 206, Apeldoorn' },
  { icon: <MapPin size={16} />, label: 'Outlet', value: 'Vlijtseweg 134, Apeldoorn' },
  { icon: <Users size={16} />, label: 'Contactpersoon', value: 'Mathe Booij' },
  { icon: <Package size={16} />, label: 'Productfocus', value: 'Mangohouten meubels' },
]

export default function Over() {
  return (
    <SectionWrapper id="over">
      <SectionHeader
        label="Bedrijfsprofiel"
        title="Over MeubelBaas"
        subtitle="MeubelBaas is een Nederlandse meubelwebshop met een fysieke winkel en outlet in Apeldoorn, gespecialiseerd in mangohouten meubels voor de consumentenmarkt."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Bedrijfsinfo */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 h-full">
            <h3 className="font-bold text-stone-800 mb-5 text-lg">Bedrijfsgegevens</h3>
            <div className="space-y-4">
              {info.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#F5EDE0', color: '#8B5E3C' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 font-medium">{item.label}</div>
                    <div className="text-stone-800 font-medium text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-stone-100">
              <div className="text-xs text-stone-400 font-medium mb-2">Businessmodel</div>
              <div className="flex gap-2 flex-wrap">
                {['B2C', 'Nederland', 'België', 'Shopify'].map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ background: '#F5EDE0', color: '#8B5E3C' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100">
              <div className="text-xs text-stone-400 font-medium mb-2">Concurrenten</div>
              <div className="flex gap-2 flex-wrap">
                {['HUUS', 'GOOS', 'Meubella'].map(c => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-600 font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* USPs */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-stone-800 mb-5 text-lg">Unique Selling Points</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {usps.map((usp, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-amber-200 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{usp.icon}</div>
                <h4 className="font-bold text-stone-800 mb-2 group-hover:text-amber-800 transition-colors">
                  {usp.title}
                </h4>
                <p className="text-stone-500 text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>

          {/* Doelgroep */}
          <div
            className="mt-6 rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Users size={20} className="text-amber-200" />
              <h4 className="font-bold text-white text-lg">Doelgroep</h4>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Volwassen consumenten in Nederland en België die op zoek zijn naar kwalitatieve,
              stijlvolle mangohouten meubels voor thuis. De klant waardeert authenticiteit,
              kwaliteit en de mogelijkheid om producten ook fysiek te bekijken.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
