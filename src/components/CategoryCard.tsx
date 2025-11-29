import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  icon: string;
  slug: string;
}

const CategoryCard = ({ name, description, image, icon, slug }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${encodeURIComponent(slug)}`}>
      <Card className="group overflow-hidden border-border hover:shadow-elegant transition-smooth cursor-pointer animate-scale-in">
        <div className="aspect-video overflow-hidden bg-accent relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-4xl">{icon}</span>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display font-bold text-xl group-hover:text-primary transition-smooth">
              {name}
            </h3>
            <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-smooth" />
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
