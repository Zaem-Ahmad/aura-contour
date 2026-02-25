"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

// TikTok Icon Component (lucide-react doesn't have TikTok icon)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background mt-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">
              Aura<span className="text-accent">.</span>
            </h3>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Where Artistry Meets Aura. Premium aesthetic and beauty services crafted for your unique elegance.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/aura_contour/" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl hover:shadow-accent/30" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-background/80 group-hover:text-accent-foreground transition-colors" />
              </a>
              <a href="https://www.facebook.com/people/Aura-Contour/61584639464055/" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl hover:shadow-accent/30" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-background/80 group-hover:text-accent-foreground transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl hover:shadow-accent/30" aria-label="TikTok">
                <TikTokIcon className="w-5 h-5 text-background/80 group-hover:text-accent-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-accent text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="group flex items-center gap-2 text-background/80 hover:text-accent transition-all duration-300 cursor-pointer">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-2 text-background/80 hover:text-accent transition-all duration-300 cursor-pointer">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2 text-background/80 hover:text-accent transition-all duration-300 cursor-pointer">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center gap-2 text-background/80 hover:text-accent transition-all duration-300 cursor-pointer">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-accent text-lg">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-background/80 group">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <span className="group-hover:text-accent transition-colors">+92 3373248248</span>
              </li>
              <li className="flex items-center gap-3 text-background/80 group">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <a href="mailto:auracontour999@gmail.com" className="hover:text-accent transition-colors">
                  auracontour999@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/80 group">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-300 mt-0.5">
                  <MapPin className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <span className="group-hover:text-accent transition-colors">Suit 203 2nd floor, Phot 126 C lane 1 A, Al Murtaza Commercial Phase VIII, DHA Karachi</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Services */}
          <div>
            <h4 className="font-semibold mb-6 text-accent text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <Link href="/services?category=Hair%20Cuts%20%26%20Styling" className="group flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                  Hair Care Karachi
                </Link>
              </li>
              <li>
                <Link href="/services?category=Facial Treatments" className="group flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                  Facial Treatments DHA
                </Link>
              </li>
              <li>
                <Link href="/services?category=Hand and Feet Wellness" className="group flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                  Manicure &amp; Pedicure
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                  All Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 text-sm">
            &copy; {currentYear} Aura Contour Aesthetic & Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
