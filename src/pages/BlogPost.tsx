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
  // Placeholders for Posts 4 to 19 (IDs 2-3 were removed)
  {
    id: 4,
    title: "Placeholder Blog Post 4",
    excerpt: "This is placeholder content for blog post 4.",
    content: "Loading content...",
    author: "Bahadır Çiloğlu",
    date: "December 16, 2024",
    category: "Placeholder",
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
          throw new Error(`Failed to fetch blog post content: ${response.status}`);
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
    
    // Navigate to the destination
    navigate(destination);
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
          
          <article className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            
            <div className="relative h-80 mb-8 bg-gray-200 rounded-md overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Email Capture Form */}
            {post.id === 1 && (
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <div className="space-y-4">
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
                  
                  {/* Alert message between email input and buttons */}
                  <div className={`bg-amber-50 border ${showEmailAlert ? 'border-red-500 bg-red-50 text-red-800' : 'border-amber-200 text-amber-800'} p-3 rounded-md text-center text-sm`}>
                    {showEmailAlert ? 'Please enter a valid email address to continue' : 'Please enter your email address to access these resources'}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-tech-green hover:bg-tech-green/90 text-white w-full"
                      onClick={() => handleActionButtonClick('/contact')}
                    >
                      Book a Free Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleActionButtonClick('/roi-calculator')}
                    >
                      Try ROI Calculator
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    By providing your email, you agree to receive occasional updates about hospitality technology solutions. 
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-between items-center">
              <Button onClick={() => navigate("/blog")} variant="outline">
                Back to Blog
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm">Share:</span>
                <Button variant="ghost" size="sm" className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
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