"use client"

export default function GalleryPreview() {
  const galleryItems = [
    { id: 1, title: "Hair Transformation", image: "/professional-hair-styling.png" },
    { id: 2, title: "Facial Glow", image: "/luxury-facial-treatment.png" },
    { id: 3, title: "Makeup Artistry", image: "/professional-makeup.png" },
  ]

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            See the transformations we create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl h-80 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/40 transition-all duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-xl mb-3 drop-shadow-lg">{item.title}</h3>
                  <div className="h-1 w-0 group-hover:w-16 bg-accent transition-all duration-500 rounded-full shadow-lg shadow-accent/50"></div>
                </div>
              </div>
              {/* Overlay shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
