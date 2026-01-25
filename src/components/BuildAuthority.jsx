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

  return (
    <div className="dark build-authority-bg bg-[#050505] text-gray-100 min-h-screen font-sans selection:bg-white selection:text-black antialiased">
      {/* Hero */}
      <header className="relative min-h-[88vh] pt-40 md:pt-44 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 glow-focal -z-10 opacity-60"></div>
        <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] glow-radial-green -z-10 opacity-70"></div>
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

          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D166]/20 to-blue-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            <div className="authority-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-10 border border-white/10">
              <div className="relative w-32 h-32 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="6" />
                  <circle
                    className="gauge-ring gauge-ring-animate"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="45"
                    stroke="#00D166"
                    strokeLinecap="round"
                    strokeWidth="6"
                    style={{ '--dashoffset': 60 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold tracking-tighter">88</span>
                  <span className="text-[8px] font-bold tracking-[0.2em] text-gray-500 uppercase">Trust Score</span>
                </div>
              </div>

              <div className="flex-grow text-left space-y-6 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#00D166] uppercase">Authoritative Status</span>
                  <span className="px-3 py-1 bg-[#00D166]/10 border border-[#00D166]/20 rounded text-[10px] text-[#00D166] font-bold">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-gray-400">
                      <span>Community Sentiment</span>
                      <span>94% Positive</span>
                    </div>
                    <div className="stat-line rounded-full" style={{ '--percent': '94%' }} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-gray-400">
                      <span>Expert Recognition</span>
                      <span>82% Tier 1</span>
                    </div>
                    <div className="stat-line rounded-full" style={{ '--percent': '82%' }} />
                  </div>
                </div>

                <div className="flex gap-6 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-[#00D166]" />
                    Industry Leader
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <ChartUp className="w-4 h-4 text-[#00D166]" />
                    Top 1% Reach
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Measure section (matches screenshot) */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 glow-focal -z-10 opacity-45"></div>
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
            <div className="glass-panel rounded-2xl border border-white/5 p-6 text-center">
              <div className="text-lg font-bold text-white mb-2">70-79</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Building trust</div>
            </div>
            <div className="glass-panel rounded-2xl border border-white/10 p-6 text-center shadow-[0_0_0_1px_rgba(0,209,102,0.18)]">
              <div className="text-lg font-bold text-white mb-2">80-89</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#00D166] font-bold">Trusted authority</div>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-6 text-center">
              <div className="text-lg font-bold text-white mb-2">90-100</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Industry leader</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              What <span className="font-serif italic">You Get</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Building authority isn't about quick wins—it's about becoming the go-to expert in your space. Here's how we make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-12 rounded-[28px] border border-white/5 flex flex-col h-full hover:border-white/15 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl border border-[#00D166]/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_30px_rgba(0,209,102,0.08)]">
                <ShieldCheck className="w-7 h-7 text-[#00D166]" />
              </div>
              <h3 className="text-3xl font-bold mb-5">Authentic Community Engagement</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                We don't drop links and disappear. Our team engages authentically—answering questions, providing value, building relationships. Reddit users spot inauthenticity instantly.
              </p>
              <div className="h-px bg-white/5 my-10" />
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#00D166] mt-1" />
                  <span>Regular, valuable contributions to relevant subreddits</span>
                </li>
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#00D166] mt-1" />
                  <span>Thoughtful responses that demonstrate expertise</span>
                </li>
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#00D166] mt-1" />
                  <span>Consistent presence that builds recognition</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-12 rounded-[28px] border border-white/5 flex flex-col h-full hover:border-white/15 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl border border-blue-500/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_30px_rgba(59,130,246,0.10)]">
                <ChartUp className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold mb-5">Sustainable Long-Term Growth</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Unlike paid ads that stop when you stop paying, authority compounds. Each quality interaction builds on the last, creating a foundation that drives organic growth for years.
              </p>
              <div className="h-px bg-white/5 my-10" />
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <span>Compound reputation growth over time</span>
                </li>
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <span>Organic mentions from community members</span>
                </li>
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <span>Reduced dependency on paid advertising</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-12 rounded-[28px] border border-white/5 flex flex-col h-full hover:border-white/15 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl border border-purple-500/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_30px_rgba(168,85,247,0.10)]">
                <UsersGroup className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold mb-5">Deep Community Integration</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Become a recognized, valued member of your target communities. Not a marketer or advertiser—a trusted contributor who happens to have a great solution.
              </p>
              <div className="h-px bg-white/5 my-10" />
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Active participation in key subreddits</span>
                </li>
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Moderator relationships and community respect</span>
                </li>
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                  <span>User-generated recommendations of your brand</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-12 rounded-[28px] border border-white/5 flex flex-col h-full hover:border-white/15 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl border border-yellow-500/30 bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_30px_rgba(234,179,8,0.10)]">
                <Analytics className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-3xl font-bold mb-5">Data-Driven Authority Building</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Every interaction is tracked and optimized. We measure sentiment, engagement quality, and trust score progression to ensure your authority grows strategically.
              </p>
              <div className="h-px bg-white/5 my-10" />
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>Real-time Trust Score monitoring</span>
                </li>
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>Community sentiment analysis</span>
                </li>
                <li className="flex items-start gap-4 text-base text-gray-300">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>Monthly authority growth reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-6 relative overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] glow-focal -z-10 opacity-40"></div>
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
              className="group px-8 py-3 bg-white text-black font-mono text-sm hover:bg-gray-100 transition-all duration-300 rounded-full inline-flex items-center gap-2 shadow-xl shadow-white/10"
              onClick={() => handleHomepageLink('#contact')}
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuildAuthority

