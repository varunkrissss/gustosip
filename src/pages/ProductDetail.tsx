import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ShoppingCart, Heart, Package, Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  ingredients: string;
  nutrition: {
    calories: number;
    protein: string;
    fiber: string;
    carbs: string;
    fat: string;
  };
  benefits: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p: Product) => p.id === id);
        setProduct(foundProduct || null);
      })
      .catch((error) => console.error("Error loading product:", error));
  }, [id]);

  const handleBuyNow = () => {
    toast({
      title: "Payment Integration Required",
      description: "Payment gateway will be integrated soon. Contact us for orders!",
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Loading product...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Link to="/products">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-smooth" />
              Back to Products
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  {product.name}
                </h1>
                <div className="flex items-baseline space-x-3 mb-6">
                  <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground">Per Pack</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 gradient-primary hover:opacity-90 transition-smooth"
                  onClick={handleBuyNow}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">100% Organic</h3>
                      <p className="text-sm text-muted-foreground">
                        Made from certified organic ingredients
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start space-x-3">
                    <Package className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Quality Assured</h3>
                      <p className="text-sm text-muted-foreground">
                        Rigorously tested for purity and quality
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Ingredients */}
            <Card className="border-border animate-fade-in-up">
              <CardContent className="p-6">
                <h2 className="text-2xl font-display font-bold mb-4">Ingredients</h2>
                <p className="text-muted-foreground leading-relaxed">{product.ingredients}</p>
              </CardContent>
            </Card>

            {/* Nutrition Facts */}
            <Card className="border-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-display font-bold mb-4">Nutrition Facts</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Calories</span>
                    <span className="font-semibold">{product.nutrition.calories}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Protein</span>
                    <span className="font-semibold">{product.nutrition.protein}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fiber</span>
                    <span className="font-semibold">{product.nutrition.fiber}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Carbs</span>
                    <span className="font-semibold">{product.nutrition.carbs}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fat</span>
                    <span className="font-semibold">{product.nutrition.fat}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Health Benefits */}
          <Card className="border-border mt-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-display font-bold mb-4">Health Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Leaf className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
