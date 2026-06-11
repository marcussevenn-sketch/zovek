import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur border-b border-rule' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-[5%] h-16 flex items-center justify-between">
        <a href="#" className="font-display font-black text-[17px] tracking-tight text-ink no-underline">
          ZOVEK<span className="colour-text inline-block">.</span>
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          {['Services', 'How we work', 'Results'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-[13px] font-medium text-ink-mid no-underline hover:text-ink transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-grad colour-grad text-[13px] px-5 py-[10px]">
          Book a call
        </a>
      </div>
    </nav>
  )
}
