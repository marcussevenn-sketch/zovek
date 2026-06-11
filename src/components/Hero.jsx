import { useEffect, useRef } from 'react'

const NODES = [
  { id: 'demand', label: 'Demand', sub: 'Google · Meta', cx: 50, cy: 14 },
  { id: 'conversion', label: 'Conversion', sub: 'Pages · CRO', cx: 82, cy: 33 },
  { id: 'pipeline', label: 'Pipeline', sub: 'CRM · Qualify', cx: 82, cy: 65 },
  { id: 'retention', label: 'Retention', sub: 'Email · SMS', cx: 50, cy: 85 },
  { id: 'intel', label: 'Intelligence', sub: 'Attribution · Data', cx: 18, cy: 65 },
  { id: 'telesales', label: 'Telesales', sub: 'Direct · Close', cx: 18, cy: 33 },
]
const EDGES = [
  ['demand', 'conversion'], ['conversion', 'pipeline'], ['pipeline', 'retention'],
  ['retention', 'intel'], ['intel', 'telesales'], ['telesales', 'demand'],
  ['demand', 'pipeline'], ['conversion', 'intel'],
]

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.hi')
    els?.forEach((el, i) => setTimeout(() => el.classList.add('visible'), 80 + i * 160))
  }, [])

  const W = 420
  const H = 420
  const pos = (id) => {
    const n = NODES.find((node) => node.id === id)
    return [n.cx / 100 * W, n.cy / 100 * H]
  }

  return (
    <section ref={ref} className="relative bg-white min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 40%, white 100%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
        <div>
          <div className="hi reveal flex items-center gap-3 mb-10">
            <span className="inline-block w-1.5 h-1.5 rounded-full colour-text" style={{ background: 'currentColor' }} />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#999]">
              Revenue Infrastructure Company
            </span>
          </div>
          <h1
            className="hi reveal font-display font-black leading-[1.0] tracking-[-3px] text-[#0a0a0a] mb-6"
            style={{ fontSize: 'clamp(42px, 5.5vw, 74px)' }}
          >
            Revenue<br />
            is a<br />
            <span className="colour-grad-text">system.</span>
          </h1>
          <p className="hi reveal text-[#666] text-[17px] leading-[1.8] max-w-[440px] mb-3">
            Zovek builds the complete infrastructure behind predictable revenue — from first click to closed deal.
          </p>
          <p className="hi reveal text-[#999] text-[13px] leading-relaxed max-w-[400px] mb-12">
            Demand generation. Conversion systems. Pipeline intelligence. Direct telesales. One team. Full accountability.
          </p>
          <div className="hi reveal flex flex-wrap gap-4 mb-16">
            <a href="#contact" className="btn-grad colour-grad">
              Book a strategy call
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#system" className="btn-outline-dark">
              See the system
            </a>
          </div>
          <div className="hi reveal grid grid-cols-3 gap-6 pt-8 border-t border-black/[0.07]">
            {[
              ['4.2×', 'Avg ROAS'],
              ['38%', '↓ Cost per lead'],
              ['90d', 'Full system live'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display font-black text-[22px] tracking-[-1px] text-[#0a0a0a] leading-none mb-1">
                  {n}
                </div>
                <div className="text-[11px] text-[#999] uppercase tracking-[0.06em]">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hi reveal flex items-center justify-center">
          <div className="relative" style={{ width: 420, height: 420, maxWidth: '100%' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${H}`} fill="none">
              <defs>
                <linearGradient id="eg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a5cff" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {EDGES.map(([a, b], i) => {
                const [x1, y1] = pos(a)
                const [x2, y2] = pos(b)
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#eg)"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                    style={{
                      animation: `flowDash ${2.5 + i * 0.35}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                )
              })}
              <circle cx={W / 2} cy={H / 2} r="50" stroke="#0a0a0a" strokeWidth="0.5" strokeOpacity="0.06" />
              <circle cx={W / 2} cy={H / 2} r="90" stroke="#0a0a0a" strokeWidth="0.5" strokeOpacity="0.04" />
              <circle cx={W / 2} cy={H / 2} r="130" stroke="#0a0a0a" strokeWidth="0.5" strokeOpacity="0.03" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="text-center">
                <div className="font-display font-black text-[9px] tracking-[0.14em] uppercase text-[#bbb] mb-0.5">
                  Zovek
                </div>
                <div className="colour-grad-text font-display font-black text-[12px] tracking-tight">Revenue OS™</div>
              </div>
            </div>

            {NODES.map((n, i) => (
              <div
                key={n.id}
                className="absolute z-20 text-center node-pulse"
                style={{
                  left: `${n.cx}%`,
                  top: `${n.cy}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <div
                  className="bg-white border border-[#e8e8e8] rounded-2xl px-3 py-2 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default"
                  style={{ minWidth: 80 }}
                >
                  <div className="font-display font-black text-[9px] text-[#0a0a0a] tracking-tight whitespace-nowrap">
                    {n.label}
                  </div>
                  <div className="text-[8px] text-[#999] whitespace-nowrap mt-0.5">{n.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />
    </section>
  )
}
