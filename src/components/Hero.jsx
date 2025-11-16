import { motion } from 'framer-motion'
import { Sparkles, Stars, Wand2 } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-white to-blue-100" />
      <div className="absolute -top-24 -right-24 h-72 w-72 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-blue-300/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Turn your child's imagination into a real storybook
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-gray-700"
            >
              A mobile app where families co-create magical stories with authentic illustrations, characters, and adventures inspired by your child's ideas, memories, and heroes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button onClick={onCTAClick} className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-sm hover:opacity-95 inline-flex items-center gap-2">
                <Wand2 size={18} /> Create my storybook
              </button>
              <a href="#examples" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 inline-flex items-center gap-2">
                <Stars size={18} /> See examples
              </a>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {["Ages 3-12","Safe & private","Printed or digital","Parent approved"].map((item) => (
                <div key={item} className="rounded-xl border border-gray-200 p-4 bg-white/60">
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-xl"
            >
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-purple-200 via-white to-blue-200 grid place-content-center text-center">
                <div className="mx-auto max-w-xs">
                  <Sparkles className="mx-auto text-purple-600" size={28} />
                  <p className="mt-3 font-semibold text-gray-900">From idea to illustrated book</p>
                  <p className="mt-2 text-sm text-gray-600">Describe characters, settings, and memories. We craft a unique narrative and create cohesive, child-safe illustrations.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-xl bg-white border border-gray-200 shadow-md grid place-content-center text-sm font-medium text-gray-700">Preview
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
