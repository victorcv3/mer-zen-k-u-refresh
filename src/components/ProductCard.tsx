import { cn } from "@/lib/utils";
import { Euro } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
  stock?: string;
  className?: string;
}

export function ProductCard({ title, description, price, image, stock, className }: ProductCardProps) {
  return (
    <div 
      className={cn(
        "group bg-card rounded-xl overflow-hidden shadow-soft hover-lift border border-border/50",
        className
      )}
    >
      {image && (
        <div className="aspect-square overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <div className="flex-shrink-0 flex items-center gap-1 text-primary font-semibold">
            <span>{price}</span>
            <Euro className="h-4 w-4" />
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
          {description}
        </p>
        
        {stock && (
          <p className="text-xs text-accent font-medium">
            {stock}
          </p>
        )}
      </div>
    </div>
  );
}