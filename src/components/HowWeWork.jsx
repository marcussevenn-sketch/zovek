import { useReveal } from '../hooks/useReveal'
const steps = [
  { num:'01', phase:'Generate', title:'Paid media lands the prospect', body:'Google Ads capture high-intent search. Meta Ads build demand and retarget. Every campaign engineered to deliver a qualified prospect — not just a click.', tags:['Google Ads','Meta Ads','Retargeting'] },
  { num:'02', phase:'Qualify', title:'The lead enters a structured pipeline', body:'Every enquiry tracked in a CRM with full attribution. Source, cost, intent — logged before a single call is made. No guessing, no duplicate outreach.', tags:['CRM','Attribution','Lead scoring'] },
  { num:'03', phase:'Close', title:'Direct telesales converts', body:"This is where Zovek is different. We don't hand leads to a client. We make the call. Consultative, persistent, built around a proven sales framework.", tags:['Telesales','Sales cycle','Closing'], highlight:true },
  { num:'04', phase:'Optimise', title:'Data drives the next e', body:'Close rates, objection patterns, cost per acquisition — all fed back into the campaign layer. The system gets sharper with every deal.', tags:['Performance data','Optimisation','Compounding'] },
]
export default function HowWeWork() {
  const ref = useReveal()
  return (
    <section id="how-we-work" ref={ref} className="bg-[#f7f7f5] py-24 md:py-32 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal mb-16">
          <div className="section-label"><span className="colour-grad-bar inline-block w-5 h-0.5 rounded"/>How we work</div>
          <h2 className="font-display font-black text-[#0a0a0a] tracking-[-1.5px] leading-[1.08]" style={{fontSize:'clamp(28px,3.5vw,46px)'}}>
            The full revenue cycle.<br/><span className="colour-grad-text">One team. One P&L.</span>
          </h2>
          <p className="text-[#666] text-[16px] leading-relaxed max-w-[520px] mt-4">Most agencies stop at the lead. Zovek runs the whole race — from first impression to signed deap>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((s,i)=>(
            <div key={s.num} className={`reveal reveal-delay-${i+1} relative rounded-2xl p-8 border overflow-hidden bg-white border-[#e8e8e8] hover:shadow-md transition-all duration-300`}>
              {s.highlight && <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0"/>}
              <div className="flex items-start justify-between mb-6">
                <span className="font-display font-black text-[11px] tracking-[0.1em] colour-text">{s.num}</span>
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-full border border-[#e8e8e8] text-[#999]">{s.phase}</span>
              </div>
              <h3 className="font-display font-bold text-[#0a0a0a] text-[15px] tracking-[-0.3px] leading-snug mb-3">{s.title}</h3>
              <p className="text-[#666] text-[14px] leading-[1.7] mb-5">{s.body}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t=><span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-[#e8e8e8] text-[#999]">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
