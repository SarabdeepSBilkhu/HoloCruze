import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Gamepad2, Home, Cpu } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/car", label: "Car", icon: Car },
    { path: "/controller", label: "Controller", icon: Gamepad2 },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 animate-slide-down">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 text-xl font-display font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
            <Cpu className="h-7 w-7 text-primary hover:rotate-12 transition-transform duration-300" />
            <span>Gesture Robotics</span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className="flex items-center space-x-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link to={item.path}>
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;