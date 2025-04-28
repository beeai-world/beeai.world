import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from 'react-markdown';

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
    title: "Placeholder Blog Post 5",
    excerpt: "This is placeholder content for blog post 5.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "December 15, 2024",
    category: "Placeholder",
    image: "/images/blog/5.jpg"
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
  const handleActionButtonClick = (destination: string) => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      // Instead of showing a toast, set state to show our inline alert more prominently
      setShowEmailAlert(true);
      return;
    }
    
    // Here you would typically save the email to your database
    console.log('Email submitted:', email);
    
    // If destination is contact, open Calendly
    if (destination === '/contact') {
      window.open('https://calendly.com/bahadir-beeai/30min', '_blank');
    } else {
      // Navigate to other destinations
      navigate(destination);
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
    <div>
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
            
            <div className="prose prose-lg max-w-none prose-headings:text-tech-blue prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-8 prose-p:text-gray-700 prose-a:text-tech-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-tech-blue-light prose-strong:font-semibold prose-blockquote:border-l-4 prose-blockquote:border-tech-green prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-li:marker:text-tech-green prose-li:mb-1">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Email Capture Form */}
            {(post.id === 1 || post.id === 2 || post.id === 3 || post.id === 4 || post.id === 7) && (
              <div className="mt-12 p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <div className="space-y-5">
                  <div className="max-w-md mx-auto">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </Button>
                <Button variant="ghost" size="sm" className="p-2" onClick={handleInstagramShare}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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