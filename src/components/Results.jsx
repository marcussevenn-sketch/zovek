import { useReveal } from '../hooks/useReveal'

export default function Results() {
  const ref = useReveal()

  return (
    <section id="results" ref={ref} className="bg-surface py-24 md:py-32 px-[5%]">
      <div className="max-w-[1200px] mx-auto">

        <div className="reveal mb-16">
          <div className="section-label">
            <span className="colour-grad-bar inline-block w-5 h-0.5 rounded flex-shrink-0" />
            Results
          </div>
          <h2
            className="font-display font-black text-ink tracking-[-1.5px] leading-[1.08]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
          >
            Engineered demand,<br />not lucky campaigns
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Featured card — dark */}
          <div className="reveal md:col-span-2 relative bg-ink rounded-2xl p-10 md:p-12 grid md:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />
            <div>
              <p
                className="font-display font-bold text-white leading-[1.38] mb-6"
                style={{ fontSize: 'clamp(18px, 2.2vw, 24px)' }}
              >
                "We stopped guessing which campaigns were working. Now we know exactly where every sale comes from."
              </p>
              <p className="text-white/35 text-[12px] tracking-[0.04em]">— Director of Growth, B2B SaaS</p>
            </div>
            <div className="flex flex-col gap-7">
              {[
                { num: '4.8×', label: 'Return on ad spend' },
                { num: '£340k', label: 'Revenue attributed in 6 months' },
                { num: '41%', label: 'Reduction in cost per lead' },
              ].map((stat) => (
                <div key={stat.label} className="pl-5 border-l-2 colour-text" style={{ borderColor: 'currentColor' }}>
                  <div className="font-display font-black text-white text-[34px] tracking-[-1.5px] leading-none mb-1">
                    {stat.num}
                  </div>
                  <div className="text-white/40 text-[12px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="reveal reveal-delay-1 relative bg-white rounded-2xl p-9 border border-rule overflow-hidden">
            <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />
            <p className="font-display font-bold text-ink text-[18px] tracking-[-0.3px] leading-snug mb-3">
              "Leads doubled. Close rate held. The system just runs."
            </p>
            <p className="text-ink-light text-[12px] mb-7">— Founder, Home Services</p>
            <div className="flex gap-8">
              <div>
                <div className="font-display font-black text-ink text-[28px] tracking-[-1px] leading-none mb-1">2.1×</div>
                <div className="text-ink-light text-[11px] uppercase tracking-[0.05em]">Lead volume</div>
              </div>
              <div>
                <div className="font-display font-black text-ink text-[28px] tracking-[-1px] leading-none mb-1">£0</div>
                <div className="text-ink-light text-[11px] uppercase tracking-[0.05em]">Wasted on bad data</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="reveal reveal-delay-2 relative bg-white rounded-2xl p-9 border border-rule overflow-hidden">
            <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />
            <p className="font-display font-bold text-ink text-[18px] tracking-[-0.3px] leading-snug mb-3">
              "We had the traffic. Zovek built the system that turned it into revenue."
            </p>
            <p className="text-ink-light text-[12px] mb-7">— CMO, E-commerce Brand</p>
            <div className="flex gap-8">
              <div>
                <div className="font-display font-black text-ink text-[28px] tracking-[-1px] leading-none mb-1">+63%</div>
                <div className="text-ink-light text-[11px] uppercase tracking-[0.05em]">Conversion rate</div>
              </div>
              <div>
                <div className="font-display font-black text-ink text-[28px] tracking-[-1px] leading-none mb-1">90d</div>
                <div className="text-ink-light text-[11px] uppercase tracking-[0.05em]">To full system live</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
