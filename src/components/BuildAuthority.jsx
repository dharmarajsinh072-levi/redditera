import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Homepage.css'
import '../styles/BuildAuthority.css'

const BuildAuthority = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleHomepageLink = (hash) => {
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
      return
    }

    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const ArrowRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  )

  const CheckCircle = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  // Icon set tuned to match the screenshot's glyphs (shield/check, chart up, users, analytics)
  const ShieldCheck = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.25}
        d="M12 3.25l7 3.5V12c0 5.2-3.2 9.4-7 10.5-3.8-1.1-7-5.3-7-10.5V6.75l7-3.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.25}
        d="M9.2 12.2l1.85 1.85 3.9-3.9"
      />
    </svg>
  )

  const ChartUp = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18V6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h16" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 14l4-4 3 3 5-6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7v4h-4" />
    </svg>
  )

  const UsersGroup = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11a3 3 0 10-6 0 3 3 0 006 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20a6 6 0 00-16 0" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 20a5 5 0 015-4" />
    </svg>
  )

  const Analytics = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18V6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h16" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v-3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v-6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 14v-4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8l2-2 2 2 4-4" />
    </svg>
  )

  const ArrowUpRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  )

  return (
    <div className="dark build-authority-bg bg-[var(--bg)] text-[var(--text)] min-h-screen font-sans selection:bg-white selection:text-black antialiased">
      <div className="noise-overlay" />
      {/* Hero */}
      <header className="relative min-h-[88vh] pt-40 md:pt-44 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 ba-glow-focal -z-10 opacity-60"></div>
        <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] ba-glow-radial-green -z-10 opacity-70"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <span className="inline-block py-1 px-3 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 bg-white/5 backdrop-blur-sm">
            Sustainable reputation
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tighter leading-[0.9] mb-12">
            Build <span className="italic text-white/90">Authority</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-16">
            Transform from anonymous to authoritative. Become the trusted voice in your industry—the one Reddit users turn to for expert guidance.
          </p>

          {/* Screenshot-matched status report card (no Stitch label) */}
          <div className="max-w-6xl mx-auto relative">
            <div className="ba-status-wrap mx-auto w-full max-w-4xl">
              {/* badges docked to card edges (desktop only) */}
              <div className="ba-status-badge ba-status-badge--tl hidden md:flex" aria-hidden="true">
                <div className="ba-badge-icon ba-badge-icon--orange">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7l1.3 2.7 3 .5-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.5L12 7z" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[9px] tracking-[0.22em] uppercase text-[#FF4500] font-bold">Tier 1</div>
                  <div className="text-[12px] font-semibold text-white/90">Top Contributor</div>
                </div>
              </div>

              <div className="ba-status-badge ba-status-badge--br hidden md:flex" aria-hidden="true">
                <div className="ba-badge-icon ba-badge-icon--blue">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3l7 4v6c0 5-3 9-7 10C8 22 5 18 5 13V7l7-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.2 12.2l1.7 1.7 3.9-3.9" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[9px] tracking-[0.22em] uppercase text-[#67E8F9] font-bold">Certified</div>
                  <div className="text-[12px] font-semibold text-white/90">Trusted Source</div>
                </div>
              </div>

              <div className="ba-status-card ba-accent--purple w-full">
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-center">
                <div className="flex items-center justify-center">
                  <div className="relative w-[184px] h-[184px]">
                    <div className="ba-ring-halo" aria-hidden="true" />
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                      <defs>
                        <filter id="baRingGlow" x="-60%" y="-60%" width="220%" height="220%">
                          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#39FF14" floodOpacity="0.55" />
                          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#39FF14" floodOpacity="0.18" />
                        </filter>
                      </defs>
                      <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.10)" strokeWidth="8" fill="none" />
                      <circle
                        className="ba-ring ba-ring-animate"
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#39FF14"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="none"
                        filter="url(#baRingGlow)"
                        style={{ '--dashoffset': 44 }}
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#39FF14"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="none"
                        filter="url(#baRingGlow)"
                        strokeDasharray="18 252"
                        strokeDashoffset="220"
                        transform="rotate(-90 50 50)"
                        opacity="0.95"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl font-bold tracking-tight text-white leading-none">88</div>
                      <div className="mt-2 text-[11px] tracking-[0.22em] uppercase text-white/45 font-semibold">
                        Trust Index
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between gap-6 flex-wrap">
                    <div>
                      <div className="text-[11px] tracking-[0.28em] uppercase text-white/35 font-semibold">Status Report</div>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.35)]" aria-hidden="true" />
                        <div className="text-base md:text-lg tracking-[0.22em] uppercase text-white/85 font-semibold">
                          Authoritative Leader
                        </div>
                      </div>
                    </div>
                    <div className="ba-verified-pill">VERIFIED_NODE</div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="ba-metric-label">Sentiment</div>
                        <div className="ba-metric-value">94.2%</div>
                      </div>
                      <div className="ba-meter" aria-hidden="true">
                        <div className="ba-meter__fill" style={{ width: '94.2%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="ba-metric-label">Reach</div>
                        <div className="ba-metric-value">Top 1%</div>
                      </div>
                      <div className="ba-meter" aria-hidden="true">
                        <div className="ba-meter__fill" style={{ width: '92%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="ba-metric-label">Velocity</div>
                        <div className="ba-metric-value">+12.4%</div>
                      </div>
                      <div className="ba-meter" aria-hidden="true">
                        <div className="ba-meter__fill" style={{ width: '58%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="ba-metric-label">Impact</div>
                        <div className="ba-metric-value">Elite</div>
                      </div>
                      <div className="ba-meter" aria-hidden="true">
                        <div className="ba-meter__fill" style={{ width: '86%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>

      {/* Measure section (matches screenshot) */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 ba-glow-focal -z-10 opacity-45"></div>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Measure Your <span className="font-serif italic">Reddit Authority</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Our Trust Score tracks how Reddit communities perceive your brand. Higher scores = more credibility, better engagement, increased conversions.
          </p>

          <div className="relative w-[68vw] max-w-[360px] aspect-square mx-auto mb-12">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8" />
              <circle
                className="gauge-ring gauge-ring-animate"
                cx="50"
                cy="50"
                fill="transparent"
                r="45"
                stroke="#00D166"
                strokeLinecap="round"
                strokeWidth="8"
                style={{ '--dashoffset': 34 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl md:text-5xl font-bold tracking-tighter">88/100</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-2">Trust Score</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="ba-glass-panel ba-accent--slate rounded-2xl border border-white/5 p-6 text-center">
              <div className="text-lg font-bold text-white mb-2">70-79</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Building trust</div>
            </div>
            <div className="ba-glass-panel ba-accent--green rounded-2xl border border-white/10 p-6 text-center shadow-[0_0_0_1px_rgba(0,209,102,0.18)]">
              <div className="text-lg font-bold text-white mb-2">80-89</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#00D166] font-bold">Trusted authority</div>
            </div>
            <div className="ba-glass-panel ba-accent--slate rounded-2xl border border-white/5 p-6 text-center">
              <div className="text-lg font-bold text-white mb-2">90-100</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Industry leader</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              What <span className="font-serif italic">You Get</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Building authority isn't about quick wins—it's about becoming the go-to expert in your space. Here's how we make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="ba-feature-card ba-accent--green p-9 rounded-3xl flex flex-col h-full hover:border-white/20 transition-all duration-500">
              <div className="ba-feature-icon w-14 h-14 rounded-xl border border-[#00D166]/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_24px_rgba(0,209,102,0.07)]">
                <ShieldCheck className="w-6 h-6 text-[#00D166]" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Authentic Community Engagement</h3>
              <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                We don't drop links and disappear. Our team engages authentically—answering questions, providing value, building relationships. Reddit users spot inauthenticity instantly.
              </p>
              <div className="h-px bg-white/5 my-8" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-[#00D166] mt-0.5" />
                  <span>Regular, valuable contributions to relevant subreddits</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-[#00D166] mt-0.5" />
                  <span>Thoughtful responses that demonstrate expertise</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-[#00D166] mt-0.5" />
                  <span>Consistent presence that builds recognition</span>
                </li>
              </ul>
            </div>

            <div className="ba-feature-card ba-accent--blue p-9 rounded-3xl flex flex-col h-full hover:border-white/20 transition-all duration-500">
              <div className="ba-feature-icon w-14 h-14 rounded-xl border border-blue-500/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_24px_rgba(59,130,246,0.10)]">
                <ChartUp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Sustainable Long-Term Growth</h3>
              <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                Unlike paid ads that stop when you stop paying, authority compounds. Each quality interaction builds on the last, creating a foundation that drives organic growth for years.
              </p>
              <div className="h-px bg-white/5 my-8" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-blue-400 mt-0.5" />
                  <span>Compound reputation growth over time</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-blue-400 mt-0.5" />
                  <span>Organic mentions from community members</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-blue-400 mt-0.5" />
                  <span>Reduced dependency on paid advertising</span>
                </li>
              </ul>
            </div>

            <div className="ba-feature-card ba-accent--purple p-9 rounded-3xl flex flex-col h-full hover:border-white/20 transition-all duration-500">
              <div className="ba-feature-icon w-14 h-14 rounded-xl border border-purple-500/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_24px_rgba(168,85,247,0.10)]">
                <UsersGroup className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Deep Community Integration</h3>
              <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                Become a recognized, valued member of your target communities. Not a marketer or advertiser—a trusted contributor who happens to have a great solution.
              </p>
              <div className="h-px bg-white/5 my-8" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-purple-400 mt-0.5" />
                  <span>Active participation in key subreddits</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-purple-400 mt-0.5" />
                  <span>Moderator relationships and community respect</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-purple-400 mt-0.5" />
                  <span>User-generated recommendations of your brand</span>
                </li>
              </ul>
            </div>

            <div className="ba-feature-card ba-accent--yellow p-9 rounded-3xl flex flex-col h-full hover:border-white/20 transition-all duration-500">
              <div className="ba-feature-icon w-14 h-14 rounded-xl border border-yellow-500/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_24px_rgba(234,179,8,0.10)]">
                <Analytics className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Data-Driven Authority Building</h3>
              <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                Every interaction is tracked and optimized. We measure sentiment, engagement quality, and trust score progression to ensure your authority grows strategically.
              </p>
              <div className="h-px bg-white/5 my-8" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-yellow-500 mt-0.5" />
                  <span>Real-time Trust Score monitoring</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-yellow-500 mt-0.5" />
                  <span>Community sentiment analysis</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-[18px] h-[18px] text-yellow-500 mt-0.5" />
                  <span>Monthly authority growth reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-6 relative overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] ba-glow-focal -z-10 opacity-40"></div>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9]">
            Become the <span className="font-serif italic">Authority</span> in <br />
            Your Space
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Stop competing for attention. Start earning trust. Build Reddit authority with a strategy that compounds over time—turning community respect into sustainable growth.
          </p>
          <div className="flex justify-center">
            <button
              className="group px-8 py-3 bg-white text-black font-mono text-sm hover:bg-gray-100 transition-all duration-300 rounded-full inline-flex items-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
              onClick={() => handleHomepageLink('#contact')}
            >
              Get Started
              <ArrowUpRight className="w-4 h-4 opacity-90 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuildAuthority

