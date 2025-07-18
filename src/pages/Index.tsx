import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car, 
  Gamepad2, 
  Zap, 
  Wifi, 
  Cpu, 
  Gauge,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";

const Index = () => {
  const features = [
    {
      title: "Wireless Control",
      description: "RF communication between controller and car",
      icon: Wifi,
      details: [
        "433MHz RF modules for reliable communication",
        "Long-range control up to 100 meters",
        "Low latency gesture response",
        "Interference-resistant signal"
      ]
    },
    {
      title: "Gesture Recognition", 
      description: "MPU6050 sensor for precise hand movements",
      icon: Gamepad2,
      details: [
        "6-axis motion tracking (3-axis gyroscope + 3-axis accelerometer)",
        "Real-time gesture interpretation",
        "Customizable gesture commands",
        "Smooth motion detection"
      ]
    },
    {
      title: "Motor Control",
      description: "L298N driver for powerful and precise movement",
      icon: Car,
      details: [
        "Dual H-bridge motor driver",
        "Forward, backward, left, right control",
        "Variable speed control",
        "Overcurrent protection"
      ]
    },
    {
      title: "Smart Processing",
      description: "Arduino microcontrollers for intelligent control",
      icon: Cpu,
      details: [
        "Arduino UNO for car control logic",
        "Arduino NANO for controller processing",
        "Efficient code execution",
        "Real-time command processing"
      ]
    }
  ];

  const projectHighlights = [
    "Completely wireless hand gesture control",
    "Real-time motion tracking and response", 
    "Robust RF communication system",
    "Modular and expandable design",
    "Open-source Arduino implementation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection
        title="Hand Gesture Control Robotics"
        subtitle="Control Your Robot Car with Simple Hand Movements"
        description="Experience the future of robotics with our innovative hand gesture control system. Using advanced motion sensors and wireless communication, control your robotic car naturally and intuitively through hand gestures."
        primaryAction={{
          label: "Explore the Car",
          to: "/car"
        }}
        secondaryAction={{
          label: "View Controller",
          to: "/controller"
        }}
        backgroundImage={heroMain}
      />

      {/* Project Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This project demonstrates the integration of motion sensors, wireless communication, 
              and motor control to create an intuitive gesture-based robotic control system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Key Features</h3>
              <ul className="space-y-3">
                {projectHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-gradient-primary">
                  <Link to="/car" className="flex items-center space-x-2">
                    <Car className="h-4 w-4" />
                    <span>Car Components</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/controller" className="flex items-center space-x-2">
                    <Gamepad2 className="h-4 w-4" />
                    <span>Controller Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  <span>System Specifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Range</h4>
                    <p className="font-semibold">Up to 100m</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Frequency</h4>
                    <p className="font-semibold">433MHz</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Response Time</h4>
                    <p className="font-semibold">&lt; 100ms</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Battery Life</h4>
                    <p className="font-semibold">4+ hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Features</h2>
            <p className="text-lg text-muted-foreground">
              Explore the advanced technologies that make gesture control possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-tech text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 text-white/90">
            Dive deeper into the car and controller components to understand how this project works
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/car" className="flex items-center space-x-2">
                <Car className="h-5 w-5" />
                <span>Car Components</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/controller" className="flex items-center space-x-2">
                <Gamepad2 className="h-5 w-5" />
                <span>Controller System</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
