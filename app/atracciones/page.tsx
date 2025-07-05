"use client"

import { Card, CardContent } from "@/components/ui/card"
import WhatsAppFloat from "@/components/whatsapp-float"
import LazyImage from "@/components/lazy-image"
import { useMemo } from "react"

export default function AtraccionesPage() {
  const attractions = useMemo(
    () => [
      {
        title: "Termas de Villa Elisa",
        description: "Complejo termal con piscinas de agua caliente, spa y servicios de relajación",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Parque Nacional El Palmar",
        description: "A 45 min. Bosque de palmeras yatay, senderos interpretativos y avistaje de fauna",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Colón y sus Playas",
        description: "A 20 min. Playas de arena sobre el río Uruguay, balnearios y deportes acuáticos",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Represa Salto Grande",
        description: "A 30 min. Impresionante obra de ingeniería binacional Argentina-Uruguay",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Pesca en el Río Uruguay",
        description: "Pesca deportiva de dorado, surubí y otras especies en el río Uruguay",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Concordia Centro",
        description: "A 25 min. Ciudad puerto con arquitectura histórica, museos y gastronomía",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Castillo San Carlos",
        description: "A 35 min. Histórico castillo con museo y hermosos jardines en Concordia",
        image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Termas de Concordia",
        description: "A 25 min. Complejo termal con piscinas, spa y centro de convenciones",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Pueblo Liebig",
        description: "A 40 min. Pueblo histórico con museo del frigorífico y arquitectura inglesa",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Avistaje de Aves",
        description: "Observación de más de 200 especies en humedales y bosques ribereños",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Turismo Rural",
        description: "Visitas a estancias, cabalgatas y experiencias de vida rural entrerriana",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&q=80",
      },
      {
        title: "Ruta del Citrus",
        description: "Recorrido por plantaciones de cítricos con degustaciones y venta directa",
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
              Atracciones
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#a0845c] to-[#8b6f47] rounded-full"></div>
            </h1>
          </div>
          <p className="text-[#8b6f47]/80 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
            Descubre las atracciones de Entre Ríos cerca de Villa Elisa. Desde termas relajantes hasta aventuras en la
            naturaleza.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {attractions.map((attraction, index) => (
            <Card
              key={attraction.title}
              className="bg-white/60 border-[#8b6f47]/20 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden animate-in slide-in-from-bottom"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
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
    </div>
  )
}
