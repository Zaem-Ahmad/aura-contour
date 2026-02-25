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
              Born from a vision to redefine modern beauty, Aura Contour offers a new standard in luxury aesthetics.
              Created as an intimate beauty space where modern aesthetics meet personalized care, we believe beauty should feel empowering—never artificial.
            </p>
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              Our approach merges innovative contouring techniques with a meticulous eye for symmetry, precision, and detail to create results that feel effortlessly natural.
              Every treatment is tailored—crafted to highlight your unique aura and bring out the most confident version of you.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our studio is built on a commitment to safety, artistry, and refinement—helping you elevate your features with confidence and elegance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
