"use client"

import { Sparkles, Target, Gem } from 'lucide-react'

export default function IntroSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Expert Professionals",
      description: "Certified and experienced beauty experts dedicated to your care",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Target,
      title: "Personalized Care",
      description: "Customized treatments tailored to your unique needs and goals",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Only the finest products and techniques for exceptional results",
      color: "from-accent/20 to-accent/5"
    },
  ]

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-background via-primary/10 to-primary/20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_60%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
              <Sparkles className="w-5 h-5 text-accent" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in-up">
            About Aura Contour
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
            Aura Contour is Karachi&apos;s premier aesthetic clinic in DHA Phase 8—where artistry meets luxury. 
            Our certified experts deliver Hydrafacial, PRP, laser hair removal, dermaplaning, BB glow, and advanced 
            facial treatments. Every service is tailored to enhance your natural radiance with premium products 
            and cutting-edge techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/30">
                    <Icon className="w-10 h-10 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 text-center group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-center leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
