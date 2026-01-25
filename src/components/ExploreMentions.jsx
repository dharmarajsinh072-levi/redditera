import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Homepage.css'
import '../styles/ExploreMentions.css'

const ExploreMentions = () => {
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

  return (
    <div className="dark explore-mentions-bg bg-[#050505] text-gray-100 min-h-screen font-sans selection:bg-white selection:text-black antialiased">
      <div className="noise-overlay" />

      <header className="relative pt-56 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-focal -z-10 opacity-60"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block py-1.5 px-5 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase mb-10 bg-white/5 backdrop-blur-sm">
            Next-Gen Reddit Marketing
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tighter leading-[0.9] mb-12">
            Strategic <span className="font-serif italic text-white/90">Brand</span> <br />
            Mentions
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            Insert your brand into high-intent Reddit discussions naturally. We identify the threads where your customers are asking
            questions and provide the answers they trust.
          </p>
          <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
            <button
              className="group bg-white text-black px-10 py-[18px] rounded-full font-semibold text-lg font-mono hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-white/10"
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

      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-4">
              <h3 className="text-6xl font-bold tracking-tighter">3.2x</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Higher Conversion Rate</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-6xl font-bold tracking-tighter">68%</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Community Trust Rating</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-6xl font-bold tracking-tighter">5.2x</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Better Engagement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-24 text-center">
            How <span className="font-serif italic">We Do It</span>
          </h2>
          <div className="space-y-0 relative">
            <div className="absolute left-[23px] top-6 bottom-6 line-connector"></div>

            <div className="timeline-item flex gap-12 relative group pb-20">
              <div className="timeline-number flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-bold text-lg z-10 bg-[#050505] transition-all duration-500">
                1
              </div>
              <div className="timeline-content opacity-50 group-hover:opacity-100">
                <h3 className="text-3xl font-bold mb-5 group-hover:translate-x-2 transition-transform duration-500">Discover Intent</h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  Our proprietary engine scans millions of Reddit threads daily to find users actively seeking recommendations in your niche.
                </p>
              </div>
            </div>

            <div className="timeline-item flex gap-12 relative group pb-20">
              <div className="timeline-number flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-bold text-lg z-10 bg-[#050505] transition-all duration-500">
                2
              </div>
              <div className="timeline-content opacity-50 group-hover:opacity-100">
                <h3 className="text-3xl font-bold mb-5 group-hover:translate-x-2 transition-transform duration-500">Authentic Engagement</h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  We craft helpful, human-centric responses that prioritize community value while naturally introducing your brand as a solution.
                </p>
              </div>
            </div>

            <div className="timeline-item flex gap-12 relative group">
              <div className="timeline-number flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-bold text-lg z-10 bg-[#050505] transition-all duration-500">
                3
              </div>
              <div className="timeline-content opacity-50 group-hover:opacity-100">
                <h3 className="text-3xl font-bold mb-5 group-hover:translate-x-2 transition-transform duration-500">Precision Optimization</h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  Real-time tracking of upvotes, clicks, and conversions allows us to double down on the subreddits that drive actual ROI.
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

          <div className="rounded-2xl overflow-hidden glass-panel">
            <div className="bg-white/5 px-6 py-4 flex items-center gap-4 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
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
      </section>

      <section className="py-48 px-6 relative" id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9]">
            Ready to <span className="font-serif italic">Own</span> the <br />
            Conversation?
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Join 200+ fast-growing brands that are building trust where it matters most.
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

      <footer className="py-16 px-8 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-7 h-7 bg-reddit-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-base">R</span>
              </div>
              <span className="font-bold tracking-tight text-lg">Redditera</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Building the future of community-driven growth. Strategic, ethical, and highly effective brand mentions for the modern web.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <p className="text-white font-bold mb-2 text-xs uppercase tracking-widest">Company</p>
            <a className="text-gray-500 hover:text-white transition-colors" href="#">
              About Us
            </a>
            <a className="text-gray-500 hover:text-white transition-colors" href="#">
              Case Studies
            </a>
            <a className="text-gray-500 hover:text-white transition-colors" href="#">
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <p className="text-white font-bold mb-2 text-xs uppercase tracking-widest">Legal</p>
            <a className="text-gray-500 hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-gray-500 hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <p className="text-gray-600 mt-4 text-xs">© 2024 Redditera. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ExploreMentions
