import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, Users, Award, CheckCircle } from "lucide-react"

interface ProductDetailProps {
  product: {
    title: string
    slug: string
    image: string
    successRate: number
    originalPrice: number
    discountedPrice: number
    installmentInfo: string
    advancePayment: string
    curriculum: {
      title: string
      items: string[]
    }
    features: {
      title: string
      items: string[]
    }
    additionalFeatures: {
      title: string
      items: {
        name: string
        details: string[]
      }[]
    }
  }
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100,
  )

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-serif font-bold">
            {product.successRate}% Success Rate
          </Badge>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">{product.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.8/5)</span>
            </div>
          </div>

          {/* Pricing Section */}
          <Card className="border-accent/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-serif font-bold text-accent">${product.discountedPrice}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  <Badge variant="destructive" className="font-serif">
                    {discountPercentage}% OFF
                  </Badge>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {product.installmentInfo}
                  </p>
                  <p className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {product.advancePayment}
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 font-serif font-bold">Buy Now</Button>
                  <Button variant="outline" className="flex-1 font-serif bg-transparent">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Course Details Tabs */}
      <Tabs defaultValue="curriculum" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="curriculum" className="font-serif">
            Curriculum
          </TabsTrigger>
          <TabsTrigger value="features" className="font-serif">
            Features
          </TabsTrigger>
          <TabsTrigger value="additional" className="font-serif">
            Additional Features
          </TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{product.curriculum.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {product.curriculum.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{product.features.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {product.features.items.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="additional" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{product.additionalFeatures.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {product.additionalFeatures.items.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-serif font-semibold text-lg text-foreground">{item.name}</h4>
                    <div className="space-y-2 pl-4">
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Course Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-serif font-bold text-foreground">2,847</div>
            <div className="text-sm text-muted-foreground">Students</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-serif font-bold text-foreground">12h</div>
            <div className="text-sm text-muted-foreground">Duration</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-serif font-bold text-foreground">Certificate</div>
            <div className="text-sm text-muted-foreground">Included</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Star className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-serif font-bold text-foreground">4.8</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
