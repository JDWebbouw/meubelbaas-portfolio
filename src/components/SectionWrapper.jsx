import { useEffect, useRef } from 'react'

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`section-fade py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full ${className}`}
    >
      {children}
    </section>
  )
}
