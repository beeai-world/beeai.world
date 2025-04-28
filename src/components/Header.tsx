import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleConsultationClick = () => {
    window.location.href = "/blog";
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleRoiClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://calendly.com/bahadir-beeai/30min', '_blank');
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/logo.svg" alt="AI & Robotics Studio" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              onClick={handleConsultationClick}
              className="text-gray-700 hover:text-tech-blue transition-colors"
            >
              
            </a>
            <a
              href="#"
              onClick={handleRoiClick}
              className="bg-tech-blue text-white px-6 py-2 rounded-full hover:bg-tech-blue/90 transition-colors cursor-pointer"
            >
              Book a Free Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-tech-blue focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 py-4">
            <a
              href="#"
              onClick={handleConsultationClick}
              className="block px-4 py-2 text-gray-700 hover:text-tech-blue transition-colors"
            >
              
            </a>
            <a
              href="#"
              onClick={handleRoiClick}
              className="block px-4 py-2 mt-2 bg-tech-blue text-white hover:bg-tech-blue/90 transition-colors"
            >
              Book a Free Demo
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
