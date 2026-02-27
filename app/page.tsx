import HeroSection from "@/components/hero-section"
import IntroSection from "@/components/intro-section"
import ServicesSpotlight from "@/components/services-spotlight"
import GalleryPreviewV2 from "@/components/gallery-preview-v2"
import ProcessSection from "@/components/process-section"
import InstagramFeed from "@/components/instagram-feed"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServicesSpotlight />
      <GalleryPreviewV2 />
      <ProcessSection />
      <InstagramFeed />
      <CTASection />
      <section className="sr-only" aria-hidden="true">
        <h2>Best Salon in DHA Karachi</h2>
        <p>
          Aura Contour is an aesthetic clinic in Karachi offering Hydrafacial in Karachi, PRP treatment in Karachi,
          laser hair removal in Karachi, facial treatments in DHA, and seasonal Ramadan beauty deals in Karachi.
        </p>
        <a href="/services">Explore salon and aesthetic services in DHA Phase 8 Karachi</a>
        <a href="/about">Learn about Aura Contour aesthetic clinic in Karachi</a>
        <a href="/contact">Book your beauty salon appointment in Karachi</a>
      </section>
    </main>
  )
}
