import { useReveal } from '../hooks/useReveal'

const services = [
  {
    num: '01',
    name: 'Paid media',
    desc: 'Google Ads for high-intent search capture. Meta Ads for demand generation and retargeting. Every campaign mapped to a specific offer and outcome.',
  },
  {
    num: '02',
    name: 'Telesales & closing',
    desc: 'We don\'t just generate leads — we call them. A proven consultative sales process that converts qualified prospects into paying clients.',
  },
  {
    num: '03',
    name: 'Conversion infrastructure',
    desc: 'Landing pages built for single-objective outcomes. A/B tested creatives. Every element accountable to conversion rate, not just traffic.',
  },
  {
    num: '04',
    name: 'CRM & attribution',
    desc: 'Every lead tracked end-to-end. Cost per acquisition, close rates, revenue impact — all visible. Attribution that tells the truth.',
  },
  {
    num: '05',
    name: 'Retargeting sequences',
    desc: 'Multi-channel retargeting across Meta, Google Display, email and SMS. Engineered to recover missed conversions and re-engage cold prospects.',
  },
  {
    num: '06',
    name: 'Optimisation loops',
    desc: 'Ongoing performance cycles driven by real close data. Each loop lowers cost per acquisition while increasing lifetime customer value.',
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" ref={ref} className="bg-white py-24 md:py-32 px-[5%]">
      <div className="max-w-[1200px] mx-auto">

        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="section-label">
              <span className="colour-grad-bar inline-block w-5 h-0.5 rounded flex-shrink-0" />
              Services
            </div>
            <h2
              className="font-display font-black text-ink tracking-[-1.5px] leading-[1.08]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
            >
              The full acquisition stack
            </h2>
          </div>
          <p className="text-ink-mid text-[16px] leading-relaxed max-w-[380px] md:text-right">
            Every piece engineered to work together — not isolated campaigns, but a system that learns and compounds.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 border border-rule rounded-2xl overflow-hidden"
          style={{ background: '#e5e5e5', gap: '1px' }}
        >
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-white p-9 hover:bg-surface transition-colors duration-200 group`}
            >
              <div className="font-display font-black text-[11px] tracking-[0.1em] colour-text mb-5">
                {s.num}
              </div>
              <h3 className="font-display font-bold text-ink text-[15px] tracking-[-0.3px] leading-snug mb-3">
                {s.name}
              </h3>
              <p className="text-ink-mid text-[14px] leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
