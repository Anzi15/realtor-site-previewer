"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone } from "lucide-react"
import type { Realtor } from "@/lib/types"

export default function RealtorHeader({ realtor }: { realtor: Realtor }) {
  return (
    <div className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-6 md:flex-row md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-48 md:w-48"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src={realtor.imgSrc || "/placeholder.svg"}
              alt={realtor.fullName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 192px"
              priority
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{realtor.fullName}</h1>
            <p className="mt-1 text-lg text-slate-600">{realtor.address}</p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
              <motion.a
                href={`tel:${realtor.phone}`}
                className="flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 sm:justify-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">{realtor.phone}</span>
              </motion.a>

              <div className="text-slate-600">
                <p className="font-medium">{realtor.officeName}</p>
                <p className="text-sm">{realtor.officeAddress.split("\n")[0]}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
