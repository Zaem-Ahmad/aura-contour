import HeroSection from "@/components/hero-section"
import IntroSection from "@/components/intro-section"
import ServicesSpotlight from "@/components/services-spotlight"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import GalleryPreviewV2 from "@/components/gallery-preview-v2"
import RamadanSection from "@/components/ramadan-section"
import ProcessSection from "@/components/process-section"
import InstagramFeed from "@/components/instagram-feed"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServicesSpotlight />
      <WhyChooseUsSection />
      <GalleryPreviewV2 />
      <RamadanSection />
      <ProcessSection />
      <InstagramFeed />
      <FAQSection />
      <CTASection />
    </main>
  )
}
