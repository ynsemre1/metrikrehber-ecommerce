// components/ProductDetail.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Clock, Award } from "lucide-react"
import Image from "next/image"

interface ProductDetailProps {
  product: {
    id: number
    title: string
    slug: string
    categoryTitle: string
    description: string
    price: number
    image: string
    images: string[]
  }
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* Başlık */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">{product.title}</h1>
        <p className="text-muted-foreground mt-2">{product.categoryTitle}</p>
      </div>

      {/* Görsel + Fiyat */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Resim */}
        <div className="space-y-4">
          {product.images.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden border">
              <Image src={src} alt={product.title} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Bilgi ve Satın Alma */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="text-2xl font-bold text-accent">
                {Intl.NumberFormat("tr-TR").format(product.price)} TL
              </div>
              <div className="flex gap-3">
                <Button className="w-full">Satın Al</Button>
                <Button variant="outline" className="w-full">Sepete Ekle</Button>
              </div>
              <div className="text-muted-foreground text-sm">
                Tüm cihazlarda erişim. 30 gün içinde iade garantisi.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">4.8 / 5 Puan</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm">+2800 Öğrenci</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-sm">Sertifika Dahil</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="text-sm">12 Saat İçerik</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Açıklama */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Açıklama</h2>
        <p className="leading-relaxed whitespace-pre-line text-muted-foreground">
          {product.description}
        </p>
      </div>
    </div>
  )
}