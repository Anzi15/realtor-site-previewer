"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import type { Realtor } from "@/lib/types"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export default function PreviewFooter({ realtor }: { realtor: Realtor }) {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Properties", href: "#properties" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  const resourceLinks = [
    { name: "Buyer's Guide", href: "#" },
    { name: "Seller's Guide", href: "#" },
    { name: "Market Reports", href: "#" },
    { name: "Mortgage Calculator", href: "#" },
    { name: "FAQ", href: "#" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <button onClick={() => scrollToSection("#hero")} className="flex items-center space-x-2 cursor-pointer">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">{realtor.firstName}</span>
            </button>

            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in {realtor.address} real estate, helping you find your dream home with professional
              service and local expertise.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    if (social.href === "#") {
                      e.preventDefault()
                    }
                  }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center cursor-pointer"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => {
                      if (link.href === "#") {
                        e.preventDefault()
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center cursor-pointer"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Contact {realtor.firstName}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${realtor.phone}`}
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{realtor.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${realtor.firstName.toLowerCase()}@realtypro.com`}
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{realtor.firstName.toLowerCase()}@realtypro.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{realtor.officeAddress}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {realtor.fullName}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">Privacy Policy</button>
              <button className="hover:text-white transition-colors duration-300">Terms of Service</button>
              <button className="hover:text-white transition-colors duration-300">Sitemap</button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/93248226367"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </footer>
  )
}
