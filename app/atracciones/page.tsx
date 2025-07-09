"use client"

import { Card, CardContent } from "@/components/ui/card"
import WhatsAppFloat from "@/components/whatsapp-float"
import LazyImage from "@/components/lazy-image"
import { useMemo, useState } from "react"

export default function AtraccionesPage() {
  const attractions = useMemo(
    () => [
      {
        title: "Palacio San José (Caseros)",
        description:
          "A 36 km, accesible en tren histórico o auto. Antigua residencia de Justo José de Urquiza, con visitas guiadas por salones y jardines de estilo nacional.",
        image: "/images/palacio.jpg",
      },
      {
        title: "Parque Nacional El Palmar",
        description:
          "A 45 minutos. Bosque de palmeras yatay, senderos interpretativos y avistaje de fauna. Una experiencia natural única.",
        image: "/images/palmar.jpg",
      },
      {
        title: "Colón y sus Playas",
        description:
          "A solo 20 minutos. Playas de arena sobre el río Uruguay, balnearios y opciones de deportes acuáticos.",
        image: "/images/colon.jpeg",
      },
      {
        title: "Represa Salto Grande",
        description:
          "A 30 minutos. Impresionante obra de ingeniería binacional entre Argentina y Uruguay.",
        image: "/images/represa.jpeg",
      },
      {
        title: "Castillo San Carlos",
        description: "A 35 min. Histórico castillo con museo y hermosos jardines en Concordia.",
        image: "/images/palacio.jpg",
      },
      {
        title: "Pueblo Liebig",
        description:
          "A 40 minutos. Pueblo de historia industrial, con museo del frigorífico y arquitectura inglesa conservada.",
        image: "/images/liebig.jpg",
      },
      {
        title: "Cristo de la Hermandad – Ruta 130",
        description:
          "Escultura de 20 metros tallada en un tronco de árbol caído. Impactante símbolo de fe junto a la ruta.",
        image: "/images/cristo.jpeg",
      },
    ],
    [],
  )

  // Estado para controlar modal
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")
  const [modalTitle, setModalTitle] = useState("")

  // Abrir modal con imagen y título
  function openModal(image: string, title: string) {
    setModalImage(image)
    setModalTitle(title)
    setModalOpen(true)
  }

  // Cerrar modal
  function closeModal() {
    setModalOpen(false)
    setModalImage("")
    setModalTitle("")
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] pt-4 md:pt-6 pb-4 px-2 md:px-4">
      <WhatsAppFloat />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#8b6f47] mb-4 relative">
              Atracciones Cercanas
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#a0845c] to-[#8b6f47] rounded-full"></div>
            </h1>
          </div>
          <p className="text-[#8b6f47]/80 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
            Descubrí las atracciones que rodean Villa Elisa, ideales para disfrutar en una escapada de ida y vuelta en el mismo día.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {attractions.map((attraction, index) => (
            <Card
              key={attraction.title}
              className="bg-white/60 border-[#8b6f47]/20 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden animate-in slide-in-from-bottom cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => openModal(attraction.image, attraction.title)}
            >
              <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden">
                <LazyImage
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <CardContent className="p-3 md:p-4 lg:p-6">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#8b6f47] mb-1 md:mb-2 lg:mb-3">
                  {attraction.title}
                </h3>
                <p className="text-[#8b6f47]/70 leading-relaxed text-xs md:text-sm lg:text-base">
                  {attraction.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal para imagen fullscreen */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-full mx-4"
            onClick={(e) => e.stopPropagation()} // evitar cerrar al click dentro del modal
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
            <img
              src={modalImage}
              alt={modalTitle}
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-white text-lg font-semibold">{modalTitle}</p>
          </div>
        </div>
      )}
    </div>
  )
}
