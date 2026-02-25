"use client"

import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Alina Odho",
      role: "Client",
      content:
        "Aura Contour transformed my look completely. The team is professional, welcoming, and truly cares about their clients.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ayesha Ahmed",
      role: "Regular Client",
      content: "I've been coming here for over a year. Every visit is a luxurious experience. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Fatima Khan",
      role: "Client",
      content: "The attention to detail and personalized service is unmatched. I feel like royalty every time I visit.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Real experiences from our valued clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                <Quote className="w-16 h-16 text-accent" />
              </div>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-accent text-accent group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" 
                      style={{ transitionDelay: `${i * 50}ms` }} 
                    />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic text-lg leading-relaxed relative z-10 group-hover:text-foreground/90 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
                  <p className="font-semibold text-foreground text-lg group-hover:text-accent transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60 group-hover:text-foreground/70 transition-colors duration-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
