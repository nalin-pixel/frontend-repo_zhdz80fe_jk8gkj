import { useMemo } from 'react'
import { Sparkles, Filter } from 'lucide-react'

export default function StyleFilter({ value, onChange, items = [] }) {
  const options = useMemo(() => {
    const set = new Set(items.map(i => i.style))
    return ['all', ...Array.from(set)]
  }, [items])

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <div className="inline-flex items-center gap-2 text-pink-900 font-extrabold">
        <Sparkles size={18} /> Pick a style
      </div>
      <div className="flex items-center gap-2">
        <div className="px-3 py-1.5 rounded-full border-2 border-pink-300 bg-white/80 text-pink-800 inline-flex items-center gap-2">
          <Filter size={16} />
          <select
            aria-label="Filter examples by style"
            className="bg-transparent outline-none text-sm font-semibold"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map(opt => (
              <option key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
