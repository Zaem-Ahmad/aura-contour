"use client"

import { Moon, ArrowRight } from "lucide-react"

export default function RamadanSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-primary/15 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.08),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 border border-accent/20 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
              <Moon className="w-10 h-10 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Ramadan Beauty Deals in Karachi
              </h2>
              <p className="text-foreground/70 max-w-xl">
                Celebrate the holy month with exclusive offers on facials, Hydrafacial, hair treatments &amp; more. 
                Premium beauty services at special rates—DHA Phase 8&apos;s trusted aesthetic clinic.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/923373248248?text=Hi%2C%20I%27d%20like%20to%20know%20about%20your%20Ramadan%20beauty%20offers"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            View Ramadan Offers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
