import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homepage.css'

const ViewAdSolutions = () => {
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
              High-Impact Advertising
            </div>
            <h1 className="text-5xl md:text-7xl font-satoshi font-medium tracking-tight text-white mb-6 text-balance-center">
              View <span className="font-serif font-normal italic text-gray-300">Ad Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
              We collaborate with Reddit's ads team to run the most effective ads on the platform, maximized for ROAS.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        {/* Performance Metrics */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-12 text-center">
            Performance <span className="font-serif font-normal italic text-gray-300">Metrics</span>
          </h2>
          <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 text-center">
                <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">ROAS</div>
                <div className="text-4xl font-bold text-white">4.2x</div>
                <p className="text-sm text-gray-400 mt-2">Return on Ad Spend</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 text-center">
                <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">CTR</div>
                <div className="text-4xl font-bold text-white">3.85%</div>
                <p className="text-sm text-gray-400 mt-2">Click-Through Rate</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 text-center">
                <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">Conv. Rate</div>
                <div className="text-4xl font-bold text-white">12%</div>
                <p className="text-sm text-gray-400 mt-2">Conversion Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-12 text-center">
            Our <span className="font-serif font-normal italic text-gray-300">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data-Driven Strategy</h3>
              <p className="text-gray-400 leading-relaxed">
                We analyze performance data continuously to optimize campaigns and maximize your return on investment.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Reddit Partnership</h3>
              <p className="text-gray-400 leading-relaxed">
                Direct collaboration with Reddit's advertising team ensures access to best practices and platform insights.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Targeted Campaigns</h3>
              <p className="text-gray-400 leading-relaxed">
                Precise audience targeting ensures your ads reach the right people at the right time for maximum impact.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ROAS Optimization</h3>
              <p className="text-gray-400 leading-relaxed">
                Every campaign is optimized for return on ad spend, ensuring you get the best value for your investment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0F0F11] border border-white/5 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-satoshi font-bold text-white mb-4">
            Ready to Maximize Your ROAS?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our high-impact advertising solutions can drive results for your brand.
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

export default ViewAdSolutions
