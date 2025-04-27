import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

// Blog yazıları için örnek veri
const blogPosts = [
  {
    id: 1,
    title: "How Hospitality Businesses Can Survive Labor Shortages and Rising Costs with AI and Robotics",
    excerpt: "Discover how AI and robotics can help you navigate the labor crisis while improving service quality and controlling costs.",
    content: "The Hospitality Industry Is Under Pressure Like Never Before\nIf you run a hotel, restaurant, or resort, you already know: finding reliable staff is harder and more expensive than ever. Labor shortages are tightening, wages are rising, and guest expectations remain sky-high.\nEvery day, managers are stretched thin, struggling to deliver five-star experiences with three-star resources.\nThe traditional ways of handling operations — more hiring, more overtime — just aren't sustainable anymore.\n\nThe Longer You Wait, the Worse It Gets\nLabor challenges aren't a passing storm — they're the new climate.\n\nFailing to adapt means more than just operational headaches. It means:\n\n• Lower service quality, leading to bad reviews and lost business.\n\n• Burnt-out employees, leading to even higher turnover.\n\n• Skyrocketing operational costs, crushing your profit margins.\n\nCompetitors who invest in smarter operations today will dominate tomorrow's market. Those who don't will be left behind, scrambling to survive in an industry that's rapidly evolving.\n\nIgnoring the problem is no longer an option.\n\nFuture-Proof Your Operations with Our AI & Robotics Integration Services\nAt Bee AI World, we specialize in helping hospitality businesses turn these challenges into competitive advantages.\n\nHere's how we do it:\n\n• AI Consulting: We assess your operational needs and identify where AI and robotics can have the biggest impact.\n\n• System Integration: Seamlessly blend AI-driven robots into your existing workflows — from cleaning and delivery to concierge services.\n\n• Technical Support & Project Management: We don't just install and leave — we stay by your side, ensuring smooth, ongoing operations.\n\n• Direct Facility Integration: We partner with top robot manufacturers and distributors, bringing you cutting-edge solutions tailored to your business.\n\nImagine autonomous service robots that handle routine guest requests, or cleaning robots that keep your facilities spotless — all while freeing your staff to focus on higher-value service.\n\nWith the right robotic solutions, you don't just survive the labor crisis — you thrive, delivering unforgettable guest experiences while keeping costs under control.\n\nReady to take the first step?\nContact Bee AI World today for a free Operational Needs Assessment — and discover how AI and Robotics can transform your hospitality business.",
    author: "Bahadır Çiloğlu",
    date: "December 5, 2024",
    category: "AI & Robotics",
    image: "/images/blog/2.jpg"
  },
  {
    id: 2,
    title: "How Robotic Technology is Being Used in Hotels",
    excerpt: "Examples of robotic applications in modern hotels and the resulting efficiency gains",
    content: "Robotic technology in modern hotels is becoming increasingly widespread to enhance guest experience and increase operational efficiency. Front desk robots automate check-in and check-out processes, reducing waiting times. Room service robots deliver food, beverages, and supplies quickly and hygienically. Cleaning robots are used especially for sweeping, mopping, and disinfecting large areas, allowing staff to focus on more detailed cleaning tasks. Luggage handling robots safely transport guests' suitcases to their rooms, providing valuable assistance especially during busy check-in and check-out times. Entertainment and information robots provide information about hotel features and offer interactive activities for children. These technologies increase staff efficiency while allowing hotels to reduce labor costs and raise hygiene standards. Especially in the post-pandemic period, these technologies that reduce contact stand out as a factor that increases guest confidence.",
    author: "Bahadır Çiloğlu",
    date: "November 10, 2024",
    category: "Robotics",
    image: "/images/blog/3.jpg"
  },
  {
    id: 3,
    title: "The Importance of Data Analytics in the Hospitality Industry",
    excerpt: "How are big data and analytics transforming the guest experience?",
    content: "In the hospitality industry, data analytics plays a critical role in businesses making strategic decisions and personalizing the guest experience. Businesses can gain valuable insights by analyzing large data sets collected from various sources such as customer data, booking trends, spending habits, and feedback. Predictive analytics enables the implementation of dynamic pricing strategies by forecasting occupancy rates, demand fluctuations, and revenue opportunities. Sentiment analysis measures guest satisfaction and detects potential problems early by examining social media and online reviews. Segmentation analysis helps businesses understand the needs and preferences of different customer groups, allowing them to develop more targeted marketing campaigns. Operational analytics improves efficiency in areas such as staff planning, inventory management, and energy use. By effectively using this data, businesses can gain a competitive advantage, increase guest loyalty, and optimize their revenues.",
    author: "Bahadır Çiloğlu",
    date: "November 5, 2024",
    category: "Data Analytics",
    image: "/images/blog/5.jpg"
  }
];

