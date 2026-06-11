import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur border-b border-[#e8e8e8]' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />
      <div className="max-w-[1280px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-black text-[16px] tracking-tight text-[#0a0a0a] no-underline">
          ZOVEK<span className="colour-text inline-block">.</span>
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {[
            ['System', '#system'],
            ['Infrastructure', '#infrastructure'],
            ['Results', '#results'],
            ['Contact', '#contact'],
          ].map(([l, h]) => (
            <li key={l}>
              <a
                href={h}
                className="text-[12px] font-medium tracking-[0.03em] text-[#666] no-underline hover:text-[#0a0a0a] transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-grad colour-grad text-[12px] px-5 py-2.5">
          Book a strategy call
        </a>
      </div>
    </nav>
  )
}
