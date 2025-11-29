import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                About GUSTOSIP
              </h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner for organic and natural products
              </p>
            </div>

            {/* Company Info */}
            <Card className="border-border mb-12 animate-fade-in-up">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gustosip Hotnute Private Limited is a pioneering manufacturer of organic instant soup drops, juice drops, 
                  dried fruit powders, natural jellies, sweet paper rolls, and dried fruits. We are committed to bringing 
                  you the purest, most nutritious products that nature has to offer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a vision to make healthy eating convenient and accessible, GUSTOSIP combines traditional 
                  wisdom with modern innovation to create products that nourish your body and delight your taste buds.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-border animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">100% Organic</h3>
                  <p className="text-muted-foreground">
                    All our products are made from certified organic ingredients, ensuring you get pure, 
                    chemical-free nutrition in every bite.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Health First</h3>
                  <p className="text-muted-foreground">
                    We prioritize your health and wellness, crafting products that are not just tasty 
                    but packed with essential nutrients and health benefits.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Quality Assured</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous quality checks to ensure you receive only 
                    the finest organic products that meet our high standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Customer Focused</h3>
                  <p className="text-muted-foreground">
                    Your satisfaction is our priority. We're dedicated to providing excellent 
                    products and exceptional customer service.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-8">
              <Card className="border-border bg-accent animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide high-quality, organic, and natural food products that contribute to a healthier lifestyle 
                    while making wellness accessible and convenient for everyone. We strive to be a trusted name in 
                    organic nutrition, bringing you products that are as pure as nature intended.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-accent animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's leading organic food brand, setting new standards in quality, purity, and 
                    customer satisfaction. We envision a future where healthy, organic eating is the norm, not the 
                    exception, and where every household has access to nutritious, natural food products.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
