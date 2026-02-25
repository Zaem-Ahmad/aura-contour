"use client"

import { useMemo } from 'react'

export default function HeroSection() {
  // Generate floating particles (stable positions)
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 20,
      duration: Math.random() * 10 + 15,
    })), []
  )

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/60f7d510-c99d-4213-a3aa-b8e9817709d9.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Color overlay to match brand */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent"></div>
      </div>

      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/30 via-transparent to-accent/30 animate-gradient-x"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-gradient-y"></div>
        </div>
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDuration: '8s' }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDuration: '10s', animationDelay: '4s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float"
          style={{ animationDuration: '14s', animationDelay: '1s' }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-accent/40 animate-particle-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(212, 175, 55, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      </div>

      {/* Content */}
      <div 
        className="relative z-20 text-center px-4 max-w-5xl"
      >
        {/* Decorative accent line */}
        <div className="flex items-center justify-center mb-8 animate-fade-in-up">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="mx-4 w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-balance leading-tight">
          <span className="block animate-fade-in-up text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
            Where Artistry
          </span>
          <span className="block animate-fade-in-up delay-200 text-accent drop-shadow-[0_0_40px_rgba(212,175,55,0.8)] [text-shadow:0_2px_15px_rgba(212,175,55,0.5)]">
            Meets Aura
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 text-balance max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400 font-light drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
          Experience premium aesthetic and beauty services crafted for your unique elegance
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-600">
          <a
            href="https://wa.me/923373248248"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-gradient-to-r from-accent via-accent/95 to-accent text-accent-foreground px-10 py-5 rounded-full font-semibold text-lg shadow-2xl shadow-accent/40 hover:shadow-accent/60 transition-all duration-300 hover:scale-110 overflow-hidden transform-gpu"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10 flex items-center gap-3">
              Book Your Appointment
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <a
            href="/services"
            className="group inline-flex items-center gap-2 text-white/90 hover:text-white px-6 py-5 rounded-full font-medium text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span>Explore Services</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* Stats or features */}
        {/* <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up delay-800">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '5000+', label: 'Happy Clients' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 drop-shadow-[0_2px_15px_rgba(212,175,55,0.8)]">{stat.value}</div>
              <div className="text-sm md:text-base text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white uppercase tracking-wider font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Scroll</span>
          <svg className="w-6 h-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
