import { useReveal } from '../hooks/useReveal'

const stats = [
  { number: '4.2', sup: '×', label: 'Average ROAS' },
  { number: '38', sup: '%', label: 'Lower cost per lead' },
  { number: '£2M', sup: '+', label: 'Ad spend managed' },
  { number: '90', sup: 'd', label: 'To full system live' },
]

export default function Stats() {
  const ref = useReveal()

  return (
    <div ref={ref} className="border-b border-rule py-12 px-[5%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`reveal reveal-delay-${i + 1} px-0 md:px-10 py-4 md:py-0 ${
              i < stats.length - 1 ? 'md:border-r border-rule' : ''
            }`}
          >
            <div className="font-display font-black text-[38px] tracking-[-2px] text-ink leading-none mb-2 flex items-baseline gap-[2px]">
              {s.number}
              <span className="text-[20px] tracking-tight colour-text">{s.sup}</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.06em] text-ink-light">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
