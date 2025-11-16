import { useState } from 'react'

export default function CTA() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    parent_name: '',
    email: '',
    child_name: '',
    child_age: '',
    interest: 'Waitlist',
    message: ''
  })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const payload = {
        ...form,
        child_age: form.child_age ? Number(form.child_age) : undefined,
        source: 'website'
      }
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ parent_name: '', email: '', child_name: '', child_age: '', interest: 'Waitlist', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="py-20 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-white via-rose-50 to-pink-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-pink-900">Join the waitlist</h2>
          <p className="mt-2 text-pink-900/80">Be first to try the app and get early‑bird print discounts.</p>
        </div>

        <form onSubmit={submit} className="rounded-3xl border-4 border-pink-200 bg-white p-6 grid sm:grid-cols-2 gap-4 shadow-[8px_8px_0_0_rgba(236,72,153,0.2)]">
          <div className="sm:col-span-1">
            <label className="block text-sm font-bold text-pink-800">Parent name</label>
            <input required value={form.parent_name} onChange={e=>setForm(f=>({...f,parent_name:e.target.value}))} className="mt-1 w-full rounded-2xl border-2 border-pink-200 focus:ring-pink-500 focus:border-pink-500 bg-white/80 px-3 py-2" placeholder="Alex Rivera" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-bold text-pink-800">Email</label>
            <input required type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} className="mt-1 w-full rounded-2xl border-2 border-pink-200 focus:ring-pink-500 focus:border-pink-500 bg-white/80 px-3 py-2" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-sm font-bold text-pink-800">Child name (optional)</label>
            <input value={form.child_name} onChange={e=>setForm(f=>({...f,child_name:e.target.value}))} className="mt-1 w-full rounded-2xl border-2 border-pink-200 focus:ring-pink-500 focus:border-pink-500 bg-white/80 px-3 py-2" placeholder="Sam" />
          </div>
          <div>
            <label className="block text-sm font-bold text-pink-800">Child age</label>
            <input type="number" min="0" max="18" value={form.child_age} onChange={e=>setForm(f=>({...f,child_age:e.target.value}))} className="mt-1 w-full rounded-2xl border-2 border-pink-200 focus:ring-pink-500 focus:border-pink-500 bg-white/80 px-3 py-2" placeholder="6" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold text-pink-800">What are you most interested in?</label>
            <select value={form.interest} onChange={e=>setForm(f=>({...f,interest:e.target.value}))} className="mt-1 w-full rounded-2xl border-2 border-pink-200 focus:ring-pink-500 focus:border-pink-500 bg-white/80 px-3 py-2">
              <option>Waitlist</option>
              <option>Early Access</option>
              <option>Educator</option>
              <option>Gifting</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold text-pink-800">Message (optional)</label>
            <textarea rows="4" value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} className="mt-1 w-full rounded-2xl border-2 border-pink-200 focus:ring-pink-500 focus:border-pink-500 bg-white/80 px-3 py-2" placeholder="Tell us about your kiddo's ideas!" />
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" disabled={status==='loading'} className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-white font-extrabold shadow-lg hover:opacity-95 disabled:opacity-60">
              {status==='loading' ? 'Submitting…' : 'Join the waitlist'}
            </button>
            {status==='success' && <span className="text-green-600 text-sm font-bold">Thanks! We’ll be in touch soon.</span>}
            {status==='error' && <span className="text-red-600 text-sm font-bold">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
