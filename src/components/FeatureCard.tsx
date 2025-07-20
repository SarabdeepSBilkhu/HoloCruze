import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

const FeatureCard = ({ title, description, icon: Icon, details }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-product transition-all duration-500 hover:-translate-y-2 bg-card border border-border/50 animate-fade-in-up hover:scale-105">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
            <CardDescription className="text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors duration-300">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start space-x-3 text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;