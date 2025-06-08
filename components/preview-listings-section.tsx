"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Realtor } from "@/lib/types"

export default function PreviewListingsSection({ realtor }: { realtor: Realtor }) {
  return (
    <section id="properties" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {realtor.firstName}'s Featured Properties
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Exceptional Properties{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Available Now
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover {realtor.firstName}'s handpicked properties that offer the perfect blend of luxury, location, and
            value in {realtor.address}.
          </motion.p>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realtor.listings.map((listing, index) => (
            <motion.div
              key={`${listing.address}-${index}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={listing.listingImage || "/placeholder.svg"}
                  alt={listing.address}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-gray-900">{listing.price}</span>
                </div>

                {/* Heart Icon */}
                <motion.button
                  className="absolute top-4 right-4 p-2 bg-white/95 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                </motion.button>

                {/* Realtor Badge */}
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Listed by {realtor.firstName}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Address */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {listing.price}
                  </h3>
                  <div className="flex items-start space-x-1">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-gray-400 mt-0.5" />
                    <span className="text-sm text-gray-700">{listing.address}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                    onClick={() => window.open("/contact", "_blank")}
                  >
                    Contact {realtor.firstName}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={() => window.open("/contact", "_blank")}
          >
            View All {realtor.firstName}'s Properties
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
