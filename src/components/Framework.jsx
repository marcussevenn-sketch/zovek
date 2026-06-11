import { useReveal } from '../hooks/useReveal'

const LAYERS = [
  { id: '01', name: 'Demand Infrastructure', colour: '#1a5cff', items: ['Google Ads', 'Meta Ads', 'Creative Testing', 'Audience Development'] },
  { id: '02', name: 'Conversion Infrastructure', colour: '#a855f7', items: ['Landing Pages', 'CRO', 'Offer Engineering', 'Funnel Architecture'] },
  { id: '03', name: 'Pipeline Infrastructure', colour: '#06b6d4', items: ['CRM', 'Lead Routing', 'Qualification', 'Sales Visibility'] },
  { id: '04', name: 'Telesales & Close', colour: '#f97316', items: ['Direct Outreach', 'Consultative Sales', 'Objection Handling', 'Deal Closing'], highlight: true },
  { id: '05', name: 'Retention Infrastructure', colour: '#10b981', items: ['Email Automation', 'SMS Automation', 'Retargeting', 'Conversion Recovery'] },
  { id: '06', name: 'Revenue Intelligence', colour: '#8b5cf6', items: ['Attribution', 'Reporting', 'Forecasting', 'Optimisation Loops'] },
]

export default function Framework() {
  const ref = useReveal()

  return (
    <section id="infrastructure" ref={ref} className="bg-[#f7f7f5] py-24 md:py-36 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="section-label">
              <span className="colour-grad-bar inline-block w-5 h-0.5 rounded" />
              Revenue Infrastructure™
            </div>
            <h2
              className="font-display font-black text-[#0a0a0a] tracking-[-1.5px] leading-[1.08]"
              style={{ fontSize: 'clamp(28px, 3.8vw, 48px)' }}
            >
              The Zovek<br />
              <span className="colour-grad-text">Revenue Infrastructure™</span>
            </h2>
          </div>
          <p className="text-[#666] text-[15px] leading-relaxed max-w-[360px] md:text-right">
            Six interconnected layers. One operating system. Built to make growth measurable, attributable and scalable.
          </p>
        </div>

        <div className="reveal bg-white border border-[#e8e8e8] rounded-2xl p-8 overflow-hidden relative">
          <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />
          <div className="flex flex-col gap-2 mt-2">
            {LAYERS.map((l, i) => (
              <div key={l.id} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f7f7f5] transition-colors duration-200 group cursor-default">
                  <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: l.colour }} />
                  <div className="w-6 font-display font-black text-[10px] text-[#ccc] flex-shrink-0">{l.id}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-bold text-[#0a0a0a] text-[13px] tracking-tight mb-1 flex items-center gap-2">
                      {l.name}
                      {l.highlight && (
                        <span
                          className="text-[9px] px-2 py-0.5 rounded-full font-medium"
                          style={{ background: l.colour + '20', color: l.colour }}
                        >
                          Signature
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {l.items.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-[#e8e8e8] text-[#666] bg-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="hidden md:block flex-shrink-0 h-1.5 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ width: `${60 + i * 8}px`, background: l.colour }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-[#e8e8e8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 rounded-full colour-grad-bar flex-shrink-0" />
              <div>
                <div className="font-display font-black text-[#0a0a0a] text-[13px] tracking-tight">
                  Predictable Revenue
                </div>
                <div className="text-[11px] text-[#999]">The only outcome that matters</div>
              </div>
            </div>
            <a href="#contact" className="btn-grad colour-grad text-[12px] px-5 py-2.5">
              Build mine
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
