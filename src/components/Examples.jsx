import { useEffect, useMemo, useState } from 'react'
import ImageWithSkeleton from './ImageWithSkeleton'
import StyleFilter from './StyleFilter'

export default function Examples() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/illustrations.json')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        // fallback seed if local file not found
        setItems([
          { title: 'Luna and the Space Cat', desc: 'A cozy rocket flight past marshmallow clouds.', img: '/images/space_cat.svg', alt: 'Child and a friendly space cat flying a pastel rocket past candy clouds', style: 'space' },
          { title: 'The Playground Hero', desc: 'A brave day when the slide needed saving.', img: '/images/playground_hero.svg', alt: 'Kids helping each other at a playground with bright slides and bold outlines', style: 'everyday' },
          { title: 'Grandpa’s Garden', desc: 'Sunflowers, giggles and muddy boots.', img: '/images/grandpa_garden.svg', alt: 'Grandparent and child watering huge sunflowers with cartoon butterflies', style: 'animals' },
          { title: 'The Ocean Mystery', desc: 'Turtles, bubbles and a hidden treasure map.', img: '/images/ocean_mystery.svg', alt: 'Children swimming with turtles and fish finding a treasure map', style: 'ocean' },
          { title: 'Forest Friends', desc: 'Owls, foxes and picnic pies in a sunny grove.', img: '/images/forest_friends.svg', alt: 'Children sharing a picnic with cute forest animals in a pastel forest', style: 'animals' },
          { title: 'Dream Castle', desc: 'A friendly dragon guards the glitter bridge.', img: '/images/dream_castle.svg', alt: 'Castle with a smiling dragon by a glittery bridge and rainbow flags', style: 'fantasy' },
        ])
      }
    }
    load()
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'all') return items
    return items.filter(i => i.style === filter)
  }, [items, filter])

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-pink-900">Peek at story styles</h2>
          <p className="mt-3 text-pink-900/80">Every book is one‑of‑a‑kind. Filter examples to find your vibe.</p>
        </div>

        <StyleFilter value={filter} onChange={setFilter} items={items} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e, idx) => (
            <div key={e.title} className="rounded-3xl overflow-hidden border-4 border-pink-200 bg-white shadow-[6px_6px_0_0_rgba(236,72,153,0.2)] hover:rotate-1 transition-transform">
              <div className="aspect-[3/4] relative bg-gradient-to-br from-rose-100 via-white to-sky-100">
                <ImageWithSkeleton
                  src={e.img}
                  alt={e.alt || e.title}
                  className="absolute inset-0 h-full w-full"
                  imgClassName="absolute inset-0 h-full w-full object-cover"
                />
                <div className={`absolute inset-6 rounded-2xl border-4 ${idx%2? 'border-amber-300':'border-fuchsia-300'} rotate-2 pointer-events-none`} />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-pink-900">{e.title}</h3>
                  <span className="text-xs font-black px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border-2 border-pink-200">{e.style}</span>
                </div>
                <p className="mt-1 text-sm text-pink-900/80">{e.desc}</p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-pink-800 font-bold">No examples yet for this style.</div>
          )}
        </div>
      </div>
    </section>
  )
}
