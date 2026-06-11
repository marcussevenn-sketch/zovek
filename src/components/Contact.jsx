import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const update = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((e) => ({ ...e, [k]: false }))
  }

  const submit = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = true
    if (!form.email.trim()) errs.email = true
    if (!form.message.trim()) errs.message = true
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  return (
    <section id="contact" ref={ref} className="bg-[#f7f7f5] py-24 md:py-36 px-8">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="reveal">
          <div className="section-label">
            <span className="colour-grad-bar inline-block w-5 h-0.5 rounded" />
            Get started
          </div>
          <h2
            className="font-display font-black text-[#0a0a0a] tracking-[-1.5px] leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
          >
            Let&apos;s build your<br />
            <span className="colour-grad-text">revenue infrastructure.</span>
          </h2>
          <p className="text-[#666] text-[15px] leading-relaxed mb-10">
            Tell us about your business. We&apos;ll map out what a full acquisition system looks like for you — no commitment, no pitch deck.
          </p>
          <div className="flex flex-col gap-5">
            {[
              ['30-min strategy call', 'We map your full acquisition system'],
              ['No commitment', 'Real answers, not a sales presentation'],
              ['Response in 24h', 'We move fast, from day one'],
            ].map(([t, s]) => (
              <div key={t} className="flex items-start gap-4">
                <span className="colour-text text-[11px] mt-0.5">✦</span>
                <div>
                  <div className="text-[#0a0a0a] text-[14px] font-medium mb-0.5">{t}</div>
                  <div className="text-[#999] text-[13px]">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2">
          <div className="bg-white border border-[#e8e8e8] rounded-2xl relative overflow-hidden p-8 md:p-10">
            <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />
            {!sent ? (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.07em] uppercase text-[#666]">Name</label>
                    <input
                      className={`field-input ${errors.name ? 'error' : ''}`}
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.07em] uppercase text-[#666]">Company</label>
                    <input
                      className="field-input"
                      type="text"
                      placeholder="Optional"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.07em] uppercase text-[#666]">Email</label>
                  <input
                    className={`field-input ${errors.email ? 'error' : ''}`}
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.07em] uppercase text-[#666]">About your business</label>
                  <textarea
                    className={`field-input ${errors.message ? 'error' : ''}`}
                    style={{ minHeight: 100, lineHeight: '1.6' }}
                    placeholder="Current ad spend? Main challenge? What does success look like?"
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </div>
                <button
                  onClick={submit}
                  disabled={loading}
                  className="btn-grad colour-grad w-full justify-center mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    'Sending…'
                  ) : (
                    <>
                      Book a strategy call
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#999] text-center">
                  By submitting you agree to us contacting you about Zovek&apos;s services.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center py-12 gap-4">
                <span className="colour-text text-[28px]">✦</span>
                <h3 className="font-display font-black text-[#0a0a0a] text-[20px] tracking-[-0.5px]">Message received</h3>
                <p className="text-[#666] text-[14px] leading-relaxed max-w-[260px]">
                  We&apos;ll be in touch within 24 hours to schedule your strategy call.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
