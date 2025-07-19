import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import LiveDemo from "@/components/LiveDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Zap, 
  Wifi, 
  Gauge, 
  Shield, 
  Wrench,
  ArrowRight,
  Play,
  Github,
  Smartphone,
  Car
} from "lucide-react";
import heroMainImage from "@/assets/hero-main.jpg";

const Index = () => {
  const features = [
    {
      title: "Wireless Communication",
      description: "Advanced RF technology for seamless control",
      icon: Wifi,
      details: [
        "433MHz RF modules for reliable transmission",
        "Long-range control up to 100 meters",
        "Low-latency gesture response under 100ms",
        "Interference-resistant digital signal"
      ]
    },
    {
      title: "Motion Sensing", 
      description: "Precision gesture recognition with MPU6050",
      icon: Zap,
      details: [
        "6-axis motion tracking with gyroscope + accelerometer",
        "Real-time gesture interpretation algorithms",
        "Customizable gesture command mapping",
        "Smooth motion detection and filtering"
      ]
    },
    {
      title: "Motor Control",
      description: "Intelligent movement with L298N driver",
      icon: Gauge,
      details: [
        "Dual H-bridge motor driver configuration",
        "Omnidirectional movement control",
        "Variable speed control with PWM",
        "Built-in overcurrent protection"
      ]
    },
    {
      title: "Processing Power",
      description: "Dual Arduino architecture for optimal performance",
      icon: Cpu,
      details: [
        "Arduino UNO for vehicle control logic",
        "Arduino NANO for sensor processing",
        "Efficient real-time code execution",
        "Modular and expandable design"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        title="Hand Gesture Control Robotics"
        subtitle="Precision Hardware Innovation"
        description="Experience the future of robotics with our Arduino-based hand gesture control system. Seamlessly control robotic vehicles through natural hand movements with exceptional precision and real-time responsiveness."
        imageSrc={heroMainImage}
        imageAlt="Hand Gesture Control Robotics System"
      />

      <LiveDemo />

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 font-display">
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
              Precision Engineering
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Built with cutting-edge hardware components for optimal performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                details={feature.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
              System Components
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Explore each precision-engineered component of our gesture control system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="group hover:shadow-product transition-all duration-300 hover:-translate-y-2 bg-card border border-border/50">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-display font-semibold mb-2">Robotic Car</CardTitle>
                    <CardDescription className="text-base">Arduino UNO • L298N Motor Driver • RF Receiver</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Precision-engineered vehicle that responds to gestures with exceptional accuracy and real-time feedback.
                </p>
                <Button asChild variant="outline" className="w-full group border-primary/20 hover:bg-primary hover:text-primary-foreground">
                  <Link to="/car" className="flex items-center justify-center space-x-2">
                    <span className="font-medium">Explore Car Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-product transition-all duration-300 hover:-translate-y-2 bg-card border border-border/50">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-display font-semibold mb-2">Hand Controller</CardTitle>
                    <CardDescription className="text-base">Arduino NANO • MPU6050 • RF Transmitter</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Intuitive controller that captures hand movements with exceptional precision and wireless transmission.
                </p>
                <Button asChild variant="outline" className="w-full group border-primary/20 hover:bg-primary hover:text-primary-foreground">
                  <Link to="/controller" className="flex items-center justify-center space-x-2">
                    <span className="font-medium">Explore Controller Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;