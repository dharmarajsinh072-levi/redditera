import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import SiteHeader from './components/SiteHeader'
import Homepage from './components/Homepage'
import ExploreMentions from './components/ExploreMentions'
import BuildAuthority from './components/BuildAuthority'
import ViewAdSolutions from './components/ViewAdSolutions'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SiteHeader />
      <div className="pt-[64px] md:pt-[72px]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore-mentions" element={<ExploreMentions />} />
          <Route path="/build-authority" element={<BuildAuthority />} />
          <Route path="/view-ad-solutions" element={<ViewAdSolutions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
