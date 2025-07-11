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
        src: "/images/12.jpeg",
        alt: "La Casita",
        span: "md:col-span-2 md:row-span-2",
      },
      {
        src: "/images/2.jpeg",
        alt: "Living Comedor",
        span: "",
      },
      {
        src: "/images/3.jpeg",
        alt: "Cocina Integrada",
        span: "",
      },
      {
        src: "/images/4.jpeg",
        alt: "Dormitorio con Aire",
        span: "md:row-span-2",
      },
      {
        src: "/images/5.jpeg",
        alt: "Dormitorio con Ventana al Patio",
        span: "",
      },
      {
        src: "/images/7.jpeg",
        alt: "Garage",
        span: "md:col-span-2",
      },
      {
        src: "/images/6.jpeg",
        alt: "Pet Friendly",
        span: "",
      },
      {
        src: "/images/8.jpeg",
        alt: "Patio Descubierto",
        span: "",
      },
      {
        src: "/images/1.jpeg",
        alt: "Entrada",
        span: "",
      },
            {
        src: "/images/9.jpg",
        alt: "Patio Descubierto",
        span: "",
      },
      {
        src: "/images/11.jpeg",
        alt: "Living Comedor",
        span: "md:col-span-2",
      },
      {
        src: "/images/12.jpeg",
        alt: "Entrada",
        span: "",
      },
      // {
      //   src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&q=80",
      //   alt: "Jardín",
      //   span: "",
      // },
      // {
      //   src: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop&q=80",
      //   alt: "Terraza",
      //   span: "",
      // },
      // {
      //   src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&q=80",
      //   alt: "Interior cocina",
      //   span: "",
      // },
      // {
      //   src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop&q=80",
      //   alt: "Baño secundario",
      //   span: "",
      // },
      // {
      //   src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&q=80",
      //   alt: "Vista lateral",
      //   span: "",
      // },
      // {
      //   src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&q=80",
      //   alt: "Detalle interior",
      //   span: "",
      // },
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
