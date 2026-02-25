import TeamSection from "@/components/team-section"
import MissionSection from "@/components/mission-section"
import ValuesSection from "@/components/values-section"
import PolicySection from "@/components/policy-section"
import TimelineSection from "@/components/timeline-section"

export default function AboutPage() {
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
              About Aura Contour
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
              Discover the story behind our commitment to beauty, elegance, and exceptional service
            </p>
          </div>
        </div>
      </section>

      <MissionSection />
      <ValuesSection />
      <PolicySection />
      {/* <TeamSection /> */}
      {/* <TimelineSection /> */}
    </main>
  )
}
