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
              Strategic <span className="font-serif font-normal italic text-gray-300">Brand Mentions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
              Position your brand as the solution when your audience is actively seeking answers. We place authentic, value-driven mentions in high-intent conversations that convert browsers into customers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        {/* Why It Matters */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-4">
              Why <span className="font-serif font-normal italic text-gray-300">Brand Mentions Work</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Reddit users trust recommendations from their community more than traditional ads. When your brand appears as a genuine solution in active discussions, you're not interrupting—you're helping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">3.2x</div>
              <p className="text-gray-400">Higher conversion rate compared to display ads</p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">68%</div>
              <p className="text-gray-400">Of Reddit users prefer community recommendations</p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">5.2x</div>
              <p className="text-gray-400">Better engagement rate than social media ads</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-12 text-center">
            How <span className="font-serif font-normal italic text-gray-300">We Do It</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Discover High-Intent Conversations</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team monitors thousands of subreddits daily, identifying threads where users are actively seeking solutions your brand provides. We focus on high-intent moments, not just any mention.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Craft Contextual, Value-First Responses</h3>
              <p className="text-gray-400 leading-relaxed">
                Every mention is written by our expert team to provide genuine value first. We answer the question, solve the problem, then naturally position your brand as the solution—never as a sales pitch.
              </p>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Measure & Optimize Performance</h3>
              <p className="text-gray-400 leading-relaxed">
                We track every mention's performance—engagement, clicks, conversions—and continuously refine our strategy to maximize your ROI from Reddit's engaged communities.
              </p>
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-4">
              See It <span className="font-serif font-normal italic text-gray-300">In Action</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Here's how a strategic brand mention looks in a real Reddit conversation. Notice how the response provides value first, then naturally introduces the solution.
            </p>
          </div>
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
                <div className="text-xs text-gray-500">2.3k members online</div>
              </div>
              <div className="flex-1 p-6 bg-[#0a0a0a]">
                <div className="mb-4">
                  <h5 className="text-base font-semibold text-white mb-2">How do you guys get customers with a low-priced SaaS product?</h5>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>Posted by u/startupfounder</span>
                    <span>•</span>
                    <span>8 hours ago</span>
                    <span>•</span>
                    <span>127 comments</span>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 bg-[#0F0F11] p-4 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-blue-400">u/Ape_in_a_Suit</span>
                    <span className="text-xs text-gray-500">147 points</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-500">Verified</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-3">
                    We've had great success with Reddit ads and engaging in relevant subreddits. Our sign-ups increased by 20% after implementing a Reddit-focused strategy.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    The key is finding communities where your product solves a real problem. We use [BrandName] to track which subreddits drive the most qualified leads—it's been a game-changer for our targeting.
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                    <button className="hover:text-white transition-colors">↑ 147</button>
                    <button className="hover:text-white transition-colors">Reply</button>
                    <button className="hover:text-white transition-colors">Share</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0F0F11] border border-white/5 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-satoshi font-bold text-white mb-4">
            Start Converting Reddit Conversations Into Customers
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join brands that are already seeing 3x higher conversion rates from strategic Reddit mentions. Let's identify your high-intent opportunities and craft mentions that convert.
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
