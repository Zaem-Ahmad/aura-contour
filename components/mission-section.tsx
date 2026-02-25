export default function MissionSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden flex items-center justify-center">
            <img src="/IMG_6846.jpg" alt="Aura Contour Salon" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              Born from a vision to redefine modern beauty in Karachi, Aura Contour is DHA Phase 8&apos;s trusted aesthetic clinic. 
              We bring luxury aesthetics and personalized care—Hydrafacial, PRP, laser hair removal, BB glow & facial treatments—all under one roof.
            </p>
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              Our certified experts combine innovative contouring techniques with precision and detail for natural, radiant results. 
              Every treatment is tailored to your skin type and goals, from facials in DHA to advanced aesthetic procedures.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Located in Al Murtaza Commercial, DHA Phase 8, our studio is committed to safety, artistry, and elegance—the best salon in DHA Karachi for discerning clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
