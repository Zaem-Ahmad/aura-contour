"use client"

import { Clock, XCircle, CreditCard, Shield, Baby, Ban, Briefcase } from "lucide-react"

const policyItems = [
  {
    icon: Clock,
    title: "Punctuality and Appointments",
    points: [
      "Please arrive on time for your scheduled appointment.",
      "Arriving late may interfere with your treatment; appointments will conclude at their scheduled time so the next client is not delayed.",
      "Specific treatments, such as our Personalized Facial Treatment, are scheduled for set durations (e.g., 40 minutes) to ensure maximum efficacy.",
    ],
  },
  {
    icon: XCircle,
    title: "Cancellations and No-Shows",
    points: [
      "We require at least 12 to 24 hours' notice for all cancellations so we may offer the slot to another client.",
      "Failure to provide sufficient notice or no-shows may result in a cancellation fee or a requirement for a non-refundable deposit for future bookings.",
    ],
  },
  {
    icon: CreditCard,
    title: "Pricing and Payments",
    points: [
      "Many of our services, particularly in Hair Cuts & Styling, have variable pricing based on hair length, density, or the complexity of the work.",
      "Prices vary depending on whether you book with a Top Stylist or a Senior Stylist.",
      "All hair cut services include a professional hair wash.",
      "Services like Epilation (Waxing/Threading) and Hand/Feet Wellness (Manicures/Pedicures) have fixed rates based on the area or product used, such as Honey Wax versus Rica Wax.",
    ],
  },
  {
    icon: Shield,
    title: "Health and Safety",
    points: [
      "Our Personalized Treatments are tailored specifically to your skin type to ensure visible rejuvenation and safety.",
      "Clients must disclose any skin sensitivities, allergies, or medical conditions before undergoing intensive treatments like Mild Peels, Pico Laser, or B.B. Glow.",
      "For treatments such as the Age Sumum Facial, following the provided aftercare is essential to maintain the lifting and rejuvenation results.",
    ],
  },
  {
    icon: Baby,
    title: "Children and Environment",
    points: [
      "We offer specialized services for girls aged 8 and under.",
      "For safety and to maintain a relaxing atmosphere for all guests, children must be supervised at all times and are generally not permitted in treatment rooms during adult aesthetic procedures.",
      "We strive to provide a tranquil environment. Please keep mobile devices on silent during your visit.",
    ],
  },
  {
    icon: Ban,
    title: "Right to Refuse Service",
    points: [
      "We reserve the right to refuse service to anyone who is abusive, under the influence, or if a practitioner deems a treatment unsafe for the client's current skin or hair condition.",
    ],
  },
  {
    icon: Briefcase,
    title: "Personal Belongings",
    points: [
      "While we take every care, the salon is not responsible for the loss or damage of personal items. We recommend leaving valuables at home.",
    ],
  },
]

export default function PolicySection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Our Policies
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Welcome to our sanctuary. To ensure every client enjoys a premium, seamless experience, we kindly ask that you review our professional policies.
          </p>
        </div>

        <div className="space-y-10">
          {policyItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group bg-card rounded-2xl p-8 shadow-xl border border-border/50 hover:border-accent/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-6 bg-card/50 rounded-2xl border border-border/50 text-center">
          <p className="text-foreground/70 text-sm">
            For questions about our policies or to book an appointment, please{" "}
            <a href="/contact" className="text-accent hover:underline font-medium">
              contact us
            </a>
            . We look forward to welcoming you.
          </p>
        </div>
      </div>
    </section>
  )
}
