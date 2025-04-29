import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

// Array of blog posts with metadata
const blogPosts = [
  // Main blog post
  {
    id: 1,
    title: "How Hospitality Businesses Can Survive Labor Shortages and Rising Costs with AI and Robotics",
    excerpt: "Discover how AI and robotics can help hospitality businesses overcome labor shortages and rising operational costs while improving guest experiences.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "April 28, 2024",
    category: "AI & Robotics",
    image: "/images/blog/1.jpg"
  },
  // New blog post
  {
    id: 2,
    title: "The Future of Hospitality: AI & Robots Transforming Guest Experience",
    excerpt: "Learn how AI and robots are creating seamless, personalized experiences for hotel guests while reducing operational costs and improving staff efficiency.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "May 12, 2024",
    category: "AI & Robotics",
    image: "/images/blog/2.jpg"
  },
  // New blog post #3
  {
    id: 3,
    title: "5 Powerful Ways Robotics Can Save Your Hotel Money",
    excerpt: "Discover how robotics is transforming hotel operations, cutting costs, and enhancing guest experience through automated cleaning, service robots, and more.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "May 20, 2024",
    category: "Robotics",
    image: "/images/blog/3.jpg"
  },
  // Blog post #4
  {
    id: 4,
    title: "How to Implement Service Robots in Your Hotel in 6 Steps",
    excerpt: "A practical guide to successfully integrating service robots into your hotel operations to boost guest satisfaction, reduce costs, and create unique experiences.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "June 5, 2024",
    category: "Implementation",
    image: "/images/blog/4.jpg"
  },
  // Blog post #5 
  {
    id: 5,
    title: "Traditional vs. Modern Hospitality: The AI & Robotics Revolution",
    excerpt: "Explore how AI-powered concierge services are revolutionizing guest interactions, providing 24/7 personalized assistance, and creating memorable stays.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "June 22, 2024",
    category: "AI & Guest Experience",
    image: "/images/blog/5.jpg"
  },
  // Blog post #6
  {
    id: 6,
    title: "Navigating the ROI of Robotics in Hospitality: A Financial Guide",
    excerpt: "A comprehensive breakdown of the financial benefits, cost considerations, and ROI timeline when investing in service robots for your hospitality business.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "July 3, 2024",
    category: "Financial Planning",
    image: "/images/blog/6.jpg"
  },
  // Blog post #7
  {
    id: 7,
    title: "The Future-Proof Solution for Hospitality's Greatest Challenges",
    excerpt: "Learn how AI and service robots can address the hospitality industry's biggest challenges: labor shortages, rising costs, and increasing guest expectations.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "July 10, 2024",
    category: "Strategic Planning",
    image: "/images/blog/7.jpg"
  },
  // Blog post #8
  {
    id: 8,
    title: "How Robots Are Revolutionizing Hotel Housekeeping",
    excerpt: "Discover how cleaning robots are transforming hotel housekeeping operations, reducing costs by up to 40% while improving guest satisfaction and staff efficiency.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "July 24, 2024",
    category: "Robotics & Housekeeping",
    image: "/images/blog/8.jpg"
  },
  // Blog post #9
  {
    id: 9,
    title: "How AI Is Reshaping Guest Service in Luxury Hotels",
    excerpt: "Explore how AI is helping luxury hotels deliver deeply personalized experiences that anticipate guest needs, creating a new standard in high-end hospitality.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "August 5, 2024",
    category: "Luxury Hospitality",
    image: "/images/blog/9.jpg"
  },
  // Blog post #10
  {
    id: 10,
    title: "How AI Is Transforming Hotel Operations in the Face of Labor Shortages",
    excerpt: "Learn how hotels are using AI to strategically augment teams and create intelligent systems where technology handles repetitive tasks while staff focus on high-value interactions.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "August 18, 2024",
    category: "Operations",
    image: "/images/blog/10.jpg"
  },
  // Blog post #11
  {
    id: 11,
    title: "Service Robots in Action: Real-World Integration Success Stories",
    excerpt: "Explore real-world case studies of successful service robot integrations in hospitality, including implementation strategies and measurable results.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "September 2, 2024",
    category: "Case Studies",
    image: "/images/blog/11.jpg"
  },
  // Blog post #12
  {
    id: 12,
    title: "Voice AI: The Invisible Revolution in Hotel Guest Experience",
    excerpt: "Discover how voice AI technology is quietly transforming the hotel experience with natural, frictionless interactions that enhance service while solving operational challenges.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "September 15, 2024",
    category: "Voice Technology",
    image: "/images/blog/12.jpg"
  },
  // Blog post #13
  {
    id: 13,
    title: "AI-Powered Predictive Maintenance: Preventing Hotel Disasters Before They Happen",
    excerpt: "Learn how AI is revolutionizing hotel maintenance by predicting equipment failures before they occur, saving properties millions in emergency repairs and guest compensation.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "October 3, 2024",
    category: "Maintenance & Operations",
    image: "/images/blog/13.jpg"
  },
  // Blog post #14
  {
    id: 14,
    title: "Revolutionizing Room Turnover: How AI and Robotics Are Solving Hospitality's Biggest Operational Challenge",
    excerpt: "Discover how AI coordination systems and task-specific robotics are transforming the room turnover process, reducing cleaning time by 33% while improving staff satisfaction.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "October 17, 2024",
    category: "Operations & Efficiency",
    image: "/images/blog/14.jpg"
  },
  // Blog post #15
  {
    id: 15,
    title: "The New Luxury: How AI Delivers Hyper-Personalized Guest Experiences",
    excerpt: "Learn how AI is redefining luxury hospitality through predictive personalization that anticipates guest needs and creates truly unique experiences at scale.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "November 5, 2024",
    category: "Luxury & Personalization",
    image: "/images/blog/15.jpg"
  },
  // Blog post #16
  {
    id: 16,
    title: "The ROI of Innovation: Calculating the Real Returns of AI and Robotics in Hospitality",
    excerpt: "Beyond the hype: A framework for calculating the tangible returns of AI and robotics in hospitality settings, based on real-world implementations.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "November 18, 2024",
    category: "ROI & Finance",
    image: "/images/blog/16.jpg"
  },
  // Blog post #17
  {
    id: 17,
    title: "Beyond the Breakdown: Reimagining Hospitality Technology Maintenance",
    excerpt: "Discover how advanced troubleshooting systems not only minimize disruptions but transform maintenance into a strategic advantage for hospitality businesses.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "December 1, 2024",
    category: "Maintenance & Technology",
    image: "/images/blog/17.jpg"
  },
  // Blog post #18
  {
    id: 18,
    title: "Unlocking Hidden Value: How AI Analytics Are Transforming Hospitality Business Intelligence",
    excerpt: "Learn how AI analytics platforms enable forward-thinking hospitality businesses to extract unprecedented insights from existing data sources, revealing hidden opportunities.",
    content: "", // Content will be loaded from Markdown files
    author: "Bahadır Çiloğlu",
    date: "December 15, 2024",
    category: "Analytics & Business Intelligence",
    image: "/images/blog/18.jpg"
  }
];

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const handlePostClick = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text mb-4">Blog</h2>
          <p className="text-lg text-muted-foreground">
            Current insights and forecasts on AI and robotics technologies in the hospitality industry.
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="h-full flex flex-col cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handlePostClick(post.id)}
              >
                <CardHeader>
                  <div className="relative h-48 mb-4 bg-gray-200 rounded-md overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No blog posts found matching your search criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
              }}
            >
              Clear Search
            </Button>
          </div>
        )}
        
        {/* Email Capture Form - Moved to end of page */}
        {filteredPosts.length > 0 && (
          <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-gray-200">
            <div className="p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
              <div className="space-y-5">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-center mb-3">
                    Want to Learn More?
                  </h3>
                  <Input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                  <p className="text-xs mt-1 italic text-gray-500">
                    Please enter your email address to receive a free demo and ROI calculator services.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Button 
                    className="bg-tech-green hover:bg-tech-green/90 text-white w-full"
                    onClick={async () => {
                      if (!email || !email.includes('@') || !email.includes('.')) {
                        toast({
                          title: "Invalid email",
                          description: "Please enter a valid email address.",
                          variant: "destructive"
                        });
                        return;
                      }
                      
                      try {
                        // Save to Supabase
                        const { data, error } = await supabase
                          .from('email_subscriptions')
                          .insert([
                            {
                              email: email,
                              source: 'blog_page',
                              interest: 'demo'
                            }
                          ]);
                        
                        if (error) {
                          console.error('Supabase error:', error);
                          throw error;
                        }
                        
                        console.log('Email submitted:', email);
                        
                        toast({
                          title: "Thank you!",
                          description: "We'll be in touch soon to schedule your free demo.",
                        });
                        
                        // Reset email field
                        setEmail("");
                        
                        // Navigate to contact page or open Calendly
                        window.open('https://calendly.com/bahadir-beeai/30min', '_blank');
                      } catch (error) {
                        console.error('Error saving email:', error);
                        
                        // Check if it's a duplicate email error
                        if (error && typeof error === 'object' && 'code' in error && (error as any).code === '23505') {
                          toast({
                            title: "Already subscribed",
                            description: "This email is already in our system. We'll be in touch soon.",
                          });
                          
                          // Still open Calendly for convenience
                          window.open('https://calendly.com/bahadir-beeai/30min', '_blank');
                        } else {
                          toast({
                            title: "Error",
                            description: "There was a problem saving your email. Please try again.",
                            variant: "destructive"
                          });
                        }
                      }
                    }}
                  >
                    Book a Free Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-tech-blue-light text-tech-blue-light hover:bg-tech-blue-light/10"
                    onClick={async () => {
                      if (!email || !email.includes('@') || !email.includes('.')) {
                        toast({
                          title: "Invalid email",
                          description: "Please enter a valid email address.",
                          variant: "destructive"
                        });
                        return;
                      }
                      
                      try {
                        // Save to Supabase
                        const { data, error } = await supabase
                          .from('email_subscriptions')
                          .insert([
                            {
                              email: email,
                              source: 'blog_page',
                              interest: 'roi_calculator'
                            }
                          ]);
                        
                        if (error) {
                          console.error('Supabase error:', error);
                          throw error;
                        }
                        
                        // Save email first
                        console.log('Email submitted:', email);
                        
                        // Reset email field
                        setEmail("");
                        
                        // Navigate to ROI calculator
                        navigate('/roi-calculator');
                      } catch (error) {
                        console.error('Error saving email:', error);
                        
                        // Check if it's a duplicate email error
                        if (error && typeof error === 'object' && 'code' in error && (error as any).code === '23505') {
                          toast({
                            title: "Already subscribed",
                            description: "This email is already in our system.",
                          });
                          
                          // Still navigate to ROI calculator
                          navigate('/roi-calculator');
                        } else {
                          toast({
                            title: "Error",
                            description: "There was a problem saving your email. Please try again.",
                            variant: "destructive"
                          });
                        }
                      }
                    }}
                  >
                    Try ROI Calculator
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection; 