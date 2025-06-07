"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"
import type { Listing } from "@/lib/types"

export default function ListingCard({ listing, index }: { listing: Listing; index: number }) {
  return (
    <motion.div
      className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <Image
          src={listing.listingImage || "/placeholder.svg"}
          alt={listing.address}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="font-bold">{listing.price}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="font-bold text-emerald-600">{listing.price}</p>
        <div className="mt-2 flex items-start gap-1">
          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
          <p className="text-sm text-slate-700">{listing.address}</p>
        </div>
      </div>
    </motion.div>
  )
}
