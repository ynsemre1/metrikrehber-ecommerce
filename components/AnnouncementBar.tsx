import { X, Sparkles } from "lucide-react"

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 px-4 text-center text-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow"></div>
      <div className="flex items-center justify-center gap-2 relative z-10">
        <Sparkles className="w-4 h-4 animate-pulse" />
        <span className="font-bold">🎉 Özel teklif! Tüm kurs paketlerinde %30'a varan indirim!</span>
        <Sparkles className="w-4 h-4 animate-pulse" />
      </div>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
