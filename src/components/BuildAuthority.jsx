import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homepage.css'

const BuildAuthority = () => {
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
              <Link to="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
            </div>
            <Link 
              to="/#contact" 
              className="px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
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
              Our strategies will improve your reputation on Reddit and build a basis for long-term sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        {/* Trust Score Display */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-12">
            Your <span className="font-serif font-normal italic text-gray-300">Trust Score</span>
          </h2>
          <div className="flex justify-center">
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
        </div>

        {/* Strategy Points */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-12 text-center">
            Our <span className="font-serif font-normal italic text-gray-300">Strategy</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Authentic Engagement</h3>
              <p className="text-gray-400 leading-relaxed">
                We focus on genuine interactions that build trust and credibility within Reddit communities, not quick wins.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Long-Term Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                Sustainable reputation building creates lasting value and positions your brand as a trusted authority.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Integration</h3>
              <p className="text-gray-400 leading-relaxed">
                We help you become a valued member of relevant communities, not just another advertiser.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-gray-400 leading-relaxed">
                Track your reputation growth with clear metrics and insights into community sentiment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0F0F11] border border-white/5 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-satoshi font-bold text-white mb-4">
            Ready to Build Your Authority?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's create a sustainable reputation strategy that drives long-term growth.
          </p>
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BuildAuthority
