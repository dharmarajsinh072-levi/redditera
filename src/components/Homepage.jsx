import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts'
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

  const quarterDayData = {
    Q1: [
      { day: 'Day 1', Revenue: 8200, Expenses: 5100 },
      { day: 'Day 2', Revenue: 8600, Expenses: 5200 },
      { day: 'Day 3', Revenue: 9000, Expenses: 5400 },
      { day: 'Day 4', Revenue: 9800, Expenses: 5600 },
      { day: 'Day 5', Revenue: 10200, Expenses: 5800 },
      { day: 'Day 6', Revenue: 11000, Expenses: 6000 },
      { day: 'Day 7', Revenue: 11800, Expenses: 6200 },
      { day: 'Day 8', Revenue: 12400, Expenses: 6400 },
      { day: 'Day 9', Revenue: 13000, Expenses: 6600 },
      { day: 'Day 10', Revenue: 13600, Expenses: 6800 },
      { day: 'Day 11', Revenue: 14200, Expenses: 7000 },
      { day: 'Day 12', Revenue: 14800, Expenses: 7200 },
      { day: 'Day 13', Revenue: 15400, Expenses: 7400 },
      { day: 'Day 14', Revenue: 16000, Expenses: 7600 },
      { day: 'Day 15', Revenue: 16800, Expenses: 7800 },
    ],
    Q2: [
      { day: 'Day 1', Revenue: 12000, Expenses: 6000 },
      { day: 'Day 2', Revenue: 12400, Expenses: 6100 },
      { day: 'Day 3', Revenue: 13000, Expenses: 6200 },
      { day: 'Day 4', Revenue: 14000, Expenses: 6400 },
      { day: 'Day 5', Revenue: 15000, Expenses: 6600 },
      { day: 'Day 6', Revenue: 16200, Expenses: 6800 },
      { day: 'Day 7', Revenue: 17400, Expenses: 7000 },
      { day: 'Day 8', Revenue: 18600, Expenses: 7200 },
      { day: 'Day 9', Revenue: 19800, Expenses: 7400 },
      { day: 'Day 10', Revenue: 21000, Expenses: 7600 },
      { day: 'Day 11', Revenue: 22000, Expenses: 7800 },
      { day: 'Day 12', Revenue: 23000, Expenses: 8000 },
      { day: 'Day 13', Revenue: 24000, Expenses: 8200 },
      { day: 'Day 14', Revenue: 25200, Expenses: 8400 },
      { day: 'Day 15', Revenue: 26500, Expenses: 8600 },
    ],
    Q3: [
      { day: 'Day 1', Revenue: 15000, Expenses: 7200 },
      { day: 'Day 2', Revenue: 15600, Expenses: 7300 },
      { day: 'Day 3', Revenue: 16200, Expenses: 7400 },
      { day: 'Day 4', Revenue: 17000, Expenses: 7600 },
      { day: 'Day 5', Revenue: 17800, Expenses: 7800 },
      { day: 'Day 6', Revenue: 18600, Expenses: 8000 },
      { day: 'Day 7', Revenue: 19500, Expenses: 8200 },
      { day: 'Day 8', Revenue: 20400, Expenses: 8400 },
      { day: 'Day 9', Revenue: 21200, Expenses: 8600 },
      { day: 'Day 10', Revenue: 22000, Expenses: 8800 },
      { day: 'Day 11', Revenue: 23000, Expenses: 9000 },
      { day: 'Day 12', Revenue: 24000, Expenses: 9200 },
      { day: 'Day 13', Revenue: 25000, Expenses: 9400 },
      { day: 'Day 14', Revenue: 26200, Expenses: 9600 },
      { day: 'Day 15', Revenue: 27500, Expenses: 9800 },
    ],
    Q4: [
      { day: 'Day 1', Revenue: 18000, Expenses: 8600 },
      { day: 'Day 2', Revenue: 18600, Expenses: 8800 },
      { day: 'Day 3', Revenue: 19200, Expenses: 9000 },
      { day: 'Day 4', Revenue: 20200, Expenses: 9200 },
      { day: 'Day 5', Revenue: 21200, Expenses: 9400 },
      { day: 'Day 6', Revenue: 22400, Expenses: 9600 },
      { day: 'Day 7', Revenue: 23600, Expenses: 9800 },
      { day: 'Day 8', Revenue: 24800, Expenses: 10000 },
      { day: 'Day 9', Revenue: 26000, Expenses: 10200 },
      { day: 'Day 10', Revenue: 27200, Expenses: 10400 },
      { day: 'Day 11', Revenue: 28400, Expenses: 10600 },
      { day: 'Day 12', Revenue: 29600, Expenses: 10800 },
      { day: 'Day 13', Revenue: 30800, Expenses: 11000 },
      { day: 'Day 14', Revenue: 32000, Expenses: 11200 },
      { day: 'Day 15', Revenue: 33400, Expenses: 11400 },
    ],
  }

  const [selectedQuarter, setSelectedQuarter] = useState('Q1')

  const quarterMonths = {
    Q1: ['Jan', 'Feb', 'Mar'],
    Q2: ['Apr', 'May', 'Jun'],
    Q3: ['Jul', 'Aug', 'Sep'],
    Q4: ['Oct', 'Nov', 'Dec']
  }

  const currentQuarterMonths = useMemo(() => quarterMonths[selectedQuarter] || quarterMonths.Q1, [selectedQuarter])

  const currentChartData = useMemo(() => {
    const base = quarterDayData[selectedQuarter] || quarterDayData.Q1
    const months = quarterMonths[selectedQuarter] || quarterMonths.Q1
    return base.map((row, index) => ({
      ...row,
      idx: index,
      month: months[Math.min(2, Math.floor(index / 5))]
    }))
  }, [selectedQuarter])

  const totalRevenue = useMemo(() => currentChartData.reduce((sum, entry) => sum + entry.Revenue, 0), [currentChartData])
  const totalProfit = useMemo(() => currentChartData.reduce((sum, entry) => sum + (entry.Revenue - entry.Expenses), 0), [currentChartData])
  const revenueGrowth = 24.6
  const profitGrowth = 28.5
  const revenueColor = '#22C55E' // green
  const expensesColor = '#EF4444' // red

  const profitData = currentChartData.map((entry, index) => {
    const monthIndex = Math.min(2, Math.floor(index / 5))
    return {
      day: entry.day,
      month: currentQuarterMonths[monthIndex],
      value: entry.Revenue - entry.Expenses
    }
  })

  const barColors = ['#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7', '#0EA5E9', '#A855F7']

  return (
    <div className="homepage bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-6 mb-6">
              <div className="flex -space-x-3">
                {[
                  'p3mZac3vHFT3FNOc4xkI8i552KM.webp',
                  'PDcdMPnZtRPJ7Yi5rwCCfsbK4.webp',
                  '360_F_636708884_seTHzKWBbeBGi8G2KHqZJjYPwp9k9Lvv.webp'
                ].map((img, i) => (
                  <img
                    key={img}
                    src={`/images/${img}`}
                    alt={`Client ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-black object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-300 font-medium">70+ happy clients</p>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6 tracking-tight leading-tight">
              Reddit marketing strategies<br />
              <span className="italic text-gray-300">refined for measurable impact</span>
            </h1>

            {/* Subtitle */}
            <p className="font-elegant text-lg md:text-xl text-gray-300 max-w-3xl mb-6 leading-relaxed">
              Turn Reddit’s passionate communities into your brand’s loyal advocates. Build trust and drive sustainable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-6 mb-6">
              <a 
                href="#contact" 
                className="group relative flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold text-lg font-mono hover:bg-gray-100 transition-all duration-300 rounded-full"
              >
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Financial Overview Section */}
            <div className="w-full max-w-6xl mx-auto mt-[1.4rem]">
              <div className="relative border border-white/20 bg-black px-6 py-[1.125rem] mb-[1.6rem]">
                {/* Top Row - 4 Small Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Attributed Revenue */}
                  <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-5 transition-all duration-200 group hover:border-white/20 hover:bg-[#121214] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Pageviews</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                    <div className="flex items-end gap-6">
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
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>Monthly users</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                    <div className="flex items-end gap-6">
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
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>New sign ups</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                    <div className="flex items-end gap-6">
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
                    <div className="flex justify-between items-start mb-6">
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
                    <div className="flex items-end gap-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                  {/* Total Revenue - Line Chart */}
                  <div className="lg:col-span-1 bg-[#0F0F11] border border-white/5 rounded-xl p-4 sm:p-6 flex flex-col relative">
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                      <select
                        value={selectedQuarter}
                        onChange={(e) => setSelectedQuarter(e.target.value)}
                        className="appearance-none bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-1.5 pr-8 text-xs font-mono text-white cursor-pointer hover:border-white/20 focus:outline-none focus:border-white/30 transition-all duration-200"
                        style={{
                          backgroundImage: `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.6rem center',
                          backgroundSize: '12px'
                        }}
                      >
                        <option value="Q1">Q1 2025</option>
                        <option value="Q2">Q2 2025</option>
                        <option value="Q3">Q3 2025</option>
                        <option value="Q4">Q4 2025</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-5 mb-6 sm:mb-6 pr-24 sm:pr-28">
                      <div className="font-mono text-xs text-gray-400">Total revenue</div>
                      <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          ${(totalRevenue / 1000).toFixed(1)}K
                        </h3>
                        <div className="flex flex-col">
                          <span className="text-[#FF4500] font-bold text-lg">+{revenueGrowth}%</span>
                          <span className="font-mono text-xs text-gray-400">YOY GROWTH</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-xs text-gray-500 font-mono">
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: revenueColor }} />
                          Revenue
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: expensesColor }} />
                          Expenses
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 font-mono">
                        {currentQuarterMonths[0]} - {currentQuarterMonths[currentQuarterMonths.length - 1]}
                      </p>
                    </div>
                    <div className="flex-1 h-48 sm:h-64 min-h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={currentChartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                          <defs>
                            <filter id="revenueGlow" x="-40%" y="-40%" width="180%" height="180%">
                              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={revenueColor} floodOpacity="0.45" />
                            </filter>
                            <filter id="expensesGlow" x="-40%" y="-40%" width="180%" height="180%">
                              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={expensesColor} floodOpacity="0.35" />
                            </filter>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={revenueColor} stopOpacity="0.22" />
                              <stop offset="100%" stopColor={revenueColor} stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={expensesColor} stopOpacity="0.16" />
                              <stop offset="100%" stopColor={expensesColor} stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                            <XAxis 
                              dataKey="idx"
                              type="number"
                              domain={[0, 14]}
                              ticks={[0, 5, 10]}
                              stroke="#888" 
                              tick={{ fill: '#888', fontSize: 10 }}
                              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                              tickFormatter={(value) => {
                                if (value === 0) return currentQuarterMonths[0]
                                if (value === 5) return currentQuarterMonths[1]
                                if (value === 10) return currentQuarterMonths[2]
                                return ''
                              }}
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
                            labelFormatter={(_label, payload) => {
                              const p = payload?.[0]?.payload
                              return p?.month ?? ''
                            }}
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
                            stroke={revenueColor}
                            strokeWidth={4}
                            dot={false}
                            activeDot={{ r: 12, fill: revenueColor, stroke: '#fff', strokeWidth: 3, cursor: 'pointer' }}
                            name="Revenue"
                            animationDuration={200}
                            animationBegin={0}
                            filter="url(#revenueGlow)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            isAnimationActive={true}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="Expenses" 
                            stroke={expensesColor}
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 9, fill: expensesColor, stroke: '#fff', strokeWidth: 2.5, cursor: 'pointer' }}
                            name="Expenses"
                            animationDuration={200}
                            animationBegin={100}
                            filter="url(#expensesGlow)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            isAnimationActive={true}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Total Profit - Bar Chart */}
                  <div className="lg:col-span-1 border border-white/20 bg-black p-4 sm:p-6 flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-6 sm:mb-6">
                      <div className="flex-1">
                        <div className="font-mono text-xs text-gray-400 mb-6">Total profit</div>
                        <div className="flex flex-wrap items-center gap-4 mt-6">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            ${(totalProfit / 1000).toFixed(1)}K
                          </h3>
                          <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E]">
                            +{profitGrowth}%
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      
                    </div>
                    <div className="flex-1">
                      <div className="h-20 sm:h-24 flex items-end justify-between gap-1 mb-6">
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
                              dataKey="day" 
                              stroke="#888" 
                              tick={{ fill: '#888', fontSize: 9 }}
                              axisLine={false}
                              tickLine={false}
                              hide
                            />
                            <YAxis hide />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#101012', 
                                border: '1px solid rgba(255,255,255,0.15)', 
                                color: '#fff',
                                borderRadius: '6px',
                                padding: '8px 12px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                backdropFilter: 'blur(8px)'
                              }}
                              labelStyle={{ color: '#fff', fontSize: '11px', marginBottom: '4px', fontWeight: '600' }}
                              itemStyle={{ color: '#fff' }}
                              formatter={(value) => [`$${(value / 1000).toFixed(1)}K`, 'Profit']}
                              labelFormatter={(label, payload) => {
                                const month = payload?.[0]?.payload?.month
                                return month ? `${label} • ${month}` : label
                              }}
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
                                  fill={index % 2 === 0 ? '#A855F7' : '#0EA5E9'}
                                  style={{ 
                                    transition: 'opacity 0.2s ease',
                                    background: index % 2 === 0 
                                      ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.12) 100%)'
                                      : 'linear-gradient(135deg, rgba(14, 165, 233, 0.35) 0%, rgba(14, 165, 233, 0.12) 100%)',
                                    backdropFilter: 'blur(10px)'
                                  }}
                                />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex justify-between text-[9px] sm:text-[10px] text-gray-500 mt-6 font-mono uppercase tracking-wider">
                        {currentQuarterMonths.map((month) => (
                          <span key={month}>{month}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 bg-[#0F0F11] border border-white/5 rounded-xl p-4">
                      <div className="text-gray-400 text-sm font-medium mb-2">Total sessions</div>
                      <div className="flex items-center gap-6">
                        <span className="text-2xl font-bold text-white">400</span>
                        <span className="flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E]">
                          +16.8%
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

      {/* About Section */}
      <section id="about" className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] relative z-10 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">About Us</p>
            <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white">
              An <span data-emph-id="hp-award" className="font-serif italic">award-winning</span> Reddit marketing team
            </h2>
            <p className="font-elegant text-lg text-gray-300 leading-relaxed">
              We are not “Reddit hackers” who found the way to cheat Reddit’s algorithm. We simply engage with users in relevant and active discussions, mentioning your brand right in front of your target audience.
            </p>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-white">
                Our <span data-emph-id="hp-vision" className="font-serif italic">Vision</span>
              </h3>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed mt-6">
                Our vision is to redefine Reddit marketing, making it accessible and impactful for all brands. We aim to lead with innovation, turning challenges into opportunities for authentic connections and sustained growth.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-white">
                Our <span data-emph-id="hp-mission" className="font-serif italic">Mission</span>
              </h3>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed mt-6">
                Our mission is to harness Reddit's power, connecting brands with communities through tailored, authentic marketing. We focus on creating meaningful engagements and growth by understanding community dynamics and applying data-driven insights.
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[420px] w-full flex items-center justify-center">
            <img 
              src="/images/redditor2.webp" 
              alt="Redditor Visualization" 
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

      {/* Our Process Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] relative z-10 bg-black">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-6">
            Our <span data-emph-id="hp-process" className="font-serif italic">Process</span>
          </h2>
          <p className="font-elegant text-lg text-gray-300 leading-relaxed mb-6">
            We will always start with the initial discussion over chat/call, to understand your needs and propose what makes the most sense in your specific case. Our goal is to prove you the power of non-traditional channels.
          </p>
          <a 
            href="#contact" 
            className="group px-6 py-2 bg-white text-black font-mono text-sm hover:bg-gray-100 transition-all rounded-full inline-flex items-center gap-2"
          >
            Get Started
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Services Protocol Section */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10 bg-black">
        <div className="flex flex-col items-center text-center mb-[3.2rem]">
          <div className="flex items-center gap-4 mb-[1.6rem] w-full justify-center">
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
            <p className="font-mono text-xs text-gray-400 tracking-wider">Services</p>
            <div className="h-px bg-white/20 flex-1 max-w-[100px]"></div>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-[1.2rem]">
            Leverage{' '}
            <span data-emph-id="hp-services-reddit-traffic" className="font-serif italic">Reddit traffic</span> &amp; turn it into{' '}
            <span data-emph-id="hp-services-loyal-customers" className="font-serif italic">loyal customers</span>
          </h3>
          <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-3xl">
            We don’t spam, we engage in relevant discussions. After years of working with Reddit, we leverage our expertise to provide you with tailored strategies for your brand.
          </p>
        </div>

        <div className="flex flex-col gap-[3rem]">
          {/* Service 1: Strategic Brand Mentions */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-6">
            <div className="flex-1 text-left space-y-6">
              <h4 className="text-3xl md:text-5xl font-serif font-semibold text-white">
                <span data-emph-id="hp-service-1" className="font-serif italic">Strategic Brand Mentions</span>
              </h4>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-lg">
                We will suggest your brand as the best solution, right where your audience is looking for answers.
              </p>
              <Link to="/explore-mentions" className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold text-base font-mono transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 rounded-full">
                Explore Mentions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 w-full relative group">
              <div className="relative w-full aspect-[16/13] bg-[#0B0D0E] border border-white/10 rounded-xl overflow-hidden shadow-xl flex flex-col">
                <div className="h-14 bg-[#0F0F11] border-b border-white/5 flex items-center px-6 justify-between">
                  <div className="flex items-center gap-6">
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
                  <div className="mb-6">
                    <h5 className="text-base font-semibold text-white mb-6">How do you guys get customers with a low-priced SaaS product?</h5>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 bg-[#0F0F11] p-4 rounded">
                    <div className="flex items-center gap-2 mb-6">
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
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-6">
            <div className="flex-1 text-left space-y-6">
              <h4 className="text-3xl md:text-5xl font-serif font-semibold text-white">
                <span data-emph-id="hp-service-2" className="font-serif italic">Sustainable reputation building</span>
              </h4>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-lg">
                Our strategies will improve your reputation on Reddit and build a basis for long-term sustainable growth.
              </p>
              <Link to="/build-authority" className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold text-base font-mono transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 rounded-full">
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
                    <span className="text-xs text-gray-500 uppercase tracking-wider mt-6">Trust Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: High-Impact Advertising */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-6">
            <div className="flex-1 text-left space-y-6">
              <h4 className="text-3xl md:text-5xl font-serif font-semibold text-white">
                <span data-emph-id="hp-service-3" className="font-serif italic">High-impact advertising</span>
              </h4>
              <p className="font-elegant text-lg text-gray-300 leading-relaxed max-w-lg">
                We will collaborate with Reddit ads team to run the most effective ads on the platform maximized for ROAS.
              </p>
              <Link to="/view-ad-solutions" className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold text-base font-mono transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 rounded-full">
                View Ad Solutions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 w-full relative">
              <div className="bg-[#0F0F11] border border-white/5 rounded-xl p-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-4 space-y-6">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-6">ROAS</div>
                      <div className="text-2xl font-bold text-white">4.2x</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-6">CTR</div>
                      <div className="text-2xl font-bold text-white">3.85%</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-gray-500 mb-6">Conv. Rate</div>
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

      {/* Sustainable Results Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] relative z-10 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-6">
            Typical traffic increase
          </h2>
          <p className="font-elegant text-lg text-gray-300 leading-relaxed mb-6">
            On average, our clients get consistently increasing traffic from our campaign, even days or weeks after the specific campaign ends.
          </p>
        </div>
        <div className="mt-6">
          <div className="relative w-full max-w-5xl mx-auto p-3 md:p-[1.125rem] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
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
          <div className="max-w-5xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
            <div>
              <p className="font-mono text-xs text-gray-500">Long-term growth</p>
              <p>Traffic from Reddit &amp; Search</p>
            </div>
            <div>
              <p className="font-mono text-xs text-gray-500">Long-term growth</p>
              <p>SEO from brand searches</p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <a 
              href="#contact" 
              className="group px-6 py-2 bg-white text-black font-mono text-sm hover:bg-gray-100 transition-all rounded-full inline-flex items-center gap-2"
            >
              Get Started
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] bg-black">
        <div className="text-center mb-[2.4rem]">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-[0.8rem]">
            See what our clients say about us
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto">
            Explore the testimonials and feedback from our valued clients to gain insights into their experiences and satisfaction with our SaaS solution.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-3xl p-8 bg-[#0b0b0b] flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/redwalkingfounder.webp"
                alt="Christina"
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <p className="font-semibold text-white">Christina</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Marketing Manager — Redwalking</p>
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                Working with Redditera has been an exceptional experience.
              </p>
              <p>
                They take the time to fully understand our needs, tailor their strategies to meet our goals, and consistently explore new approaches to drive better results.
              </p>
              <p>
                Their proactive communication and commitment to success made our collaboration highly effective. We’re excited to continue this partnership and achieve even greater success together in the future!
              </p>
            </div>
          </div>
          <div className="border border-white/10 rounded-3xl p-8 bg-[#0b0b0b] flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/candy.webp"
                alt="Hugo"
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <p className="font-semibold text-white">Hugo</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Director of Commercial Operations — Candy AI</p>
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                It’s been a pleasure to work with Redditera.
              </p>
              <p>
                From the very beginning of our journey, they have been one of our most reliable and trusted partners.
              </p>
              <p>
                Their work has had a significant impact on our success, driving real results that have exceeded our expectations.
              </p>
              <p>
                We truly value the strong relationship we’ve built with them and look forward to many more successful ventures together.
              </p>
            </div>
          </div>
          <div className="border border-white/10 rounded-3xl p-8 bg-[#0b0b0b] flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/techstarfounder.webp"
                alt="David"
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <p className="font-semibold text-white">David</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Founder — TechStar</p>
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                Redditera always go beyond and above for us.
              </p>
              <p>
                We have been working for a few months now, got amazing results from Reddit so far and just agreed for extra 6 months of an engagement.
              </p>
              <p>
                Really looking forward to seeing this long-term partnership as the results are just getting better and better.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 text-gray-400 text-sm">
          <div className="text-center">
            <p className="text-white text-lg font-semibold">4.9/5</p>
            <p>Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-semibold">95%</p>
            <p>Retention Rate</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-[4.5rem] bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-[0.8rem] text-center">
            Ready to <span data-emph-id="hp-cta-dominate" className="font-serif italic">Dominate Reddit</span>?
          </h2>
          <p className="font-elegant text-lg text-gray-300 text-center mb-[1.2rem] max-w-2xl mx-auto">
            Transform your brand with authentic community engagement.
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
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-6 uppercase tracking-wider">Your Inquiry</label>
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
              <label className="block font-mono text-xs text-gray-400 mb-6 uppercase tracking-wider">Your Message</label>
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
              className="w-full px-8 py-4 bg-white text-black font-semibold text-lg font-mono hover:bg-gray-100 transition-all duration-300 rounded-full inline-flex items-center justify-center gap-2"
            >
              Send Inquiry
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
            
          </form>
        </div>
      </section>

    </div>
  )
}

export default Homepage
