"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

interface Service {
  id: number
  category: string
  subCategory: string
  title: string
  description: string
  image: string
  addOns?: string[]
}

const services: Service[] = [
  // Hair Cuts & Styling
  {
    id: 1,
    category: "Hair Cuts & Styling",
    subCategory: "Hair Cuts",
    title: "Cut and Paddle Dry",
    description: "Precision haircut with paddle dry styling for medium-length hair. Includes hair wash.",
    image: "/Services_Images/Cut and Paddle Dry.png",
  },
  {
    id: 2,
    category: "Hair Cuts & Styling",
    subCategory: "Hair Cuts",
    title: "Cut and Blow Dry",
    description: "Full haircut with professional blow dry for medium-length hair. Includes hair wash.",
    image: "/Services_Images/Cut and Blow Dry.png",
  },
  {
    id: 3,
    category: "Hair Cuts & Styling",
    subCategory: "Hair Cuts",
    title: "Aura Signature Cut",
    description: "Our signature haircut tailored to all hair lengths for your perfect look. Includes hair wash.",
    image: "/Services_Images/Aura Signature Cut.png",
  },
  {
    id: 4,
    category: "Hair Cuts & Styling",
    subCategory: "Other Hair Services",
    title: "Trimming",
    description: "Professional trimming in Round, U-shape, or Straight styles for textured, manageable hair.",
    image: "/Services_Images/Thinning.png",
  },
  {
    id: 5,
    category: "Hair Cuts & Styling",
    subCategory: "Other Hair Services",
    title: "Girls Haircut",
    description: "Specialist haircut for girls aged 8 and under in a fun, comfortable environment.",
    image: "/Services_Images/Girls Haircut.png",
  },
  {
    id: 6,
    category: "Hair Cuts & Styling",
    subCategory: "Styling",
    title: "Shampoo and Conditioner Regular",
    description: "Refreshing shampoo and conditioner wash using On-Care products for clean, healthy hair.",
    image: "/Services_Images/Shampoo and Conditioner Regular.png",
  },
  {
    id: 7,
    category: "Hair Cuts & Styling",
    subCategory: "Styling",
    title: "Esla Shampoo and Conditioner",
    description: "Premium Esla shampoo and conditioner treatment for nourished, revitalized hair.",
    image: "/Services_Images/Esla Shampoo and Conditioner.png",
  },
  {
    id: 8,
    category: "Hair Cuts & Styling",
    subCategory: "Styling",
    title: "Esla Shampoo and Conditioner + Paddle Dry",
    description: "Esla wash combined with paddle dry styling for smooth, voluminous results.",
    image: "/Services_Images/Esla Shampoo and Conditioner + Paddle Dry.png",
  },
  {
    id: 9,
    category: "Hair Cuts & Styling",
    subCategory: "Styling",
    title: "Esla Shampoo and Conditioner + Styled Blow Dry",
    description: "Complete Esla treatment with styled blow dry for a polished, salon-ready finish.",
    image: "/Services_Images/Esla Shampoo and Conditioner + Styled Blow Dry.png",
  },
  // Epilation (Waxing & Threading)
  {
    id: 10,
    category: "Epilation",
    subCategory: "Body Waxing",
    title: "Full Body Wax",
    description: "Complete body waxing excluding bikini area for smooth, hair-free skin.",
    image: "/Services_Images/Full Body Wax.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 11,
    category: "Epilation",
    subCategory: "Body Waxing",
    title: "Under Arms Wax",
    description: "Quick and gentle underarm waxing for smooth, clean results.",
    image: "/Services_Images/Under Arms Wax.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 12,
    category: "Epilation",
    subCategory: "Body Waxing",
    title: "Half Arms Wax",
    description: "Waxing for lower or upper half of arms for smooth skin.",
    image: "/Services_Images/Half Arms Wax.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 13,
    category: "Epilation",
    subCategory: "Body Waxing",
    title: "Full Arms Wax",
    description: "Complete arm waxing from shoulder to wrist for silky smooth arms.",
    image: "/Services_Images/Full Arms Wax.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 14,
    category: "Epilation",
    subCategory: "Body Waxing",
    title: "Half Legs Wax",
    description: "Waxing for lower or upper half of legs for smooth, hair-free skin.",
    image: "/Services_Images/Half Legs Wax.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 15,
    category: "Epilation",
    subCategory: "Body Waxing",
    title: "Full Legs Wax",
    description: "Complete leg waxing for long-lasting smoothness.",
    image: "/Services_Images/Full Legs Wax.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 16,
    category: "Epilation",
    subCategory: "Body Waxing",
    title: "Bikini Wax",
    description: "Professional bikini area waxing for smooth, comfortable results.",
    image: "/Services_Images/Bikini Wax.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 17,
    category: "Epilation",
    subCategory: "Facial Epilation",
    title: "Face per Area",
    description: "Precise facial hair removal for specific areas using wax or threading.",
    image: "/Services_Images/Face per Area.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 18,
    category: "Epilation",
    subCategory: "Facial Epilation",
    title: "Full Face Epilation",
    description: "Complete facial hair removal for a smooth, radiant complexion.",
    image: "/Services_Images/Full Face Epilation.png",
    addOns: ["Sheet Mask", "Hydro Jelly", "Guinot Mask"],
  },
  {
    id: 19,
    category: "Epilation",
    subCategory: "Epilation Add-ons",
    title: "Sheet Mask",
    description: "Soothing sheet mask add-on to hydrate and calm skin after epilation.",
    image: "/Services_Images/Sheet Mask.png",
  },
  {
    id: 20,
    category: "Epilation",
    subCategory: "Epilation Add-ons",
    title: "Hydro Jelly",
    description: "Deep hydration boost add-on for refreshed, glowing skin after treatment.",
    image: "/Services_Images/Hydro Jelly.png",
  },
  {
    id: 21,
    category: "Epilation",
    subCategory: "Epilation Add-ons",
    title: "Guinot Mask",
    description: "Premium Guinot mask add-on for enhanced nourishment and radiance.",
    image: "/Services_Images/Guinot Mask.png",
  },
  // Hand and Feet Wellness
  {
    id: 22,
    category: "Hand and Feet Wellness",
    subCategory: "Manicure",
    title: "Crystal Jelly Manicure",
    description: "Revitalizing crystal jelly manicure for soft, hydrated hands and beautiful nails.",
    image: "/Services_Images/Crystal Jelly Manicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 23,
    category: "Hand and Feet Wellness",
    subCategory: "Manicure",
    title: "Aroma Manicure",
    description: "Aromatherapy-infused manicure for a relaxing hand care experience.",
    image: "/Services_Images/Aroma Manicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 24,
    category: "Hand and Feet Wellness",
    subCategory: "Manicure",
    title: "Aura Signature Manicure",
    description: "Our signature hand polishing treatment for silky smooth, radiant hands.",
    image: "/Services_Images/Aura Signature Manicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 25,
    category: "Hand and Feet Wellness",
    subCategory: "Manicure",
    title: "Solution Manicure",
    description: "Targeted solution-based manicure to address specific nail and cuticle concerns.",
    image: "/Services_Images/Solution Manicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 26,
    category: "Hand and Feet Wellness",
    subCategory: "Pedicure",
    title: "Crystal Jelly Pedicure",
    description: "Luxurious crystal jelly pedicure for soft, refreshed feet and polished nails.",
    image: "/Services_Images/Crystal Jelly Pedicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 27,
    category: "Hand and Feet Wellness",
    subCategory: "Pedicure",
    title: "Aroma Pedicure",
    description: "Aromatherapy pedicure for indulgent foot care and relaxation.",
    image: "/Services_Images/Aroma Pedicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 28,
    category: "Hand and Feet Wellness",
    subCategory: "Pedicure",
    title: "Aura Signature Pedicure",
    description: "Our signature feet polishing treatment for smooth, glowing feet.",
    image: "/Services_Images/Aura Signature Pedicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 29,
    category: "Hand and Feet Wellness",
    subCategory: "Pedicure",
    title: "Solution Pedicure",
    description: "Solution-based pedicure to treat dry skin, calluses, and nail concerns.",
    image: "/Services_Images/Solution Pedicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  // Paraffin subcategory
  {
    id: 44,
    category: "Hand and Feet Wellness",
    subCategory: "Paraffin",
    title: "Crystal Jelly Manicure & Pedicure",
    description: "Complete crystal jelly treatment for both hands and feet—soft, hydrated skin and beautiful nails from head to toe.",
    image: "/Services_Images/Crystal Jelly Manicure & Pedicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 45,
    category: "Hand and Feet Wellness",
    subCategory: "Paraffin",
    title: "Aroma Manicure & Pedicure",
    description: "Aromatherapy-infused manicure and pedicure for a full relaxation experience—indulgent hand and foot care.",
    image: "/Services_Images/Aroma Manicure & Pedicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 46,
    category: "Hand and Feet Wellness",
    subCategory: "Paraffin",
    title: "Aura Signature Manicure & Pedicure",
    description: "Our signature polishing treatment for both hands and feet—silky smooth, radiant results from fingers to toes.",
    image: "/Services_Images/Aura Signature Manicure & Pedicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 47,
    category: "Hand and Feet Wellness",
    subCategory: "Paraffin",
    title: "Solution Manicure & Pedicure",
    description: "Targeted solution-based treatment for hands and feet—address nail, cuticle, dry skin, and callus concerns.",
    image: "/Services_Images/Solution Manicure & Pedicure.png",
    addOns: ["French Tips", "Mild Peels", "Pico Laser", "B.B. Glow"],
  },
  {
    id: 48,
    category: "Hand and Feet Wellness",
    subCategory: "Paraffin",
    title: "Paraffin Hand & Feet Treatment",
    description: "Deep moisturizing paraffin treatment for both hands and feet—restore smoothness, softness, and comfort.",
    image: "/Services_Images/Paraffin Hand & Feet Treatment.png",
  },
  {
    id: 30,
    category: "Hand and Feet Wellness",
    subCategory: "Manicure",
    title: "Paraffin Hand Treatment",
    description: "Deep moisturizing paraffin treatment to soften and nourish hands.",
    image: "/Services_Images/Paraffin Hand Treatment.png",
  },
  {
    id: 31,
    category: "Hand and Feet Wellness",
    subCategory: "Pedicure",
    title: "Paraffin Feet Treatment",
    description: "Intensive paraffin treatment for cracked, dry feet—restore smoothness and comfort.",
    image: "/Services_Images/Paraffin Feet Treatment.png",
  },
  {
    id: 32,
    category: "Hand and Feet Wellness",
    subCategory: "Hand & Feet Add-ons",
    title: "French Tips",
    description: "Classic French tip add-on for elegant, timeless nail styling.",
    image: "/Services_Images/French Tips.png",
  },
  {
    id: 33,
    category: "Hand and Feet Wellness",
    subCategory: "Hand & Feet Add-ons",
    title: "Mild Peels",
    description: "Gentle exfoliation add-on to brighten and smooth skin on hands or feet.",
    image: "/Services_Images/Mild Peels.png",
  },
  {
    id: 34,
    category: "Hand and Feet Wellness",
    subCategory: "Hand & Feet Add-ons",
    title: "Pico Laser",
    description: "Advanced Pico laser add-on for skin rejuvenation and pigmentation reduction.",
    image: "/Services_Images/Pico Laser.png",
  },
  {
    id: 35,
    category: "Hand and Feet Wellness",
    subCategory: "Hand & Feet Add-ons",
    title: "B.B. Glow",
    description: "B.B. Glow treatment add-on for an even, glowing complexion.",
    image: "/Services_Images/B.B. Glow.png",
  },
  // Facial Treatments
  {
    id: 36,
    category: "Facial Treatments",
    subCategory: "Treatments",
    title: "Personalized Treatment",
    description: "A 40-minute treatment tailored to your skin type for visible rejuvenation and soft, smooth skin.",
    image: "/Services_Images/Personalized Treatment.png",
    addOns: ["Esthemax Lemon Peel", "Hydro Jelly", "Sheet Mask"],
  },
  {
    id: 37,
    category: "Facial Treatments",
    subCategory: "Treatments",
    title: "Protein Radiance Treatment Facial",
    description: "Gentle detoxifying cleansing treatment that delivers a radiant glow and brightening.",
    image: "/Services_Images/Protein Radiance Treatment Facial.png",
    addOns: ["Esthemax Lemon Peel", "Hydro Jelly", "Sheet Mask"],
  },
  {
    id: 38,
    category: "Facial Treatments",
    subCategory: "Treatments",
    title: "Guinot Brightening Facial",
    description: "Brightening facial that combats dullness, reduces pigmentation and dead skin for a healthy luminous glow.",
    image: "/Services_Images/Guinot Brightening Facial.png",
    addOns: ["Esthemax Lemon Peel", "Hydro Jelly", "Sheet Mask"],
  },
  {
    id: 39,
    category: "Facial Treatments",
    subCategory: "Treatments",
    title: "Age Sumum Facial Treatment",
    description: "Designed for mature skin to combat signs of aging with immediate results—lift, stimulate cell rejuvenation, and reduce fine lines for a youthful glow.",
    image: "/Services_Images/Age Sumum Facial Treatment.png",
    addOns: ["Esthemax Lemon Peel", "Hydro Jelly", "Sheet Mask"],
  },
  {
    id: 40,
    category: "Facial Treatments",
    subCategory: "Treatments",
    title: "Esthemax Cleansing",
    description: "Double cleanse process to remove impurities, toxins, and buildup while supporting your natural skin barrier for a fresh, revitalized look.",
    image: "/Services_Images/Esthemax Cleansing.png",
    addOns: ["Esthemax Lemon Peel", "Hydro Jelly", "Sheet Mask"],
  },
  {
    id: 41,
    category: "Facial Treatments",
    subCategory: "Facial Add-ons",
    title: "Esthemax Lemon Peel",
    description: "Refreshing lemon peel add-on for brighter, exfoliated skin.",
    image: "/Services_Images/Esthemax Lemon Peel.png",
  },
  {
    id: 42,
    category: "Facial Treatments",
    subCategory: "Facial Add-ons",
    title: "Hydro Jelly",
    description: "Intense hydration add-on for plump, glowing skin.",
    image: "/Services_Images/Hydro Jelly(2nd).png",
  },
  {
    id: 43,
    category: "Facial Treatments",
    subCategory: "Facial Add-ons",
    title: "Sheet Mask",
    description: "Soothing sheet mask add-on to lock in moisture and nutrients.",
    image: "/Services_Images/Sheet Mask(2nd).png",
  },
]

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubCategory, setSelectedSubCategory] = useState("All")
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showAllSubCategories, setShowAllSubCategories] = useState(false)

  const categories = useMemo(() => ["All", ...new Set(services.map((s) => s.category))], [])

  const subCategories = useMemo(() => {
    if (selectedCategory === "All") return []
    const subs = new Set(services.filter((s) => s.category === selectedCategory).map((s) => s.subCategory))
    return ["All", ...subs]
  }, [selectedCategory])

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam)
      if (categories.includes(decodedCategory)) {
        setSelectedCategory(decodedCategory)
        setSelectedSubCategory("All")
      }
    }
  }, [searchParams, categories])

  useEffect(() => {
    setSelectedSubCategory("All")
  }, [selectedCategory])

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch =
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.category.toLowerCase().includes(searchLower) ||
        service.subCategory.toLowerCase().includes(searchLower) ||
        (service.addOns?.some((a) => a.toLowerCase().includes(searchLower)) ?? false)
      const matchesCategory = selectedCategory === "All" || service.category === selectedCategory
      const matchesSubCategory = selectedSubCategory === "All" || service.subCategory === selectedSubCategory
      return matchesSearch && matchesCategory && matchesSubCategory
    })
  }, [searchQuery, selectedCategory, selectedSubCategory])

  const getProfessionalWhatsAppMessage = (serviceTitle: string, serviceCategory: string) => {
    return `Hello, I would like to schedule an appointment for ${serviceTitle} (${serviceCategory}). Please let me know your available time slots.`
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden min-h-[60vh] flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
              Discover our comprehensive range of beauty and wellness treatments
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-primary/10 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-card text-foreground placeholder-muted-foreground rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 shadow-lg hover:shadow-xl"
              />
              <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="relative mb-6">
            <p className="text-sm font-medium text-muted-foreground mb-3 text-center">Category</p>
            <div
              className={`flex flex-wrap gap-3 justify-center overflow-hidden transition-all duration-300 ${
                showAllCategories ? "max-h-none" : "max-h-[7.5rem] md:max-h-[3.5rem]"
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-accent to-accent/90 text-accent-foreground shadow-lg shadow-accent/30"
                      : "bg-card text-foreground hover:bg-accent/10 border border-border/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {categories.length > 5 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAllCategories(!showAllCategories)}
                  className="px-6 py-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 flex items-center gap-2"
                >
                  {showAllCategories ? "Show Less" : "Show More Categories"}
                  <svg
                    className={`w-4 h-4 transition-transform ${showAllCategories ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Subcategory Filter */}
          {subCategories.length > 0 && (
            <div className="relative">
              <p className="text-sm font-medium text-muted-foreground mb-3 text-center">Subcategory</p>
              <div
                className={`flex flex-wrap gap-3 justify-center overflow-hidden transition-all duration-300 ${
                  showAllSubCategories ? "max-h-none" : "max-h-[7.5rem] md:max-h-[3.5rem]"
                }`}
              >
                {subCategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubCategory(sub)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                      selectedSubCategory === sub
                        ? "bg-gradient-to-r from-accent/90 to-accent/80 text-accent-foreground shadow-lg shadow-accent/20"
                        : "bg-card/80 text-foreground hover:bg-accent/10 border border-border/50"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
              {subCategories.length > 5 && (
                <div className="flex justify-center mt-3">
                  <button
                    onClick={() => setShowAllSubCategories(!showAllSubCategories)}
                    className="px-4 py-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    {showAllSubCategories ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-xl border border-border/50 hover:shadow-2xl hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      <span className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-xl group-hover:scale-110 transition-transform duration-300">
                        {service.category}
                      </span>
                      {service.subCategory && (
                        <span className="bg-card/90 text-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                          {service.subCategory}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {service.description}
                    </p>
                    {service.addOns && service.addOns.length > 0 && (
                      <p className="text-foreground/60 text-xs mb-4">
                        <span className="font-medium">Available add-ons:</span> {service.addOns.join(", ")}
                      </p>
                    )}

                    <a
                      href={`https://wa.me/923373248248?text=${encodeURIComponent(getProfessionalWhatsAppMessage(service.title, service.category))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center w-full bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground py-3 rounded-full font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                      <span className="relative z-10">Book Service</span>
                      <svg
                        className="w-5 h-5 relative z-10 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent to-accent/90 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-8 bg-card rounded-2xl border border-border/50 shadow-lg">
                <p className="text-xl text-foreground/70">No services found matching your search.</p>
                <p className="text-sm text-foreground/50 mt-2">Try adjusting your filters</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
