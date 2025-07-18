import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    label: string;
    to: string;
  };
  secondaryAction?: {
    label: string;
    to: string;
  };
  backgroundImage?: string;
  compact?: boolean;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryAction, 
  secondaryAction,
  backgroundImage,
  compact = false
}: HeroSectionProps) => {
  return (
    <section 
      className={`relative overflow-hidden ${compact ? 'py-16' : 'py-24'} bg-gradient-hero`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(220, 240, 250, 0.9), rgba(220, 240, 250, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center ${compact ? 'max-w-3xl' : 'max-w-4xl'} mx-auto`}>
          <h1 className={`font-bold text-foreground mb-4 ${compact ? 'text-3xl md:text-4xl' : 'text-4xl md:text-6xl'}`}>
            {title}
          </h1>
          <p className={`text-primary font-semibold mb-6 ${compact ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>
            {subtitle}
          </p>
          <p className={`text-muted-foreground mb-8 leading-relaxed ${compact ? 'text-base' : 'text-lg md:text-xl'}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Link to={primaryAction.to} className="flex items-center space-x-2">
                <span>{primaryAction.label}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            {secondaryAction && (
              <Button asChild variant="outline" size="lg">
                <Link to={secondaryAction.to} className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>{secondaryAction.label}</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;