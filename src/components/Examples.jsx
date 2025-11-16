import { Image } from 'lucide-react'

export default function Examples() {
  const examples = [
    { title: 'Luna and the Space Cat', desc: 'A bedtime adventure among the stars inspired by a love of rockets.' },
    { title: 'The Playground Hero', desc: 'A courage tale where the hero looks just like your child.' },
    { title: 'Grandpa’s Garden', desc: 'Memories turned into a gentle story about nature and family.' },
    { title: 'The Ocean Mystery', desc: 'A curious quest with sea turtles, dolphins, and hidden treasure.' },
  ]

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Made-by-you story ideas</h2>
          <p className="mt-3 text-gray-700">Every book is unique. Here are a few examples families created.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((e) => (
            <div key={e.title} className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] bg-gradient-to-br from-purple-200 via-white to-blue-200 grid place-content-center text-gray-700">
                <Image />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{e.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
