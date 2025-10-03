import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import ScrollToTop from './components/ScrollToTop'
import StructuredData from './components/StructuredData'
import BreadcrumbSchema from './components/BreadcrumbSchema'

export default function App() {
  return (
    <BrowserRouter>
      <StructuredData />
      <BreadcrumbSchema />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-text font-retro">
          <Navbar />
          <main className="pt-20 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
