import { Wand2, PenTool, Layout, Printer } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: PenTool, title: 'Imagine', desc: 'Tell us about your child, their heroes, memories, and the adventure they want.' },
    { icon: Wand2, title: 'Create', desc: 'We craft a beautiful story and cohesive illustrations that match your child’s world.' },
    { icon: Layout, title: 'Customize', desc: 'Edit details, choose styles, approve characters, and add personal touches.' },
    { icon: Printer, title: 'Share & Print', desc: 'Read in the app or order a premium hardcover keepsake shipped to your door.' },
  ]

  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-700">From first spark to finished book in minutes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-content-center mb-4">
                <Icon size={20} />
              </div>
              <p className="text-sm text-gray-500">Step {i+1}</p>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
