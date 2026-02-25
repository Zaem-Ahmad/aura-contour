"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-accent via-accent/95 to-accent/90 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute w-4 h-4 text-accent-foreground/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-foreground mb-6 drop-shadow-lg">
            Ready to Enhance Your Aura?
          </h2>
        </div>
        <div className="animate-fade-in-up delay-200">
          <p className="text-lg md:text-xl text-accent-foreground/95 mb-12 text-balance max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Book your appointment—the best salon in DHA Karachi. Hydrafacial, PRP, laser &amp; facials await.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
          <a
            href="https://wa.me/923373248248"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-accent-foreground text-accent px-12 py-5 rounded-full font-semibold text-lg shadow-2xl shadow-accent-foreground/30 hover:shadow-accent-foreground/50 transition-all duration-300 hover:scale-110 overflow-hidden transform-gpu"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Book Now</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          <Link href="/contact" className="group relative inline-flex items-center gap-3 border-2 border-accent-foreground text-accent-foreground px-12 py-5 rounded-full font-semibold text-lg hover:bg-accent-foreground/15 transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-lg">
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
