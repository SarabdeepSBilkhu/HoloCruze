import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car, 
  Cpu, 
  Zap, 
  Wifi,
  Cog,
  Battery,
  Shield,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const CarPage = () => {
  const components = [
    {
      title: "Arduino UNO",
      description: "Main microcontroller for car control logic",
      icon: Cpu,
      details: [
        "ATmega328P microcontroller",
        "14 digital I/O pins",
        "6 analog input pins", 
        "16MHz clock speed",
        "USB connectivity for programming"
      ]
    },
    {
      title: "L298N Motor Driver",
      description: "Dual H-bridge for motor control",
      icon: Cog,
      details: [
        "Controls two DC motors simultaneously",
        "Forward and reverse direction control",
        "PWM speed control capability",
        "Built-in voltage regulator",
        "Overcurrent protection"
      ]
    },
    {
      title: "RF Receiver Module",
      description: "433MHz wireless communication receiver",
      icon: Wifi,
      details: [
        "433MHz operating frequency",
        "Long-range reception up to 100m",
        "Low power consumption",
        "High sensitivity receiver",
        "Interference resistance"
      ]
    },
    {
      title: "DC Motors",
      description: "Drive wheels for car movement",
      icon: Car,
      details: [
        "High torque geared motors",
        "Variable speed control",
        "Efficient power consumption",
        "Durable construction",
        "Suitable for various terrains"
      ]
    }
  ];

  const carFeatures = [
    {
      category: "Movement Control",
      features: ["Forward/Backward motion", "Left/Right turning", "Variable speed control", "Smooth acceleration"]
    },
    {
      category: "Communication",
      features: ["433MHz RF reception", "Real-time command processing", "Error handling", "Signal validation"]
    },
    {
      category: "Power Management", 
      features: ["Battery level monitoring", "Efficient power usage", "Low voltage protection", "Sleep mode capability"]
    },
    {
      category: "Safety Features",
      features: ["Overcurrent protection", "Emergency stop function", "Signal loss detection", "Safe startup sequence"]
    }
  ];

  const specifications = [
    { label: "Microcontroller", value: "Arduino UNO (ATmega328P)" },
    { label: "Motor Driver", value: "L298N Dual H-Bridge" },
    { label: "RF Module", value: "433MHz Receiver" },
    { label: "Power Supply", value: "7.4V Li-Po Battery" },
    { label: "Motor Type", value: "DC Geared Motors" },
    { label: "Communication", value: "433MHz RF" },
    { label: "Range", value: "Up to 100 meters" },
    { label: "Response Time", value: "< 100ms" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection
        title="Robotic Car System"
        subtitle="Arduino UNO Powered Mobile Platform"
        description="The robotic car serves as the mobile platform controlled by hand gestures. Built around Arduino UNO and L298N motor driver, it receives wireless commands and translates them into precise movements."
        imageSrc={heroCar}
        imageAlt="Robotic Car System Hardware"
      />

      {/* Components Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Car Components</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the key hardware components that make up the robotic car system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <FeatureCard
                key={index}
                title={component.title}
                description={component.description}
                icon={component.icon}
                details={component.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground">
              Detailed specifications of the car system components
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Car className="h-5 w-5 text-primary" />
                  <span>Car System Specifications</span>
                </CardTitle>
                <CardDescription>
                  Complete technical details of the robotic car platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <span className="font-medium text-sm text-muted-foreground">{spec.label}</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        {spec.value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Car Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Advanced features built into the robotic car system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carFeatures.map((category, index) => (
              <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Diagram */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">System Architecture</h2>
            <p className="text-lg text-muted-foreground">
              How the car components work together for gesture control
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <Card className="text-center p-6 bg-background/80 backdrop-blur-sm">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Wifi className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Signal Reception</h3>
                <p className="text-sm text-muted-foreground">
                  RF receiver module captures 433MHz signals from the hand controller
                </p>
              </Card>

              <Card className="text-center p-6 bg-background/80 backdrop-blur-sm">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Signal Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Arduino UNO processes received commands and determines motor actions
                </p>
              </Card>

              <Card className="text-center p-6 bg-background/80 backdrop-blur-sm">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Motor Control</h3>
                <p className="text-sm text-muted-foreground">
                  L298N driver controls motors based on processed gesture commands
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-tech text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Controller</h2>
          <p className="text-xl mb-8 text-white/90">
            Learn about the hand gesture controller that sends commands to this car
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/controller" className="flex items-center space-x-2">
                <span>Controller System</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/" className="flex items-center space-x-2">
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarPage;