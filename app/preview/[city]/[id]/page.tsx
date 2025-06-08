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
import type { Metadata } from "next"

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

// ✅ Set dynamic SEO + social metadata
export async function generateMetadata({
  params,
}: {
  params: { city: string; id: string }
}): Promise<Metadata> {
  const realtorData = await getRealtorData(params.city, params.id)

  if (!realtorData) {
    return {
      title: "Realtor Not Found",
      description: "Sorry, we couldn’t find this realtor's page.",
    }
  }

  const title = `${realtorData.fullName} | Realtor Website`
  const description = `Explore real estate services, listings, and more from ${realtorData.firstName}. Your dream home starts here.`
  const image = realtorData.imgSrc || "/default-banner.jpg" // fallback image if missing

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${realtorData.fullName}'s real estate banner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

export default async function RealtorPreviewPage({
  params,
}: {
  params: { city: string; id: string }
}) {
  const realtorData = await getRealtorData(params.city, params.id)
  const cityData = await getRealtorData(params.city, "city")

  if (!realtorData) {
    notFound()
  }

  return (
    <PageTransition>
      <main className="min-h-screen">
        <PreviewNavbar realtor={realtorData} />
        <PreviewHeroSection realtor={realtorData} />
        <PreviewAboutSection realtor={realtorData} city={cityData} />
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
