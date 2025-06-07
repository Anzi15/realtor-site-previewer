import { NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { doc, setDoc } from "firebase/firestore"

// Sample data to seed the database
const sampleRealtors = [
  {
    collection: "vancouver",
    id: "joyce-diao",
    data: {
      fullName: "Joyce Diao",
      firstName: "Joyce",
      lastName: "Diao",
      imgSrc: "https://cdn.realtor.ca/individual/TS637490206800000000/highres/1288367.jpg",
      phone: "+17782387588",
      officeName: "Rennie & Associates Realty Ltd.",
      officeAddress: "#110 - 1650 West 1st Avenue\nVancouver, British Columbia V6J1G1",
      address: "Vancouver, British Columbia",
      listings: [
        {
          listingImage: "https://cdn.realtor.ca/listings/TS638821412403600000/reb89/medres/6/R2998596_1.jpg",
          address: "206 3660 VANNESS AVENUE, Vancouver, British Columbia",
          price: "$499,900",
        },
        {
          listingImage: "https://cdn.realtor.ca/listings/TS638844802707670000/reb89/medres/4/R3009924_1.jpg",
          address: "101 638 BEACH CRESCENT, Vancouver, British Columbia",
          price: "$998,000",
        },
        {
          listingImage: "https://cdn.realtor.ca/listings/TS638775883922170000/reb89/medres/2/C8067312_1.jpg",
          address: "112 8188 MANITOBA STREET, Vancouver, British Columbia",
          price: "$88,668/Yearly",
        },
        {
          listingImage: "https://cdn.realtor.ca/listings/TS638760884082530000/reb89/medres/1/R2970371_1.jpg",
          address: "158 FURRY CREEK DRIVE, West Vancouver, British Columbia",
          price: "$1,750,000",
        },
      ],
    },
  },
  {
    collection: "vancouver",
    id: "john-smith",
    data: {
      fullName: "John Smith",
      firstName: "John",
      lastName: "Smith",
      imgSrc: "/placeholder.svg?height=400&width=400",
      phone: "+17781234567",
      officeName: "Vancouver Realty Group",
      officeAddress: "123 Main Street\nVancouver, British Columbia V6K1A1",
      address: "Vancouver, British Columbia",
      listings: [
        {
          listingImage: "/placeholder.svg?height=800&width=1200",
          address: "456 Granville Street, Vancouver, British Columbia",
          price: "$899,000",
        },
        {
          listingImage: "/placeholder.svg?height=800&width=1200",
          address: "789 Robson Street, Vancouver, British Columbia",
          price: "$1,250,000",
        },
      ],
    },
  },
  {
    collection: "toronto",
    id: "sarah-johnson",
    data: {
      fullName: "Sarah Johnson",
      firstName: "Sarah",
      lastName: "Johnson",
      imgSrc: "/placeholder.svg?height=400&width=400",
      phone: "+14161234567",
      officeName: "Toronto Elite Realty",
      officeAddress: "456 Bay Street\nToronto, Ontario M5H2Y4",
      address: "Toronto, Ontario",
      listings: [
        {
          listingImage: "/placeholder.svg?height=800&width=1200",
          address: "123 King Street West, Toronto, Ontario",
          price: "$1,200,000",
        },
        {
          listingImage: "/placeholder.svg?height=800&width=1200",
          address: "789 Queen Street East, Toronto, Ontario",
          price: "$850,000",
        },
        {
          listingImage: "/placeholder.svg?height=800&width=1200",
          address: "456 Yonge Street, Toronto, Ontario",
          price: "$2,100,000",
        },
      ],
    },
  },
  {
    collection: "calgary",
    id: "mike-wilson",
    data: {
      fullName: "Mike Wilson",
      firstName: "Mike",
      lastName: "Wilson",
      imgSrc: "/placeholder.svg?height=400&width=400",
      phone: "+14031234567",
      officeName: "Calgary Premier Properties",
      officeAddress: "789 17th Avenue SW\nCalgary, Alberta T2S0B6",
      address: "Calgary, Alberta",
      listings: [
        {
          listingImage: "/placeholder.svg?height=800&width=1200",
          address: "123 Bow River Crescent, Calgary, Alberta",
          price: "$750,000",
        },
        {
          listingImage: "/placeholder.svg?height=800&width=1200",
          address: "456 Kensington Road, Calgary, Alberta",
          price: "$650,000",
        },
      ],
    },
  },
]

export async function GET() {
  try {
    // Seed the database with sample data
    for (const realtor of sampleRealtors) {
      await setDoc(doc(db, realtor.collection, realtor.id), realtor.data)
    }

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully with multiple cities",
      data: {
        realtors: sampleRealtors.map((r) => ({
          collection: r.collection,
          id: r.id,
          name: r.data.fullName,
        })),
        sampleUrls: [
          "/preview/vancouver/joyce-diao",
          "/preview/vancouver/john-smith",
          "/preview/toronto/sarah-johnson",
          "/preview/calgary/mike-wilson",
        ],
      },
    })
  } catch (error) {
    console.error("Error seeding database:", error)
    return NextResponse.json({ success: false, error: "Failed to seed database" }, { status: 500 })
  }
}
