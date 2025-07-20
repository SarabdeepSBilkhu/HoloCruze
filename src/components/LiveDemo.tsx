import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Zap, Hand, ArrowRight } from "lucide-react";

const LiveDemo = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 font-display animate-bounce-in">
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 animate-slide-in-up animation-delay-200">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            Experience the seamless integration of hand gestures and robotic control
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Video/GIF Placeholder */}
          <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <Card className="relative overflow-hidden bg-card border border-border/50 shadow-product hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-gradient-subtle flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
                <div className="text-center z-10">
                  <div className="w-20 h-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground font-medium">Demo Video Coming Soon</p>
                  <p className="text-sm text-muted-foreground mt-1">Hand movement → Car movement</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2">Real-Time Control</h3>
                <p className="text-muted-foreground">
                  Watch how natural hand movements translate into precise car movements
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Demo Flow */}
          <div className="space-y-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <Card className="bg-card border border-border/50 shadow-minimal hover:shadow-product transition-all duration-500 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <CardTitle className="font-display">Hand Movement Detection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Hand className="h-5 w-5 text-primary" />
                    <span>MPU6050 sensor captures gesture data</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <Card className="bg-card border border-border/50 shadow-minimal hover:shadow-product transition-all duration-500 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <CardTitle className="font-display">Wireless Transmission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>RF module sends commands to car</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '1100ms' }}>
              <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
              <Card className="bg-card border border-border/50 shadow-minimal hover:shadow-product transition-all duration-500 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <CardTitle className="font-display">Instant Response</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Play className="h-5 w-5 text-primary" />
                    <span>Car moves in corresponding direction</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1400ms' }}>
            <div className="text-3xl font-display font-bold text-primary mb-2 hover:scale-110 transition-transform duration-300">
              &lt;100ms
            </div>
            <p className="text-muted-foreground">Response Time</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1500ms' }}>
            <div className="text-3xl font-display font-bold text-primary mb-2 hover:scale-110 transition-transform duration-300">
              360°
            </div>
            <p className="text-muted-foreground">Movement Range</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1600ms' }}>
            <div className="text-3xl font-display font-bold text-primary mb-2 hover:scale-110 transition-transform duration-300">
              10m
            </div>
            <p className="text-muted-foreground">Control Distance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;