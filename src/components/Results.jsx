import { useReveal } from '../hooks/useReveal'

const CASES = [
  {
    sector: 'B2B SaaS',
    timeline: '6 months',
    featured: true,
    headline: 'From unpredictable pipeline to £340k attributed revenue',
    quote: 'We stopped guessing which campaigns were working. Now we know exactly where every sale comes from.',
    metrics: [
      { l: 'Ad Spend', v: '£71k' },
      { l: 'Leads', v: '1,840' },
      { l: 'Qualified', v: '312' },
      { l: 'Closed', v: '47' },
      { l: 'Revenue', v: '£340k' },
      { l: 'ROAS', v: '4.8×' },
    ],
  },
  {
    sector: 'Home Services',
    timeline: '3 months',
    headline: 'Lead volume doubled. Close rate unchanged.',
    quote: 'Leads doubled. Close rate held. The system just runs.',
    metrics: [
      { l: 'Ad Spend', v: '£18k' },
      { l: 'Leads', v: '620' },
      { l: 'Close Rate', v: '31%' },
      { l: 'Revenue', v: '£190k' },
      { l: 'CAC', v: '£29' },
      { l: 'ROAS', v: '3.9×' },
    ],
  },
  {
    sector: 'E-commerce',
    timeline: '4 months',
    headline: 'Existing traffic turned into a structured acquisition engine',
    quote: 'We had the traffic. Zovek built the system that turned it into revenue.',
    metrics: [
      { l: 'CVR Lift', v: '+63%' },
      { l: 'CAC Down', v: '−41%' },
      { l: 'LTV', v: '+2.1×' },
      { l: 'ROAS', v: '5.2×' },
      { l: 'Live In', v: '90d' },
      { l: 'Rev Δ', v: '+£280k' },
    ],
  },
]

export default function Results() {
  const ref = useReveal()

  return (
    <section id="results" ref={ref} className="bg-white py-24 md:py-36 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal mb-16">
          <div className="section-label">
            <span className="colour-grad-bar inline-block w-5 h-0.5 rounded" />
            Revenue outcomes
          </div>
          <h2
            className="font-display font-black text-[#0a0a0a] tracking-[-1.5px] leading-[1.08]"
            style={{ fontSize: 'clamp(28px, 3.8vw, 48px)' }}
          >
            Engineered results,<br />
            <span className="colour-grad-text">not lucky campaigns.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {CASES.map((c, i) => (
            <div
              key={c.sector}
              className={`reveal reveal-delay-${i + 1} bg-white border border-[#e8e8e8] rounded-2xl relative overflow-hidden ${c.featured ? 'md:grid md:grid-cols-[1fr_340px]' : ''}`}
            >
              {c.featured && <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border border-[#e8e8e8] text-[#666]">
                    {c.sector}
                  </span>
                  <span className="text-[11px] text-[#999]">{c.timeline}</span>
                </div>
                <h3 className="font-display font-bold text-[#0a0a0a] text-[16px] md:text-[20px] tracking-[-0.5px] leading-snug mb-6 max-w-[520px]">
                  {c.headline}
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mb-7 pb-7 border-b border-[#e8e8e8]">
                  {c.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="font-display font-black text-[#0a0a0a] text-[18px] md:text-[22px] tracking-[-1px] leading-none mb-1">
                        {m.v}
                      </div>
                      <div className="text-[10px] text-[#999] uppercase tracking-[0.05em]">{m.l}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#666] text-[14px] italic leading-relaxed">&ldquo;{c.quote}&rdquo;</p>
              </div>
              {c.featured && (
                <div className="hidden md:flex flex-col justify-center p-10 bg-[#f7f7f5] border-l border-[#e8e8e8]">
                  <div className="font-display font-black text-[10px] tracking-[0.1em] uppercase text-[#999] mb-5">
                    System snapshot
                  </div>
                  {['Demand captured', 'Leads qualified', 'Pipeline built', 'Deals closed'].map((step, si) => (
                    <div key={step} className="flex items-center gap-3 mb-4 last:mb-0">
                      <div className="w-6 h-6 rounded-full colour-grad flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[8px] font-bold">0{si + 1}</span>
                      </div>
                      <span className="text-[12px] text-[#666] font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
