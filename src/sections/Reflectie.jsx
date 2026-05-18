import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'

const starItems = [
  {
    letter: 'S',
    label: 'Situatie',
    color: '#3B82F6',
    bg: '#EFF6FF',
    content: `In het kader van Module 6 E-commerce Analyse van mijn opleiding kreeg ik de opdracht om een uitgebreide e-commerce analyse uit te voeren voor een Nederlands bedrijf naar keuze. Ik koos voor MeubelBaas, een meubelwebshop in Apeldoorn gespecialiseerd in mangohouten meubels, omdat ik geïnteresseerd was in de combinatie van fysieke retail en online verkoop.

De opdracht omvatte het analyseren van de customer journey, KPI's, marktpositie, digitale systemen, financiële structuur en duurzaamheid van het bedrijf, en het doen van concrete verbeteradviezen.`,
  },
  {
    letter: 'T',
    label: 'Taak',
    color: '#8B5E3C',
    bg: '#F5EDE0',
    content: `Mijn taak was om alle aspecten van de e-commerce omgeving van MeubelBaas grondig te analyseren en op basis hiervan een professioneel onderbouwd adviesrapport op te stellen. Dit rapport moest zowel voor de docenten als voor het management van MeubelBaas bruikbaar zijn.

Specifieke verantwoordelijkheden:
• Verzamelen en analyseren van bedrijfsdata en KPI's
• Uitvoeren van een SWOT- en concurrentieanalyse
• Analyseren van de customer journey op basis van het See-Think-Do-Care model
• Opstellen van concrete, haalbare verbeteradviezen
• Presenteren van bevindingen in een professioneel portfolio`,
  },
  {
    letter: 'A',
    label: 'Actie',
    color: '#10B981',
    bg: '#ECFDF5',
    content: `Om mijn taken uit te voeren heb ik een gestructureerde aanpak gehanteerd:

1. Bedrijfsonderzoek: Ik heb de website van MeubelBaas uitgebreid geanalyseerd, contacten gelegd via de contactpersoon Mathe Booij en openbaar beschikbare data bestudeerd.

2. Theoretische kaders: Ik paste het See-Think-Do-Care model toe op de klantreis, gebruikte SWOT-analyse voor de marktpositie en keek naar financiële KPI's vanuit een e-commerce perspectief.

3. Dataverzameling: De aangeleverde KPI's (conversieratio, retourpercentage, bounce rate, etc.) vormden de basis voor mijn kwantitatieve analyse.

4. Adviesvorming: Op basis van de bevindingen stelde ik zes concrete verbeteradviezen op, geprioriteerd op impact en haalbaarheid.

5. Portfolio: Alle inzichten werden verwerkt in dit interactieve portfolio met React en Tailwind CSS voor een professionele presentatie.`,
  },
  {
    letter: 'R',
    label: 'Resultaat',
    color: '#F59E0B',
    bg: '#FFFBEB',
    content: `De analyse leverde waardevolle inzichten op voor zowel mijn eigen leerproces als voor MeubelBaas:

Wat ik heb geleerd:
• Hoe je KPI's interpreteert in de context van de meubelsector
• Het toepassen van theoretische modellen op een reëel bedrijf
• Het structureren en presenteren van complexe analyses
• Het belang van datagedreven besluitvorming in e-commerce

Resultaten voor MeubelBaas:
• Concrete verbeteradviezen met verwacht ROI-potentieel
• Inzicht in de sterke positie (20,8% conversieratio) en verbeterpunten
• Prioriteitenlijst voor directe implementatie

Persoonlijke groei:
Dit project heeft mijn analytisch vermogen versterkt en me geleerd hoe je als e-commerce specialist waarde kunt toevoegen aan een organisatie. De combinatie van kwantitatieve data-analyse en strategisch advies sluit perfect aan bij mijn ambities als e-commerce professional.`,
  },
]

export default function Reflectie() {
  return (
    <SectionWrapper id="reflectie">
      <SectionHeader
        label="Reflectie"
        title="STAR-methode Reflectie"
        subtitle="Persoonlijke reflectie op het uitvoeren van de e-commerce analyse voor MeubelBaas als onderdeel van Module 6."
      />

      <div className="space-y-6">
        {starItems.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="flex">
              {/* Left: letter */}
              <div
                className="w-20 flex-shrink-0 flex items-center justify-center"
                style={{ background: item.color }}
              >
                <span className="text-4xl font-extrabold text-white">{item.letter}</span>
              </div>

              <div className="flex-1 p-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ background: item.bg, color: item.color }}
                >
                  {item.label}
                </div>
                <div className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competenties */}
      <div
        className="mt-8 rounded-2xl p-6"
        style={{ background: 'linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)' }}
      >
        <h3 className="font-bold text-white text-lg mb-4">Ontwikkelde competenties</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { comp: 'Analytisch denken', icon: '🔍' },
            { comp: 'Datavisualisatie', icon: '📊' },
            { comp: 'Strategisch advies', icon: '🎯' },
            { comp: 'E-commerce expertise', icon: '🛒' },
            { comp: 'Presentatievaardigheden', icon: '🖥️' },
            { comp: 'Projectmanagement', icon: '📋' },
            { comp: 'Kritisch denken', icon: '💡' },
            { comp: 'Professioneel schrijven', icon: '✍️' },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white/15 rounded-xl p-3 text-center hover:bg-white/20 transition-colors"
            >
              <div className="text-2xl mb-1">{c.icon}</div>
              <div className="text-amber-100 text-xs font-medium">{c.comp}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
