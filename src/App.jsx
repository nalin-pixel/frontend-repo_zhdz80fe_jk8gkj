import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Examples from './components/Examples'
import CTA from './components/CTA'

function App() {
  const ctaRef = useRef(null)
  const scrollToCTA = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero onCTAClick={scrollToCTA} />
        <Features />
        <HowItWorks />
        <Examples />
        <CTA ref={ctaRef} />
      </main>
      <footer className="py-10 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} StorySpark. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#examples" className="hover:text-gray-900">Examples</a>
            <a href="#waitlist" className="hover:text-gray-900">Join</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
