"use client"

import { Heart, Sparkles, Users, Award } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every service, treating each client with genuine care and attention",
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We maintain the highest standards in beauty and aesthetic treatments using premium products",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building lasting relationships with our clients and creating a welcoming space",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We stay ahead of beauty trends and continuously invest in the latest techniques and technology",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="group text-center bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/40">
                    <Icon className="w-10 h-10 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
