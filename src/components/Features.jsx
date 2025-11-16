import { BookOpen, Palette, Sparkles, Users, ShieldCheck, Truck } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: BookOpen, title: 'Made just for you', desc: 'Stories shaped around your ideas, pets, heroes and favorite places.' },
    { icon: Palette, title: 'Colorful art', desc: 'Bright, friendly illustrations that stay consistent from cover to end.' },
    { icon: ShieldCheck, title: 'Kid-safe', desc: 'Friendly content and privacy by default. You’re always in control.' },
    { icon: Users, title: 'Create together', desc: 'Kids and grown‑ups make stories side‑by‑side for cozy moments.' },
    { icon: Sparkles, title: 'Magic prompts', desc: 'Quick starts for bedtime, birthdays, big feelings and adventures.' },
    { icon: Truck, title: 'Read & print', desc: 'Enjoy on screen or order a squishy‑nice hardcover for keeps.' },
  ]

  return (
    <section id="features" className="py-20 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-pink-900">Why kids love StorySpark</h2>
          <p className="mt-3 text-pink-900/80">Bright, bouncy and made for tiny imaginations.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl border-4 border-pink-200 p-6 bg-white shadow-[6px_6px_0_0_rgba(236,72,153,0.2)] hover:translate-y-[-2px] transition-transform">
              <div className="h-12 w-12 rounded-2xl bg-pink-100 text-pink-700 grid place-content-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-extrabold text-pink-900">{title}</h3>
              <p className="mt-2 text-sm text-pink-900/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
