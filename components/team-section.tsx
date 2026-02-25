"use client"

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Victoria Sterling",
      role: "Founder & Lead Aesthetician",
      bio: "With 15+ years of experience in luxury beauty, Victoria founded Aura Contour with a vision of excellence",
      image: "/professional-woman-aesthetician.jpg",
    },
    {
      id: 2,
      name: "Sophia Laurent",
      role: "Hair Specialist",
      bio: "Expert colorist and stylist trained in Paris, bringing European elegance to every hair transformation",
      image: "/professional-hair-stylist.jpg",
    },
    {
      id: 3,
      name: "Emma Chen",
      role: "Makeup Artist",
      bio: "Award-winning makeup artist specializing in bridal and event makeup with an artistic touch",
      image: "/professional-makeup-artist.jpg",
    },
    {
      id: 4,
      name: "Isabella Rodriguez",
      role: "Skincare Specialist",
      bio: "Certified dermatology specialist dedicated to creating personalized skincare solutions",
      image: "/professional-skincare-specialist.jpg",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Experienced professionals dedicated to your beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
