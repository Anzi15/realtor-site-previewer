"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Want a full website ready?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This page is currently under construction. Contact us to get your complete real estate website built with
            all the features you need.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-xl"
            onClick={() => window.open("https://wa.me/93248226367", "_blank")}
          >
            Contact Us Now
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  )
}
