import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSlider } from "@/components/layout/hero-slider"
import { StatsSection } from "@/components/sections/stats-section"
import { FacilitiesSection } from "@/components/sections/facilities-section"
import { NewsSection } from "@/components/sections/news-section"
import { ClubsPreview } from "@/components/sections/clubs-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <StatsSection />
        <FacilitiesSection />
        <NewsSection />
        <ClubsPreview />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
