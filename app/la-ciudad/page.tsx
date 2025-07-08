"use client"

import { Card, CardContent } from "@/components/ui/card"
import WhatsAppFloat from "@/components/whatsapp-float"
import LazyImage from "@/components/lazy-image"
import { useMemo } from "react"

export default function LaCiudadPage() {
  const cityFeatures = useMemo(
    () => [
      {
        title: "Paseo por el Centro Histórico",
        description: "Recorre las calles arboladas del centro con arquitectura de principios del siglo XX",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Plaza San Martín",
        description: "Disfruta de la plaza principal con sus jardines y espacios para relajarse",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Cicloturismo Urbano",
        description: "Recorre Villa Elisa en bicicleta por sus tranquilas calles y avenidas",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Cafeterías y Confiterías",
        description: "Visita las tradicionales confiterías del centro para un café y facturas",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Iglesia San José",
        description: "Conoce la iglesia parroquial y su arquitectura característica de la región",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Fotografía de Paisajes",
        description: "Captura la belleza de los atardeceres y paisajes rurales circundantes",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Festival de la Primavera",
        description: "Participa del festival anual con música, danzas y tradiciones locales",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Biblioteca Popular",
        description: "Visita la biblioteca y conoce la historia local a través de sus archivos",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Caminatas Matutinas",
        description: "Disfruta de caminatas al amanecer por los barrios residenciales",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Parque Municipal",
        description: "Relájate en el parque con juegos, espacios verdes y aire puro",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Observación Nocturna",
        description: "Contempla las estrellas desde los espacios abiertos sin contaminación lumínica",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Mercado Local",
        description: "Conoce el mercado y compra productos regionales y artesanías locales",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80",
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-[#f7f3ed] pt-4 md:pt-6 pb-4 px-2 md:px-4">
      <WhatsAppFloat />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#8b6f47] mb-4 relative">
              La Ciudad
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#a0845c] to-[#8b6f47] rounded-full"></div>
            </h1>
          </div>
          <p className="text-[#8b6f47]/80 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
            Villa Elisa, conocida como "Ciudad Jardín", te ofrece tranquilidad y actividades para disfrutar de la vida
            entrerriana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {cityFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-white/60 backdrop-blur-sm border-[#8b6f47]/20 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 group overflow-hidden animate-in slide-in-from-bottom"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden">
                <LazyImage
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <CardContent className="p-3 md:p-4 lg:p-6">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#8b6f47] mb-1 md:mb-2 lg:mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#8b6f47]/70 leading-relaxed text-xs md:text-sm lg:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
