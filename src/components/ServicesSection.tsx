import { 
  Navigation2, 
  Radio, 
  Map, 
  GitBranch, 
  Truck,
  Brain
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "AI Consultation & Integration",
    description: "Expert AI consultation and system integration services to help businesses implement and optimize intelligent automation solutions.",
    icon: <Brain className="h-10 w-10 text-tech-green" />,
    features: [
      "AI Strategy Development",
      "System Integration",
      "Custom AI Solutions"
    ]
  },
  {
    title: "Navigation & Autonomy",
    description: "Advanced autonomous navigation systems with intelligent path planning and obstacle avoidance capabilities.",
    icon: <Navigation2 className="h-10 w-10 text-tech-green" />,
    features: [
      "Autonomous Navigation",
      "Path Planning",
      "Obstacle Avoidance"
    ]
  },
  {
    title: "Communication & Data",
    description: "Secure and efficient data management solutions with real-time transfer capabilities and cloud integration.",
    icon: <Radio className="h-10 w-10 text-tech-green" />,
    features: [
      "Real-time Data Transfer",
      "Cloud Integration",
      "Secure Communication"
    ]
  },
  {
    title: "Spatial Awareness",
    description: "Advanced spatial mapping and environment detection systems powered by sensor fusion technology.",
    icon: <Map className="h-10 w-10 text-tech-green" />,
    features: [
      "3D Mapping",
      "Environment Detection",
      "Sensor Fusion"
    ]
  },
  {
    title: "Traffic Management",
    description: "Comprehensive traffic control systems with advanced congestion management and safety protocols.",
    icon: <GitBranch className="h-10 w-10 text-tech-green" />,
    features: [
      "Congestion Control",
      "Flow Optimization",
      "Safety Protocols"
    ]
  },
  {
    title: "Fleet Management",
    description: "Complete fleet management solutions with resource allocation and performance monitoring tools.",
    icon: <Truck className="h-10 w-10 text-tech-green" />,
    features: [
      "Resource Allocation",
      "Performance Monitoring",
      "Maintenance Scheduling"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive robotics and automation solutions designed to enhance 
            efficiency, safety, and performance across your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-border/50">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-tech-green rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
