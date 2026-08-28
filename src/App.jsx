import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App() {
  const [page, setPage] = useState('home')
  return (
    <div className="site">
      <Header onNavigate={setPage} />
      <main className="container">
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'services' && <Services />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
