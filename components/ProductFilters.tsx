"use client"

import { useState } from "react"
import { PRODUCT_CATEGORIES } from "@/constants"

export default function ProductFilters() {
  const [activeCategory, setActiveCategory] = useState("yks-2026")

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Paketlerimiz</h1>

        <div className="flex flex-wrap gap-2">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
