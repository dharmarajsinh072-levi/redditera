import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Homepage.css'
import '../styles/ExploreMentions.css'

const ExploreMentions = () => {
  const navigate = useNavigate()
  const aboutRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)

  const [active, setActive] = useState({ flow: false, s1: false, s2: false, s3: false })

  const flowActive = active.flow || active.s1 || active.s2 || active.s3

  const observersSupported = useMemo(() => typeof window !== 'undefined' && 'IntersectionObserver' in window, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!observersSupported) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = entry.target.getAttribute('data-io-key')
          if (!key) continue
          if (entry.isIntersecting) {
            setActive((prev) => (prev[key] ? prev : { ...prev, [key]: true, flow: true }))
          }
        }
      },
      { root: null, threshold: 0.35, rootMargin: '-10% 0px -25% 0px' }
    )

    const nodes = [aboutRef.current, card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean)
    nodes.forEach((n) => io.observe(n))

    return () => io.disconnect()
  }, [observersSupported])

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

  return (
    <div className="dark explore-mentions-bg bg-[#050505] text-gray-100 min-h-screen font-sans selection:bg-white selection:text-black antialiased">
      <div className="noise-overlay" />

      <header className="relative pt-48 md:pt-56 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 explore-hero-bg -z-20" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] glow-focal -z-10 opacity-35" aria-hidden="true" />
        {/* Subtle glow behind hero (matches screenshot) */}
        <div className="absolute inset-0 -z-10 explore-hero-glow opacity-80" aria-hidden="true" />

        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-flex items-center justify-center py-2 px-6 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.35em] uppercase mb-10 bg-white/5 backdrop-blur-sm text-[#7dd3fc]">
            Next-Gen Reddit Marketing
          </span>

          <h1 className="explore-hero-title text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.92] mb-10">
            Strategic
            <br />
            <span className="explore-hero-underline italic text-white/95">Brand</span> Mentions
            <span className="sr-only">.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            We bypass the noise by embedding your brand into the heart of high-intent Reddit communities. Native, trusted, and conversion-optimized.
          </p>

          <div className="mt-12 flex justify-center">
            <button
              className="group relative flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold text-lg font-mono hover:bg-gray-100 transition-all duration-300 rounded-full shadow-2xl shadow-white/10"
              onClick={() => handleHomepageLink('#contact')}
            >
              Get Started
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className="pb-24 pt-10 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-10">
            Trusted by modern marketing teams
          </p>
          <div className="marquee-container overflow-hidden flex py-4">
            <div className="flex animate-scroll-slow w-max items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center gap-20 pr-20">
                <span className="text-2xl font-black italic tracking-tighter">FINTECH.</span>
                <span className="text-2xl font-bold">Velocity</span>
                <span className="text-2xl tracking-widest font-light uppercase">Lumina</span>
                <span className="text-2xl font-serif">Aether</span>
                <span className="text-2xl font-bold italic">SaaSify</span>
              </div>
              <div className="flex items-center gap-20 pr-20" aria-hidden="true">
                <span className="text-2xl font-black italic tracking-tighter">FINTECH.</span>
                <span className="text-2xl font-bold">Velocity</span>
                <span className="text-2xl tracking-widest font-light uppercase">Lumina</span>
                <span className="text-2xl font-serif">Aether</span>
                <span className="text-2xl font-bold italic">SaaSify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 px-6 relative overflow-hidden" id="about" ref={aboutRef} data-io-key="flow">
        <div className="absolute inset-0 how-we-do-it-bg -z-20" aria-hidden="true" />
        <div className="absolute inset-0 how-we-do-it-beams -z-10" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] glow-focal -z-10 opacity-25" aria-hidden="true" />

        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 md:mb-24 text-center">
            How <span className="italic">We Do It</span>
          </h2>

          <div className="relative">
            {/* Desktop: exact positioned layout */}
            <div className="relative hidden md:block h-[1500px] lg:h-[1600px]">
              {/* Curved dashed connector */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1200 1500"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="howDashGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(168,85,247,0.55)" />
                    <stop offset="55%" stopColor="rgba(125,211,252,0.30)" />
                    <stop offset="100%" stopColor="rgba(56,189,248,0.45)" />
                  </linearGradient>
                </defs>
                <path
                  className={`how-dash ${flowActive ? 'is-active' : ''}`}
                  d="M760 300 C 640 480, 610 620, 740 780 C 900 980, 690 1220, 520 1360"
                  fill="none"
                  stroke="url(#howDashGrad)"
                  strokeWidth="3"
                />
              </svg>

              {/* Card 1 (top-left) */}
              <div className="absolute left-[4%] top-[80px] w-[420px] lg:w-[460px]" ref={card1Ref} data-io-key="s1">
                <div className={`how-card how-card--purple rounded-2xl p-10 ${active.s1 ? 'is-active' : ''}`}>
                  <div className="how-card-icon w-11 h-11 rounded-xl flex items-center justify-center mb-8">
                    <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 11c0 5-4 9-9 9a9 9 0 01-4-1l-4 1 1-4a9 9 0 011-4c0-5 4-9 9-9s9 4 9 9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Discover Intent</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Advanced neural monitoring of 50M+ monthly threads to pinpoint high-relevance conversations at their inception.
                  </p>
                </div>
              </div>

              {/* 01 (top-right) */}
              <div className="absolute left-[74%] top-[230px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                <div className={`how-step-number italic text-[150px] leading-none ${active.s1 ? 'is-active' : ''}`}>01</div>
              </div>

              {/* 02 (middle-left) */}
              <div className="absolute left-[26%] top-[760px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                <div className={`how-step-number italic text-[150px] leading-none ${active.s2 ? 'is-active' : ''}`}>02</div>
              </div>

              {/* Card 2 (middle-right) */}
              <div className="absolute left-[58%] top-[600px] w-[440px] lg:w-[480px]" ref={card2Ref} data-io-key="s2">
                <div className={`how-card how-card--blue rounded-2xl p-10 ${active.s2 ? 'is-active' : ''}`}>
                  <div className="how-card-icon w-11 h-11 rounded-xl flex items-center justify-center mb-8">
                    <svg className="w-5 h-5 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v12H4V4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20h8" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Authentic Engagement</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Masterful copy that respects community dogma while positioning your solution as the logical choice.
                  </p>
                </div>
              </div>

              {/* Card 3 (bottom-left) */}
              <div className="absolute left-[6%] top-[1180px] w-[440px] lg:w-[480px]" ref={card3Ref} data-io-key="s3">
                <div className={`how-card how-card--teal rounded-2xl p-10 ${active.s3 ? 'is-active' : ''}`}>
                  <div className="how-card-icon w-11 h-11 rounded-xl flex items-center justify-center mb-8">
                    <svg className="w-5 h-5 text-teal-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18V6" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l4-4 3 3 5-6" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Precision ROI</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Detailed attribution modeling showing exactly how many clicks, conversions, and organic reach generated.
                  </p>
                </div>
              </div>

              {/* 03 (bottom-right) */}
              <div className="absolute left-[74%] top-[1360px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                <div className={`how-step-number italic text-[150px] leading-none ${active.s3 ? 'is-active' : ''}`}>03</div>
              </div>
            </div>

            {/* Mobile: stacked cards */}
            <div className="md:hidden space-y-10">
              <div className="how-card how-card--purple rounded-2xl p-8">
                <div className="how-card-icon w-10 h-10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 11c0 5-4 9-9 9a9 9 0 01-4-1l-4 1 1-4a9 9 0 011-4c0-5 4-9 9-9s9 4 9 9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Discover Intent</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Advanced neural monitoring of 50M+ monthly threads to pinpoint high-relevance conversations at their inception.
                </p>
              </div>

              <div className="how-card how-card--blue rounded-2xl p-8">
                <div className="how-card-icon w-10 h-10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v12H4V4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20h8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Authentic Engagement</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Masterful copy that respects community dogma while positioning your solution as the logical choice.
                </p>
              </div>

              <div className="how-card how-card--teal rounded-2xl p-8">
                <div className="how-card-icon w-10 h-10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-teal-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18V6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l4-4 3 3 5-6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Precision ROI</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Detailed attribution modeling showing exactly how many clicks, conversions, and organic reach generated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 relative overflow-hidden" id="case-studies">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] glow-focal -z-10 opacity-40"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              See It <span className="font-serif italic">In Action</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Native-feel marketing that converts because it belongs.</p>
          </div>

          <div className="relative rounded-2xl">
            <div className="absolute -inset-2 rounded-3xl see-action-glow" aria-hidden="true" />
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10">
              {/* Mac-style window header */}
              <div className="bg-white/5 px-6 py-4 flex items-center gap-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="mac-dot mac-dot--red" aria-hidden="true" />
                  <span className="mac-dot mac-dot--yellow" aria-hidden="true" />
                  <span className="mac-dot mac-dot--green" aria-hidden="true" />
                </div>
                <div className="flex-1 max-w-md mx-auto bg-black/40 rounded-lg py-1.5 px-4 text-[11px] text-gray-500 font-mono tracking-tight flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V8a4 4 0 10-8 0v3m0 0h8m-8 0v9a2 2 0 002 2h4a2 2 0 002-2v-9" />
                  </svg>
                  reddit.com/r/Marketing/comments/scaling_saas...
                </div>
              </div>

              <div className="p-6 md:p-12 bg-black/20">
                <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-reddit-orange flex items-center justify-center text-xs font-black shadow-lg shadow-reddit-orange/20">
                    r/
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold hover:underline cursor-pointer">r/Marketing</span>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-gray-400 uppercase font-bold tracking-wider">
                        Community
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">Posted by u/startup_grower • 4h ago</span>
                  </div>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
                  What's the best way to track user intent without breaking the bank?
                </h4>

                <div className="pl-0 md:pl-6 border-l border-white/5 space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30"></div>
                      <span className="text-sm font-bold text-blue-400">u/GrowthArchitect</span>
                      <span className="text-xs text-gray-500">512 points • 2h ago</span>
                    </div>
                    <div className="text-gray-300 leading-relaxed text-lg">
                      If you're looking for organic growth, stop buying ads and start listening to communities. We've been using{' '}
                      <span className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded border border-white/10">Redditera</span>{' '}
                      to monitor keywords across 50+ niche subreddits.
                      <br />
                      <br />
                      It flags conversations where people are literally asking for a tool like ours. The ROI has been night and day compared to
                      LinkedIn ads.
                    </div>
                    <div className="flex items-center gap-6 text-xs font-bold text-gray-500">
                      <div className="upvote-btn text-reddit-orange bg-reddit-orange/5 border border-reddit-orange/10">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7H5l7-7z" />
                        </svg>
                        <span>512</span>
                        <svg className="w-4 h-4 text-gray-500 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l-7-7h14l-7 7z" />
                        </svg>
                      </div>
                      <span className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4v8z" />
                        </svg>
                        42 Comments
                      </span>
                      <span className="cursor-pointer hover:text-white transition-colors">Share</span>
                    </div>
                  </div>

                  <div className="pl-8 border-l border-white/5 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-500/20 border border-gray-500/30"></div>
                      <span className="text-sm font-bold text-gray-300">u/startup_grower</span>
                      <span className="text-xs text-gray-400 font-medium px-1.5 py-0.5 bg-white/5 rounded">OP</span>
                      <span className="text-xs text-gray-500">18 points • 1h ago</span>
                    </div>
                    <p className="text-gray-400 italic text-base">
                      "This is gold. Just signed up for their trial, the dashboard looks exactly like what I needed. Thanks man!"
                    </p>
                    <div className="upvote-btn w-fit">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7H5l7-7z" />
                      </svg>
                      <span>18</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l-7-7h14l-7 7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-48 px-6 relative" id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9]">
            Ready to <span className="font-serif italic">Own</span> the <br />
            Conversation?
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Join fast-growing brands that are building trust where it matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="group w-full sm:w-auto bg-white text-black px-14 py-5 rounded-full font-semibold text-xl font-mono hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-white/20"
              onClick={() => handleHomepageLink('#contact')}
            >
              Get Started
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExploreMentions
