"use client"

import { useState } from "react"
import { PRODUCT_CATEGORIES } from "@/constants"
import { Sparkles } from "lucide-react"

export default function ProductFilters() {
  const [activeCategory, setActiveCategory] = useState("yks-2026")

  return (
    <div className="bg-gradient-to-r from-white via-purple-50/50 to-green-50/50 border-b border-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-4xl font-bold font-poppins text-gradient">Paketlerimiz</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold font-poppins transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? "gradient-primary text-white shadow-lg shadow-purple-500/25"
                  : "bg-white text-gray-700 hover:bg-purple-50 border border-purple-100 shadow-sm"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
