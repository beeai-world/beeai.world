import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet-async";
import { FaTwitter, FaInstagram } from "react-icons/fa";

// This will be our initial placeholder for blog posts
// We'll replace this with actual content from Markdown files
const blogPosts = [
  {
    id: 1,
    title: "How Hospitality Businesses Can Survive Labor Shortages and Rising Costs with AI and Robotics",
    excerpt: "Discover how AI and robotics can help hospitality businesses overcome labor shortages and rising operational costs while improving guest experiences.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "April 28, 2024",
    category: "AI & Robotics",
    image: "/images/blog/1.jpg"
  },
  {
    id: 2,
    title: "The Future of Hospitality: AI & Robots Transforming Guest Experience",
    excerpt: "Learn how AI and robots are creating seamless, personalized experiences for hotel guests while reducing operational costs and improving staff efficiency.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "May 12, 2024",
    category: "AI & Robotics",
    image: "/images/blog/2.jpg"
  },
  {
    id: 3,
    title: "5 Powerful Ways Robotics Can Save Your Hotel Money",
    excerpt: "Discover how robotics is transforming hotel operations, cutting costs, and enhancing guest experience through automated cleaning, service robots, and more.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "May 20, 2024",
    category: "Robotics",
    image: "/images/blog/3.jpg"
  },
  {
    id: 4,
    title: "How to Implement Service Robots in Your Hotel in 6 Steps",
    excerpt: "A practical guide to successfully integrating service robots into your hotel operations to boost guest satisfaction, reduce costs, and create unique experiences.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "June 5, 2024",
    category: "Implementation",
    image: "/images/blog/4.jpg"
  },
  {
    id: 5,
    title: "Traditional vs. Modern Hospitality: The AI & Robotics Revolution",
    excerpt: "This is placeholder content for blog post 5.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "December 15, 2024",
    category: "Placeholder",
    image: "/images/blog/5.jpg"
  },
  {
    id: 6,
    title: "Navigating the ROI of Robotics in Hospitality: A Financial Guide",
    excerpt: "A comprehensive breakdown of the financial benefits, cost considerations, and ROI timeline when investing in service robots for your hospitality business.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "July 3, 2024",
    category: "Financial Planning",
    image: "/images/blog/6.jpg"
  },
  {
    id: 7,
    title: "The Future-Proof Solution for Hospitality's Greatest Challenges",
    excerpt: "Learn how AI and service robots can address the hospitality industry's biggest challenges: labor shortages, rising costs, and increasing guest expectations.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "July 10, 2024",
    category: "Strategic Planning",
    image: "/images/blog/7.jpg"
  },
  {
    id: 8,
    title: "How Robots Are Revolutionizing Hotel Housekeeping",
    excerpt: "Discover how cleaning robots are transforming hotel housekeeping operations, reducing costs by up to 40% while improving guest satisfaction and staff efficiency.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "July 24, 2024",
    category: "Robotics & Housekeeping",
    image: "/images/blog/8.jpg"
  },
  {
    id: 9,
    title: "How AI Is Reshaping Guest Service in Luxury Hotels",
    excerpt: "Explore how AI is helping luxury hotels deliver deeply personalized experiences that anticipate guest needs, creating a new standard in high-end hospitality.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "August 5, 2024",
    category: "Luxury Hospitality",
    image: "/images/blog/9.jpg"
  },
  {
    id: 10,
    title: "How AI Is Transforming Hotel Operations in the Face of Labor Shortages",
    excerpt: "Learn how hotels are using AI to strategically augment teams and create intelligent systems where technology handles repetitive tasks while staff focus on high-value interactions.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "August 18, 2024",
    category: "Operations",
    image: "/images/blog/10.jpg"
  },
  {
    id: 11,
    title: "Service Robots in Action: Real-World Integration Success Stories",
    excerpt: "Explore real-world case studies of successful service robot integrations in hospitality, including implementation strategies and measurable results.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "September 2, 2024",
    category: "Case Studies",
    image: "/images/blog/11.jpg"
  },
  {
    id: 12,
    title: "Voice AI: The Invisible Revolution in Hotel Guest Experience",
    excerpt: "Discover how voice AI technology is quietly transforming the hotel experience with natural, frictionless interactions that enhance service while solving operational challenges.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "September 15, 2024",
    category: "Voice Technology",
    image: "/images/blog/12.jpg"
  },
  {
    id: 13,
    title: "AI-Powered Predictive Maintenance: Preventing Hotel Disasters Before They Happen",
    excerpt: "Learn how AI is revolutionizing hotel maintenance by predicting equipment failures before they occur, saving properties millions in emergency repairs and guest compensation.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "October 3, 2024",
    category: "Maintenance & Operations",
    image: "/images/blog/13.jpg"
  },
  {
    id: 14,
    title: "Revolutionizing Room Turnover: How AI and Robotics Are Solving Hospitality's Biggest Operational Challenge",
    excerpt: "Discover how AI coordination systems and task-specific robotics are transforming the room turnover process, reducing cleaning time by 33% while improving staff satisfaction.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "October 17, 2024",
    category: "Operations & Efficiency",
    image: "/images/blog/14.jpg"
  },
  {
    id: 15,
    title: "The New Luxury: How AI Delivers Hyper-Personalized Guest Experiences",
    excerpt: "Learn how AI is redefining luxury hospitality through predictive personalization that anticipates guest needs and creates truly unique experiences at scale.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "November 5, 2024",
    category: "Luxury & Personalization",
    image: "/images/blog/15.jpg"
  },
  {
    id: 16,
    title: "The ROI of Innovation: Calculating the Real Returns of AI and Robotics in Hospitality",
    excerpt: "Beyond the hype: A framework for calculating the tangible returns of AI and robotics in hospitality settings, based on real-world implementations.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "November 18, 2024",
    category: "ROI & Finance",
    image: "/images/blog/16.jpg"
  },
  {
    id: 17,
    title: "Beyond the Breakdown: Reimagining Hospitality Technology Maintenance",
    excerpt: "Discover how advanced troubleshooting systems not only minimize disruptions but transform maintenance into a strategic advantage for hospitality businesses.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "December 1, 2024",
    category: "Maintenance & Technology",
    image: "/images/blog/17.jpg"
  },
  {
    id: 18,
    title: "Unlocking Hidden Value: How AI Analytics Are Transforming Hospitality Business Intelligence",
    excerpt: "Learn how AI analytics platforms enable forward-thinking hospitality businesses to extract unprecedented insights from existing data sources, revealing hidden opportunities.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "December 15, 2024",
    category: "Analytics & Business Intelligence",
    image: "/images/blog/18.jpg"
  }
  // ... Add placeholder entries for all other blog posts
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogPost = async () => {
      setLoading(true);
      
      try {
        // First find the placeholder post to get basic metadata
        const postId = Number(id);
        const placeholderPost = blogPosts.find(p => p.id === postId);
        
        if (!placeholderPost) {
          setError(true);
          setLoading(false);
          return;
        }

        // Fetch the actual content from the Markdown file
        // In a production app, you'd use a proper Markdown parser
        // For now, we'll just fetch the raw text
        const response = await fetch(`/src/components/Blogpost/${postId}.md`);
        
        if (!response.ok) {
          console.error(`Failed to fetch blog post content: ${response.status}`);
          // Even if fetch fails, we'll still show the post with placeholder content
          setPost({
            ...placeholderPost,
            content: "# " + placeholderPost.title + "\n\n" + placeholderPost.excerpt
          });
          setLoading(false);
          return;
        }
        
        const content = await response.text();
        
        // Combine the placeholder metadata with the fetched content
        setPost({
          ...placeholderPost,
          content
        });
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  // Update this function to handle button clicks without using toast
  const handleActionButtonClick = async (destination: string) => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      // Instead of showing a toast, set state to show our inline alert more prominently
      setShowEmailAlert(true);
      return;
    }
    
    try {
      // Save to Supabase
      const { data, error } = await supabase
        .from('email_subscriptions')
        .insert([
          {
            email: email,
            source: `blog_post_${post.id}`,
            interest: destination === '/contact' ? 'demo' : 'roi_calculator'
          }
        ]);
      
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      // Here you would typically save the email to your database
      console.log('Email submitted:', email);
      
      // Reset the email field
      setEmail("");
      
      // If destination is contact, open Calendly
      if (destination === '/contact') {
        window.open('https://calendly.com/bahadir-beeai/30min', '_blank');
      } else {
        // Navigate to other destinations
        navigate(destination);
      }
    } catch (error) {
      console.error('Error saving email:', error);
      
      // Check if it's a duplicate email error (unique constraint violation)
      if (error && typeof error === 'object' && 'code' in error && (error as any).code === '23505') {
        // Still open Calendly or navigate
        if (destination === '/contact') {
          window.open('https://calendly.com/bahadir-beeai/30min', '_blank');
        } else {
          navigate(destination);
        }
      } else {
        toast({
          title: "Error",
          description: "There was a problem processing your request. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  // Add share handlers
  const handleTwitterShare = () => {
    if (!post) return;
    
    const text = `${post.title}`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    
    window.open(twitterUrl, '_blank');
  };

  const handleInstagramShare = () => {
    // Instagram doesn't have a direct sharing API for web
    // Opening Instagram and letting users share manually is the best alternative
    window.open('https://www.instagram.com/', '_blank');
  };

  if (loading) {
    return (
      <div>
        <Header />
        <div className="section-padding bg-white min-h-screen">
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center min-h-[50vh]">
              <p className="text-lg">Loading blog post...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div>
        <Header />
        <div className="section-padding bg-white min-h-screen">
          <div className="container mx-auto px-6">
            <div className="flex flex-col justify-center items-center min-h-[50vh]">
              <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
              <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {post && (
        <Helmet>
          <title>{post.title} | AI & Robotics Agency</title>
          <meta name="description" content={post.excerpt} />
          
          {/* OpenGraph Meta Tags */}
          <meta property="og:title" content={`${post.title} | AI & Robotics Agency`} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={`https://www.beeai.world${post.image}`} />
          <meta property="og:url" content={`https://www.beeai.world/blog/${post.id}`} />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@BeeAI" />
          <meta name="twitter:title" content={`${post.title} | AI & Robotics Agency`} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={`https://www.beeai.world${post.image}`} />
          <meta name="twitter:url" content={`https://www.beeai.world/blog/${post.id}`} />
        </Helmet>
      )}
      
      <Header />
      <div className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <Button onClick={() => navigate("/blog")} variant="outline" className="mb-8">
            &larr; Back to Blog
          </Button>
          
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-tech-blue">{post.title}</h1>
            
            <div className="relative h-80 md:h-96 mb-10 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="prose prose-lg max-w-none prose-headings:text-tech-blue prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-8 prose-p:text-gray-700 prose-a:text-tech-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-tech-blue-light prose-strong:font-semibold prose-blockquote:border-l-4 prose-blockquote:border-tech-green prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-li:marker:text-tech-green prose-li:mb-1 prose-table:border-collapse prose-table:w-full prose-td:border prose-td:p-2 prose-th:border prose-th:p-2 prose-th:bg-gray-100">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>

            {/* Email Capture Form */}
            {(post.id === 1 || post.id === 2 || post.id === 3 || post.id === 4 || post.id === 5 || post.id === 6 || post.id === 7 || post.id === 8 || post.id === 9 || post.id === 10 || post.id === 11 || post.id === 12 || post.id === 13 || post.id === 14 || post.id === 15 || post.id === 16 || post.id === 17 || post.id === 18) && (
              <div className="mt-12 p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <div className="space-y-5">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-center mb-3">
                      Want to Learn More?
                    </h3>
                    <Input 
                      type="email" 
                      placeholder="Your Email Address" 
                      className={`w-full ${showEmailAlert ? 'border-red-500 focus:ring-red-500' : ''}`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value) setShowEmailAlert(false);
                      }}
                    />
                    
                    <p className={`text-xs mt-1 italic ${showEmailAlert ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                      Please enter your email address to receive a free demo and ROI calculator services.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Button 
                      className="bg-tech-green hover:bg-tech-green/90 text-white w-full"
                      onClick={() => handleActionButtonClick('/contact')}
                    >
                      Book a Free Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-tech-blue-light text-tech-blue-light hover:bg-tech-blue-light/10"
                      onClick={() => handleActionButtonClick('/roi-calculator')}
                    >
                      Try ROI Calculator
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-between items-center border-t pt-6">
              <Button onClick={() => navigate("/blog")} variant="outline">
                Back to Blog
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm">Share:</span>
                <Button variant="ghost" size="sm" className="p-2" onClick={handleTwitterShare}>
                  <FaTwitter />
                </Button>
                <Button variant="ghost" size="sm" className="p-2" onClick={handleInstagramShare}>
                  <FaInstagram />
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost; 