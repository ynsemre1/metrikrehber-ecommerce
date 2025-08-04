"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Instagram, Youtube, Facebook, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG, NAVIGATION_ITEMS } from "@/constants"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="gradient-primary text-white py-3 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow"></div>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Phone className="w-4 h-4" />
              <span className="font-medium">{SITE_CONFIG.phone}</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Mail className="w-4 h-4" />
              <span className="font-medium">{SITE_CONFIG.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[Instagram, Youtube, Facebook, X].map((Icon, index) => (
              <Icon
                key={index}
                className="w-4 h-4 cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white/95 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg shadow-purple-500/10" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
                  <Sparkles className="text-white font-bold text-lg animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-bounce-slow"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold font-poppins text-gradient">{SITE_CONFIG.name}</h1>
                <p className="text-xs text-gray-500 font-medium">{SITE_CONFIG.tagline}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold font-poppins group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-green-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="font-semibold hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
              >
                Giriş Yap
              </Button>
              <Button
                size="sm"
                className="gradient-primary hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 font-semibold"
              >
                Başlayın
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="hover:bg-purple-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-purple-100 glass-effect">
              <div className="py-6 space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 rounded-lg mx-2 font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <Button variant="ghost" className="w-full justify-start font-semibold">
                    Giriş Yap
                  </Button>
                  <Button className="w-full gradient-primary font-semibold">Başlayın</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
