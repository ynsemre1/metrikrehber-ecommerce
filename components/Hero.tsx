import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { HERO_CONTENT } from "@/constants"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {HERO_CONTENT.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{HERO_CONTENT.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="text-lg px-8 py-3 w-full sm:w-auto">
                  {HERO_CONTENT.ctaText}
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                {HERO_CONTENT.ctaSecondary}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=Educational+Platform+Dashboard"
                alt="Educational Platform Dashboard"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
