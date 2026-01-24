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
      <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Data Stream Status */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-black border border-white/20 rounded-full mb-[1.6rem] font-mono text-xs text-white">
              <div className="w-2 h-2 bg-[#FF4500] rounded-full animate-pulse"></div>
              <span>DATA STREAM ONLINE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-serif font-semibold text-white mb-[1.2rem] tracking-tight leading-tight">
              Reddit marketing strategies built on credibility
            </h1>

            {/* Subtitle */}
            <p className="font-elegant text-lg md:text-xl text-gray-300 max-w-3xl mb-[1.6rem] leading-relaxed">
              Reddit is where buyers research, compare, and validate decisions long before they convert. We help brands participate with precision, credibility, and restraint — turning informed discussion into measurable demand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-[0.8rem] mb-[3.2rem]">
              <a 
                href="#contact" 
                className="group relative flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Assess Reddit as a growth channel
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
              <p className="font-mono italic text-xs text-gray-400">Because trust, not reach, drives outcomes on Reddit</p>
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
            <div className="w-full max-w-6xl mx-auto mt-[1.4rem]">
              <div className="text-center mb-[1.6rem]">
                <p className="font-mono text-xs text-gray-400 mb-[0.4rem] tracking-wider">FINANCIAL OVERVIEW</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-[0.4rem]">
                  Proof comes from outcomes, not promises
                </h2>
                <p className="font-mono text-xs text-gray-400 mb-[0.2rem]">
                  Performance measured through sustained engagement, qualified demand, and downstream impact.
                </p>
                <p className="font-mono text-xs text-[#22C55E]"></p>
              </div>
              <div className="relative border border-white/20 bg-black px-6 py-[1.125rem] mb-[1.6rem]">
                {/* Top Row - 4 Small Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                  {/* Attributed Revenue */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 transition-all duration-200 group hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/10">
                    <div className="flex justify-between items-start mb-3">
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
                    <div className="flex justify-between items-start mb-3">
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
                    <div className="flex justify-between items-start mb-3">
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
                    <div className="flex justify-between items-start mb-3">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
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
                    <div className="flex flex-col gap-3 mb-3 sm:mb-3 pr-24 sm:pr-28">
                      <div className="font-mono text-xs text-gray-400 mb-3">TOTAL REVENUE</div>
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
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3 sm:mb-3">
                      <div className="flex-1">
                        <div className="font-mono text-xs text-gray-400 mb-3">NET INCOME</div>
                        <div className="flex flex-wrap items-center gap-4 mt-3">
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
                      <div className="h-20 sm:h-24 flex items-end justify-between gap-1 mb-3">
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
                          <div className="flex justify-between text-[9px] sm:text-[10px] text-gray-500 mt-3 font-mono uppercase tracking-wider">
                            <span>12 AM</span>
                            <span>8 AM</span>
                            <span>4 PM</span>
                            <span>11 PM</span>
                          </div>
                          <p className="font-mono text-[9px] text-gray-500 mt-3 text-center">PROFIT PROJECTION // HOLOGRAPHIC RENDER</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Trusted Partners Section */}
      <section className="py-12 relative -mt-[1.4rem] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-[1.2rem] text-center">TRUSTED PARTNERS</p>
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
      <section id="about" className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] relative z-10 bg-black">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-[1.6rem] w-full justify-center">
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
            <p className="font-mono italic text-xs text-gray-400 tracking-wider">Reddit penalizes noise and rewards contribution.</p>
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
          </div>
          <blockquote className="font-mission-quote text-3xl md:text-5xl text-white mb-[1.6rem] leading-relaxed">
            Most brands fail on Reddit because they treat it like every other channel
          </blockquote>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Reddit operates on different rules. Attention is earned through relevance, accuracy, and context — not repetition or promotion. We operate within those constraints deliberately, because shortcuts are visible and credibility is not recoverable once lost.
          </p>
        </div>
      </section>

      {/* About / Authority Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] relative z-10 bg-black">
        <div className="flex flex-col items-center text-center mb-[2.56rem]">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-[1.6rem]">
            This is not social media marketing. It is platform-specific execution.
          </h2>
          <p className="font-elegant text-lg text-gray-300 max-w-3xl leading-relaxed mb-[1.28rem]">
            Reddit requires an understanding of subculture, moderation dynamics, and user intent. What works elsewhere often fails here. Our work is designed around how Reddit actually functions — not how marketers wish it did.
          </p>
          <div className="w-full max-w-3xl">
            <div className="bg-[#0F0F11] border border-white/5 rounded-xl px-6 py-[1.2rem] text-left">
              <p className="font-mono text-xs text-gray-500 mb-[0.5rem]">Authority building on Reddit</p>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-[0.6rem]">
                Earn recognition before you ever promote
              </h3>
              <p className="font-elegant text-sm text-gray-300 leading-relaxed mb-[0.8rem]">
                Authority on Reddit is cumulative. It is built through visible contribution, accurate framing, and consistency over time. We design participation strategies that position your brand as a credible voice long before a buying decision is made.
              </p>
              <div className="font-elegant text-sm text-gray-300 leading-relaxed space-y-3">
                <p>Comment-level expertise in relevant threads</p>
                <p>Post participation that adds signal, not noise</p>
                <p>Historical credibility that compounds across subreddits</p>
              </div>
              <p className="font-mono text-xs text-gray-400 mt-[0.8rem]">
                View authority-building approach →
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-[1.6rem]"></div>
          <div className="relative h-full min-h-[420px] w-full flex items-center justify-center">
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
      <section id="services" className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10 bg-black">
        <div className="flex flex-col items-center text-center mb-[3.2rem]">
          <div className="flex items-center gap-4 mb-[1.6rem] w-full justify-center">
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
            <p className="font-mono text-xs text-gray-400 tracking-wider">SERVICES PROTOCOL</p>
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-[1.2rem]">
            How brands participate without damaging trust
          </h3>
          <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-3xl">
            Every approach is chosen selectively.
          </p>
          <p className="font-elegant text-lg text-gray-300 leading-relaxed mt-[0.8rem] max-w-3xl">
            Community engagement, brand presence, and paid placements are used only when they align with context and expectation.
          </p>
          <p className="font-elegant text-lg text-white leading-relaxed mt-[0.8rem] max-w-3xl">
            The objective is not visibility — it is legitimacy.
          </p>
        </div>

        <div className="flex flex-col gap-[3rem]">
          {/* Service 1: Strategic Brand Mentions */}
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-3">
            <div className="flex-1 text-left space-y-3">
              <h4 className="text-3xl md:text-5xl font-serif font-semibold text-white">
                Strategic Brand Mentions
              </h4>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-lg">
                Inserting your narrative into <span className="italic">high-value threads with surgical precision</span>. Organic feel, calculated impact.
              </p>
              <Link to="/explore-mentions" className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold text-base transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105">
                Explore Mentions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
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
                  <div className="mb-3">
                    <h5 className="text-base font-semibold text-white mb-3">How do you guys get customers with a low-priced SaaS product?</h5>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 bg-[#0F0F11] p-4 rounded">
                    <div className="flex items-center gap-2 mb-3">
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
          <div className="flex flex-col lg:flex-row-reverse items-center gap-3 lg:gap-3">
            <div className="flex-1 text-left space-y-3">
              <h4 className="text-3xl md:text-5xl font-serif font-semibold text-white">
                Sustainable reputation building
              </h4>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-lg">
                Building an <span className="italic">unshakable fortress of trust</span>. Long-term karma accumulation and community defense systems.
              </p>
              <Link to="/build-authority" className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold text-base transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105">
                Build Authority
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-square bg-[#0B0D0E] border border-white/10 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-8 border-transparent" style={{
                    background: 'conic-gradient(from 0deg, #22C55E 0deg 316.8deg, rgba(255,255,255,0.1) 316.8deg 360deg)'
                  }}></div>
                  <div className="absolute inset-8 rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">88/100</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider mt-3">Trust Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: High-Impact Advertising */}
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-3">
            <div className="flex-1 text-left space-y-3">
              <h4 className="text-3xl md:text-5xl font-serif font-semibold text-white">
                High-impact advertising (when appropriate)
              </h4>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-lg">
                Amplifying reach through <span className="italic">aggressive algorithmic placement</span>. Rocket-fuel for your ROI metrics.
              </p>
              <Link to="/view-ad-solutions" className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold text-base transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105">
                View Ad Solutions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 w-full relative">
              <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-4 space-y-3">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-3">ROAS</div>
                      <div className="text-2xl font-bold text-white">4.2x</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-3">CTR</div>
                      <div className="text-2xl font-bold text-white">3.85%</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-3">Conv. Rate</div>
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

      {/* Why Reddit Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] relative z-10 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-[1.6rem]">
            Where buyers pressure-test decisions before acting
          </h2>
          <div className="font-elegant text-lg text-gray-300 leading-relaxed space-y-3">
            <p>
              Reddit is not a discovery platform.
            </p>
            <p>
              It is where assumptions are challenged, alternatives are debated, and weak claims are exposed.
            </p>
            <p>
              Brands that withstand this scrutiny earn disproportionate influence downstream.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] relative flex flex-col items-center bg-black">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-[1.6rem]">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-[1.2rem]">
            What clients typically experience
          </h2>
          <ul className="text-left max-w-2xl space-y-3 font-elegant text-lg text-gray-300 mb-[1.2rem]">
            <li className="flex items-start gap-3">
              <span className="text-white mt-3">•</span>
              <span>Clear positioning within relevant communities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-3">•</span>
              <span>Gradual but defensible momentum</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-3">•</span>
              <span>Fewer spikes, stronger signal quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-3">•</span>
              <span>Insights that compound beyond Reddit</span>
            </li>
          </ul>
          
        </div>
        <div className="relative w-full max-w-5xl mx-auto px-4 py-3 md:px-6 md:py-[1.125rem] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#0F0F11] h-80 flex items-center justify-center">
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
      <section className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] bg-black">
        <div className="text-center mb-[2.4rem]">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-[0.8rem]">
            See what our clients
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto">
            Explore the testimonials and feedback from our valued clients to gain insights into their experiences and satisfaction with our work.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-3xl p-8 bg-[#0b0b0b] flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d01717] flex items-center justify-center text-white font-bold text-lg">
                r
              </div>
              <div>
                <p className="font-semibold text-white">Christina</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Marketing Manager — Redwalking</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Working with Redditera has been an exceptional experience. They fully understand our needs, tailor strategies to reach our goals, and consistently explore new approaches to drive results. Their proactive communication and commitment make this collaboration highly effective.
            </p>
          </div>
          <div className="border border-white/10 rounded-3xl p-8 bg-[#0b0b0b] flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d8c1ed] flex items-center justify-center text-[#4b2ea9] font-bold text-lg">
                C
              </div>
              <div>
                <p className="font-semibold text-white">Hugo</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Director of Commercial Operations — Candy AI</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Working with Redditera is a pleasure. They have been one of our most reliable partners, delivering work that has a sizable impact and building a relationship we truly value. Their guidance opens new opportunities for successful ventures.
            </p>
          </div>
          <div className="border border-white/10 rounded-3xl p-8 bg-[#0b0b0b] flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <div>
                <p className="font-semibold text-white">David</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Founder — TechStar</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Redditera consistently goes above and beyond. After a few months we’re seeing outstanding results and just extended our engagement — the long-term partnership keeps producing better outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-[0.8rem] text-center">
            Determine whether Reddit is viable for your category
          </h2>
          <p className="font-elegant text-lg text-gray-300 text-center mb-[1.2rem] max-w-2xl mx-auto">
            A practical assessment based on audience behavior, competitive presence, and risk tolerance.
          </p>
          
          <form className="space-y-3">
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-3 uppercase tracking-wider">Your Name</label>
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
              <label className="block font-mono text-xs text-gray-400 mb-3 uppercase tracking-wider">Your Email</label>
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
              <label className="block font-mono text-xs text-gray-400 mb-3 uppercase tracking-wider">Your Inquiry</label>
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
              <label className="block font-mono text-xs text-gray-400 mb-3 uppercase tracking-wider">Your Message</label>
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
              Request an assessment
            </button>
            
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-[2.25rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-[1.2rem]">
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
