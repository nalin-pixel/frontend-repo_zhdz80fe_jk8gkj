import { Wand2, PenTool, Layout, Printer } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: PenTool, title: 'Imagine', desc: 'Tell us your ideas—dinosaurs, ballerinas, grandmas, galaxies.' },
    { icon: Wand2, title: 'Poof! A story', desc: 'We write your tale and draw matching pictures that feel just right.' },
    { icon: Layout, title: 'Tweak & giggle', desc: 'Pick styles, change names, add pets and silly hats.' },
    { icon: Printer, title: 'Read & print', desc: 'Snuggle up with your book or get a hardcover to keep forever.' },
  ]

  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-pink-900">How it works</h2>
          <p className="mt-3 text-pink-900/80">From first spark to finished book in minutes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="rounded-3xl border-4 border-pink-200 p-6 bg-white shadow-[6px_6px_0_0_rgba(236,72,153,0.2)]">
              <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-700 grid place-content-center mb-4">
                <Icon size={22} />
              </div>
              <p className="text-xs font-bold text-pink-600">Step {i+1}</p>
              <h3 className="font-extrabold text-pink-900">{title}</h3>
              <p className="mt-2 text-sm text-pink-900/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
