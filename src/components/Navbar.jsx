import { Menu, BookOpenText, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white grid place-content-center shadow-sm">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold text-gray-900">StorySpark</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#examples" className="hover:text-gray-900">Examples</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#waitlist" className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Join waitlist</a>
            <a href="#waitlist" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-sm hover:opacity-95">Get started</a>
          </div>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-700">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
