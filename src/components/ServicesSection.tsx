import { 
  Navigation2, 
  Radio, 
  Map, 
  GitBranch, 
  Truck,
  Brain,
  Hotel,
  Settings,
  Bot,
  Wrench,
  Building,
  RotateCw,
  Headphones
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "AI Consulting for Hospitality Operations",
    description: "We help hospitality businesses unlock the full potential of AI and robotics through tailored consulting, driving operational efficiency and superior guest experiences.",
    icon: <Hotel className="h-10 w-10 text-tech-green" />,
    features: [
      "Operational Needs Assessment",
      "AI Deployment Planning",
      "Solution Selection"
    ]
  },
  {
    title: "System Integration Solutions",
    description: "We expertly integrate robotics and AI into your hospitality infrastructure, ensuring smooth operations and superior guest experiences through seamless system connectivity.",
    icon: <Settings className="h-10 w-10 text-tech-green" />,
    features: [
      "Integration Planning",
      "Connectivity Solutions",
      "Deployment and Testing"
    ]
  },
  {
    title: "Project Management for Robotic Deployments",
    description: "Deploying robotic solutions requires strategic oversight. Our project management services cover the full lifecycle — from initial assessment to deployment and ongoing support — ensuring every project is delivered on time, within budget, and to the highest standards.",
    icon: <Building className="h-10 w-10 text-tech-green" />,
    features: [
      "Project Planning & Oversight",
      "Timeline & Budget Management",
      "Quality Assurance"
    ]
  },
  {
    title: "Support for Robot Manufacturers",
    description: "We bridge the gap between robot manufacturers and hospitality facilities, providing comprehensive implementation services, localization support, and technical expertise to ensure successful robot deployments in real-world environments.",
    icon: <Wrench className="h-10 w-10 text-tech-green" />,
    features: [
      "Facility Integration & Implementation",
      "Technical Support & Troubleshooting",
      "Deployment Strategy & Training"
    ]
  },
  {
    title: "Technical Support for Robot Distributors",
    description: "We provide specialized support for robot distributors, helping them effectively sell and deploy robotics solutions in hospitality settings with technical expertise and market knowledge.",
    icon: <Headphones className="h-10 w-10 text-tech-green" />,
    features: [
      "Product Integration Guidance",
      "Technical Documentation Support",
      "Client Deployment Assistance"
    ]
  },
  {
    title: "Ongoing Maintenance and Optimization",
    description: "Our post-deployment services ensure your robotics systems are always operating at peak performance, with regular updates, troubleshooting, and optimization strategies.",
    icon: <RotateCw className="h-10 w-10 text-tech-green" />,
    features: [
      "Regular Updates",
      "Troubleshooting",
      "Optimization Strategies"
    ]
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate('/blog');
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div 
          className="text-center max-w-3xl mx-auto mb-16 cursor-pointer" 
          onClick={handleServiceClick}
        >
          <h2 className="gradient-text mb-4 hover:underline">Our Services</h2>
          <p className="text-lg text-muted-foreground hover:text-tech-green transition-colors">
            Comprehensive AI and robotics solutions designed specifically for the hospitality industry,
            enhancing guest experiences while optimizing operational efficiency and staff productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border border-border/50 cursor-pointer transition-transform hover:scale-105" 
              onClick={handleServiceClick}
            >
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
