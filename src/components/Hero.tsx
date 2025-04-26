import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRoiClick = () => {
    window.open('https://calendly.com/bahadirciloglu/account-manager-b2b-seller', '_blank');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#008080] to-[#008080]/60 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-tech-green/20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-tech-blue-light/10 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-tech-green/10 animate-pulse-light"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY3IDIuMTk4IDIuMlYyMmgzLjYwNGMxLjIzIDAgMi4xOTguOTY3IDIuMTk4IDIuMnMtLjk2NyAyLjItMi4xOTggMi4ySDM4LjJ2My42YzAgMS4yMzQtLjk2OCAyLjItMi4yIDIuMi0xLjIzIDAtMi4yLS45NjYtMi4yLTIuMlYyNi40aC0zLjZjLTEuMjMyIDAtMi4yLS45NjYtMi4yLTIuMnMuOTY4LTIuMiAyLjItMi4yaDMuNnYtMS44YzAtMS4yMzMuOTctMi4yIDIuMi0yLjJ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>
      </div>
      
      <div className="relative min-h-[90vh] flex items-center z-10">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-fade-up opacity-0 [animation-delay:300ms] text-white">
              Shaping the Future of Hospitality 
              <span className="block text-tech-blue font-bold mt-2 text-3xl">
                Smart Solutions to Cut Costs and Delight Guests
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 animate-fade-up opacity-0 [animation-delay:600ms] text-white">
              I use AI and robotics to optimize your hospitality business operations, maximize productivity, and enhance every guest interaction.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center animate-fade-up opacity-0 [animation-delay:900ms]">
              <Button 
                className="bg-[#C0C0C0] hover:bg-[#C0C0C0]/90 text-gray-900 font-bold text-lg px-8 py-6"
                onClick={handleExploreClick}
              >
                Explore Solutions
              </Button>
              <Button 
                variant="outline" 
                className="border-white bg-transparent text-white font-bold text-lg px-8 py-6 hover:bg-white/10"
                onClick={handleRoiClick}
              >
                Calculate Your Savings & ROI
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
