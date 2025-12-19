import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  content: string;
  icon?: LucideIcon;
  className?: string;
}

export function InfoCard({ title, content, icon: Icon, className }: InfoCardProps) {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl p-6 shadow-soft border border-border/50 hover-lift",
        className
      )}
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-medium text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}