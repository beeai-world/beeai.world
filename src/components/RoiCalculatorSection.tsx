import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const RoiCalculatorSection = () => {
  const { toast } = useToast();
  const [solution, setSolution] = useState("chatbot");
  const [monthlySalary, setMonthlySalary] = useState(30000);
  const [employeeCount, setEmployeeCount] = useState(3);
  const [systemCost, setSystemCost] = useState(200000);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate ROI statistics
  const totalMonthlyCost = monthlySalary * employeeCount;
  const annualLaborCost = totalMonthlyCost * 12;
  const paybackPeriod = systemCost / totalMonthlyCost;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      setShowResults(true);
      setShowReportForm(true);
      setIsCalculating(false);
    }, 1000);
  };

  const handleRequestReport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      toast({
        title: "Report request submitted!",
        description: "We will send your personalized business analysis report shortly.",
      });
    }, 1500);
  };

  const resetCalculator = () => {
    setMonthlySalary(30000);
    setEmployeeCount(3);
    setSystemCost(200000);
    setEmail("");
    setPhone("");
    setShowResults(false);
    setShowReportForm(false);
    setFormSubmitted(false);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text mb-4">Calculate Your Savings & ROI</h2>
          <p className="text-lg text-muted-foreground">
            See how our AI&Robotics solutions can reduce costs and deliver return on investment for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>ROI Calculator</CardTitle>
              <CardDescription>
                Select an AI & Robotics solution and input your data to calculate potential savings and ROI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="solution">Choose Your Solution</Label>
                  <Select 
                    value={solution} 
                    onValueChange={setSolution}
                    disabled={showResults}
                  >
                    <SelectTrigger id="solution" className="w-full">
                      <SelectValue placeholder="Select AI Solution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chatbot">Chatbot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {solution === "chatbot" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Our AI Chatbot can work 24/7 to replace up to 3 information desk employees, 
                        significantly reducing your labor costs and boosting customer satisfaction.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="monthlySalary">Monthly Salary per Employee (TRY)</Label>
                        <Input
                          id="monthlySalary"
                          type="number"
                          min="1"
                          value={monthlySalary}
                          onChange={(e) => setMonthlySalary(parseInt(e.target.value) || 0)}
                          disabled={showResults}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="employeeCount">Number of Information Desk Employees</Label>
                        <Input
                          id="employeeCount"
                          type="number"
                          min="1"
                          max="10"
                          value={employeeCount}
                          onChange={(e) => setEmployeeCount(parseInt(e.target.value) || 0)}
                          disabled={showResults}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="systemCost">
                        Chatbot System Cost (TRY, one-time payment)
                      </Label>
                      <Input
                        id="systemCost"
                        type="number"
                        min="1"
                        value={systemCost}
                        onChange={(e) => setSystemCost(parseInt(e.target.value) || 0)}
                        disabled={showResults}
                        required
                      />
                    </div>
                  </>
                )}

                {!showResults && (
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-green hover:bg-tech-green/90"
                    disabled={isCalculating}
                  >
                    {isCalculating ? "Calculating..." : "Calculate Savings & ROI"}
                  </Button>
                )}
              </form>

              {/* Results Section */}
              {showResults && (
                <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">Your Potential Savings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Monthly Labor Cost</p>
                      <p className="text-2xl font-bold text-tech-green">
                        {totalMonthlyCost.toLocaleString()} TRY
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Annual Labor Cost</p>
                      <p className="text-2xl font-bold text-tech-green">
                        {annualLaborCost.toLocaleString()} TRY
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6 p-4 bg-tech-green/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">ROI Payback Period</p>
                    <p className="text-3xl font-bold text-tech-green">
                      {paybackPeriod.toFixed(1)} Months
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      Based on your inputs, the Chatbot system will pay for itself in approximately 
                      <strong> {paybackPeriod.toFixed(1)} months</strong>, with a potential annual 
                      savings of <strong>{annualLaborCost.toLocaleString()} TRY</strong>.
                    </p>
                  </div>
                  
                  <Button 
                    onClick={resetCalculator}
                    variant="outline" 
                    className="w-full"
                  >
                    Reset Calculator
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Report Request Form */}
          {showReportForm && !formSubmitted && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Get a Free Detailed Business Analysis</CardTitle>
                <CardDescription>
                  Installing a Chatbot not only reduces your costs but also increases your sales and customer satisfaction. 
                  We can provide you with a free detailed business analysis report about chatbot installation, 
                  maintenance costs, and expected sales growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRequestReport} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-green hover:bg-tech-green/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Detailed Report"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Form Submitted Success Message */}
          {formSubmitted && (
            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We will send your personalized business analysis report shortly.
                  </p>
                </div>
                <Button 
                  onClick={resetCalculator}
                  variant="outline" 
                  className="w-full"
                >
                  Calculate Another Scenario
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default RoiCalculatorSection; 