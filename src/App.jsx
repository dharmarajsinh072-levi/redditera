import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import ExploreMentions from './components/ExploreMentions'
import BuildAuthority from './components/BuildAuthority'
import ViewAdSolutions from './components/ViewAdSolutions'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore-mentions" element={<ExploreMentions />} />
        <Route path="/build-authority" element={<BuildAuthority />} />
        <Route path="/view-ad-solutions" element={<ViewAdSolutions />} />
      </Routes>
    </Router>
  )
}

export default App
