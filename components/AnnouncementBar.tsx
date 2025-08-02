import { X } from "lucide-react"

export default function AnnouncementBar() {
  return (
    <div className="bg-blue-100 text-blue-800 py-2 px-4 text-center text-sm relative">
      <span>🎉 Special offer! Get up to 30% discount on all course packages!</span>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-blue-600">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
