import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCountUp } from '../hooks/useCountUp'
import '../styles/Homepage.css'

const BuildAuthority = () => {
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
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium uppercase tracking-wider mb-6">
              Sustainable Reputation
            </div>
            <h1 className="text-5xl md:text-7xl font-satoshi font-medium tracking-tight text-white mb-6 text-balance-center">
              Build <span className="font-serif font-normal italic text-gray-300">Authority</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
              Transform from anonymous to authoritative. Become the trusted voice in your industry—the one Reddit users turn to for expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        {/* Trust Score Display */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-6">
            Measure Your <span className="font-serif font-normal italic text-gray-300">Reddit Authority</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Our Trust Score tracks how Reddit communities perceive your brand. Higher scores = more credibility, better engagement, increased conversions.
          </p>
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border-8 border-transparent" style={{
                background: 'conic-gradient(from 0deg, #22C55E 0deg 316.8deg, rgba(255,255,255,0.1) 316.8deg 360deg)'
              }}></div>
              <div className="absolute inset-8 rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-white">88/100</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider mt-2">Trust Score</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-2">70-79</div>
              <p className="text-sm text-gray-400">Building Trust</p>
            </div>
            <div className="bg-[#0F0F11] border border-white/10 rounded-xl p-6 border-green-500/30">
              <div className="text-2xl font-bold text-white mb-2">80-89</div>
              <p className="text-sm text-gray-400">Trusted Authority</p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-2">90-100</div>
              <p className="text-sm text-gray-400">Industry Leader</p>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-4 text-center">
            What <span className="font-serif font-normal italic text-gray-300">You Get</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-8">
            Building authority isn't about quick wins—it's about becoming the go-to expert in your space. Here's how we make it happen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Authentic Community Engagement</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We don't drop links and disappear. Our team engages authentically—answering questions, providing value, building relationships. Reddit users spot inauthenticity instantly, so we never fake it.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Regular, valuable contributions to relevant subreddits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Thoughtful responses that demonstrate expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Consistent presence that builds recognition</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sustainable Long-Term Growth</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Unlike paid ads that stop when you stop paying, authority compounds. Each quality interaction builds on the last, creating a foundation that drives organic growth for years.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Compound reputation growth over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Organic mentions from community members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Reduced dependency on paid advertising</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deep Community Integration</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Become a recognized, valued member of your target communities. Not a marketer or advertiser—a trusted contributor who happens to have a great solution.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Active participation in key subreddits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Moderator relationships and community respect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>User-generated recommendations of your brand</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data-Driven Authority Building</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Every interaction is tracked and optimized. We measure sentiment, engagement quality, and trust score progression to ensure your authority grows strategically.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Real-time Trust Score monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Community sentiment analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Monthly authority growth reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0F0F11] border border-white/5 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-satoshi font-bold text-white mb-4">
            Become the Authority in Your Space
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Stop competing for attention. Start earning trust. Build Reddit authority with a strategy that compounds over time—turning community respect into sustainable growth.
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

export default BuildAuthority
