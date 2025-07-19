import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const HeroSection = ({ title, subtitle, description, imageSrc, imageAlt }: HeroSectionProps) => {
  return (
    <section className="relative py-24 lg:py-40 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-display font-medium mt-6">
                {subtitle}
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
              {description}
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl opacity-60 scale-110"></div>
            <div className="relative z-10 bg-card rounded-2xl shadow-product border border-border/50 p-2">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;