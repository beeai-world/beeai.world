import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  }
];

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const { toast } = useToast();
  const navigate = useNavigate();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "all" || 
      post.category.toLowerCase().includes(activeCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from blog posts
  const categories = ["all", ...new Set(blogPosts.map(post => post.category.toLowerCase()))];

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
            placeholder="Search articles or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <Tabs 
          defaultValue="all" 
          className="w-full mb-8"
          value={activeCategory}
          onValueChange={setActiveCategory}
        >
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-5">
            {categories.slice(0, 5).map((category, index) => (
              <TabsTrigger 
                key={index} 
                value={category}
                className="capitalize"
              >
                {category === "all" ? "All" : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

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
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No blog posts found matching your search criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection; 