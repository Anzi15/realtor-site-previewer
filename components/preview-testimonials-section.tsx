"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import type { Realtor } from "@/lib/types"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "First-Time Homebuyer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Working with this realtor was an absolute dream! As a first-time buyer, I was nervous about the process, but they guided me through every step with patience and expertise.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Exceptional market knowledge and negotiation skills. They helped me identify undervalued properties and negotiate deals that exceeded my expectations.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Home Seller",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Sold my home in just 10 days above asking price! Their marketing strategy and professional photography made all the difference.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Luxury Home Buyer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Outstanding service from start to finish. They understood exactly what we were looking for and found us the perfect property.",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Relocation Client",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Moving from another state was stressful, but they made the transition seamless with virtual tours and remote handling of paperwork.",
  },
  {
    id: 6,
    name: "Robert Wilson",
    role: "Repeat Client",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "This is my third transaction with them. Their professionalism and market insight is why I keep coming back.",
  },
]

export default function PreviewTestimonialsSection({ realtor }: { realtor: Realtor }) {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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
            className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            What {realtor.firstName}'s Clients{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Say About Their Experience
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Don't just take our word for it. Here's what satisfied clients have to say about their real estate
            experience working with {realtor.fullName} in {realtor.address}.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-4 left-8 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Quote className="h-6 w-6 text-white" />
              </motion.div>

              <div className="space-y-6 pt-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 + i * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  className="text-gray-700 leading-relaxed italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Client Info */}
                <motion.div
                  className="flex items-center space-x-4 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Join {realtor.firstName}'s Happy Clients</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
