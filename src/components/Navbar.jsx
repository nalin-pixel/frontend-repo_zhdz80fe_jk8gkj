import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-[#fff6ff]/80 border-b border-pink-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 text-white grid place-content-center shadow-md rotate-6 group-hover:-rotate-3 transition-transform">
              <Sparkles size={20} />
            </div>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 tracking-tight">StorySpark</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-pink-900/80">
            <a href="#features" className="hover:text-pink-900">Magic</a>
            <a href="#how" className="hover:text-pink-900">How it works</a>
            <a href="#examples" className="hover:text-pink-900">Books</a>
            <a href="#waitlist" className="hover:text-pink-900">Join</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#waitlist" className="px-4 py-2 rounded-full border-2 border-pink-300 text-pink-700 bg-white hover:bg-pink-50 shadow-sm">Join waitlist</a>
            <a href="#waitlist" className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-white shadow-md hover:opacity-95">Make a book</a>
          </div>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border-2 border-pink-300 text-pink-700 bg-white">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
