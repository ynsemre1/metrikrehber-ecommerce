import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">See How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our platform in action and discover how easy it is to start your learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl overflow-hidden group cursor-pointer">
            {/* Video Placeholder */}
            <img
              src="/placeholder.svg?height=600&width=800&text=Platform+Demo+Video"
              alt="Platform Demo Video"
              className="w-full h-full object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
              <Button
                size="lg"
                className="rounded-full w-20 h-20 p-0 bg-white/90 hover:bg-white text-primary hover:text-primary shadow-2xl"
              >
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </Button>
            </div>

            {/* Video Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">2:30</div>
          </div>

          {/* Video Description */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Get a complete overview of our platform features and learning experience in just 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
