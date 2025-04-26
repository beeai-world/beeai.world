import { useState } from "react";
import { Building2, Heart, Banknote, ShoppingCart, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const industries = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Our AI-powered quality control systems reduce defects by up to 34%, while our robotics solutions optimize assembly line efficiency, reducing operational costs.",
    features: [
      "Automated quality inspection and defect detection",
      "Predictive maintenance to minimize downtime",
      "Robotic process automation for assembly lines",
      "Supply chain optimization and forecasting"
    ],
    icon: <Building2 className="h-6 w-6" />,
    stats: {
      defects: "34% fewer",
      efficiency: "29% increased",
      downtime: "47% reduced"
    }
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Our diagnostic AI models have achieved 28% better accuracy than traditional methods, helping healthcare providers deliver faster and more accurate patient care.",
    features: [
      "Medical image analysis and diagnostic assistance",
      "Patient flow optimization and resource allocation",
      "Robotic surgical assistance systems",
      "Predictive patient outcome modeling"
    ],
    icon: <Heart className="h-6 w-6" />,
    stats: {
      diagnostic: "28% improved",
      patientCare: "23% faster",
      costs: "18% reduced"
    }
  },
  {
    id: "financial",
    name: "Financial Services",
    description: "Our fraud detection algorithms have increased identification rates by 62%, protecting financial institutions and their customers from sophisticated threats.",
    features: [
      "Real-time fraud detection and prevention",
      "Algorithmic trading and risk assessment",
      "Automated document processing and verification",
      "Customer behavior analysis and personalization"
    ],
    icon: <Banknote className="h-6 w-6" />,
    stats: {
      fraudDetection: "62% increased",
      processing: "41% faster",
      customerSat: "37% improved"
    }
  },
  {
    id: "retail",
    name: "Retail",
    description: "Our inventory management solutions reduce overstock by 27% while ensuring products are always available when customers need them.",
    features: [
      "Automated inventory management and optimization",
      "Customer behavior analysis and personalization",
      "Visual merchandising and store layout optimization",
      "Demand forecasting and trend prediction"
    ],
    icon: <ShoppingCart className="h-6 w-6" />,
    stats: {
      inventory: "27% optimized",
      sales: "18% increased",
      shrinkage: "32% reduced"
    }
  },
  {
    id: "energy",
    name: "Energy",
    description: "Our predictive maintenance systems have reduced equipment failures by 53%, maximizing uptime and extending the lifespan of critical infrastructure.",
    features: [
      "Equipment health monitoring and failure prediction",
      "Energy consumption optimization",
      "Autonomous inspection of infrastructure",
      "Grid management and demand balancing"
    ],
    icon: <Lightbulb className="h-6 w-6" />,
    stats: {
      failures: "53% reduced",
      efficiency: "31% improved",
      costs: "24% decreased"
    }
  }
];

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState("manufacturing");

  const activeIndustry = industries.find(industry => industry.id === activeTab);

  return (
    <section id="industries" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text mb-4">Industries We Transform</h2>
          <p className="text-lg text-muted-foreground">
            Our solutions are deployed across diverse sectors, each customized to address 
            industry-specific challenges and opportunities.
          </p>
        </div>

        <Tabs defaultValue="manufacturing" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {industries.map(industry => (
              <TabsTrigger 
                key={industry.id} 
                value={industry.id}
                className="flex items-center gap-2 py-3"
              >
                {industry.icon}
                <span className="hidden md:inline">{industry.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {activeIndustry && (
            <TabsContent value={activeIndustry.id} className="bg-white rounded-lg p-8 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{activeIndustry.name}</h3>
                  <p className="mb-6 text-muted-foreground">{activeIndustry.description}</p>
                  
                  <h4 className="font-semibold mb-3 text-lg">Key Solutions:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {activeIndustry.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-6 text-lg text-center">Performance Metrics</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(activeIndustry.stats).map(([key, value], index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded-md p-4 shadow-sm">
                        <span className="capitalize text-muted-foreground">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="font-bold text-tech-teal">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default IndustriesSection;
