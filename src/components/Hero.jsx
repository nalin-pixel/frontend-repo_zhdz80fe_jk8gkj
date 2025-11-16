import { motion } from 'framer-motion'
import { Wand2, Stars } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Candy sky background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-rose-50 to-sky-100" />
      <div className="absolute -top-24 -right-24 h-72 w-72 bg-fuchsia-300/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-amber-300/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-pink-900"
            >
              Make a real storybook from your wildest ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-pink-900/80"
            >
              Dream up heroes, dragons, rockets and rainbows—then watch your very own book appear with colorful, kid-safe art.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button onClick={onCTAClick} className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-white font-extrabold shadow-lg hover:opacity-95 inline-flex items-center gap-2">
                <Wand2 size={18} /> Make my book
              </button>
              <a href="#examples" className="px-6 py-3 rounded-full border-2 border-pink-300 text-pink-700 bg-white/70 hover:bg-white inline-flex items-center gap-2">
                <Stars size={18} /> See book styles
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {["Ages 3-12","Kid-safe art","Print or screen","Made together"].map((item) => (
                <div key={item} className="rounded-2xl border-2 border-pink-200 p-4 bg-white/70 rotate-1">
                  <p className="text-sm font-semibold text-pink-900">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative rounded-3xl border-4 border-pink-300 bg-white p-4 shadow-[8px_8px_0_0_rgba(236,72,153,0.25)] rotate-2"
            >
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1603655693420-57f5f3f4f3af?q=80&w=1200&auto=format&fit=crop"
                  alt="Storybook spread mockup with bright illustrations"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/0" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-white border-4 border-pink-300 shadow-lg grid place-content-center text-sm font-black text-pink-900">Preview</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
