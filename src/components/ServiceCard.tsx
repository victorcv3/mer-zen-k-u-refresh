import { cn } from "@/lib/utils";
import { Clock, Euro } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  duration?: string;
  price: string;
  className?: string;
}

export function ServiceCard({ title, description, duration, price, className }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group bg-card rounded-xl p-6 shadow-soft hover-lift border border-border/50",
        className
      )}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <div className="flex-shrink-0 text-right">
            <div className="flex items-center gap-1 text-primary font-semibold text-lg">
              <span>{price}</span>
              <Euro className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        {duration && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        )}
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}