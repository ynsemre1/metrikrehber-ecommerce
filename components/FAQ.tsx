"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQ_ITEMS } from "@/constants"

interface FAQItemProps {
  item: (typeof FAQ_ITEMS)[0]
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platformumuz ve kurslarımız hakkında sık sorulan soruların cevaplarını bulun
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.id} item={item} isOpen={openItems.has(item.id)} onToggle={() => toggleItem(item.id)} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Hala sorularınız mı var?</p>
          <a href="#contact" className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4">
            Destek ekibimizle iletişime geçin
          </a>
        </div>
      </div>
    </section>
  )
}
