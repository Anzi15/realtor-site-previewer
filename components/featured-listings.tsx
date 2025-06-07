"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const listings = [
  {
    id: 1,
    image: "https://cdn.realtor.ca/listings/TS638821412403600000/reb89/medres/6/R2998596_1.jpg",
    price: "$499,900",
    address: "206 3660 Vanness Avenue",
    city: "Vancouver, BC",
    beds: 1,
    baths: 1,
    sqft: "650",
    type: "Condo",
  },
  {
    id: 2,
    image: "https://cdn.realtor.ca/listings/TS638844802707670000/reb89/medres/4/R3009924_1.jpg",
    price: "$998,000",
    address: "101 638 Beach Crescent",
    city: "Vancouver, BC",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    type: "Condo",
  },
  {
    id: 3,
    image: "https://cdn.realtor.ca/listings/TS638760884082530000/reb89/medres/1/R2970371_1.jpg",
    price: "$1,750,000",
    address: "158 Furry Creek Drive",
    city: "West Vancouver, BC",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    type: "House",
  },
]

export default function FeaturedListings() {
  return (
    <section className="py-20 bg-white">
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
            Featured Properties
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
            Discover handpicked properties that offer the perfect blend of luxury, location, and value in today's
            competitive market.
          </motion.p>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
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
                  src={listing.image || "/placeholder.svg"}
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

                {/* Property Type */}
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {listing.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Address */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {listing.address}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{listing.city}</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{listing.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{listing.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{listing.sqft} sqft</span>
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
                    onClick={() => window.open("https://wa.me/93248226367", "_blank")}
                  >
                    Schedule Viewing
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
          >
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
