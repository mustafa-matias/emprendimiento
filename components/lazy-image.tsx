"use client"

import { useState, useRef, useEffect } from "react"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  onClick?: () => void
  placeholder?: string
}

export default function LazyImage({ src, alt, className = "", onClick, placeholder }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} onClick={onClick}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#f0f0f0] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#8b6f47]/30 border-t-[#8b6f47] rounded-full animate-spin"></div>
        </div>
      )}
      {isInView && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  )
}
