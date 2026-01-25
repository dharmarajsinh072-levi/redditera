import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCountUp } from '../hooks/useCountUp'
import '../styles/Homepage.css'
import '../styles/ViewAdSolutions.css'

const ViewAdSolutions = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleHomepageLink = (hash) => {
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    } else {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const ArrowRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  )

  const Eye = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  const UserPlus = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11a4 4 0 100-8 4 4 0 000 8z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8v6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 11h-6" />
    </svg>
  )

  const Cart = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h15l-1.5 9h-12L6 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l-2-2H1" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20a1 1 0 100-2 1 1 0 000 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 20a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  )

  const Target = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22a10 10 0 110-20 10 10 0 010 20z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12h-3" />
    </svg>
  )

  const Monitor = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v12H4V4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20h8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v4" />
    </svg>
  )

  const Brush = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3l6 6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 8l9 9" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19c2.5 0 4-1.5 4-4 0-1.1-.9-2-2-2-2.5 0-4 1.5-4 4 0 1.1.9 2 2 2z" />
    </svg>
  )

  const Insights = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 14l3-3 3 2 5-6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 5h3v3" />
    </svg>
  )

  const Stat = ({ label, value, suffix = '', accent = false }) => {
    const [count, ref] = useCountUp(value, 900, true)

    const format = (v) => {
      if (typeof v !== 'number') return `${v}${suffix}`
      const rounded = label === 'Ad Score' ? count.toFixed(1) : count.toFixed(1)
      const trimmed = rounded.replace(/\.0$/, '')
      return `${trimmed}${suffix}`
    }

    return (
      <div ref={ref}>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">{label}</p>
        <p className={`text-2xl md:text-4xl font-bold tracking-tighter ${accent ? 'text-[#00D166]' : 'text-white'}`}>
          {format(value)}
        </p>
      </div>
    )
  }

  return (
    <div className="dark view-ad-bg bg-[#050505] text-gray-100 min-h-screen font-sans selection:bg-white selection:text-black antialiased">
      {/* Hero */}
      <header className="relative pt-44 md:pt-56 pb-28 md:pb-36 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] hero-halo-green -z-10 opacity-80" />

        <div className="max-w-7xl mx-auto text-center relative">
          <span className="inline-block py-1.5 px-6 rounded-full border border-white/10 text-[11px] font-bold tracking-[0.25em] uppercase mb-12 bg-white/5 backdrop-blur-sm text-[#00D166]">
            High Impact Performance
          </span>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-serif font-light tracking-tighter leading-[0.9] mb-10 md:mb-14 px-4">
            Strategic <br />{' '}
            <span data-emph-id="va-hero-ad-solutions" className="font-serif italic text-white/90">
              Ad Solutions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-14 md:mb-20">
            Engineered for scale. We build high-performance visual funnels that convert Reddit&apos;s most valuable communities.
          </p>

          {/* Growth card */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-2 bg-[#00D166]/10 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition duration-1000" />
            <div className="glass-panel-heavy p-7 md:p-12 rounded-[2.25rem] md:rounded-[3rem] relative overflow-hidden flex flex-col items-center gap-8 md:gap-10 border border-white/20">
              <div className="flex items-center justify-between w-full">
                <div className="text-left">
                  <span className="text-xs font-bold tracking-widest text-[#00D166] uppercase mb-2 block">Enterprise Metrics</span>
                  <h4 className="text-2xl md:text-4xl font-bold tracking-tight">Growth Velocity</h4>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Active Scale</span>
                    <span className="text-sm md:text-xl font-bold text-white">24/7 Monitoring</span>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[170px] sm:h-[200px] md:h-[240px] flex items-center justify-center">
                <svg className="w-full h-full overflow-visible chart-glow" preserveAspectRatio="none" viewBox="0 0 400 120">
                  <defs>
                    <linearGradient id="chart-grad-main" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#00D166" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00D166" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur result="coloredBlur" stdDeviation="3" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M0,100 C40,95 80,105 120,70 C160,35 200,60 240,40 C280,20 320,30 400,5"
                    fill="none"
                    filter="url(#glow)"
                    stroke="#00D166"
                    strokeLinecap="round"
                    strokeWidth="5"
                  />
                  <path
                    d="M0,100 C40,95 80,105 120,70 C160,35 200,60 240,40 C280,20 320,30 400,5 V120 H0 Z"
                    fill="url(#chart-grad-main)"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full pt-8 md:pt-10 border-t border-white/10">
                <Stat label="Campaign ROI" value={2.5} suffix="x" />
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">CPA Efficiency</p>
                  <p className="text-2xl md:text-4xl font-bold text-white tracking-tighter">-30%</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">Conversion Lift</p>
                  <p className="text-2xl md:text-4xl font-bold text-white tracking-tighter">+42%</p>
                </div>
                <Stat label="Ad Score" value={9.8} accent />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Campaign Types */}
      <section className="py-28 md:py-36 px-6 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-5 md:mb-6 leading-tight">
              Targeted <span className="font-serif italic text-white/90">Campaign Types</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Precision-engineered funnels designed for the specific nuances of Reddit&apos;s community structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="glass-panel-heavy neon-glow-card-green p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group ad-card-hover relative overflow-hidden">
              <div className="absolute -right-8 -top-8 text-8xl md:text-9xl font-bold step-number opacity-10 group-hover:opacity-20 transition-opacity">
                01
              </div>
              <div className="mb-10 text-[#00D166]">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Brand Awareness</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                Establish presence in key subreddits with native-feeling content that earns upvotes, not just impressions.
              </p>
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 text-[10px] font-bold text-[#00D166] tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D166] shadow-[0_0_8px_rgba(0,209,102,0.6)]" />
                  Maximum Market Reach
                </div>
              </div>
            </div>

            <div className="glass-panel-heavy neon-glow-card-blue p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group ad-card-hover relative overflow-hidden">
              <div className="absolute -right-8 -top-8 text-8xl md:text-9xl font-bold step-number opacity-10 group-hover:opacity-20 transition-opacity">
                02
              </div>
              <div className="mb-10 text-blue-400">
                <UserPlus className="w-10 h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Lead Gen</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                Capture high-intent users directly through native lead forms, integrated with your existing CRM workflow.
              </p>
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 text-[10px] font-bold text-blue-400 tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  High Intent Volume
                </div>
              </div>
            </div>

            <div className="glass-panel-heavy neon-glow-card-purple p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group ad-card-hover relative overflow-hidden">
              <div className="absolute -right-8 -top-8 text-8xl md:text-9xl font-bold step-number opacity-10 group-hover:opacity-20 transition-opacity">
                03
              </div>
              <div className="mb-10 text-purple-400">
                <Cart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Conversion</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                Drive direct action with pixel optimization and retargeting that closes the loop on your Reddit traffic.
              </p>
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 text-[10px] font-bold text-purple-400 tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  Direct Revenue Action
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we deliver */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-5 md:mb-6 leading-tight">
              How We <span className="font-serif italic text-white/90">Deliver Results</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto font-light">
              A systematic approach to Reddit advertising that eliminates guesswork and focuses on sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="glass-panel-heavy p-8 md:p-10 rounded-[2.25rem] md:rounded-[3rem] border border-white/5 flex flex-col group hover:border-[#00D166]/40 transition-all duration-500 relative overflow-hidden">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center relative mb-8 md:mb-10 text-[#00D166]">
                <div className="absolute inset-0 icon-glow text-[#00D166]" />
                <Target className="w-9 h-9 md:w-10 md:h-10 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Precision Targeting</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                We leverage deep-level subreddit alignment and proprietary interest segments to place your brand exactly where conversations matter.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">Keyword Alignment</span>
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">
                  Competitor Conquesting
                </span>
              </div>
            </div>

            <div className="glass-panel-heavy p-8 md:p-10 rounded-[2.25rem] md:rounded-[3rem] border border-white/5 flex flex-col group hover:border-blue-400/40 transition-all duration-500 relative overflow-hidden">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center relative mb-8 md:mb-10 text-blue-400">
                <div className="absolute inset-0 icon-glow text-blue-400" />
                <Monitor className="w-9 h-9 md:w-10 md:h-10 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Continuous Optimization</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                Maintain performance through constant bid adjustments, creative refreshes, and granular placement auditing to combat ad fatigue.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">Real-time Bidding</span>
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">Pixel Analytics</span>
              </div>
            </div>

            <div className="glass-panel-heavy p-8 md:p-10 rounded-[2.25rem] md:rounded-[3rem] border border-white/5 flex flex-col group hover:border-purple-400/40 transition-all duration-500 relative overflow-hidden">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center relative mb-8 md:mb-10 text-purple-400">
                <div className="absolute inset-0 icon-glow text-purple-400" />
                <Brush className="w-9 h-9 md:w-10 md:h-10 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Native Creative</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                Creative designed for Reddit&apos;s “dark mode” culture. We speak the language of the community using native-feel formats and copy.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">Dark Mode Optimized</span>
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">
                  A/B Narrative Testing
                </span>
              </div>
            </div>

            <div className="glass-panel-heavy p-8 md:p-10 rounded-[2.25rem] md:rounded-[3rem] border border-white/5 flex flex-col group hover:border-yellow-400/40 transition-all duration-500 relative overflow-hidden">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center relative mb-8 md:mb-10 text-yellow-400">
                <div className="absolute inset-0 icon-glow text-yellow-400" />
                <Insights className="w-9 h-9 md:w-10 md:h-10 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Advanced Insights</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                Go beyond the basic dashboard. We provide sentiment analysis and attribution modeling to prove true business impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">Sentiment Analysis</span>
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">
                  Holistic Attribution
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-36 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] hero-halo-green -z-10 opacity-60" />
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter mb-10 md:mb-12 leading-[0.9]">
            Scale Your Brand with <br /> <span className="font-serif italic text-white/90">Reddit Ads</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-light">
            Don&apos;t just run ads. Deploy a performance engine built for modern communities. Our team handles the complexity; you reap the scale.
          </p>
          <div className="flex justify-center">
            <button
              className="group bg-white text-black px-10 sm:px-12 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base font-mono hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-white/10 active:scale-95"
              onClick={() => handleHomepageLink('#contact')}
            >
              Scale Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ViewAdSolutions
