import { useReveal } from '../hooks/useReveal'

const STATS = [
  { number: '4.2', sup: '×', label: 'Average ROAS' },
  { number: '38', sup: '%', label: 'Lower cost per lead' },
  { number: '£2M', sup: '+', label: 'Ad spend managed' },
  { number: '90', sup: 'd', label: 'To full system live' },
]

export default function Stats() {
  const ref = useReveal()

  return (
    <div ref={ref} className="border-y border-[#e8e8e8] py-12 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`reveal reveal-delay-${i + 1} py-4 md:py-0 px-0 md:px-10 ${i < STATS.length - 1 ? 'md:border-r border-[#e8e8e8]' : ''}`}
          >
            <div className="font-display font-black text-[36px] tracking-[-2px] text-[#0a0a0a] leading-none mb-2 flex items-baseline gap-0.5">
              {s.number}
              <span className="text-[18px] tracking-tight colour-text">{s.sup}</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.06em] text-[#999]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
