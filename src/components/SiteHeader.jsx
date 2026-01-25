import React, { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function SiteHeader() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash)
    if (!el) return false
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return true
  }

  const scrollToHashWhenReady = (hash) => {
    const start = performance.now()
    const tick = () => {
      if (scrollToHash(hash)) return
      // try for ~1s
      if (performance.now() - start > 1000) return
      requestAnimationFrame(tick)
    }
    tick()
  }

  const go = (hash) => {
    // If we're already on homepage, scroll in-place.
    if (location.pathname === '/') {
      scrollToHashWhenReady(hash)
      return
    }

    sessionStorage.setItem('pendingHeaderHash', hash)
    navigate('/', { replace: false })
  }

  useEffect(() => {
    const pending = sessionStorage.getItem('pendingHeaderHash')
    if (location.pathname === '/' && pending) {
      sessionStorage.removeItem('pendingHeaderHash')
      scrollToHashWhenReady(pending)
    }
  }, [location.pathname])

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] md:h-[84px] flex items-center">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/site-logo.png"
            alt="Redditera"
            className="h-11 md:h-12 w-auto select-none"
            draggable={false}
          />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center gap-10 text-gray-300">
          <button className="hover:text-white transition-colors" onClick={() => go('#home')}>
            Home
          </button>
          <button className="hover:text-white transition-colors" onClick={() => go('#about')}>
            About
          </button>
          <button className="hover:text-white transition-colors" onClick={() => go('#services')}>
            Services
          </button>
        </div>

        <div className="ml-auto">
          <button
            className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors active:scale-95"
            onClick={() => go('#contact')}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
