import { Button } from "@/components/ui/button";
import { Users, BookOpen, LightbulbIcon, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="gradient-text mb-6">My Story</h2>
            <p className="text-lg mb-6">
              With a background in AI research, data science, and robotics engineering, I founded Bee AI World with a clear vision: to bridge the gap between cutting-edge technology and real-world business needs.
            </p>
            <p className="text-lg mb-6">
              From the very beginning, my mission has been simple — to make advanced AI and robotics accessible, practical, and valuable for businesses across industries. I believe in technology that doesn't just impress, but delivers measurable, meaningful results.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="h-64 bg-gradient-to-r from-tech-blue to-tech-teal flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">My Approach</h3>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen className="h-6 w-6 text-tech-green" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Business-First Methodology</h4>
                    <p className="text-muted-foreground">
                      I start with understanding your business challenges, not pushing technology solutions. I focus is on delivering measurable business value.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-6 w-6 text-tech-green" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Cross-Disciplinary Expertise</h4>
                    <p className="text-muted-foreground">
                      Expertise in AI, machine learning, robotics, computer vision, and domain-specific knowledge delivering solutions tailored to your business's unique requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <LightbulbIcon className="h-6 w-6 text-tech-green" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Innovation with Purpose</h4>
                    <p className="text-muted-foreground">
                      I pursue innovation not for its own sake, but to solve real-world problems and deliver tangible value to my clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Code className="h-6 w-6 text-tech-green" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Industry-Specific Methodology</h4>
                    <p className="text-muted-foreground">
                      I've developed specialized approaches tailored to the businesses I serve, addressing their unique challenges, regulations, and opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
