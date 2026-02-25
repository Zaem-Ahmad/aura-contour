"use client"

import { Calendar, UserCheck, Sparkles, Heart } from "lucide-react"
import Link from "next/link"

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Book Your Appointment",
      description: "Schedule a consultation or service through WhatsApp or our contact form. We'll confirm your appointment and send you preparation details.",
      color: "from-accent/20 to-accent/5"
    },
    {
      number: "02",
      icon: UserCheck,
      title: "Consultation & Assessment",
      description: "During your visit, our experts will assess your needs, discuss your goals, and recommend the best treatment plan tailored to you.",
      color: "from-primary/30 to-primary/10"
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Treatment Experience",
      description: "Relax and enjoy your personalized treatment using premium products and advanced techniques in our luxurious salon environment.",
      color: "from-accent/20 to-accent/5"
    },
    {
      number: "04",
      icon: Heart,
      title: "Aftercare & Results",
      description: "We provide detailed aftercare instructions and follow-up support to ensure you achieve and maintain your desired results.",
      color: "from-primary/30 to-primary/10"
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            A seamless journey from booking to beautiful results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50 hover:-translate-y-2 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <span className="text-accent-foreground font-bold text-xl">{step.number}</span>
                  </div>
                  
                  <div className="relative z-10 mt-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center animate-fade-in-up delay-600">
          <Link href="/contact">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground px-12 py-5 rounded-full font-semibold text-lg shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Book Your Appointment</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}


