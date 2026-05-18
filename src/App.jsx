import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import Over from './sections/Over'
import CustomerJourney from './sections/CustomerJourney'
import Markt from './sections/Markt'
import KpiDashboard from './sections/KpiDashboard'
import Verkoop from './sections/Verkoop'
import Systemen from './sections/Systemen'
import Financieel from './sections/Financieel'
import AVG from './sections/AVG'
import Duurzaamheid from './sections/Duurzaamheid'
import Advies from './sections/Advies'
import Conclusie from './sections/Conclusie'
import Reflectie from './sections/Reflectie'
import Bronnen from './sections/Bronnen'

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#FDFAF6' }}>
      <Navbar />

      <main>
        <Home />

        {/* Alternating section backgrounds */}
        <div style={{ background: '#FFFFFF' }}>
          <Over />
        </div>

        <div style={{ background: '#FDFAF6' }}>
          <CustomerJourney />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <Markt />
        </div>

        {/* KPI Dashboard with special background */}
        <div style={{ background: 'linear-gradient(180deg, #1A1208 0%, #2D1F0E 100%)' }}>
          <div className="py-2">
            <KpiDashboard />
          </div>
        </div>

        <div style={{ background: '#FDFAF6' }}>
          <Verkoop />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <Systemen />
        </div>

        <div style={{ background: '#FDFAF6' }}>
          <Financieel />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <AVG />
        </div>

        <div style={{ background: '#FDFAF6' }}>
          <Duurzaamheid />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <Advies />
        </div>

        <div style={{ background: 'linear-gradient(135deg, #F5EDE0 0%, #EDD9C0 100%)' }}>
          <Conclusie />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <Reflectie />
        </div>

        <div style={{ background: '#FDFAF6' }}>
          <Bronnen />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
