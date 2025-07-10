import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata = {
  title: "LA CASITA DEL PARRAL - VILLA ELISA E.R.| Alojamiento Turístico",
  description: "Alquiler de alojamiento en Villa Elisa, Entre Ríos. Tu lugar de relax en el corazón de Entre Ríos.",
  keywords: "Villa Elisa, Entre Ríos, alojamiento, alquiler, turismo, relax, Argentina, termas",
  authors: [{ name: "Villa Elisa Entre Ríos" }],
  creator: "Villa Elisa Entre Ríos",
  publisher: "Villa Elisa Entre Ríos",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://villaelisa-entrerios.com",
    title: "LA CASITA DEL PARRAL - VILLA ELISA E.R.| Alojamiento Turístico",
    description: "Alquiler de alojamiento en Villa Elisa, Entre Ríos. Tu lugar de relax en el corazón de Entre Ríos.",
    siteName: "Villa Elisa - Entre Ríos",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA CASITA DEL PARRAL  - VILLA ELISA E.R.| Alojamiento Turístico",
    description: "Alquiler de alojamiento en Villa Elisa, Entre Ríos. Tu lugar de relax en el corazón de Entre Ríos.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#8b6f47" />
        <meta name="msapplication-TileColor" content="#8b6f47" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
         <link rel="icon" href="https://img.icons8.com/?size=100&id=tNcJ7GGjHsUq&format=png&color=000000" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
