"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Handle non-JSON responses
      let data
      try {
        data = await response.json()
      } catch (parseError) {
        throw new Error("Server error: Invalid response format")
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else if (typeof err === "string") {
        setError(err)
      } else {
        setError("An unexpected error occurred. Please try again or contact us directly.")
      }
      console.error("Form submission error:", err)
    } finally {
      setLoading(false)
    }
  }


  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/0a5e53aa-8ca8-4e1d-a005-3296441062e0.mp4" type="video/mp4" />
          </video>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          
          {/* Color overlay to match brand */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent opacity-60"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
              Book your appointment at Karachi&apos;s best aesthetic clinic in DHA Phase 8. Hydrafacial, PRP, facials &amp; more. 
              Call, WhatsApp or visit us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Contact Information</h2>
              </div>

              {/* Phone */}
              <div className="group flex gap-4 p-5 rounded-xl bg-card hover:bg-accent/5 transition-all duration-500 border border-border/50 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/30">
                  <Phone className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">Phone</h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">+92 3373248248</p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex gap-4 p-5 rounded-xl bg-card hover:bg-accent/5 transition-all duration-500 border border-border/50 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/30">
                  <Mail className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">Email</h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">auracontour999@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="group flex gap-4 p-5 rounded-xl bg-card hover:bg-accent/5 transition-all duration-500 border border-border/50 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/30">
                  <MapPin className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">Address</h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">Suit 203 2nd floor, Phot 126 C lane 1 A</p>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">Al Murtaza Commercial Phase VIII, DHA Karachi</p>
                </div>
              </div>

              {/* Hours */}
              <div className="group flex gap-4 p-5 rounded-xl bg-card hover:bg-accent/5 transition-all duration-500 border border-border/50 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/30">
                  <Clock className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">Hours</h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">Mon - Fri: 9:00 AM - 7:00 PM</p>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">Sat: 10:00 AM - 6:00 PM</p>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
                    <p className="text-accent font-semibold mb-2">Thank you for your message!</p>
                    <p className="text-foreground/70">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-center">
                        <p className="text-red-500 font-semibold">{error}</p>
                      </div>
                    )}
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary text-foreground placeholder-muted-foreground rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary text-foreground placeholder-muted-foreground rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary text-foreground placeholder-muted-foreground rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                        placeholder="+92 3373248248"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary text-foreground rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="services">Services Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-primary text-foreground placeholder-muted-foreground rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground py-4 rounded-full font-semibold text-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent to-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-primary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center animate-fade-in-up">Visit Us</h2>
          <div className="w-full h-96 bg-muted rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4537.2175683337!2d67.07732797620535!3d24.78765017797695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d006a526e8d%3A0xc653279391ccf386!2sAura%20Contour%20Aesthetic%20%26%20Beauty%20Salon!5e1!3m2!1sen!2s!4v1765617719201!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
