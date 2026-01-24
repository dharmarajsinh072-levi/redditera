import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend, ReferenceLine } from 'recharts'
import '../styles/Homepage.css'

const Homepage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: 'reddit marketing services',
    message: ''
  })

  const [selectedQuarter, setSelectedQuarter] = useState('Q1')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Monthly data for each quarter - showing dramatic growth after hiring us in Q2
  const monthlyDataByQuarter = {
    Q1: [
      { month: 'Jan', Revenue: 32000, Expenses: 25000 },
      { month: 'Feb', Revenue: 38000, Expenses: 28000 },
      { month: 'Mar', Revenue: 42000, Expenses: 30000 },
    ],
    Q2: [
      { month: 'Apr', Revenue: 125000, Expenses: 45000 }, // Explosive growth after hiring us mid-April
      { month: 'May', Revenue: 185000, Expenses: 52000 },
      { month: 'Jun', Revenue: 245000, Expenses: 58000 },
    ],
    Q3: [
      { month: 'Jul', Revenue: 310000, Expenses: 65000 },
      { month: 'Aug', Revenue: 375000, Expenses: 72000 },
      { month: 'Sep', Revenue: 440000, Expenses: 78000 },
    ],
    Q4: [
      { month: 'Oct', Revenue: 510000, Expenses: 85000 },
      { month: 'Nov', Revenue: 585000, Expenses: 92000 },
      { month: 'Dec', Revenue: 660000, Expenses: 98000 },
    ],
  }

  // Quarterly totals for metrics - recalculated
  const quarterlyTotals = {
    Q1: { TotalRevenue: 112000, TotalExpenses: 83000 },
    Q2: { TotalRevenue: 555000, TotalExpenses: 155000 },
    Q3: { TotalRevenue: 1125000, TotalExpenses: 215000 },
    Q4: { TotalRevenue: 1755000, TotalExpenses: 275000 },
  }

  // Get current quarter monthly data
  const currentMonthData = useMemo(() => {
    return monthlyDataByQuarter[selectedQuarter] || monthlyDataByQuarter.Q1
  }, [selectedQuarter])

  // Get current quarter totals
  const currentQuarterData = useMemo(() => {
    return quarterlyTotals[selectedQuarter] || quarterlyTotals.Q1
  }, [selectedQuarter])

  // Calculate metrics for selected quarter
  const quarterMetrics = useMemo(() => {
    const totalRevenue = currentQuarterData.TotalRevenue
    const totalExpenses = currentQuarterData.TotalExpenses
    const profit = totalRevenue - totalExpenses
    
    // Calculate growth vs previous quarter
    const quarters = ['Q1', 'Q2', 'Q3', 'Q4']
    const quarterIndex = quarters.indexOf(selectedQuarter)
    const prevQuarterKey = quarterIndex > 0 ? quarters[quarterIndex - 1] : null
    const prevQuarter = prevQuarterKey ? quarterlyTotals[prevQuarterKey] : null
    
    const revenueGrowth = prevQuarter 
      ? (((totalRevenue - prevQuarter.TotalRevenue) / prevQuarter.TotalRevenue) * 100).toFixed(1)
      : '0.0'
    const profitGrowth = prevQuarter
      ? (((profit - (prevQuarter.TotalRevenue - prevQuarter.TotalExpenses)) / (prevQuarter.TotalRevenue - prevQuarter.TotalExpenses)) * 100).toFixed(1)
      : '0.0'

    return {
      totalRevenue,
      totalExpenses,
      profit,
      revenueGrowth,
      profitGrowth
    }
  }, [selectedQuarter, currentQuarterData])

  // Profit data for bar chart - varies by quarter to match image
  const profitDataByQuarter = {
    Q1: [
      { time: '12 AM', value: 35 },
      { time: '1 AM', value: 45 },
      { time: '2 AM', value: 40 },
      { time: '3 AM', value: 70 },
      { time: '4 AM', value: 60 },
      { time: '5 AM', value: 45 },
      { time: '6 AM', value: 55 },
      { time: '7 AM', value: 65 },
      { time: '8 AM', value: 80 },
      { time: '9 AM', value: 40 },
      { time: '10 AM', value: 60 },
      { time: '11 AM', value: 75 },
      { time: '12 PM', value: 50 },
      { time: '1 PM', value: 55 },
      { time: '2 PM', value: 45 },
    ],
    Q2: [
      { time: '12 AM', value: 40 },
      { time: '1 AM', value: 55 },
      { time: '2 AM', value: 45 },
      { time: '3 AM', value: 80 },
      { time: '4 AM', value: 70 },
      { time: '5 AM', value: 50 },
      { time: '6 AM', value: 65 },
      { time: '7 AM', value: 80 },
      { time: '8 AM', value: 95 },
      { time: '9 AM', value: 45 },
      { time: '10 AM', value: 70 },
      { time: '11 AM', value: 85 },
      { time: '12 PM', value: 55 },
      { time: '1 PM', value: 60 },
      { time: '2 PM', value: 50 },
    ],
    Q3: [
      { time: '12 AM', value: 45 },
      { time: '1 AM', value: 65 },
      { time: '2 AM', value: 50 },
      { time: '3 AM', value: 90 },
      { time: '4 AM', value: 80 },
      { time: '5 AM', value: 55 },
      { time: '6 AM', value: 75 },
      { time: '7 AM', value: 90 },
      { time: '8 AM', value: 100 },
      { time: '9 AM', value: 50 },
      { time: '10 AM', value: 80 },
      { time: '11 AM', value: 95 },
      { time: '12 PM', value: 60 },
      { time: '1 PM', value: 70 },
      { time: '2 PM', value: 55 },
    ],
    Q4: [
      { time: '12 AM', value: 50 },
      { time: '1 AM', value: 70 },
      { time: '2 AM', value: 55 },
      { time: '3 AM', value: 95 },
      { time: '4 AM', value: 85 },
      { time: '5 AM', value: 60 },
      { time: '6 AM', value: 80 },
      { time: '7 AM', value: 95 },
      { time: '8 AM', value: 105 },
      { time: '9 AM', value: 55 },
      { time: '10 AM', value: 85 },
      { time: '11 AM', value: 100 },
      { time: '12 PM', value: 65 },
      { time: '1 PM', value: 75 },
      { time: '2 PM', value: 60 },
    ],
  }

  const profitData = profitDataByQuarter[selectedQuarter] || profitDataByQuarter.Q1

  const barColors = ['#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7']

  return (
    <div className="homepage bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">REDDITERA</span>
            </Link>
            <a 
              href="#contact" 
              className="px-6 py-2 border border-white text-white font-mono text-sm hover:bg-white hover:text-black transition-all"
            >
              LOGIN
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Data Stream Status */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-black border border-white/20 rounded-full mb-8 font-mono text-xs text-white">
              <div className="w-2 h-2 bg-[#FF4500] rounded-full animate-pulse"></div>
              <span>DATA STREAM ONLINE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-serif font-semibold text-white mb-6 tracking-tight leading-tight">
              Reddit marketing for brands that can't afford to lose trust
            </h1>

            {/* Subtitle */}
            <p className="font-elegant text-lg md:text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              We help <span className="italic">SaaS, consumer, and founder-led brands</span> turn Reddit into a <span className="italic">reliable acquisition and reputation channel</span> — without bans, backlash, or short-term tactics that burn credibility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 mb-16">
              <a 
                href="#contact" 
                className="group relative flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Request a Reddit Strategy Assessment
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
              <p className="font-mono text-xs text-gray-400">30 minutes. Clear answers. No pitch if it's not a fit.</p>
              <a 
                href="#services" 
                className="group relative flex items-center gap-2 px-6 py-2.5 border border-white/40 text-white font-mono text-sm hover:border-white transition-all duration-300"
              >
                See the Approach
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Financial Overview Section */}
            <div className="w-full max-w-6xl mx-auto mt-8">
              <div className="text-center mb-8">
                <p className="font-mono text-xs text-gray-400 mb-2 tracking-wider">FINANCIAL OVERVIEW</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-2">
                  Measured results from Reddit-led growth
                </h2>
                <p className="font-mono text-xs text-gray-400 mb-1">
                  Recent outcomes from managed Reddit campaigns
                </p>
                <p className="font-mono text-xs text-[#22C55E]">
                  Executed without bans, shadowbans, or account resets.
                </p>
              </div>
              <div className="relative border border-white/20 bg-black p-6 mb-8">
                {/* Top Row - 4 Small Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {/* Attributed Revenue */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 transition-all duration-200 group hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Attributed Revenue (6 months)</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-white group-hover:text-white">50.8K</span>
                      <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E] group-hover:bg-[#22C55E]/15">
                        +28.4%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Organic Reddit Impressions */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 transition-all duration-200 group hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>Organic Reddit Impressions</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-white group-hover:text-white">23.6K</span>
                      <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#EF4444]/10 text-[#EF4444] group-hover:bg-[#EF4444]/15">
                        -12.6%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Comment-to-Click Engagement */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 transition-all duration-200 group hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>Comment-to-Click Engagement</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-white group-hover:text-white">756</span>
                      <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E] group-hover:bg-[#22C55E]/15">
                        +3.1%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Subscriptions */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 transition-all duration-200 group hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Subscriptions</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-2xl font-bold text-white group-hover:text-white">2.3K</span>
                      <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E] group-hover:bg-[#22C55E]/15">
                        +11.3%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle Row - 2 Large Chart Widgets */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  {/* Total Revenue - Line Chart */}
                  <div className="lg:col-span-1 bg-[#0F0F11] border border-white/5 rounded-xl p-4 sm:p-6 flex flex-col relative">
                    {/* Quarter Dropdown - Top Right Corner */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                      <select
                        value={selectedQuarter}
                        onChange={(e) => setSelectedQuarter(e.target.value)}
                        className="appearance-none bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-white cursor-pointer hover:border-white/20 focus:outline-none focus:border-white/30 transition-all duration-200 shadow-sm"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '12px'
                        }}
                      >
                        <option value="Q1">Q1 2025</option>
                        <option value="Q2">Q2 2025</option>
                        <option value="Q3">Q3 2025</option>
                        <option value="Q4">Q4 2025</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 mb-4 sm:mb-6 pr-24 sm:pr-28">
                      <div className="font-mono text-xs text-gray-400 mb-1">TOTAL REVENUE</div>
                      <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          ${(quarterMetrics.totalRevenue / 1000).toFixed(1)}K
                        </h3>
                        <div className="flex flex-col">
                          <span className="text-[#FF4500] font-bold text-lg">+{quarterMetrics.revenueGrowth}%</span>
                          <span className="font-mono text-xs text-gray-400">YOY GROWTH</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 h-48 sm:h-64 min-h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={currentMonthData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                          <defs>
                            <filter id="revenueShadow" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                              <feOffset dx="0" dy="2" result="offsetblur" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.15" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <filter id="expensesShadow" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
                              <feOffset dx="0" dy="2" result="offsetblur" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.12" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#FF4500" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.18" />
                              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                          <XAxis 
                            dataKey="month" 
                            stroke="#888" 
                            tick={{ fill: '#888', fontSize: 10 }}
                            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                          />
                          <YAxis 
                            stroke="#888" 
                            tick={{ fill: '#888', fontSize: 10 }}
                            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                            tickFormatter={(value) => `${value/1000}K`}
                            domain={['dataMin', 'dataMax']}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1a1a1a', 
                              border: '1px solid rgba(255,255,255,0.15)', 
                              color: '#fff',
                              borderRadius: '8px',
                              padding: '10px 14px',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                              backdropFilter: 'blur(8px)'
                            }}
                            labelStyle={{ color: '#fff', fontSize: '12px', marginBottom: '6px', fontWeight: '600' }}
                            formatter={(value, name) => {
                              const formatted = `$${value.toLocaleString()}`;
                              return [formatted, name];
                            }}
                            cursor={{ stroke: '#A855F7', strokeWidth: 2, strokeDasharray: '0', opacity: 0.8 }}
                            animationDuration={200}
                            allowEscapeViewBox={{ x: false, y: false }}
                            shared={true}
                          />
                          <Legend 
                            wrapperStyle={{ fontSize: '10px', paddingTop: '10px', fontFamily: 'JetBrains Mono, monospace' }}
                            iconType="line"
                            formatter={(value) => <span style={{ color: '#fff', fontSize: '10px', fontFamily: 'JetBrains Mono, monospace' }}>— {value.toUpperCase()}</span>}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="Revenue" 
                            stroke="#FF4500" 
                            strokeWidth={4}
                            dot={false}
                            activeDot={{ r: 12, fill: '#FF4500', stroke: '#fff', strokeWidth: 3, filter: 'drop-shadow(0 0 12px rgba(255, 69, 0, 1))', cursor: 'pointer' }}
                            name="Revenue"
                            animationDuration={200}
                            animationBegin={0}
                            filter="url(#revenueShadow)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            isAnimationActive={true}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 69, 0, 0.8))' }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="Expenses" 
                            stroke="#0EA5E9" 
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 9, fill: '#0EA5E9', stroke: '#fff', strokeWidth: 2.5, filter: 'drop-shadow(0 4px 8px rgba(14, 165, 233, 0.6))', cursor: 'pointer' }}
                            name="Expenses"
                            animationDuration={200}
                            animationBegin={100}
                            filter="url(#expensesShadow)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            isAnimationActive={true}
                          />
                          {/* Reference line to highlight when they hired us - shows in Q2 */}
                          {selectedQuarter === 'Q2' && (
                            <ReferenceLine 
                              x="Apr" 
                              stroke="#22C55E" 
                              strokeWidth={2} 
                              strokeDasharray="5 5" 
                              label={{ value: "Hired Us", position: "top", fill: "#22C55E", fontSize: 11, fontWeight: 'bold' }}
                            />
                          )}
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Net Income / Total Profit - Bar Chart */}
                  <div className="lg:col-span-1 border border-white/20 bg-black p-4 sm:p-6 flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-6">
                      <div className="flex-1">
                        <div className="font-mono text-xs text-gray-400 mb-1">NET INCOME</div>
                        <div className="flex flex-wrap items-center gap-4 mt-1">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            ${(quarterMetrics.profit / 1000).toFixed(1)}K
                          </h3>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="h-20 sm:h-24 flex items-end justify-between gap-1 mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={profitData} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
                            <defs>
                              <filter id="barShadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                                <feOffset dx="0" dy="1" result="offsetblur" />
                                <feComponentTransfer>
                                  <feFuncA type="linear" slope="0.2" />
                                </feComponentTransfer>
                                <feMerge>
                                  <feMergeNode />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                            <XAxis 
                              dataKey="time" 
                              stroke="#888" 
                              tick={{ fill: '#888', fontSize: 9 }}
                              axisLine={false}
                              tickLine={false}
                              hide
                            />
                            <YAxis hide />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#1a1a1a', 
                                border: '1px solid rgba(255,255,255,0.15)', 
                                color: '#fff',
                                borderRadius: '6px',
                                padding: '8px 12px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                backdropFilter: 'blur(8px)'
                              }}
                              labelStyle={{ color: '#fff', fontSize: '11px', marginBottom: '4px', fontWeight: '600' }}
                              formatter={(value) => [`${value}%`, 'Profit']}
                              cursor={{ fill: 'rgba(168, 85, 247, 0.12)' }}
                              animationDuration={200}
                            />
                            <Bar 
                              dataKey="value" 
                              radius={[4, 4, 0, 0]}
                              animationDuration={200}
                              animationBegin={0}
                            >
                              {profitData.map((entry, index) => (
                                <Cell 
                                  key={`cell-${index}`} 
                                  fill="rgba(255, 255, 255, 0.2)"
                                  style={{ 
                                    transition: 'opacity 0.2s ease',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                                    backdropFilter: 'blur(10px)'
                                  }}
                                />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                          <div className="flex justify-between text-[9px] sm:text-[10px] text-gray-500 mt-2 font-mono uppercase tracking-wider">
                            <span>12 AM</span>
                            <span>8 AM</span>
                            <span>4 PM</span>
                            <span>11 PM</span>
                          </div>
                          <p className="font-mono text-[9px] text-gray-500 mt-2 text-center">PROFIT PROJECTION // HOLOGRAPHIC RENDER</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Trusted Partners Section */}
      <section className="py-16 relative -mt-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6 text-center">TRUSTED PARTNERS</p>
          <div className="w-full max-w-4xl mx-auto relative flex overflow-hidden" style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
          }}>
            <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
              {[
                { name: 'Blade', file: 'blade-logo-whitee.webp' },
                { name: 'Bonkbot', file: 'bonkbot-logo-whitee.webp' },
                { name: 'Candy AI', file: 'candy-ai-logo-whitee.webp' },
                { name: 'Pulse', file: 'pulse-logo-whitee.webp' },
                { name: 'Redwalking', file: 'redwalking-logo-whitee.webp' }
              ].map((partner, idx) => (
                <div key={idx} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                  <div className="h-12 w-auto min-w-[120px] md:min-w-[160px] flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <img 
                      src={`/images/${partner.file}`} 
                      alt={partner.name}
                      className="h-9 md:h-12 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = document.createElement('span');
                        fallback.className = 'text-white text-lg font-semibold';
                        fallback.textContent = partner.name;
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                  </div>
                </div>
              ))}
              {[
                { name: 'Blade', file: 'blade-logo-whitee.webp' },
                { name: 'Bonkbot', file: 'bonkbot-logo-whitee.webp' },
                { name: 'Candy AI', file: 'candy-ai-logo-whitee.webp' },
                { name: 'Pulse', file: 'pulse-logo-whitee.webp' },
                { name: 'Redwalking', file: 'redwalking-logo-whitee.webp' }
              ].map((partner, idx) => (
                <div key={`dup-${idx}`} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                  <div className="h-12 w-auto min-w-[120px] md:min-w-[160px] flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <img 
                      src={`/images/${partner.file}`} 
                      alt={partner.name}
                      className="h-9 md:h-12 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = document.createElement('span');
                        fallback.className = 'text-white text-lg font-semibold';
                        fallback.textContent = partner.name;
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="about" className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10 bg-black">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 w-full justify-center">
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
            <p className="font-mono text-xs text-gray-400 tracking-wider">OUR MISSION</p>
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
          </div>
          <blockquote className="font-mission-quote text-3xl md:text-5xl text-white mb-8 leading-relaxed">
            "We decrypt the chaos of the internet to provide clarity in a noisy world."
          </blockquote>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Redditera leverages <span className="italic">data-driven insights</span> to navigate the complex ecosystems of online communities. We don't just participate; <span className="italic">we engineer the conversation through precision and authenticity</span>.
          </p>
        </div>
      </section>

      {/* About / Authority Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10 bg-black">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-8">
            Reddit specialists — not generalist marketers
          </h2>
          <p className="font-elegant text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
            We focus exclusively on Reddit.
          </p>
          <div className="text-left max-w-3xl">
            <p className="font-elegant text-lg text-gray-300 leading-relaxed mb-6">
              That focus allows us to:
            </p>
            <ul className="space-y-4 font-elegant text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Navigate subreddit culture and moderation dynamics <span className="italic">confidently</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Execute campaigns that <span className="italic">withstand scrutiny instead of provoking backlash</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Build credibility that <span className="italic">compounds instead of burning accounts</span></span>
              </li>
            </ul>
            <p className="font-elegant text-lg text-gray-300 leading-relaxed mt-8">
              This is Reddit handled with <span className="italic">restraint, context, and intent</span> — not growth hacks.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white">
                Our mandate
              </h3>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed">
                Help brands earn attention in the <span className="italic">most skeptical environments on the internet</span>.
              </p>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed">
                We turn Reddit into a sustainable growth channel by respecting its communities, understanding its power structures, and <span className="italic">aligning brand presence with real user value</span>.
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[580px] w-full flex items-center justify-center">
            <img 
              src="/images/redditor2.webp" 
              alt="Reddit Alien" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-6xl opacity-30">👽</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Protocol Section */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 py-32 relative z-10 bg-black">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-8 w-full justify-center">
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
            <p className="font-mono text-xs text-gray-400 tracking-wider">SERVICES PROTOCOL</p>
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-6">
            From attention to trust — and trust to revenue
          </h3>
          <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-3xl">
            Reddit users don't respond to promotion.<br />
            They respond to <span className="italic">insight, relevance, and proof</span>.
          </p>
          <p className="font-elegant text-lg text-gray-300 leading-relaxed mt-4 max-w-3xl">
            We position brands inside conversations where <span className="italic">intent already exists</span> — so interest feels discovered, not sold.
          </p>
          <p className="font-elegant text-lg text-white leading-relaxed mt-4 max-w-3xl">
            The result is <span className="italic">higher-quality traffic, stronger brand perception, and durable demand</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Strategic Brand Mentions */}
          <div className="border border-white/20 bg-black p-8 hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              STRATEGIC BRAND MENTIONS
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
              Inserting your narrative into <span className="italic">high-value threads with surgical precision</span>. Organic feel, calculated impact.
            </p>
            <Link to="/explore-mentions" className="group inline-flex items-center gap-2 font-mono text-xs text-white hover:text-[#FF4500] transition-colors mt-auto">
              EXPLORE →
            </Link>
          </div>

          {/* Service 2: Sustainable Reputation */}
          <div className="border border-white/20 bg-black p-8 hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              SUSTAINABLE REPUTATION
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
              Building an <span className="italic">unshakable fortress of trust</span>. Long-term karma accumulation and community defense systems.
            </p>
            <Link to="/build-authority" className="group inline-flex items-center gap-2 font-mono text-xs text-white hover:text-[#FF4500] transition-colors mt-auto">
              EXPLORE →
            </Link>
          </div>

          {/* Service 3: High-Impact Advertising */}
          <div className="border border-white/20 bg-black p-8 hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              HIGH IMPACT ADVERTISING
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
              Amplifying reach through <span className="italic">aggressive algorithmic placement</span>. Rocket-fuel for your ROI metrics.
            </p>
            <Link to="/view-ad-solutions" className="group inline-flex items-center gap-2 font-mono text-xs text-white hover:text-[#FF4500] transition-colors mt-auto">
              EXPLORE →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Reddit Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-8">
            Reddit is where buying decisions get validated
          </h2>
          <div className="font-elegant text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              When ads lose credibility and reviews feel manufactured, buyers turn to Reddit.
            </p>
            <p>
              They ask questions. They compare experiences. They challenge claims.
            </p>
            <p>
              If your brand isn't present — or shows up incorrectly — those decisions still happen. <span className="italic">You just don't influence them</span>.
            </p>
            <p className="mt-8 text-white">
              We don't use Reddit to generate noise.<br />
              We use it to <span className="italic">shape conviction</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 relative flex flex-col items-center bg-black">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-6">
            What clients typically experience
          </h2>
          <ul className="text-left max-w-2xl space-y-3 font-elegant text-lg text-gray-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span>Increased <span className="italic">branded search and inbound demand</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span>Higher-intent traffic across <span className="italic">core pages</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span><span className="italic">Organic mentions</span> outside our direct involvement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span>Stronger perception inside <span className="italic">niche communities</span></span>
            </li>
          </ul>
          <p className="font-elegant text-sm text-gray-400">
            Results vary by market and timing. <span className="italic">Signal quality consistently improves</span>.
          </p>
        </div>
        <div className="relative w-full max-w-5xl mx-auto p-4 md:p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#0F0F11] h-96 flex items-center justify-center">
            <img 
              src="/images/increase_1.webp" 
              alt="Traffic growth graph showing consistent increase over time"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="text-gray-500 text-sm" style={{ display: 'none' }}>Traffic Growth Chart</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="group relative flex flex-col px-5 py-8 md:px-6 md:py-10 border border-white/20 bg-black hover:border-white/30 transition-colors duration-500">
            <p className="font-elegant text-lg text-white leading-relaxed mb-4">
              "We stopped getting challenged and started getting inbound."
            </p>
            <p className="font-mono text-xs text-gray-400">
              — Founder, B2B SaaS
            </p>
          </div>
          <div className="group relative flex flex-col px-5 py-8 md:px-6 md:py-10 border border-white/20 bg-black hover:border-white/30 transition-colors duration-500">
            <p className="font-elegant text-lg text-white leading-relaxed mb-4">
              "Reddit became our <span className="italic">highest-converting organic channel</span>."
            </p>
            <p className="font-mono text-xs text-gray-400">
              — Head of Growth, Consumer Brand
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-24 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4 text-center">
            Find out if Reddit is a leverage channel for your brand
          </h2>
          <p className="font-elegant text-lg text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            Not every brand should be on Reddit — and <span className="italic">doing it wrong is worse than not being there</span>.
          </p>
          <p className="font-elegant text-base text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            We'll assess:
          </p>
          <ul className="font-elegant text-base text-gray-300 text-center mb-8 max-w-2xl mx-auto space-y-2">
            <li>• Whether Reddit fits your market</li>
            <li>• The reputational risks involved</li>
            <li>• What realistic upside looks like</li>
          </ul>
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-2 uppercase tracking-wider">Your Name</label>
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
              <label className="block font-mono text-xs text-gray-400 mb-2 uppercase tracking-wider">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors font-mono text-sm"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-2 uppercase tracking-wider">Your Inquiry</label>
              <select
                name="inquiry"
                value={formData.inquiry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:outline-none focus:border-white/40 transition-colors font-mono text-sm"
              >
                <option value="reddit marketing services">Reddit Marketing Services</option>
                <option value="brand mentions">Brand Mentions</option>
                <option value="advertising">Advertising</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-2 uppercase tracking-wider">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors resize-none font-mono text-sm"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Request a Reddit Strategy Assessment
            </button>
            <p className="font-mono text-xs text-gray-400 text-center mt-2">
              Clear direction in one call.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">REDDITERA</span>
            </div>
            <div className="flex items-center gap-6 font-mono text-xs text-white">
              <a href="#" className="hover:text-[#FF4500] transition-colors">LEGAL</a>
              <a href="#" className="hover:text-[#FF4500] transition-colors">PRIVACY</a>
              <a href="#contact" className="hover:text-[#FF4500] transition-colors">CONTACT</a>
            </div>
            <p className="font-mono text-xs text-gray-500">© 2025 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Homepage
