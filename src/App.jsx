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
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-white to-sky-50">
      <Navbar />
      <main>
        <Hero onCTAClick={scrollToCTA} />
        <Features />
        <HowItWorks />
        <Examples />
        <CTA ref={ctaRef} />
      </main>
      <footer className="py-10 border-t-4 border-pink-200 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-pink-800">© {new Date().getFullYear()} StorySpark</p>
          <div className="flex items-center gap-4 text-sm text-pink-800/80">
            <a href="#features" className="hover:text-pink-900">Magic</a>
            <a href="#how" className="hover:text-pink-900">How it works</a>
            <a href="#examples" className="hover:text-pink-900">Books</a>
            <a href="#waitlist" className="hover:text-pink-900">Join</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
