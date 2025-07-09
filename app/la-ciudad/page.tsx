"use client"

import { Card, CardContent } from "@/components/ui/card"
import WhatsAppFloat from "@/components/whatsapp-float"
import LazyImage from "@/components/lazy-image"
import { useMemo } from "react"

export default function LaCiudadPage() {
  const cityFeatures = useMemo(
    () => [
      {
        title: "Complejo Termal - Villa Elisa",
        description: "Aguas termales saladas de fuerte mineralización. Diez piscinas con distintas temperaturas (cubiertas y al aire libre).También cuenta con lago, playa, golf, gastronomía, áreas deportivas y recreativas.",
        image: "/images/termas1.jpg",
      },
      {
        title: "Monumento al Sembrador",
        description: "Homenaje a los agricultores que contribuyeron al crecimiento de la ciudad. Es la postal más representativa de Villa Elisa.",
        image: "/images/monumento.jpg",
      },
      {
        title: "Balneario 'El Rocha'",
        description: "Arroyo de aguas de vertiente rodeado de un hermoso entorno natural. Playas de arena, camping, parrillas y juegos infantiles.",
        image: "/images/rocha.jpg",
      },
      {
        title: "Iglesia Virgen Niña",
        description: "De estilo neogótico, su arquitectura embellece el centro de la ciudad.",
        image: "/images/iglesia.JPG",
      },
      {
        title: "Estancia Museo El Porvenir",
        description: "Antigua casona colonial de 1885 convertida en museo regional. Exhibe objetos de inmigrantes, carruajes, autos antiguos y jardines con mirador.",
        image: "/images/museo.jpg",
      },
      {
        title: "Biciturismo",
        description: "Circuitos urbanos y rurales, guiados o autoguiados, para descubrir paisajes campestres y la ciudad de forma saludable.",
        image: "/images/bici.jpg",
      },
      {
        title: "Tren Histórico",
        description: "Viaje en formación ferroviaria antigua por 3–36 km hasta Caseros, pasando por estaciones, con opción de conexión al Palacio San José.",
        image: "/images/tren.jpeg",
      },
      {
        title: "Feria y Tiendas Regionales",
        description: "Variedad de productos artesanales, manualidades y alimentos que reflejan la identidad de la región.",
        image: "/images/feria.jpeg",
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
Villa Elisa, conocida como la <strong>"Ciudad Jardín"</strong>, ofrece tranquilidad, naturaleza y actividades para disfrutar de la vida entrerriana.
    Forma parte de la microregión turística <strong>Tierra de los Palmares</strong> y es reconocida como <strong>Ciudad Bienestar</strong>.
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
