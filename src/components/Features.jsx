import { BookOpen, Palette, Sparkles, Users, ShieldCheck, Truck } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: BookOpen, title: 'Stories that feel real', desc: 'Narratives shaped around your child’s ideas, heroes, and cherished memories.' },
    { icon: Palette, title: 'True illustrations', desc: 'Artwork generated to match the story’s mood, characters, and scenes—cohesive from cover to final page.' },
    { icon: ShieldCheck, title: 'Safe for kids', desc: 'Built-in content safety and parental controls. Your data stays private.' },
    { icon: Users, title: 'Create together', desc: 'Parents and kids craft the story side-by-side, fostering creativity and bonding.' },
    { icon: Sparkles, title: 'Magical templates', desc: 'Jumpstart with prompts for bedtime tales, birthdays, travel memories, and more.' },
    { icon: Truck, title: 'Print & deliver', desc: 'Order a hardcover keepsake or share digitally with family across the world.' },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why families love StorySpark</h2>
          <p className="mt-3 text-gray-700">Designed for imagination, built for safety, made to last.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-gray-50 to-white hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-purple-600/10 text-purple-700 grid place-content-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
