"use client"

import { Award, Shield, Clock, Users, Sparkles, Heart } from "lucide-react"

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Award,
      title: "Certified Experts",
      description: "Our team consists of certified and experienced beauty professionals trained in the latest techniques",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Shield,
      title: "Premium Products",
      description: "We use only the finest, professional-grade products from trusted brands to ensure optimal results",
      gradient: "from-primary/30 to-primary/10"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times to fit your busy schedule, with same-day booking options available",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Every treatment is customized to your unique needs, skin type, and desired outcomes",
      gradient: "from-primary/30 to-primary/10"
    },
    {
      icon: Sparkles,
      title: "Modern Techniques",
      description: "We stay at the forefront of beauty innovation, offering the latest treatments and technologies",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Heart,
      title: "Luxury Experience",
      description: "From the moment you arrive, enjoy a premium, relaxing environment designed for your comfort",
      gradient: "from-primary/30 to-primary/10"
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_60%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Why Choose Aura Contour
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Experience the difference of premium beauty care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 hover:-translate-y-2 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/40">
                    <Icon className="w-8 h-8 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


