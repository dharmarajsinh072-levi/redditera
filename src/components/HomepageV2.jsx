import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import '../styles/Homepage.css'

const Homepage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: 'reddit marketing services', message: '' })
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Final Monthly Data (Jan 2025 - Dec 2025)
  const currentMonthData = [
    { month: 'Jan 2025', Revenue: 120000, Expenses: 72000 },
    { month: 'Feb 2025', Revenue: 135000, Expenses: 78000 },
    { month: 'Mar 2025', Revenue: 150000, Expenses: 86000 },
    { month: 'Apr 2025', Revenue: 165000, Expenses: 94000 },
    { month: 'May 2025', Revenue: 182000, Expenses: 102000 },
    { month: 'Jun 2025', Revenue: 200000, Expenses: 112000 },
    { month: 'Jul 2025', Revenue: 215000, Expenses: 120000 },
    { month: 'Aug 2025', Revenue: 228000, Expenses: 128000 },
    { month: 'Sep 2025', Revenue: 238000, Expenses: 135000 },
    { month: 'Oct 2025', Revenue: 246000, Expenses: 140000 },
    { month: 'Nov 2025', Revenue: 252000, Expenses: 145000 },
    { month: 'Dec 2025', Revenue: 260000, Expenses: 150000 },
  ]

  return (
    <div className="homepage bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-reddit-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Redditera</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 font-mono text-sm text-gray-300">
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
            </div>
            <a
              href="#contact"
              className="group px-6 py-2.5 bg-white text-black font-mono text-sm font-semibold hover:bg-gray-100 transition-all rounded-full inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Get Started
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          {/* Testimonial Badge */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-700"></div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex text-yellow-400 text-xs">★★★★★</div>
              <span className="text-xs text-gray-400">Trusted by 200+ brands</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            Reddit marketing strategies <br /> refined for <span className="text-gray-400">measurable impact</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Turn Reddit&apos;s passionate communities into your brand&apos;s loyal advocates. Build trust and drive sustainable growth.
          </p>

          <div className="flex justify-center mb-16">
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

          {/* Interactive Financial Dashboard */}
          <div className="w-full max-w-6xl mx-auto mt-12 border border-white/20 bg-[#09090a] p-6 rounded-3xl relative z-10">
            <div className="flex justify-between items-center mb-8 px-2">
              <div>
                <h3 className="text-xl font-bold text-left">Financial Overview</h3>
                <p className="text-sm text-gray-400">Monthly revenue tracking</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">$260,000</p>
                <p className="text-xs text-green-500 font-mono">+12.5% vs last month</p>
              </div>
            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentMonthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="month" stroke="#666" tick={{ fill: '#666' }} axisLine={false} tickLine={false} />
                  <YAxis
                    stroke="#666"
                    tick={{ fill: '#666' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${Number(v).toLocaleString()}`}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="Revenue" fill="#fff" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* TechStar Testimonial Section */}
      <section className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto border border-white/10 rounded-3xl p-12 bg-[#0b0b0b] flex flex-col md:flex-row gap-8 items-center">
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden">
              {/* Placeholder for techstar founder image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
            </div>
            <div>
              <p className="font-semibold text-white text-lg">David</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Founder — TechStar</p>
            </div>
          </div>
          <div className="text-gray-300 text-lg leading-relaxed italic">
            &quot;Redditera always go beyond and above for us. We have been working for a few months now, got amazing results from Reddit so far and
            just agreed for extra 6 months of an engagement.&quot;
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-[0.8rem] text-center"> Ready to dominate Reddit? </h2>
          <p className="font-elegant text-lg text-gray-300 text-center mb-[1.2rem] max-w-2xl mx-auto">
            {' '}
            Transform your brand with authentic community engagement.{' '}
          </p>
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-6 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors font-mono text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-6 uppercase tracking-wider">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors font-mono text-sm"
                placeholder="john@example.com"
              />
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              {' '}
              Request an assessment{' '}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Homepage

