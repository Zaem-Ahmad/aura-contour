"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What should I bring to my appointment?",
      answer: "Please arrive with clean, makeup-free skin for facial treatments. For hair services, come with clean, dry hair. We'll provide all necessary products and tools. Feel free to bring any specific preferences or inspiration photos."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 1-2 weeks in advance, especially for bridal makeup and special events. However, we often have same-day availability for regular services. Contact us via WhatsApp for last-minute appointments."
    },
    {
      question: "Do you offer consultations?",
      answer: "Yes! We offer complimentary consultations for new clients, especially for bridal services, major color changes, or specialized treatments. During the consultation, we'll discuss your goals, assess your needs, and create a personalized treatment plan."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that plans can change. Please notify us at least 24 hours in advance if you need to reschedule or cancel. Late cancellations may be subject to a fee. We're happy to work with you to find an alternative time."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfers, and major credit/debit cards. Payment is typically made at the time of service. For bridal packages or large bookings, a deposit may be required to secure your appointment."
    },
    {
      question: "Do you use cruelty-free products?",
      answer: "Yes, we prioritize using high-quality, professional-grade products from reputable brands. Many of our products are cruelty-free and we're committed to ethical beauty practices. Feel free to ask about specific products during your visit."
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
            Everything you need to know before your visit
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


