"use client"

import { motion } from "framer-motion"
import type { Listing } from "@/lib/types"
import ListingCard from "./listing-card"

export default function ListingsGrid({ listings }: { listings: Listing[] }) {
  return (
    <div className="space-y-6">
      <motion.h2
        className="text-2xl font-bold text-slate-900"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Current Listings
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {listings.map((listing, index) => (
          <ListingCard key={`${listing.address}-${index}`} listing={listing} index={index} />
        ))}
      </div>
    </div>
  )
}
