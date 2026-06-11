import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const CNODES = [
  { id:'revenue',   label:'Revenue',       x:50, y:50, main:true },
  { id:'google',    label:'Google Ads',    x:50, y:8  },
  { id:'meta',      label:'Meta Ads',      x:82, y:20 },
  { id:'landing',   label:'Landing Pages', x:92, y:50 },
  { id:'crm',       label:'CRM',           x:82, y:80 },
  { id:'email',     label:'Email & SMS',   x:50, y:92 },
  { id:'retarget',  label:'Retargeting',   x:18, y:80 },
  { id:'telesales', label:'Telesales',     x:8,  y:50 },
  { id:'attrib',    label:'Attribution',   x:18, y:20 },
]
const CEDGES = ['google','meta','landing','crm','email','retarget','telesales','attrib'].map(id=>['revenue',id])

export default function NetworkDiagram() {
  const ref = useReveal()
  const W=500, H=500
  const pos = id => { const n=CNODES.find(n=>n.id===id); return [n.x/100*W, n.y/100*H] }

  return (
    <section ref={ref} className="bg-white py-24 md:py-36 px-8 border-y border-black/[0.06]">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal mb-16 text-center">
          <div className="section-label justify-center"><span className="colour-grad-bar inline-block w-5 h-0.5 rounded"/>Revenue Ecosystem</div>
          <h2 className="font-display font-black text-[#0a0a0a] tracking-[-1.5px] leading-[1.08] mb-4" style={{fontSize:'clamp(28px,3.8vw,48px)'}}>
            Everything connected.<br/><span className="colour-grad-text">Revenue at the centre.</span>
          </h2>
          <p className="text-[#666] text-[15px] max-w-[480px] mx-auto leading-relaxed">
            Every channel, system and signal connected to a single outcome. This is what infrastructure looks like.
          </p>
        </div>

        <div className="reveal flex justify-center">
          <div className="relative" style={{width:500,height:500,maxWidth:'90vw'}}>
            <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${H}`} fill="none">
              <defs>
                <radialGradient id="rg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1a5cff" stopOpacity="0.08"/>
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a5cff" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
              <circle cx={W/2} cy={H/2} r="200" fill="url(#rg)"/>
              {CEDGES.map(([a,b],i)=>{
                const [x1,y1]=pos(a), [x2,y2]=pos(b)
                return (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e8e8e8" strokeWidth="1"/>
                    <line x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="url(#lg2)" strokeWidth="1.5" strokeDasharray="200"
                      style={{animation:`dataFlow 3s ease-in-out infinite`,animationDelay:`${i*0.4}s`}}/>
                  </g>
                )
              })}
            </svg>

            {CNODES.map((n,i)=>(
              <div key={n.id} className="absolute z-10 text-center"
                style={{left:`${n.x}%`,top:`${n.y}%`,transform:'translate(-50%,-50%)'}}>
                {n.main ? (
                  <div className="card px-4 py-3 shadow-xl node-pulse" style={{minWidth:90,background:'#0a0a0a'}}>
                    <div className="colour-grad-text font-display font-black text-[11px] tracking-tight">Revenue</div>
                    <div className="text-[8px] text-white/30 mt-0.5">The outcome</div>
                  </div>
                ) : (
                  <div className="card px-2.5 py-2 shadow-sm hover:shadow-md transition-all duration-200 cursor-default node-pulse"
                    style={{minWidth:72,animationDelay:`${i*0.4}s`}}>
                    <div className="font-display font-black text-[8px] text-[#0a0a0a] tracking-tight whitespace-nowrap">{n.label}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
