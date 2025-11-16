import { useState } from 'react'

export default function ImageWithSkeleton({ src, alt, className = '', imgClassName = '', eager = false }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-sky-50 animate-pulse" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`${imgClassName} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      />
    </div>
  )
}
