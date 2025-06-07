import { collection, doc, getDoc } from "firebase/firestore"
import { notFound } from "next/navigation"
import { db } from "@/lib/firebase"
import type { Realtor } from "@/lib/types"
import PreviewNavbar from "@/components/preview-navbar"
import PreviewHeroSection from "@/components/preview-hero-section"
import PreviewAboutSection from "@/components/preview-about-section"
import PreviewServicesSection from "@/components/preview-services-section"
import PreviewListingsSection from "@/components/preview-listings-section"
import PreviewTestimonialsSection from "@/components/preview-testimonials-section"
import PreviewStatsSection from "@/components/preview-stats-section"
import PreviewCTASection from "@/components/preview-cta-section"
import PreviewFooter from "@/components/preview-footer"
import PageTransition from "@/components/page-transition"

async function getRealtorData(city: string, id: string): Promise<Realtor | null> {
  try {
    const docRef = doc(db, city, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data() as Realtor
    } else {
      return null
    }
  } catch (error) {
    console.error("Error fetching realtor data:", error)
    return null
  }
}

export default async function RealtorPreviewPage({
  params,
}: {
  params: { city: string; id: string }
}) {
  // Fetch realtor data dynamically from Firebase using route parameters
  const realtorData = await getRealtorData(params.city, params.id)
  const cityData = await getRealtorData(params.city, "city")

  console.log(cityData)

  if (!realtorData) {
    notFound()
  }

  return (
    <PageTransition>
      <main className="min-h-screen">
        <PreviewNavbar realtor={realtorData} />
        <PreviewHeroSection realtor={realtorData} />
        <PreviewAboutSection realtor={realtorData} city={cityData}/>
        <PreviewServicesSection realtor={realtorData} />
        <PreviewListingsSection realtor={realtorData} />
        <PreviewTestimonialsSection realtor={realtorData} />
        <PreviewStatsSection realtor={realtorData} />
        <PreviewCTASection realtor={realtorData} />
        <PreviewFooter realtor={realtorData} />
      </main>
    </PageTransition>
  )
}
