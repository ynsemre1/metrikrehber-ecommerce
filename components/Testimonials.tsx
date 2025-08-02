import { Star } from "lucide-react"
import { TESTIMONIALS } from "@/constants"

interface TestimonialCardProps {
  testimonial: (typeof TESTIMONIALS)[0]
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
      <div className="flex items-center mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

      <div className="flex items-center">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-gray-600 text-sm">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful learners who have transformed their academic journey with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by students from top universities</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Boğaziçi", "İTÜ", "ODTÜ", "Hacettepe", "Bilkent"].map((university) => (
              <div key={university} className="text-2xl font-bold text-gray-400">
                {university}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
