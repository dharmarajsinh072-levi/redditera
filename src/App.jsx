import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './components/Homepage'
import ExploreMentions from './components/ExploreMentions'
import BuildAuthority from './components/BuildAuthority'
import ViewAdSolutions from './components/ViewAdSolutions'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore-mentions" element={<ExploreMentions />} />
        <Route path="/build-authority" element={<BuildAuthority />} />
        <Route path="/view-ad-solutions" element={<ViewAdSolutions />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
