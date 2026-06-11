import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.hero-reveal')
    els?.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 100 + i * 140)
    })
  }, [])

  return (
    <section ref={ref} className="relative bg-ink min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden">

      {/* Gradient accent top bar */}
      <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />

      {/* Background texture — subtle radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 20%, rgba(26,92,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-[5%] w-full relative z-10">

        {/* Eyebrow */}
        <div className="hero-reveal reveal flex items-center gap-3 mb-10">
          <span
            className="inline-block w-2 h-2 rounded-full colour-text"
            style={{ background: 'currentColor' }}
          />
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/40">
            Performance acquisition agency
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-reveal reveal font-display font-black leading-[1.02] tracking-[-3px] text-white mb-8"
          style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}
        >
          We generate<br />
          the lead.<br />
          <span className="colour-text">We close it.</span>
        </h1>

        {/* Sub */}
        <p className="hero-reveal reveal text-white/50 text-lg leading-relaxed max-w-[480px] mb-12">
          Zovek runs the full revenue cycle — paid media to land the prospect, then direct telesales to convert them. One team. End-to-end accountability.
        </p>

        {/* Actions */}
        <div className="hero-reveal reveal flex flex-wrap items-center gap-4">
          <a href="#contact" className="btn-grad colour-grad">
            Book a call
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#how-we-work" className="text-white/50 hover:text-white text-[14px] font-medium transition-colors duration-200 flex items-center gap-2">
            See how it works
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Horizontal rule + scroll hint */}
        <div className="hero-reveal reveal mt-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-white/20 text-[11px] tracking-[0.1em] uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
