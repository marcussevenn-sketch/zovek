import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const STEPS = [
  { num:'01', label:'Demand captured',    colour:'#1a5cff', sub:'Google & Meta ads surface your offer to high-intent buyers at the moment they\'re looking.', metric:'↑ 4.2× ROAS' },
  { num:'02', label:'Prospect converts',  colour:'#a855f7', sub:'Purpose-built landing pages with a single objective convert ad traffic into qualified leads.', metric:'↑ 63% CVR' },
  { num:'03', label:'Lead qualified',     colour:'#06b6d4', sub:'CRM pipeline routes and scores every lead before outreach begins. No guessing, no leakage.', metric:'↓ 38% CAC' },
  { num:'04', label:'Telesales closes',   colour:'#f97316', sub:'We call. We consult. We close. The full sales cycle owned end-to-end by Zovek. This is what makes us different.', metric:'Avg 31% close rate', highlight:true },
  { num:'05', label:'Revenue attributed', colour:'#10b981', sub:'Every deal traced to its source — channel, cost, return. You see exactly what\'s working.', metric:'100% attribution' },
  { num:'06', label:'System optimises',   colour:'#8b5cf6', sub:'Close data feeds back into targeting, creative and offer positioning. The system compounds endlessly.', metric:'↑ LTV over time' },
]

export default function System() {
  const ref = useReveal()
  const [active, setActive] = useState(0)

  return (
    <section id="system" ref={ref} className="bg-[#f7f7f5] py-24 md:py-36 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal mb-16">
          <div className="section-label"><span className="colour-grad-bar inline-block w-5 h-0.5 rounded"/>The System</div>
          <h2 className="font-display font-black text-[#0a0a0a] tracking-[-1.5px] leading-[1.08]" style={{fontSize:'clamp(28px,3.8vw,48px)'}}>
            Click to customer.<br/><span className="colour-grad-text">Fully owned.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-2">
            {STEPS.map((s,i)=>(
              <div key={s.num}
                className={`reveal reveal-delay-${i%4+1} cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${active===i ? 'bg-white border-[#e8e8e8] shadow-md' : 'bg-transparent border-transparent hover:bg-white'}`}
                onClick={()=>setActive(i)}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{background:s.colour+'15',border:`1px solid ${s.colour}30`}}>
                    <span className="font-display font-black text-[10px]" style={{color:s.colour}}>{s.num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-display font-bold text-[#0a0a0a] text-[14px] tracking-tight">{s.label}</span>
                      {s.highlight && <span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{background:'#f9731620',color:'#f97316'}}>Zovek only</span>}
                    </div>
                    <span className="text-[11px] font-medium" style={{color:s.colour}}>{s.metric}</span>
                  </div>
                  <svg className={`w-4 h-4 text-[#ccc] transition-transform duration-300 ${active===i?'rotate-90':''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                </div>
                {active===i && (
                  <div className="mt-4 pl-14 text-[14px] text-[#666] leading-relaxed">{s.sub}</div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block sticky top-24">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 relative overflow-hidden">
              <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0"/>
              <div className="font-display font-black text-[10px] tracking-[0.12em] uppercase text-[#666] mb-6">Revenue flow</div>
              {STEPS.map((s,i)=>(
                <div key={s.num} className="flex items-start gap-3 mb-4 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${active===i?'shadow-md scale-110':''}`}
                      style={{background:active===i?s.colour:s.colour+'20'}}>
                      <span className="font-display font-black text-[9px]" style={{color:active===i?'#fff':s.colour}}>{s.num}</span>
                    </div>
                    {i<STEPS.length-1 && <div className="w-px h-6 mt-1" style={{background:active>i?s.colour+'60':'#2a2a2a'}}/>}
                  </div>
                  <div className="pt-1.5">
                    <div className={`font-display font-bold text-[12px] tracking-tight transition-colors duration-300 ${active===i?'text-white':'text-[#666]'}`}>{s.label}</div>
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <div className="colour-grad-text font-display font-black text-[18px] tracking-tight">Predictable Revenue</div>
                <div className="text-[11px] text-[#666] mt-1">The only outcome that matters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}