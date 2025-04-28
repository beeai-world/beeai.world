import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

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
  }
];

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
      </div>
    </section>
  );
};

export default BlogSection; 