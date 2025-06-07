import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import FeaturedListings from "@/components/featured-listings"
import TestimonialsSection from "@/components/testimonials-section"
import StatsSection from "@/components/stats-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedListings />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
