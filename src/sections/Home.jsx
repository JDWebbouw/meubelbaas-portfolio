import { useEffect, useRef } from 'react'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { gsap } from 'gsap'

export default function Home() {
  const heroRef = useRef(null)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.fromTo('.hero-eyebrow', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
        .fromTo('.hero-title', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.6 }, 0.45)
        .fromTo('.hero-sub', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 0.6)
        .fromTo('.hero-body', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, 0.72)
        .fromTo('.hero-cta', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, 0.84)
        .fromTo('.hero-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.055 }, 0.5)
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.4 }, 1.2)
    }, el)
    return () => ctx.revert()
  }, [])

  const infoCards = [
    { label: 'Bedrijf', value: 'MeubelBaas' },
    { label: 'Platform', value: 'Shopify' },
    { label: 'Verkoopregio', value: 'NL & BE' },
    { label: 'Businessmodel', value: 'B2C' },
    { label: 'Maandomzet', value: '€500.000' },
    { label: 'Conversieratio', value: '20,8%' },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden"
      style={{ background: '#F7F5F2' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <div>
            <p
              className="hero-eyebrow mb-7"
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#6B6B6B',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                opacity: 0,
              }}
            >
              Module 6 — E-commerce Analyse
            </p>

            <h1
              className="hero-title font-bold leading-[0.96] mb-6"
              style={{
                fontSize: 'clamp(3.2rem, 7.5vw, 6rem)',
                color: '#1A1A1A',
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '-0.02em',
                opacity: 0,
              }}
            >
              Jayden<br />
              <span style={{ fontStyle: 'italic' }}>Bouwman</span>
            </h1>

            <div className="hero-sub flex items-center gap-3 mb-6" style={{ opacity: 0 }}>
              <span className="w-8 h-px flex-shrink-0" style={{ background: '#1A1A1A' }} />
              <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: '#6B6B6B' }}>
                E-commerce Specialist
              </p>
            </div>

            <p
              className="hero-body leading-relaxed mb-10 max-w-[500px]"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', color: '#6B6B6B', opacity: 0 }}
            >
              In dit portfolio presenteer ik een uitgebreide e-commerce analyse van{' '}
              <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>MeubelBaas</strong> – een Nederlandse
              meubelwebshop gespecialiseerd in mangohouten meubels. Alle analyses, conclusies en
              verbeteradviezen worden hieronder gepresenteerd.
            </p>

            <div className="hero-cta flex flex-wrap gap-3" style={{ opacity: 0 }}>
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('kpi')}
                className="group flex items-center gap-0 pl-5 pr-1.5 py-1.5 rounded-full font-medium text-white text-sm"
                style={{
                  background: '#1A1A1A',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)'
                }}
              >
                Bekijk KPI Dashboard
                <span
                  className="ml-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <ArrowDown size={14} />
                </span>
              </button>

              {/* Secondary CTA */}
              <a
                href="https://www.meubelbaas.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0 pl-5 pr-1.5 py-1.5 rounded-full font-medium text-sm border"
                style={{
                  borderColor: '#E8E4DE',
                  color: '#1A1A1A',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.borderColor = '#1A1A1A'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = '#E8E4DE'
                }}
              >
                MeubelBaas.nl
                <span
                  className="ml-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.05)' }}
                >
                  <ExternalLink size={13} />
                </span>
              </a>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="hero-card bg-white rounded-lg p-5"
                style={{
                  border: '1px solid #E8E4DE',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  opacity: 0,
                  transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
                }}
              >
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-2"
                  style={{ color: '#9CA3AF' }}
                >
                  {card.label}
                </div>
                <div className="font-semibold text-sm" style={{ color: '#1A1A1A' }}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll flex justify-center mt-20" style={{ opacity: 0 }}>
          <button
            onClick={() => scrollTo('over')}
            className="flex flex-col items-center gap-3 transition-all duration-300 group"
            style={{ color: '#9CA3AF' }}
          >
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase">Scroll naar beneden</span>
            <div
              className="w-7 h-11 rounded-full flex items-start justify-center p-2 transition-opacity group-hover:opacity-70"
              style={{ border: '1px solid #E8E4DE' }}
            >
              <div className="w-1 h-2.5 rounded-full" style={{ background: '#9CA3AF', animation: 'bounce 1.5s infinite' }} />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
