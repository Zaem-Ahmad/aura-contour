"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Where is the best salon in DHA Karachi?",
      answer: "Aura Contour is located in DHA Phase 8, Al Murtaza Commercial—offering luxury facials, Hydrafacial, PRP, laser hair removal, BB glow & advanced aesthetic treatments. We're your trusted beauty salon near you in Karachi."
    },
    {
      question: "Do you offer Hydrafacial in Karachi?",
      answer: "Yes. We provide professional Hydrafacial treatments at our DHA Phase 8 clinic. Our certified aestheticians use premium products and techniques for deep cleansing, hydration, and radiant skin."
    },
    {
      question: "Is PRP treatment available at your aesthetic clinic?",
      answer: "Yes. Aura Contour offers PRP (Platelet-Rich Plasma) treatment for skin rejuvenation and hair restoration. Book a consultation to learn how PRP can benefit your skin and hair."
    },
    {
      question: "Do you offer laser hair removal in Karachi?",
      answer: "We offer laser hair removal and Pico laser treatments for smooth, long-lasting results. Our clinic in DHA Phase 8 uses advanced technology for safe, effective hair reduction."
    },
    {
      question: "What facial treatments do you offer in DHA?",
      answer: "We offer Hydrafacial, dermaplaning, Guinot facials, protein radiance treatments, brightening facials & personalized facials. Every treatment is tailored to your skin type and goals."
    },
    {
      question: "Are there Ramadan beauty deals in Karachi?",
      answer: "Yes. Aura Contour runs special Ramadan beauty offers on facials, hair treatments & more. Contact us on WhatsApp to know the latest Ramadan deals and book your appointment."
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <HelpCircle className="w-6 h-6 text-accent" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Aesthetic clinic &amp; salon in DHA Karachi—answers to your beauty questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border/50 hover:border-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/5 transition-colors duration-300"
              >
                <span className="font-semibold text-foreground text-lg pr-4 group-hover:text-accent transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/923373248248"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
          >
            Contact us on WhatsApp
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}


