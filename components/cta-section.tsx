"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick response guaranteed",
    action: "Message Now",
    href: "https://wa.me/93248226367",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Phone,
    title: "Call Direct",
    description: "Speak with me personally",
    action: "Call Now",
    href: "tel:+93248226367",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Detailed inquiries welcome",
    action: "Email Me",
    href: "mailto:contact@realtypro.com",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation",
    action: "Book Now",
    href: "https://wa.me/93248226367",
    color: "from-pink-500 to-red-500",
  },
]

export default function CTASection() {
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
            className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Find Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dream Home?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I'm here to help you every step of the way. Choose your preferred method of contact and let's start your
            real estate journey today.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-br ${method.color} rounded-xl shadow-lg mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <method.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>

                {/* Action Button */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button
                    className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-semibold`}
                  >
                    {method.action}
                  </Button>
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="https://wa.me/93248226367"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-white px-8 py-4 rounded-lg"
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Preferred Contact Method</p>
                <p className="text-lg font-bold text-gray-900">WhatsApp Me Now</p>
              </div>
              <motion.div
                className="ml-4"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-2xl">→</div>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
