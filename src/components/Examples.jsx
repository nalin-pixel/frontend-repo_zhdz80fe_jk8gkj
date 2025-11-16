import { Image } from 'lucide-react'

export default function Examples() {
  const examples = [
    { title: 'Luna and the Space Cat', desc: 'A cozy rocket flight past marshmallow clouds.' },
    { title: 'The Playground Hero', desc: 'A brave day when the slide needed saving.' },
    { title: 'Grandpa’s Garden', desc: 'Sunflowers, giggles and muddy boots.' },
    { title: 'The Ocean Mystery', desc: 'Turtles, bubbles and a hidden treasure map.' },
  ]

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-pink-900">Peek at story styles</h2>
          <p className="mt-3 text-pink-900/80">Every book is one‑of‑a‑kind. Here are a few ideas to spark yours.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((e, idx) => (
            <div key={e.title} className="rounded-3xl overflow-hidden border-4 border-pink-200 bg-white shadow-[6px_6px_0_0_rgba(236,72,153,0.2)] hover:rotate-1 transition-transform">
              <div className="aspect-[3/4] bg-gradient-to-br from-rose-100 via-white to-sky-100 grid place-content-center text-pink-700 relative">
                <div className={`absolute inset-6 rounded-2xl border-4 ${idx%2? 'border-amber-300':'border-fuchsia-300'} rotate-2`} />
                <Image />
              </div>
              <div className="p-4">
                <h3 className="font-extrabold text-pink-900">{e.title}</h3>
                <p className="mt-1 text-sm text-pink-900/80">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
