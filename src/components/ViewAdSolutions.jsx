import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCountUp } from '../hooks/useCountUp'
import '../styles/Homepage.css'

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

  return (
    <div className="homepage bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/images/cropped-redditera-logo-2.webp" 
                alt="Redditera Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-8 h-8 bg-reddit-orange rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-white">Redditera</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <button onClick={() => handleHomepageLink('#about')} className="text-gray-300 hover:text-white transition-colors">About</button>
              <button onClick={() => handleHomepageLink('#services')} className="text-gray-300 hover:text-white transition-colors">Services</button>
            </div>
            <button 
              onClick={() => handleHomepageLink('#contact')}
              className="px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium uppercase tracking-wider mb-3">
              High-Impact Advertising
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold tracking-tight text-white mb-3 text-balance-center">
              High-Impact <span className="italic text-gray-300">Ad Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-3">
              We partner directly with Reddit's advertising team to deliver campaigns that outperform industry benchmarks. Every dollar optimized for maximum ROAS.
            </p>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8 relative z-10 bg-black">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-4 space-y-3">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="text-xs uppercase font-bold text-gray-500 mb-3">ROAS</div>
                  <div className="text-3xl font-bold text-white">4.2x</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="text-xs uppercase font-bold text-gray-500 mb-3">CTR</div>
                  <div className="text-3xl font-bold text-white">3.85%</div>
                </div>
              </div>
              <div className="col-span-8 bg-[#0a0a0a]/50 rounded-xl border border-white/5 relative overflow-hidden h-64">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="adGradientService" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,85 C15,80 25,70 40,75 C55,80 65,40 80,50 C90,55 95,25 100,35" fill="none" stroke="#22C55E" strokeWidth="2.5" />
                  <path d="M0,85 C15,80 25,70 40,75 C55,80 65,40 80,50 C90,55 95,25 100,35 V100 H0 Z" fill="url(#adGradientService)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        {/* Performance Metrics */}
        <div className="mb-3">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-3">
              Results That <span className="font-serif font-normal italic text-gray-300">Speak for Themselves</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our campaigns consistently outperform industry averages. Here's what clients achieve with our Reddit advertising expertise.
            </p>
          </div>
          <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MetricCard label="ROAS" value={4.2} suffix="x" description="Return on Ad Spend" comparison="Industry avg: 2.1x" />
              <MetricCard label="CTR" value={3.85} suffix="%" description="Click-Through Rate" comparison="Industry avg: 0.8%" />
              <MetricCard label="Conv. Rate" value={12} suffix="%" description="Conversion Rate" comparison="Industry avg: 4.2%" />
            </div>
          </div>
        </div>

        {/* Campaign Types */}
        <div className="mb-3">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-3 text-center">
            Campaign <span className="font-serif font-normal italic text-gray-300">Types</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-3">
            Multiple Reddit ad formats, each optimized for different goals. Choose the approach that aligns with your objectives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-white mb-3">Display Ads</h3>
              <p className="text-sm text-gray-400 mb-3">Traditional banner ads with high visibility</p>
              <ul className="space-y-3 text-xs text-gray-500">
                <li>• Brand awareness campaigns</li>
                <li>• Top-of-funnel targeting</li>
                <li>• Broad reach options</li>
              </ul>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-white mb-3">Promoted Posts</h3>
              <p className="text-sm text-gray-400 mb-3">Native content that blends seamlessly</p>
              <ul className="space-y-3 text-xs text-gray-500">
                <li>• Higher engagement rates</li>
                <li>• Community-friendly format</li>
                <li>• Discussion-driven results</li>
              </ul>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-white mb-3">Video Ads</h3>
              <p className="text-sm text-gray-400 mb-3">High-impact video content</p>
              <ul className="space-y-3 text-xs text-gray-500">
                <li>• Maximum engagement</li>
                <li>• Storytelling opportunities</li>
                <li>• Premium placement options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-3">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-3 text-center">
            How We <span className="font-serif font-normal italic text-gray-300">Deliver Results</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-3">
            Our methodology combines Reddit's platform expertise with data-driven optimization to ensure every campaign exceeds expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Data Optimization</h3>
              <p className="text-gray-400 leading-relaxed">
                We don't set and forget. Every campaign is monitored in real-time with daily optimizations. Bid adjustments, audience refinements, and creative testing happen continuously to maximize ROAS.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct Reddit Partnership</h3>
              <p className="text-gray-400 leading-relaxed">
                Our relationship with Reddit's advertising team gives us early access to new features, beta testing, and direct support. This partnership advantage translates to better campaign performance.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Precision Audience Targeting</h3>
              <p className="text-gray-400 leading-relaxed">
                Reddit's unique targeting—subreddit-based, interest-based, and lookalike audiences—lets us reach exactly who matters. We combine multiple strategies to find your highest-value prospects.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ROAS-First Campaign Structure</h3>
              <p className="text-gray-400 leading-relaxed">
                Every decision—from creative selection to budget allocation—prioritizes ROAS. We structure campaigns to maximize revenue, not just impressions or clicks.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0F0F11] border border-white/5 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-satoshi font-bold text-white mb-3">
            Ready to 2x Your Reddit ROAS?
          </h2>
          <p className="text-gray-400 text-lg mb-3 max-w-2xl mx-auto">
            Stop wasting ad spend on underperforming campaigns. Our expertise delivers 4.2x ROAS—double the industry average. Let's build a campaign that moves the needle.
          </p>
          <button 
            onClick={() => handleHomepageLink('#contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}

// Metric Card Component with Count-Up Animation
const MetricCard = ({ label, value, suffix, description, comparison }) => {
  const [count, ref] = useCountUp(value, 2000, true)
  
  const formatNumber = (num) => {
    if (suffix === 'x') {
      return num.toFixed(1) + suffix
    }
    if (suffix === '%') {
      if (value < 10) {
        return num.toFixed(2) + suffix
      }
      return num.toFixed(1) + suffix
    }
    return Math.floor(num) + suffix
  }

  return (
    <div 
      ref={ref}
      className="bg-white/5 rounded-xl p-6 border border-white/5 text-center hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="text-[10px] uppercase font-bold text-gray-500 mb-3">{label}</div>
      <div className="text-4xl font-bold text-white mb-3">{formatNumber(count)}</div>
      <p className="text-sm text-gray-400 mb-3">{description}</p>
      <p className="text-xs text-gray-500">{comparison}</p>
    </div>
  )
}

export default ViewAdSolutions
