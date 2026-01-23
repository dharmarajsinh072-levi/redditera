import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homepage.css'

const ExploreMentions = () => {
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
              Strategic Brand Mentions
            </div>
            <h1 className="text-5xl md:text-7xl font-satoshi font-medium tracking-tight text-white mb-6 text-balance-center">
              Explore <span className="font-serif font-normal italic text-gray-300">Brand Mentions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
              We suggest your brand as the best solution, right where your audience is looking for answers. Strategic mentions that drive real engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-12 text-center">
            How <span className="font-serif font-normal italic text-gray-300">It Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Identify Opportunities</h3>
              <p className="text-gray-400 leading-relaxed">
                We monitor relevant subreddits and identify threads where your brand can provide genuine value and solutions.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Craft Authentic Mentions</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team creates natural, helpful responses that position your brand as the ideal solution without appearing promotional.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Drive Engagement</h3>
              <p className="text-gray-400 leading-relaxed">
                Strategic mentions lead to increased visibility, traffic, and conversions from highly engaged Reddit communities.
              </p>
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-12 text-center">
            Real <span className="font-serif font-normal italic text-gray-300">Example</span>
          </h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-[16/13] bg-[#0B0D0E] border border-white/10 rounded-xl overflow-hidden shadow-xl flex flex-col">
              <div className="h-14 bg-[#0F0F11] border-b border-white/5 flex items-center px-6 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF4500] flex items-center justify-center shadow-[0_0_15px_rgba(255,69,0,0.3)]">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-200">r/Marketing</span>
                    <span className="text-xs text-gray-500">u/MarketingGuru</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6 bg-[#0a0a0a]">
                <div className="mb-4">
                  <h5 className="text-base font-semibold text-white mb-3">How do you guys get customers with a low-priced SaaS product?</h5>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 bg-[#0F0F11] p-4 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-blue-400">u/Ape_in_a_Suit</span>
                    <span className="text-xs text-gray-500">147 points</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We've had great success with Reddit ads and engaging in relevant subreddits. Our sign-ups increased by 20% after implementing a Reddit-focused strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0F0F11] border border-white/5 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-satoshi font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how strategic brand mentions can drive growth for your business.
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

export default ExploreMentions
