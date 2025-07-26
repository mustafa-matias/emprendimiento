"use client"

import { useState, useMemo, useCallback } from "react"
import WhatsAppFloat from "@/components/whatsapp-float"
import LazyImage from "@/components/lazy-image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function FotosPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const photos = useMemo(
    () => [
            {
        src: "https://ik.imagekit.io/0eggjsrgb/12.png?updatedAt=1753476918574?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Entrada",
        span: "",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/1.png?updatedAt=1753476919516?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "La Casita",
        span: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/2.png?updatedAt=1753476896790?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Living Comedor",
        span: "",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/3.png?updatedAt=1753476896367?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Cocina Integrada",
        span: "",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/5.png?updatedAt=1753476908730?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Dormitorio con Aire",
        span: "md:row-span-2",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/8.png?updatedAt=1753476916046?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Ventana Living",
        span: "",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/7.png?updatedAt=1753476911037?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Garage",
        span: "md:col-span-2",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/4.png?updatedAt=1753476907445?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Dormitorio con Aire",
        span: "",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/9.png?updatedAt=1753476914876?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Patio Descubierto",
        span: "",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/6.png?updatedAt=1753476908113?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Pet Friendly",
        span: "",
      },
            {
        src: "https://ik.imagekit.io/0eggjsrgb/15.png?updatedAt=1753476922242?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "La Casita",
        span: "",
      },
      {
        src: "https://ik.imagekit.io/0eggjsrgb/11.png?updatedAt=1753476919058?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
        alt: "Living Comedor",
        span: "md:col-span-2",
      },
    ],
    [],
  )

  const openLightbox = useCallback((index: number) => {
    setSelectedImageIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null)
  }, [])

  const nextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % photos.length)
    }
  }, [selectedImageIndex, photos.length])

  const prevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + photos.length) % photos.length)
    }
  }, [selectedImageIndex, photos.length])

  return (
    <div className="min-h-screen bg-[#f7f3ed] pt-4 md:pt-6 pb-1 px-2 md:px-4">
      <WhatsAppFloat />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#8b6f47] mb-4 relative">
              Fotos
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#a0845c] to-[#8b6f47] rounded-full"></div>
            </h1>
          </div>
          <p className="text-[#8b6f47]/80 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            Descubrí cada rincón de nuestro acogedor alojamiento en Villa Elisa a través de estas imágenes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 auto-rows-[150px] md:auto-rows-[200px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer ${photo.span}`}
              onClick={() => openLightbox(index)}
            >
              <LazyImage
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs md:text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with Navigation */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={photos[selectedImageIndex]?.src || "/placeholder.svg"}
              alt={photos[selectedImageIndex]?.alt || "Imagen ampliada"}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
