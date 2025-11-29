import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ id, name, category, price, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-smooth animate-fade-in-up">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-accent">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2 text-xs">
          {category}
        </Badge>
        <Link to={`/product/${id}`}>
          <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">₹{price}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/product/${id}`} className="w-full">
          <Button className="w-full gradient-primary hover:opacity-90 transition-smooth">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
