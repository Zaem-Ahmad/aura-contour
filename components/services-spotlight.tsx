"use client"

import Link from "next/link"
import { Sparkles, Scissors, Palette, ArrowRight } from "lucide-react"

export default function ServicesSpotlight() {
  const services = [
    {
      id: 1,
      title: "Hair Care",
      description: "Professional hair treatments, styling, and color services",
      icon: Scissors,
      gradient: "from-accent/20 via-accent/10 to-transparent"
    },
    {
      id: 2,
      title: "Facials",
      description: "Rejuvenating facial treatments for all skin types",
      icon: Sparkles,
      gradient: "from-primary/30 via-primary/15 to-transparent"
    },
    {
      id: 3,
      title: "Make-up",
      description: "Expert makeup application for any occasion",
      icon: Palette,
      gradient: "from-accent/20 via-accent/10 to-transparent"
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/30 via-primary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Discover our signature beauty and aesthetic treatments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link 
                key={service.id} 
                href={`/services?category=${encodeURIComponent(service.title)}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className="group relative bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 cursor-pointer h-full overflow-hidden hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/40">
                      <Icon className="w-8 h-8 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

                <div className="text-center animate-fade-in-up delay-600">
                  <Link href="/services">
                    <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground px-12 py-5 rounded-full font-semibold text-lg shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 overflow-hidden transform-gpu">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10">View All Services</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
      </div>
    </section>
  )
}
