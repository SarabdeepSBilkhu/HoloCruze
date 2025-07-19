import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Zap, Hand, ArrowRight } from "lucide-react";

const LiveDemo = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 font-display">
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the seamless integration of hand gestures and robotic control
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Video/GIF Placeholder */}
          <Card className="relative overflow-hidden bg-card border border-border/50 shadow-product">
            <div className="aspect-video bg-gradient-subtle flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
              <div className="text-center z-10">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mb-4 mx-auto">
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

          {/* Demo Flow */}
          <div className="space-y-8">
            <Card className="bg-card border border-border/50 shadow-minimal">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
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

            <div className="flex justify-center">
              <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
            </div>

            <Card className="bg-card border border-border/50 shadow-minimal">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
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

            <div className="flex justify-center">
              <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
            </div>

            <Card className="bg-card border border-border/50 shadow-minimal">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
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

        {/* Performance Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">
              &lt;100ms
            </div>
            <p className="text-muted-foreground">Response Time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">
              360°
            </div>
            <p className="text-muted-foreground">Movement Range</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">
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