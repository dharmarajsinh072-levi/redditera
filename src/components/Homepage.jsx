import React, { useState } from 'react'
import '../styles/Homepage.css'

const Homepage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: 'reddit marketing services',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="homepage bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-reddit-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-white">Redditera</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Testimonial Badge */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500"></div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                  </svg>
                ))}
              </div>
              <p className="text-base text-gray-300 font-medium">70+ happy clients</p>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-satoshi font-medium tracking-tight text-white mb-6 text-balance-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Reddit marketing strategies <br className="hidden md:block" />
              <span className="font-serif font-normal italic text-gray-300">refined for measurable impact</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Turn Reddit's passionate communities into your brand's loyal advocates. Build trust and drive sustainable growth.
            </p>

            {/* CTA Button */}
            <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <a 
                href="#contact" 
                className="group relative flex items-center gap-2 px-8 py-3.5 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
              >
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Metrics Dashboard */}
            <div className="w-full max-w-6xl mx-auto mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative rounded-3xl border border-white/10 bg-[#09090a] p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Metric Card 1 */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>Pageviews</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-white">50.8K</span>
                      <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E]">
                        +28.4%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Metric Card 2 */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>Monthly users</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-white">23.6K</span>
                      <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#EF4444]/10 text-[#EF4444]">
                        -12.6%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Metric Card 3 */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Engagements</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-white">79K</span>
                      <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E]">
                        +18.7%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Metric Card 4 */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span>Follower Growth</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-white">2.3K</span>
                      <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E]">
                        +9.1%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-6 text-center">Trusted Partners</p>
          <div className="w-full max-w-4xl mx-auto relative flex overflow-hidden" style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
          }}>
            <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
              {['Blade', 'Bonkbot', 'Candy AI', 'Pulse', 'Redwalking'].map((name, idx) => (
                <div key={idx} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                  <div className="h-12 w-auto min-w-[120px] md:min-w-[160px] flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-lg font-semibold">{name}</span>
                  </div>
                </div>
              ))}
              {['Blade', 'Bonkbot', 'Candy AI', 'Pulse', 'Redwalking'].map((name, idx) => (
                <div key={`dup-${idx}`} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                  <div className="h-12 w-auto min-w-[120px] md:min-w-[160px] flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-lg font-semibold">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium uppercase tracking-wider mb-6">
            About Us
          </div>
          <h2 className="text-4xl md:text-6xl font-satoshi font-bold text-white mb-6">
            An award-winning <br className="hidden md:block" />
            <span className="font-serif font-normal italic text-gray-300">Reddit marketing team</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            We are not "Reddit hackers" who found the way to cheat Reddit's algorithm. We simply engage with users in relevant and active discussions, mentioning your brand right in front of your target audience.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                </svg>
                <h3 className="text-5xl font-satoshi font-bold text-white">
                  Our <span className="font-serif font-normal italic text-gray-300">Vision</span>
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Our vision is to redefine Reddit marketing, making it accessible and impactful for all brands. We aim to lead with innovation, turning challenges into opportunities for authentic connections and sustained growth.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
                </svg>
                <h3 className="text-5xl font-satoshi font-bold text-white">
                  Our <span className="font-serif font-normal italic text-gray-300">Mission</span>
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Our mission is to harness Reddit's power, connecting brands with communities through tailored, authentic marketing. We focus on creating meaningful engagements and growth by understanding community dynamics and applying data-driven insights.
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[580px] w-full flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center">
              <div className="text-6xl opacity-30">👽</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 py-32 relative z-10">
        <div className="text-center mb-32 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium uppercase tracking-wider mb-6">
            Services
          </div>
          <h3 className="text-4xl md:text-6xl font-satoshi font-medium text-white mb-6">
            Leverage Reddit traffic & <br />
            <span className="font-serif font-normal italic text-gray-300">turn it into loyal customers</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            We don't spam, we engage in relevant discussions. After years of working with Reddit, we leverage our expertise to provide you with tailored strategies for your brand.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Service 1: Strategic Brand Mentions */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 text-left space-y-8">
              <h4 className="text-3xl md:text-5xl font-satoshi font-bold text-white">
                Strategic <span className="font-serif font-normal italic text-gray-300">Brand Mentions</span>
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                We will suggest your brand as the best solution, right where your audience is looking for answers.
              </p>
              <button className="group flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                Explore Mentions
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M7 17L17 7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 w-full relative group">
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

          {/* Service 2: Sustainable Reputation */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="flex-1 text-left space-y-8">
              <h4 className="text-3xl md:text-5xl font-satoshi font-bold text-white">
                Sustainable <span className="font-serif font-normal italic text-gray-300">Reputation</span>
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Our strategies will improve your reputation on Reddit and build a basis for long-term sustainable growth.
              </p>
              <button className="group flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                Build Authority
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M7 17L17 7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-square bg-[#0B0D0E] border border-white/10 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-8 border-transparent" style={{
                    background: 'conic-gradient(from 0deg, #22C55E 0deg 316.8deg, rgba(255,255,255,0.1) 316.8deg 360deg)'
                  }}></div>
                  <div className="absolute inset-8 rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">88/100</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Trust Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: High-Impact Advertising */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 text-left space-y-8">
              <h4 className="text-3xl md:text-5xl font-satoshi font-bold text-white">
                High-Impact <span className="font-serif font-normal italic text-gray-300">Advertising</span>
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                We will collaborate with Reddit ads team to run the most effective ads on the platform maximized for ROAS.
              </p>
              <button className="group flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                View Ad Solutions
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M7 17L17 7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-4 space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">ROAS</div>
                      <div className="text-2xl font-bold text-white">4.2x</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">CTR</div>
                      <div className="text-2xl font-bold text-white">3.85%</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">Conv. Rate</div>
                      <div className="text-2xl font-bold text-white">12%</div>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#0a0a0a]/50 rounded-xl border border-white/5 relative overflow-hidden h-48">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="adGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,80 C15,75 25,60 40,65 C55,70 65,30 80,40 C90,45 95,20 100,30" fill="none" stroke="#22C55E" strokeWidth="2" />
                      <path d="M0,80 C15,75 25,60 40,65 C55,70 65,30 80,40 C90,45 95,20 100,30 V100 H0 Z" fill="url(#adGradient)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 relative flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-gray-300">Sustainable Results</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-satoshi font-medium text-white mb-6">
            Typical traffic <span className="font-serif font-normal italic text-gray-300">increase</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-4">
            On average, our clients get consistently increasing traffic from our campaign, even days or weeks after the specific campaign ends.
          </p>
        </div>
        <div className="relative w-full max-w-5xl mx-auto p-4 md:p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#0F0F11] h-96 flex items-center justify-center">
            <div className="text-gray-500 text-sm">Traffic Growth Chart</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative flex flex-col px-5 py-8 md:px-6 md:py-10 bg-[#0A0A0A] hover:bg-[#0f0f0f] transition-colors duration-500 rounded-xl border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500"></div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">Client Name</span>
                <span className="text-sm text-gray-400 font-medium">Founder</span>
                <span className="text-sm text-gray-500">Company</span>
              </div>
            </div>
            <p className="text-lg text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
              It's been a pleasure to work with Redditera. From the very beginning of our journey, they have been one of our most reliable and trusted partners.
            </p>
          </div>
          <div className="group relative flex flex-col px-5 py-8 md:px-6 md:py-10 bg-[#0A0A0A] hover:bg-[#0f0f0f] transition-colors duration-500 rounded-xl border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500"></div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">David</span>
                <span className="text-sm text-gray-400 font-medium">Founder</span>
                <span className="text-sm text-gray-500">TechStar</span>
              </div>
            </div>
            <p className="text-lg text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
              Redditera always go beyond and above for us. We have been working for a few months now, got amazing results from Reddit so far.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a 
            href="#contact" 
            className="group relative flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
          >
            Get Started
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-8 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0F0F11] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0F0F11] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Inquiry</label>
              <select
                name="inquiry"
                value={formData.inquiry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0F0F11] border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20 transition-colors"
              >
                <option value="reddit marketing services">Reddit Marketing Services</option>
                <option value="brand mentions">Brand Mentions</option>
                <option value="advertising">Advertising</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-[#0F0F11] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-reddit-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold text-white">Redditera</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Helping brands build authentic communities and drive sustainable growth through strategic Reddit marketing.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6 border border-white/20 rounded"></div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Product</h4>
              <ul className="flex flex-col gap-3">
                {['Services', 'Features', 'Pricing', 'Case Studies'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Company</h4>
              <ul className="flex flex-col gap-3">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Legal</h4>
              <ul className="flex flex-col gap-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2026 Redditera. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Homepage
