import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Shield, Sparkles } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}

const Index = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error loading categories:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full border border-border">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">100% Organic & Natural</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Pure Nature,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perfect Health
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the goodness of organic soup drops, juice drops, and natural products. 
              Made with love, served with care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth group">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-accent transition-smooth animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent border-2 border-primary">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl">100% Organic</h3>
              <p className="text-muted-foreground">
                All products made from certified organic ingredients without any harmful chemicals.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-accent transition-smooth animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent border-2 border-primary">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl">Health First</h3>
              <p className="text-muted-foreground">
                Packed with nutrients and health benefits to support your wellness journey.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-accent transition-smooth animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent border-2 border-primary">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl">Quality Assured</h3>
              <p className="text-muted-foreground">
                Rigorous quality checks ensure you receive only the best products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Products</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Explore Our Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover a wide range of organic and natural products crafted for your health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="text-6xl md:text-7xl opacity-50">"</div>
            <blockquote className="text-2xl md:text-3xl font-display font-medium italic">
              Let food be thy medicine and medicine be thy food
            </blockquote>
            <p className="text-lg opacity-90">- Hippocrates</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
