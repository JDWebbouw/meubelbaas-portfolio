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
    <div className="min-h-screen" style={{ background: '#F7F5F2' }}>
      <Navbar />

      <main>
        <Home />

        <div style={{ background: '#FFFFFF' }}>
          <Over />
        </div>

        <div style={{ background: '#F7F5F2' }}>
          <CustomerJourney />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <Markt />
        </div>

        <div style={{ background: '#1A1A1A' }}>
          <KpiDashboard />
        </div>

        <div style={{ background: '#F7F5F2' }}>
          <Verkoop />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <Systemen />
        </div>

        <div style={{ background: '#F7F5F2' }}>
          <Financieel />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <AVG />
        </div>

        <div style={{ background: '#F7F5F2' }}>
          <Duurzaamheid />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <Advies />
        </div>

        <div style={{ background: '#F7F5F2' }}>
          <Conclusie />
        </div>

        <div style={{ background: '#FFFFFF' }}>
          <Reflectie />
        </div>

        <div style={{ background: '#F7F5F2' }}>
          <Bronnen />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
