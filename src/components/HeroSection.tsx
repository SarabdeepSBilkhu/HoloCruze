import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

const HeroSection = ({ title, subtitle, description, imageSrc, imageAlt }: HeroSectionProps) => {
  return (
    <section className="relative py-24 lg:py-40 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-tight animate-slide-in-up">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-display font-medium mt-6 animate-slide-in-up animation-delay-200">
                {subtitle}
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light animate-fade-in animation-delay-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;