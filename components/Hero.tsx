import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap, Target } from "lucide-react";
import { HERO_CONTENT } from "@/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full animate-bounce-slow opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200 rounded-full animate-pulse-slow opacity-60"></div>
        <div className="absolute top-60 left-1/3 w-12 h-12 bg-purple-300 rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-60 right-1/3 w-18 h-18 bg-orange-300 rounded-full animate-bounce-slow opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-green-100 px-4 py-2 rounded-full border border-purple-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">
                  Yeni Nesil Tabletli Eğitim Platformu
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-poppins leading-tight">
                <span className="text-gradient">
                  {HERO_CONTENT.headline.split(" ").slice(0, 3).join(" ")}
                </span>
                <br />
                <span className="text-gray-800">
                  {HERO_CONTENT.headline.split(" ").slice(3).join(" ")}
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                {HERO_CONTENT.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 gradient-primary hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/25 font-bold w-full sm:w-auto"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  {HERO_CONTENT.ctaText}
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 font-semibold w-full sm:w-auto bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                {HERO_CONTENT.ctaSecondary}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "50K+", label: "Öğrenci", icon: Target },
                { number: "200+", label: "Kurs", icon: Sparkles },
                { number: "95%", label: "Başarı Oranı", icon: Zap },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-purple-600 group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-gradient font-poppins">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-square bg-gradient-to-br from-purple-100 via-white to-green-100 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/20 hover-lift">
                <img
                  src="/hero_ogrenci.png"
                  alt="Öğrenciler eğitim alıyor"
                  className="w-4/5 h-4/5 object-cover rounded-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center animate-bounce-slow shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>

              <div className="absolute top-1/4 -left-8 w-12 h-12 bg-purple-400 rounded-full animate-pulse-slow shadow-lg"></div>
              <div className="absolute bottom-1/4 -right-8 w-14 h-14 bg-orange-400 rounded-full animate-float shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
