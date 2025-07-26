"use client"

import { Card, CardContent } from "@/components/ui/card"
import WhatsAppFloat from "@/components/whatsapp-float"
import LazyImage from "@/components/lazy-image"
import { useMemo, useState } from "react"

export default function LaCiudadPage() {
  const cityFeatures = useMemo(
    () => [
      {
        title: "Complejo Termal - Villa Elisa",
        description:
          "Aguas termales saladas de fuerte mineralización. Diez piscinas con distintas temperaturas (cubiertas y al aire libre).También cuenta con lago, playa, golf, gastronomía, áreas deportivas y recreativas.",
        image: "https://ik.imagekit.io/0eggjsrgb/termas1.jpg?updatedAt=1753476889759?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      },
      {
        title: "Monumento al Sembrador",
        description:
          "Homenaje a los agricultores que contribuyeron al crecimiento de la ciudad. Es la postal más representativa de Villa Elisa.",
        image: "https://ik.imagekit.io/0eggjsrgb/monumento.jpeg?updatedAt=1753476924261?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      },
      {
        title: "Balneario 'El Rocha'",
        description:
          "Arroyo de aguas de vertiente rodeado de un hermoso entorno natural. Playas de arena, camping, parrillas y juegos infantiles.",
        image: "https://ik.imagekit.io/0eggjsrgb/rocha.jpg?updatedAt=1753476890990?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      },
      {
        title: "Iglesia Virgen Niña",
        description: "De estilo neogótico, su arquitectura embellece el centro de la ciudad.",
        image: "https://ik.imagekit.io/0eggjsrgb/iglesia.jpeg?updatedAt=1753476923214",
      },
      {
        title: "Estancia Museo El Porvenir",
        description:
          "Antigua casona colonial de 1885 convertida en museo regional. Exhibe objetos de inmigrantes, carruajes, autos antiguos y jardines con mirador.",
        image: "https://ik.imagekit.io/0eggjsrgb/museo.jpg?updatedAt=1753476924092?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      },
      {
        title: "Biciturismo",
        description:
          "Circuitos urbanos y rurales, guiados o autoguiados, para descubrir paisajes campestres y la ciudad de forma saludable.",
        image: "https://ik.imagekit.io/0eggjsrgb/bici.jpg?updatedAt=1753476921902?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      },
      {
        title: "Tren Histórico",
        description:
          "Hermosa experiencia en formación ferroviaria antigua. Ideal para disfrutar en familia y revivir la historia sobre rieles.",
        image: "https://ik.imagekit.io/0eggjsrgb/tren.jpg?updatedAt=1753478678314?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      },
            {
        title: "Almacenes con Historia",
        description:
          "Conectá con experiencias centenarias, relatos y sabores que perduran en el tiempo. Desde la cocina tradicional hasta las vivencias de quienes los habitaron.",
        image: "https://ik.imagekit.io/0eggjsrgb/almacenes.jpeg?updatedAt=1753478678314?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      },

      {
        title: "Feria y Tiendas Regionales",
        description:
          "Variedad de productos artesanales, manualidades y alimentos que reflejan la identidad de la región.",
        image: "https://ik.imagekit.io/0eggjsrgb/feria.jpeg?updatedAt=1753476922939?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      },
    ],
    [],
  )

  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")
  const [modalTitle, setModalTitle] = useState("")

  function openModal(image: string, title: string) {
    setModalImage(image)
    setModalTitle(title)
    setModalOpen(true)
  }

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
              La Ciudad
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#a0845c] to-[#8b6f47] rounded-full"></div>
            </h1>
          </div>
          <p className="text-[#8b6f47]/80 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
            Villa Elisa, conocida como la <strong>"Ciudad Jardín"</strong>, ofrece tranquilidad, naturaleza y actividades para
            disfrutar de la vida entrerriana. Forma parte de la microregión turística <strong>Tierra de los Palmares</strong> y
            es reconocida como <strong>Ciudad Bienestar</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {cityFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-white/60 backdrop-blur-sm border-[#8b6f47]/20 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 group overflow-hidden animate-in slide-in-from-bottom cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => openModal(feature.image, feature.title)}
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

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-full mx-4"
            onClick={(e) => e.stopPropagation()} // Evita que click dentro del modal cierre la ventana
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
