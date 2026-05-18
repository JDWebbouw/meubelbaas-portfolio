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
      tl.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
        .fromTo('.hero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, 0.5)
        .fromTo('.hero-sub', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 0.75)
        .fromTo('.hero-body', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.9)
        .fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 1.05)
        .fromTo('.hero-card', { opacity: 0, y: 28, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.07 }, 0.6)
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.4)
    }, el)

    return () => ctx.revert()
  }, [])

  const infoCards = [
    { label: 'Bedrijf', value: 'MeubelBaas', icon: '🪵' },
    { label: 'Platform', value: 'Shopify', icon: '🛒' },
    { label: 'Verkoopregio', value: 'NL & BE', icon: '🇳🇱' },
    { label: 'Businessmodel', value: 'B2C', icon: '🤝' },
    { label: 'Maandomzet', value: '€500.000', icon: '💰' },
    { label: 'Conversieratio', value: '20,8%', icon: '📈' },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(160deg, #FDFAF6 0%, #F8EFE3 55%, #EDD9C0 100%)' }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute -z-10"
        style={{
          top: '8%', right: '5%',
          width: '560px', height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #D4A97A 0%, transparent 70%)',
          filter: 'blur(72px)',
          opacity: 0.22,
        }}
      />
      <div
        className="absolute -z-10"
        style={{
          bottom: '5%', left: '3%',
          width: '420px', height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #8B5E3C 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.13,
        }}
      />

      {/* Subtle wood grain lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden" style={{ opacity: 0.035 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: '-25%', width: '150%', height: '1px',
              background: '#8B5E3C',
              top: `${15 + i * 15}%`,
              transform: `rotate(${i % 2 === 0 ? 1.5 : -1}deg)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <div>
            {/* Eyebrow tag */}
            <div
              className="hero-eyebrow inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(139,94,60,0.10)', color: '#8B5E3C', opacity: 0 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#8B5E3C', animation: 'pulse 2s infinite' }}
              />
              Module 6 – E-commerce Analyse
            </div>

            {/* Main heading */}
            <h1
              className="hero-title font-extrabold leading-[0.93] tracking-tight mb-6"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                color: '#2D1F0E',
                fontFamily: 'Syne, sans-serif',
                opacity: 0,
              }}
            >
              Jayden
              <span className="block" style={{ color: '#8B5E3C' }}>Bouwman</span>
            </h1>

            {/* Subtitle row */}
            <div
              className="hero-sub flex items-center gap-3 mb-6"
              style={{ opacity: 0 }}
            >
              <span className="w-8 h-px flex-shrink-0" style={{ background: '#8B5E3C' }} />
              <p
                className="text-sm font-bold uppercase tracking-[0.18em]"
                style={{ color: '#6B4226' }}
              >
                E-commerce Specialist
              </p>
            </div>

            {/* Body copy */}
            <p
              className="hero-body text-stone-600 leading-relaxed mb-10 max-w-[520px]"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', opacity: 0 }}
            >
              In dit portfolio presenteer ik een uitgebreide e-commerce analyse van{' '}
              <strong style={{ color: '#8B5E3C' }}>MeubelBaas</strong> – een Nederlandse meubelwebshop
              gespecialiseerd in mangohouten meubels. Alle analyses, conclusies en verbeteradviezen
              worden hieronder gepresenteerd.
            </p>

            {/* CTAs — button-in-button pattern */}
            <div className="hero-cta flex flex-wrap gap-3" style={{ opacity: 0 }}>
              {/* Primary */}
              <button
                onClick={() => scrollTo('kpi')}
                className="group flex items-center gap-0 pl-5 pr-1.5 py-1.5 rounded-full font-semibold text-white text-sm"
                style={{
                  background: 'linear-gradient(135deg, #8B5E3C, #6B4226)',
                  transition: 'all 0.5s cubic-bezier(0.32,0.72,0,1)',
                  boxShadow: '0 4px 16px rgba(139,94,60,0.25)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(139,94,60,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(139,94,60,0.25)'
                }}
              >
                Bekijk KPI Dashboard
                <span
                  className="ml-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400"
                  style={{
                    background: 'rgba(255,255,255,0.18)',
                    transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  }}
                >
                  <ArrowDown size={14} />
                </span>
              </button>

              {/* Secondary */}
              <a
                href="https://www.meubelbaas.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-0 pl-5 pr-1.5 py-1.5 rounded-full font-semibold text-sm border-2"
                style={{
                  borderColor: '#8B5E3C',
                  color: '#8B5E3C',
                  transition: 'all 0.5s cubic-bezier(0.32,0.72,0,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                MeubelBaas.nl
                <span
                  className="ml-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(139,94,60,0.09)', transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)' }}
                >
                  <ExternalLink size={13} />
                </span>
              </a>
            </div>
          </div>

          {/* Right — double-bezel info cards */}
          <div className="grid grid-cols-2 gap-3">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="hero-card rounded-[1.25rem] p-[3px]"
                style={{
                  background: 'rgba(139,94,60,0.07)',
                  border: '1px solid rgba(139,94,60,0.11)',
                  opacity: 0,
                  transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(139,94,60,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="bg-white rounded-[calc(1.25rem-3px)] p-5 h-full"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8)' }}
                >
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1"
                    style={{ color: '#a8a29e' }}
                  >
                    {card.label}
                  </div>
                  <div className="font-bold text-stone-800 text-sm">{card.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll flex justify-center mt-20" style={{ opacity: 0 }}>
          <button
            onClick={() => scrollTo('over')}
            className="flex flex-col items-center gap-3 transition-all duration-300 group"
            style={{ color: '#b0967c' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase opacity-60">
              Scroll naar beneden
            </span>
            <div
              className="w-7 h-11 rounded-full flex items-start justify-center p-2 opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ border: '1px solid currentColor' }}
            >
              <div
                className="w-1 h-2.5 rounded-full"
                style={{ background: '#8B5E3C', animation: 'bounce 1.5s infinite' }}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
