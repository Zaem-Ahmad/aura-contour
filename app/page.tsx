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
    </main>
  )
}