const BlogSection = () => {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const { toast } = useToast();

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBack = () => {
    setActivePost(null);
  };

  const handleSubmitEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email.trim()) {
      setShowEmailAlert(true);
      return;
    }
    
    setIsSubmitting(true);
    setShowEmailAlert(false);
    
    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request received!",
        description: "We'll contact you shortly to schedule your Operational Needs Assessment.",
      });
      setEmail("");
    }, 1500);
  };

  const handleRoiCalculator = () => {
    if (!email.trim()) {
      setShowEmailAlert(true);
      return;
    }
    
    setShowEmailAlert(false);
    window.location.href = '/roi-calculator';
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

        {activePost === null ? (
          <>
            <div className="mb-8 max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search articles or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="ai">AI</TabsTrigger>
                <TabsTrigger value="robotics">Robotics</TabsTrigger>
                <TabsTrigger value="data">Data Analytics</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="h-full flex flex-col cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setActivePost(post.id)}
                >
                  <CardHeader>
                    <div className="relative h-48 mb-4 bg-gray-200 rounded-md overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-tech-green font-medium">{post.category}</span>
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
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Button onClick={handleBack} variant="outline" className="mb-8">
              &larr; Back
            </Button>
            
            {blogPosts.find(post => post.id === activePost) && (
              <article>
                <h1 className="text-3xl font-bold mb-4">
                  {blogPosts.find(post => post.id === activePost)?.title}
                </h1>
                
                <div className="relative h-80 mb-8 bg-gray-200 rounded-md overflow-hidden">
                  <img 
                    src={blogPosts.find(post => post.id === activePost)?.image} 
                    alt={blogPosts.find(post => post.id === activePost)?.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="whitespace-pre-line">
                    {blogPosts.find(post => post.id === activePost)?.content}
                  </p>
                </div>

                {/* Email signup form - only show for the AI Assessment blog post */}
                {activePost === 1 && (
                  <div className="mt-12 p-8 bg-tech-green/10 rounded-lg border border-tech-green/20">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-tech-green mb-4">Request Your Free Operational Needs Assessment</h4>
                      <p className="mb-4">Enter your email address below to schedule your free assessment and discover how AI and robotics can help your hospitality business.</p>
                    </div>
                    
                    <div className="max-w-md mx-auto mb-6">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (e.target.value.trim()) {
                            setShowEmailAlert(false);
                          }
                        }}
                        className={`w-full ${showEmailAlert ? 'border-red-500' : ''}`}
                        required
                      />
                      <p className={`text-sm mt-2 text-center transition-colors ${showEmailAlert ? 'text-red-600 font-semibold animate-pulse' : 'text-muted-foreground'}`}>
                        Please enter your email and then get the services below.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto mt-6">
                      <Button 
                        onClick={handleSubmitEmail}
                        className="bg-tech-green hover:bg-tech-green/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Book a Free Demo"}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="border-tech-green text-tech-green hover:bg-tech-green/10"
                        onClick={handleRoiCalculator}
                      >
                        Try ROI Calculator
                      </Button>
                    </div>
                  </div>
                )}
              </article>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection; 