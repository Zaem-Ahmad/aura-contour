"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPreviewV2() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const galleryItems = [
    { id: 1, title: "Hair Transformation", image: "/professional-hair-styling.png", category: "Hair Care" },
    { id: 2, title: "Facial Glow", image: "/luxury-facial-treatment.png", category: "Facials" },
    { id: 3, title: "Makeup Artistry", image: "/professional-makeup.png", category: "Make-up" },
    { id: 5, title: "Hair Styling", image: "/Hair Styling.png", category: "Hair Care" },
    { id: 6, title: "Bridal Makeup", image: "/Bridal Makeup.png", category: "Make-up" },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
      <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.03),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Our Work
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover the artistry and precision behind every transformation
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  index === 0 || index === 4 ? "md:row-span-2 h-[500px]" : "h-[240px]"
                }`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold text-xl mb-2 drop-shadow-lg">{item.title}</h3>
                    <div className="h-1 w-0 group-hover:w-16 bg-accent transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
                {/* Overlay shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage("prev")
            }}
            className="absolute left-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage("next")
            }}
            className="absolute right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div 
            className="max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
            <h3 className="text-xl font-semibold mb-2">{galleryItems[selectedImage].title}</h3>
            <p className="text-sm text-white/70">{galleryItems[selectedImage].category}</p>
          </div>
        </div>
      )}
    </>
  )
}


