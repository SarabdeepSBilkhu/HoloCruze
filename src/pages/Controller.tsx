import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Gamepad2, 
  Cpu, 
  Compass, 
  Wifi,
  Hand,
  Gauge,
  Zap,
  ArrowRight,
  ChevronRight,
  RotateCw
} from "lucide-react";
import heroController from "@/assets/hero-controller.jpg";

const ControllerPage = () => {
  const components = [
    {
      title: "Arduino NANO",
      description: "Compact microcontroller for gesture processing",
      icon: Cpu,
      details: [
        "ATmega328P microcontroller",
        "Compact form factor",
        "14 digital I/O pins",
        "8 analog input pins",
        "Low power consumption"
      ]
    },
    {
      title: "MPU6050 Sensor",
      description: "6-axis motion tracking sensor",
      icon: Compass,
      details: [
        "3-axis gyroscope for rotation detection",
        "3-axis accelerometer for tilt sensing",
        "Digital Motion Processor (DMP)",
        "I2C communication interface",
        "High precision motion tracking"
      ]
    },
    {
      title: "RF Transmitter",
      description: "433MHz wireless communication module", 
      icon: Wifi,
      details: [
        "433MHz operating frequency",
        "Long-range transmission",
        "Low power consumption",
        "High reliability",
        "Easy integration"
      ]
    },
    {
      title: "Power Management",
      description: "Battery and power regulation system",
      icon: Zap,
      details: [
        "Rechargeable Li-Po battery",
        "Voltage regulation circuit",
        "Power indicator LED",
        "Low battery warning",
        "Efficient power usage"
      ]
    }
  ];

  const gestureCommands = [
    {
      gesture: "Tilt Forward",
      command: "Move Forward",
      description: "Tilt the controller forward to make the car move ahead",
      icon: "↑"
    },
    {
      gesture: "Tilt Backward", 
      command: "Move Backward",
      description: "Tilt the controller backward to make the car reverse",
      icon: "↓"
    },
    {
      gesture: "Tilt Left",
      command: "Turn Left", 
      description: "Tilt the controller to the left to turn the car left",
      icon: "←"
    },
    {
      gesture: "Tilt Right",
      command: "Turn Right",
      description: "Tilt the controller to the right to turn the car right", 
      icon: "→"
    },
    {
      gesture: "Neutral Position",
      command: "Stop",
      description: "Keep the controller level to stop the car",
      icon: "⊙"
    }
  ];

  const specifications = [
    { label: "Microcontroller", value: "Arduino NANO (ATmega328P)" },
    { label: "Motion Sensor", value: "MPU6050 6-axis IMU" },
    { label: "RF Module", value: "433MHz Transmitter" },
    { label: "Power Supply", value: "3.7V Li-Po Battery" },
    { label: "Communication", value: "I2C + RF Transmission" },
    { label: "Update Rate", value: "50Hz Motion Sensing" },
    { label: "Battery Life", value: "4+ hours continuous use" },
    { label: "Range", value: "Up to 100 meters" }
  ];

  const controllerFeatures = [
    {
      category: "Motion Detection",
      features: ["Real-time tilt sensing", "Rotation angle measurement", "Acceleration detection", "Gesture recognition"]
    },
    {
      category: "Data Processing", 
      features: ["Digital filtering", "Noise reduction", "Calibration algorithms", "Command mapping"]
    },
    {
      category: "Wireless Communication",
      features: ["433MHz RF transmission", "Data packet encoding", "Error correction", "Signal optimization"]
    },
    {
      category: "User Experience",
      features: ["Intuitive gesture control", "Responsive feedback", "Easy calibration", "Ergonomic design"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection
        title="Hand Gesture Controller"
        subtitle="Arduino NANO with MPU6050 Motion Sensing"
        description="The hand gesture controller captures your hand movements using advanced motion sensors and wirelessly transmits commands to the robotic car for intuitive control."
        primaryAction={{
          label: "View Car System",
          to: "/car"
        }}
        secondaryAction={{
          label: "Back to Home", 
          to: "/"
        }}
        backgroundImage={heroController}
        compact={true}
      />

      {/* Components Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Controller Components</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the advanced components that enable precise gesture recognition and control
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

      {/* Gesture Commands */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gesture Commands</h2>
            <p className="text-lg text-muted-foreground">
              Simple hand movements that control your robotic car
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gestureCommands.map((gesture, index) => (
                <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-1 text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-4">{gesture.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{gesture.gesture}</h3>
                  <Badge variant="outline" className="mb-3">{gesture.command}</Badge>
                  <p className="text-sm text-muted-foreground">{gesture.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground">
              Detailed specifications of the controller system
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  <span>Controller System Specifications</span>
                </CardTitle>
                <CardDescription>
                  Complete technical details of the gesture controller
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
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Controller Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Advanced features of the gesture control system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {controllerFeatures.map((category, index) => (
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

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Gesture Control Works</h2>
            <p className="text-lg text-muted-foreground">
              The complete process from hand movement to car action
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center p-6 bg-background/80 backdrop-blur-sm">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Hand className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Gesture Input</h3>
                <p className="text-sm text-muted-foreground">
                  User performs hand gestures with the controller
                </p>
              </Card>

              <Card className="text-center p-6 bg-background/80 backdrop-blur-sm">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Motion Sensing</h3>
                <p className="text-sm text-muted-foreground">
                  MPU6050 detects tilt angles and acceleration
                </p>
              </Card>

              <Card className="text-center p-6 bg-background/80 backdrop-blur-sm">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Wifi className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Wireless Transmission</h3>
                <p className="text-sm text-muted-foreground">
                  Commands sent via 433MHz RF to the car
                </p>
              </Card>

              <Card className="text-center p-6 bg-background/80 backdrop-blur-sm">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <RotateCw className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Car Response</h3>
                <p className="text-sm text-muted-foreground">
                  Car executes the commanded movement
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-tech text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Car System</h2>
          <p className="text-xl mb-8 text-white/90">
            Learn about the robotic car that receives and responds to these gesture commands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/car" className="flex items-center space-x-2">
                <span>Car Components</span>
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

export default ControllerPage;