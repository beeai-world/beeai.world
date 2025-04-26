import { Shield, FileCheck, Lock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ComplianceSection = () => {
  return (
    <section id="compliance" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text mb-4">Compliance & Security</h2>
          <p className="text-lg text-muted-foreground">
            My "Compliance by Design" philosophy ensures that every solution I deliver meets
            regulatory requirements and industry standards from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-tech-green" />
              <h3 className="text-xl font-semibold ml-3">AI Governance</h3>
            </div>
            <p className="text-muted-foreground">
              My AI solutions are built to be transparent, explainable, and fair. We adhere to
              emerging standards for responsible AI development and deployment.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <FileCheck className="h-8 w-8 text-tech-green" />
              <h3 className="text-xl font-semibold ml-3">Robotics Safety</h3>
            </div>
            <p className="text-muted-foreground">
              All robotics systems comply with ISO/TS 15066 and relevant safety standards,
              ensuring safe human-robot collaboration in any environment.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Lock className="h-8 w-8 text-tech-green" />
              <h3 className="text-xl font-semibold ml-3">Data Protection</h3>
            </div>
            <p className="text-muted-foreground">
              I implement robust data security measures and comply with GDPR, CCPA, HIPAA,
              and other relevant data protection regulations.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Sectors within the Hospitality Industry</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <Accordion type="single" collapsible className="w-full mb-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Accommodation Sector</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hotels (Luxury, Budget, Boutique)</li>
                    <li>Resorts and Spas</li>
                    <li>Bed & Breakfasts</li>
                    <li>Hostels</li>
                    <li>Vacation Rentals (Airbnb, Vrbo)</li>
                    <li>Serviced Apartments</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Food and Beverage Sector</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Restaurants (Fine Dining, Casual Dining, Fast Food)</li>
                    <li>Cafés and Coffee Shops</li>
                    <li>Catering Services</li>
                    <li>Bars, Pubs, and Clubs</li>
                    <li>Room Service and In-Room Dining</li>
                    <li>Food Trucks and Street Food</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Travel and Tourism Sector</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Tour Operators</li>
                    <li>Travel Agencies</li>
                    <li>Destination Management Companies (DMCs)</li>
                    <li>Cruise Lines</li>
                    <li>Travel Concierge Services</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">Event Management and Meetings</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Conferences, Exhibitions, and Conventions</li>
                    <li>Wedding Planning and Event Services</li>
                    <li>Corporate Meetings and Incentives (MICE)</li>
                    <li>Trade Shows</li>
                    <li>Festivals and Public Events</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
 
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">Recreational and Entertainment Sector</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Amusement Parks and Theme Parks</li>
                    <li>Casinos and Gaming</li>
                    <li>Sports Facilities and Clubs</li>
                    <li>Theaters and Cinemas</li>
                    <li>Cultural and Art Centers</li>
                    <li>Nightlife (Clubs, Lounges)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg">Wellness and Health Sector</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Spas and Wellness Centers</li>
                    <li>Health Resorts and Retreats</li>
                    <li>Yoga and Meditation Centers</li>
                    <li>Fitness Clubs and Gyms</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
 
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg">Travel and Transportation Sector</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Airlines</li>
                    <li>Trains and Rail Services</li>
                    <li>Car Rentals and Ride-Sharing (Uber, Lyft)</li>
                    <li>Cruise Ships and Ferries</li>
                    <li>Shuttle Services</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
 
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg">Technology and Hospitality Solutions</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hospitality Software Providers (Property Management Systems, Reservation Systems)</li>
                    <li>AI and Automation Solutions</li>
                    <li>Digital Concierge Services</li>
                    <li>Guest Experience Platforms (Mobile Apps, Chatbots)</li>
                    <li>Smart Hotels and IoT Integration</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
 
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg">Luxury and Niche Hospitality</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Private Villas and Luxury Homes</li>
                    <li>Glamping (Glamorous Camping)</li>
                    <li>Eco-friendly and Sustainable Hospitality</li>
                    <li>Boutique Hotels</li>
                    <li>Adventure Tourism (Safari Lodges, Eco-Tourism)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
 
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-lg">Corporate and Business Travel</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Business Hotels</li>
                    <li>Corporate Housing</li>
                    <li>Meeting and Event Venues</li>
                    <li>Corporate Travel Agencies</li>
                    <li>Airport Lounges and Services</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
