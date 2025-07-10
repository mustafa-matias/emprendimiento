"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "INICIO" },
    { href: "/fotos", label: "GALERIA" },
    { href: "/la-ciudad", label: "LA CIUDAD" },
    { href: "/atracciones", label: "ATRACCIONES" },
    { href: "/contacto", label: "CONTACTO" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#f7f3ed]/95 backdrop-blur-sm border-b border-[#d4c4a8] px-2 md:px-4 py-2 md:py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile: Title on the right */}
        <div className="md:hidden order-2">
  <Link
    href="/"
    className="text-sm   text-[#8b6f47] tracking-wide hover:text-[#6d5635] transition-colors"
  >
    🏡 La Casita del Parral 🍇 Villa Elisa E.R.
  </Link>
</div>


        {/* Desktop: Title on the left */}
<div className="hidden md:block">
  <Link
    href="/"
    className="text-base lg:text-lg   text-[#8b6f47] tracking-wide hover:text-[#6d5635] transition-colors"
  >
    🏡 La Casita del Parral 🍇 Villa Elisa E.R.
  </Link>
</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2 lg:px-3 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                pathname === item.href ? "bg-[#8b6f47] text-white shadow-lg" : "text-[#8b6f47] hover:bg-[#8b6f47]/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - on the left */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden order-1 p-1 text-[#8b6f47] hover:bg-[#8b6f47]/10 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Navigation - aligned to the left */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 pb-2 border-t border-[#d4c4a8] animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                  pathname === item.href ? "bg-[#8b6f47] text-white" : "text-[#8b6f47] hover:bg-[#8b6f47]/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
