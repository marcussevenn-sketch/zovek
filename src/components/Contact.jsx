import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const update = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }))
    setErrors((e) => ({ ...e, [key]: false }))
  }

  const submit = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = true
    if (!form.email.trim()) newErrors.email = true
    if (!form.message.trim()) newErrors.message = true
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setLoading(true)
    // Replace with your form endpoint (Formspree, EmailJS, etc.)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  const perks = [
    'No commitment required',
    '30-minute strategy call',
    'Real answers, not a sales pitch',
    'Response within 24 hours',
  ]

  return (
    <section id="contact" ref={ref} className="bg-white py-24 md:py-32 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left */}
          <div className="reveal">
            <div className="section-label">
              <span className="colour-grad-bar inline-block w-5 h-0.5 rounded flex-shrink-0" />
              Get started
            </div>
            <h2
              className="font-display font-black text-ink tracking-[-1.5px] leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
            >
              Let's build your<br />
              <span className="colour-text">acquisition engine</span>
            </h2>
            <p className="text-ink-mid text-[16px] leading-relaxed mb-10">
              Tell us a bit about your business. We'll be in touch within 24 hours to arrange a free strategy call.
            </p>
            <div className="flex flex-col gap-4">
              {perks.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <span className="colour-text text-[12px]">✦</span>
                  <span className="text-[14px] text-ink-mid">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <div className="relative bg-white border border-rule rounded-2xl p-10 overflow-hidden">
              <div className="top-bar colour-grad-bar absolute top-0 left-0 right-0" />

              {!sent ? (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.07em] uppercase text-ink-mid">
                      Full name
                    </label>
                    <input
                      className={`field-input ${errors.name ? 'error' : ''}`}
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.07em] uppercase text-ink-mid">
                      Email address
                    </label>
                    <input
                      className={`field-input ${errors.email ? 'error' : ''}`}
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.07em] uppercase text-ink-mid">
                      Tell us about your business
                    </label>
                    <textarea
                      className={`field-input ${errors.message ? 'error' : ''}`}
                      style={{ minHeight: '120px', lineHeight: '1.6' }}
                      placeholder="What are you currently spending on ads? What's the main challenge?"
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                    />
                  </div>
                  <button
                    onClick={submit}
                    disabled={loading}
                    className="btn-grad colour-grad w-full justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-ink-light text-center leading-relaxed">
                    By submitting you agree to us contacting you about Zovek's services.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center py-10 gap-4">
                  <span className="colour-text text-[32px]">✦</span>
                  <h3 className="font-display font-black text-ink text-[22px] tracking-[-0.5px]">Message sent</h3>
                  <p className="text-ink-mid text-[15px] leading-relaxed max-w-[280px]">
                    Thanks — we'll be in touch within 24 hours to set up your strategy call.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
