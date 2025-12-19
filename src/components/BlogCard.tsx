import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  slug: string;
  className?: string;
}

export function BlogCard({ title, excerpt, date, category, image, slug, className }: BlogCardProps) {
  return (
    <Link 
      to={`/blog/${slug}`}
      className={cn(
        "group block bg-card rounded-xl overflow-hidden shadow-soft hover-lift border border-border/50",
        className
      )}
    >
      {image && (
        <div className="aspect-video overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {category}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>
        
        <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
          Leer más
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}