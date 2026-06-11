import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    phase: 'Generate',
    title: 'Paid media lands the prospect',
    body: 'Google Ads capture high-intent search. Meta Ads build demand and retarget. Every campaign is engineered to deliver a qualified prospect — not just a click.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
  },
  {
    num: '02',
    phase: 'Qualify',
    title: 'The lead enters a structured pipeline',
    body: 'Every enquiry is tracked in a CRM with full attribution. Source, cost, intent — logged before a single call is made. No guessing, no duplicate outreach.',
    tags: ['CRM', 'Attribution', 'Lead scoring'],
  },
  {
    num: '03',
    phase: 'Close',
    title: 'Direct telesales converts',
    body: 'This is where Zovek is different. We don\'t hand leads to a client and hope for the best. We make the call. Consultative, persistent, and built around a proven sales framework.',
    tags: ['Telesales', 'Sales cycle', 'Closing'],
    highlight: true,
  },
  {
    num: '04',
    phase: 'Optimise',
    title: 'Data drives the next cycle',
    body: 'Close rates, objection patterns, cost per acquisition — all fed back into the campaign layer. The system gets sharper with every deal, won or lost.',
    tags: ['Performance data', 'Optimisation', 'Compounding'],
  },
]

export default function HowWeWork() {
  const ref = useReveal()

  return (
    <section id="how-we-work" ref={ref} className="bg-ink py-24 md:py-32 px-[5%]">
      <div className="max-w-[1200px] mx-auto">

        <div className="reveal mb-16">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <span
              className="inline-block w-5 h-0.5 rounded colour-grad-bar flex-shrink-0"
              style={{ background: 'linear-gradient(90deg,#1a5cff,#a855f7,#06b6d4,#f97316)' }}
            />
            How we work
          </div>
          <h2
            className="font-display font-black text-white tracking-[-1.5px] leading-[1.08]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
          >
            The full revenue cycle.<br />
            <span className="colour-text">One team. One P&L.</span>
          </h2>
          <p className="text-white/45 text-[16px] leading-relaxed max-w-[520px] mt-4">
            Most agencies stop at the lead. Zovek runs the whole race — from first impression to signed deal. Paid media gets the conversation started. Telesales closes it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} relative rounded-2xl p-8 border overflow-hidden transition-all duration-300 ${
                step.highlight
                  ? 'border-white/20 bg-white/[0.04]'
                  : 'border-white/[0.07] bg-transparent hover:bg-white/[0.03]'
              }`}
            >
              {step.highlight && (
                <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />
              )}

              <div className="flex items-start justify-between mb-6">
                <span className="font-display font-black text-[11px] tracking-[0.1em] colour-text">
                  {step.num}
                </span>
                <span
                  className="text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-full border"
                  style={{
                    color: step.highlight ? '#ffffff' : 'rgba(255,255,255,0.35)',
                    borderColor: step.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
                  }}
                >
                  {step.phase}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-[15px] tracking-[-0.3px] leading-snug mb-3">
                {step.title}
              </h3>
              <p className="text-white/45 text-[14px] leading-[1.7] mb-5">{step.body}</p>

              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full border"
                    style={{ color: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
