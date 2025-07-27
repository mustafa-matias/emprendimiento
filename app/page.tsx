"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Snowflake, Car, Users, Home, Tv, Dog, MapPin } from "lucide-react"
import Link from "next/link"
import WhatsAppFloat from "@/components/whatsapp-float"
import LazyImage from "@/components/lazy-image"

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const images = useMemo(
    () => [
      "https://ik.imagekit.io/0eggjsrgb/lacasita.png?updatedAt=1753476924033?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      "https://ik.imagekit.io/0eggjsrgb/1.png?updatedAt=1753476919516?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      "https://ik.imagekit.io/0eggjsrgb/13.png?updatedAt=1753476919186?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      "https://ik.imagekit.io/0eggjsrgb/5.png?updatedAt=1753476908730?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      "https://ik.imagekit.io/0eggjsrgb/2.png?updatedAt=1753476896790?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      "https://ik.imagekit.io/0eggjsrgb/7.png?updatedAt=1753476911037?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      "https://ik.imagekit.io/0eggjsrgb/9.png?updatedAt=1753476914876?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
      "https://ik.imagekit.io/0eggjsrgb/PetFriendly.jpeg?updatedAt=1753476926426?updatedAt=1753478982129?tr=w-800,q-80,f-auto",
    ],
    [],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [images.length])

  const handleDotClick = useCallback((index: number) => {
    setCurrentImage(index)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      <LazyImage
        src={images[currentImage]}
        alt="Interior del alojamiento"
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] transition-opacity duration-1000"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentImage ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const amenitiesRef = useRef<HTMLDivElement>(null)

  const amenities = useMemo(
    () => [
      {
        icon: Users,
        label: "2 AMBIENTES",
        description: "Habitación principal con cama matrimonial. Living-comedor con futón/cama para una tercera persona. Cocina completa. Patio descubierto.",
      },
      {
        icon: MapPin,
        label: "ZONA CÉNTRICA",
        description: "A solo 4 cuadras de la terminal de ómnibus y del tranquilo centro de la ciudad. Podrás recorrer caminando sus arbolados bulevares y descubrir los principales puntos culturales y gastronómicos de nuestra ciudad.",
      },
      { icon: Car, label: "GARAGE", description: "Garage Semi Cubierto a la entrada del alojamiento." },
      { icon: Home, label: "PATIO", description: "Patio privado descubierto con parral." },
      { icon: Wifi, label: "WIFI", description: "Internet disponible en todo el alojamiento." },
      {
        icon: Snowflake,
        label: "AIRE FRÍO/CALOR",
        description: "Aire acondicionado frío/calor y ventilador en habitación. Estufa y ventilador en living-comedor.",
      },
      {
        icon: Tv,
        label: "TV",
        description: "Televisión en el living-comedor.",
      },
      { icon: Dog, label: "PET FRIENDLY", description: "Porque sabemos que ellos también son parte de la Familia ❤️ Apto 🐾 Servicio de Guardería opcional." },
    ],
    [],
  )

  const heroIcons = useMemo(
    () => [
      { icon: Users, label: "2 AMBIENTES" },
      { icon: Car, label: "GARAGE" },
      { icon: Home, label: "PATIO" },
      { icon: Wifi, label: "WIFI" },
      { icon: Snowflake, label: "AIRE FRÍO/CALOR" },
      { icon: Tv, label: "TV/NETFLIX" },
      { icon: Dog, label: "APTO MASCOTAS" },
    ],
    [],
  )

  const scrollToAmenity = useCallback((label: string) => {
    if (amenitiesRef.current) {
      amenitiesRef.current.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const targetCard = document.querySelector(`[data-amenity="${label}"]`)
        if (targetCard) {
          targetCard.classList.add("ring-2", "ring-[#8b6f47]", "ring-opacity-50")
          setTimeout(() => {
            targetCard.classList.remove("ring-2", "ring-[#8b6f47]", "ring-opacity-50")
          }, 2000)
        }
      }, 500)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3ed] via-[#ede4d3] to-[#e8dcc6] pt-4 md:pt-6 pb-1">
      <WhatsAppFloat />

      <section className="py-2 px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-4 md:mb-8 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <div className="order-2 lg:order-1 relative">
                <ImageCarousel />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7f3ed]/20 to-[#f7f3ed]/60 lg:to-[#f7f3ed]/80"></div>
              </div>

<div className="order-1 lg:order-2 relative z-10 p-4 md:p-6 lg:p-8 xl:p-12 bg-gradient-to-l from-[#f7f3ed]/95 via-[#ede4d3]/90 to-transparent lg:bg-gradient-to-r lg:from-[#f7f3ed]/95 lg:via-[#ede4d3]/90 lg:to-transparent">
  <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left">
    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-[#8b6f47] leading-tight">
      Merecés un viaje de <span className="text-[#a0845c] font-normal">Relax.</span>
    </h1>
    <p className="text-[#8b6f47]/80 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
      Cómodo departamento de <strong>2 ambientes</strong> ubicado en el corazón de la <em>“Ciudad Jardín”</em>. Totalmente equipado. Apto para que <strong>2 o 3 personas</strong> disfruten de la belleza y tranquilidad que ofrece Villa Elisa.
    </p>

    <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 lg:gap-4 py-4">
      {heroIcons.map((item, index) => {
        const Icon = item.icon
        return (
          <button
            key={index}
            onClick={() => scrollToAmenity(item.label)}
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#8b6f47]/10 rounded-full flex items-center justify-center hover:bg-[#8b6f47]/20 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#8b6f47]" />
          </button>
        )
      })}
    </div>
  </div>
</div>
            </div>
          </div>

          <div
            ref={amenitiesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mb-4 md:mb-8"
          >
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <Card
                  key={amenity.label}
                  data-amenity={amenity.label}
                  className="bg-white/70 backdrop-blur-sm border-[#d4c4a8]/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-3 md:p-4 lg:p-6 text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#a0845c] to-[#8b6f47] rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#8b6f47] mb-1 md:mb-2 lg:mb-3 text-sm md:text-base lg:text-lg">
                      {amenity.label}
                    </h3>
                    <p className="text-[#8b6f47]/70 text-xs md:text-sm leading-relaxed">{amenity.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

<div className="text-center">
  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl border border-[#d4c4a8]/50">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#8b6f47] mb-2 md:mb-3 lg:mb-4">
      ¿Listo para tu escapada perfecta?
    </h2>

    <p className="text-[#8b6f47]/80 mb-3 md:mb-4 lg:mb-6 text-sm md:text-base lg:text-lg">
      Descubrí todo lo que Villa Elisa tiene para ofrecerte.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
      {[
        { label: 'La Casita - Galeria', href: '/fotos', bg: '#8b6f47', hover: '#6d5635' },
        { label: 'Descubrí la Ciudad', href: '/la-ciudad', bg: '#a0845c', hover: '#8b6f47' },
        { label: 'Atracciones Cercanas', href: '/atracciones', bg: '#8b6f47', hover: '#6d5635' },
        { label: 'Contacto', href: '/contacto', bg: '#a0845c', hover: '#8b6f47' }
      ].map((item, index) => (
        <Link key={index} href={item.href}>
          <div
            className="w-full text-center px-3 md:px-4 lg:px-6 py-2 md:py-2 lg:py-3 text-white text-xs md:text-sm lg:text-base cursor-pointer transition-all duration-300 hover:scale-105 rounded-full"
            style={{
              backgroundColor: item.bg,
              transition: 'background-color 0.3s',
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = item.hover}
            onMouseOut={e => e.currentTarget.style.backgroundColor = item.bg}
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>
        </div>
      </section>
    </div>
  )
}
