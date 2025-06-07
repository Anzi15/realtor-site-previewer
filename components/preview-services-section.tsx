"use client"

import { motion } from "framer-motion"
import { Home, TrendingUp, Users, Search, FileText, Handshake } from "lucide-react"
import type { Realtor } from "@/lib/types"

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description: "Expert guidance for buying and selling residential properties with personalized service.",
    features: ["Market Analysis", "Home Staging", "Professional Photography"],
  },
  {
    icon: TrendingUp,
    title: "Investment Properties",
    description: "Strategic advice for real estate investments to maximize your portfolio returns.",
    features: ["ROI Analysis", "Market Trends", "Property Management"],
  },
  {
    icon: Users,
    title: "First-Time Buyers",
    description: "Comprehensive support for first-time homebuyers through every step of the process.",
    features: ["Mortgage Guidance", "Neighborhood Tours", "Closing Support"],
  },
  {
    icon: Search,
    title: "Property Search",
    description: "Advanced search tools and insider knowledge to find your perfect property.",
    features: ["Custom Searches", "Off-Market Listings", "Virtual Tours"],
  },
  {
    icon: FileText,
    title: "Market Reports",
    description: "Detailed market analysis and reports to keep you informed about local trends.",
    features: ["Monthly Reports", "Price Trends", "Market Forecasts"],
  },
  {
    icon: Handshake,
    title: "Negotiation Services",
    description: "Expert negotiation to ensure you get the best deal possible on your transaction.",
    features: ["Contract Review", "Price Negotiation", "Terms Optimization"],
  },
]

export default function PreviewServicesSection({ realtor }: { realtor: Realtor }) {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {realtor.firstName}'s Services
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Comprehensive Real Estate{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions in {realtor.address}
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            From first-time buyers to seasoned investors, {realtor.firstName} provides tailored services to meet your
            unique real estate needs and goals in the {realtor.address} market.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <motion.div
                  className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 text-sm text-gray-500"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://wa.me/93248226367"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started with {realtor.firstName} Today</span>
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
