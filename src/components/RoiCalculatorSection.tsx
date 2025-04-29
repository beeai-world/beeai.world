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
  
  // Chatbot variables
  const [monthlySalary, setMonthlySalary] = useState(30000);
  const [employeeCount, setEmployeeCount] = useState(3);
  const [systemCost, setSystemCost] = useState(200000);
  
  // Voice Assistant variables
  const [receptionistSalary, setReceptionistSalary] = useState(25000);
  const [receptionistCount, setReceptionistCount] = useState(2);
  const [voiceSystemCost, setVoiceSystemCost] = useState(150000);
  const [voiceMaintenanceCost, setVoiceMaintenanceCost] = useState(5000);
  
  // AI Virtual Concierge variables
  const [conciergeEmployeeSalary, setConciergeEmployeeSalary] = useState(25000);
  const [conciergeEmployeeCount, setConciergeEmployeeCount] = useState(2);
  const [conciergeSystemCost, setConciergeSystemCost] = useState(150000);
  const [conciergeMaintenanceCost, setConciergeMaintenanceCost] = useState(5000);
  
  // AI Usage Training variables
  const [trainedEmployees, setTrainedEmployees] = useState(10);
  const [timeSavedPerDay, setTimeSavedPerDay] = useState(1);
  const [hourlyWage, setHourlyWage] = useState(200);
  const [trainingCostPerEmployee, setTrainingCostPerEmployee] = useState(5000);
  
  // Role-Based System Integration Training variables
  const [traineesCount, setTraineesCount] = useState(5);
  const [costPerTraining, setCostPerTraining] = useState(10000);
  const [monthlySupportCost, setMonthlySupportCost] = useState(20000);
  const [supportCostReduction, setSupportCostReduction] = useState(40);
  
  // Certification Programs variables
  const [participantsCount, setParticipantsCount] = useState(5);
  const [costPerCertificate, setCostPerCertificate] = useState(8000);
  const [avgProjectCost, setAvgProjectCost] = useState(100000);
  const [projectEfficiency, setProjectEfficiency] = useState(15);
  const [projectsPerYear, setProjectsPerYear] = useState(4);
  
  // Service Robot Integration variables
  const [laborCostReplaced, setLaborCostReplaced] = useState(20000);
  const [robotCount, setRobotCount] = useState(2);
  const [robotCost, setRobotCost] = useState(250000);
  const [robotMaintenance, setRobotMaintenance] = useState(5000);
  
  // Cleaning Robot Integration variables
  const [cleaningLaborCost, setCleaningLaborCost] = useState(20000);
  const [cleaningRobotCount, setCleaningRobotCount] = useState(2);
  const [cleaningRobotCost, setCleaningRobotCost] = useState(250000);
  const [cleaningRobotMaintenance, setCleaningRobotMaintenance] = useState(5000);
  
  // Safety Inspection variables
  const [inspectionCost, setInspectionCost] = useState(15000);
  const [riskReduction, setRiskReduction] = useState(30);
  const [inspectionSystemCost, setInspectionSystemCost] = useState(200000);
  const [aiSubscription, setAiSubscription] = useState(10000);
  
  // Inventory Monitoring variables
  const [inventoryLaborCost, setInventoryLaborCost] = useState(18000);
  const [inventoryZones, setInventoryZones] = useState(5);
  const [inventorySystemCost, setInventorySystemCost] = useState(180000);
  const [inventoryMaintenance, setInventoryMaintenance] = useState(6000);
  
  // Facility Checks variables
  const [auditCost, setAuditCost] = useState(12000);
  const [auditedZones, setAuditedZones] = useState(8);
  const [facilitySystemCost, setFacilitySystemCost] = useState(220000);
  const [aiProcessingCost, setAiProcessingCost] = useState(7500);
  
  // Indoor Mapping variables
  const [mappingCost, setMappingCost] = useState(80000);
  const [mappingUpdates, setMappingUpdates] = useState(2);
  const [setupCost, setSetupCost] = useState(150000);
  const [mappingSoftwareCost, setMappingSoftwareCost] = useState(8000);
  
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate ROI statistics based on selected solution
  // Chatbot calculations
  const totalMonthlyCost = monthlySalary * employeeCount;
  const annualLaborCost = totalMonthlyCost * 12;
  const chatbotPaybackPeriod = systemCost / totalMonthlyCost;
  
  // Voice Assistant calculations
  const voiceMonthlySavings = receptionistSalary * receptionistCount;
  const voiceAnnualSavings = voiceMonthlySavings * 12;
  const voiceTotalCost = voiceSystemCost + (voiceMaintenanceCost * 12);
  const voiceRoi = voiceAnnualSavings > voiceTotalCost ? 
    ((voiceAnnualSavings - voiceTotalCost) / voiceTotalCost) * 100 : 0;
  const voicePaybackPeriod = voiceSystemCost / (voiceMonthlySavings - voiceMaintenanceCost);
  
  // AI Virtual Concierge calculations
  const conciergeMonthlySavings = conciergeEmployeeSalary * conciergeEmployeeCount;
  const conciergeAnnualSavings = conciergeMonthlySavings * 12;
  const conciergeTotalCost = conciergeSystemCost + (conciergeMaintenanceCost * 12);
  const conciergeRoi = conciergeAnnualSavings > conciergeTotalCost ? 
    ((conciergeAnnualSavings - conciergeTotalCost) / conciergeTotalCost) * 100 : 0;
  const conciergePaybackPeriod = conciergeSystemCost / (conciergeMonthlySavings - conciergeMaintenanceCost);
  
  // AI Usage Training calculations
  const monthlyTimeSaved = trainedEmployees * timeSavedPerDay * 30; // hours per month
  const monthlyValueSaved = monthlyTimeSaved * hourlyWage;
  const annualValueSaved = monthlyValueSaved * 12;
  const trainingTotalCost = trainingCostPerEmployee * trainedEmployees;
  const trainingRoi = ((annualValueSaved - trainingTotalCost) / trainingTotalCost) * 100;
  const trainingPaybackPeriod = trainingTotalCost / monthlyValueSaved;
  
  // Role-Based System Integration Training calculations
  const integrationMonthlySavings = monthlySupportCost * (supportCostReduction / 100);
  const integrationAnnualSavings = integrationMonthlySavings * 12;
  const integrationTotalCost = costPerTraining * traineesCount;
  const integrationRoi = ((integrationAnnualSavings - integrationTotalCost) / integrationTotalCost) * 100;
  const integrationPaybackPeriod = integrationTotalCost / integrationMonthlySavings;
  
  // Certification Programs calculations
  const certificationAnnualGain = avgProjectCost * (projectEfficiency / 100) * projectsPerYear;
  const certificationTotalCost = participantsCount * costPerCertificate;
  const certificationRoi = ((certificationAnnualGain - certificationTotalCost) / certificationTotalCost) * 100;
  const certificationPaybackPeriod = (certificationTotalCost / certificationAnnualGain) * 12;
  
  // Service Robot Integration calculations
  const robotMonthlySavings = laborCostReplaced;
  const robotAnnualSavings = robotMonthlySavings * 12;
  const robotTotalCost = (robotCost + (robotMaintenance * 12)) * robotCount;
  const robotRoi = ((robotAnnualSavings - robotTotalCost) / robotTotalCost) * 100;
  const robotPaybackPeriod = (robotCost * robotCount) / (robotMonthlySavings - (robotMaintenance * robotCount));
  
  // Cleaning Robot Integration calculations
  const cleaningMonthlySavings = cleaningLaborCost;
  const cleaningAnnualSavings = cleaningMonthlySavings * 12;
  const cleaningTotalCost = (cleaningRobotCost + (cleaningRobotMaintenance * 12)) * cleaningRobotCount;
  const cleaningRoi = ((cleaningAnnualSavings - cleaningTotalCost) / cleaningTotalCost) * 100;
  const cleaningPaybackPeriod = (cleaningRobotCost * cleaningRobotCount) / (cleaningMonthlySavings - (cleaningRobotMaintenance * cleaningRobotCount));
  
  // Safety Inspection calculations
  const inspectionMonthlySavings = inspectionCost * (riskReduction / 100);
  const inspectionAnnualSavings = inspectionMonthlySavings * 12;
  const inspectionTotalCost = inspectionSystemCost + (aiSubscription * 12);
  const inspectionRoi = ((inspectionAnnualSavings - inspectionTotalCost) / inspectionTotalCost) * 100;
  const inspectionPaybackPeriod = inspectionSystemCost / (inspectionMonthlySavings - aiSubscription);
  
  // Inventory Monitoring calculations
  const inventoryMonthlySavings = inventoryLaborCost;
  const inventoryAnnualSavings = inventoryMonthlySavings * 12;
  const inventoryTotalCost = inventorySystemCost + (inventoryMaintenance * 12);
  const inventoryRoi = ((inventoryAnnualSavings - inventoryTotalCost) / inventoryTotalCost) * 100;
  const inventoryPaybackPeriod = inventorySystemCost / (inventoryMonthlySavings - inventoryMaintenance);
  
  // Facility Checks calculations
  const facilityMonthlySavings = auditCost;
  const facilityAnnualSavings = facilityMonthlySavings * 12;
  const facilityTotalCost = facilitySystemCost + (aiProcessingCost * 12);
  const facilityRoi = ((facilityAnnualSavings - facilityTotalCost) / facilityTotalCost) * 100;
  const facilityPaybackPeriod = facilitySystemCost / (facilityMonthlySavings - aiProcessingCost);
  
  // Indoor Mapping calculations
  const mappingAnnualSavings = mappingCost * mappingUpdates;
  const mappingTotalCost = setupCost + (mappingSoftwareCost * 12);
  const mappingRoi = ((mappingAnnualSavings - mappingTotalCost) / mappingTotalCost) * 100;
  const mappingPaybackPeriod = setupCost / ((mappingAnnualSavings / 12) - mappingSoftwareCost);

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
    // Reset Chatbot variables
    setMonthlySalary(30000);
    setEmployeeCount(3);
    setSystemCost(200000);
    
    // Reset Voice Assistant variables
    setReceptionistSalary(25000);
    setReceptionistCount(2);
    setVoiceSystemCost(150000);
    setVoiceMaintenanceCost(5000);
    
    // Reset AI Virtual Concierge variables
    setConciergeEmployeeSalary(25000);
    setConciergeEmployeeCount(2);
    setConciergeSystemCost(150000);
    setConciergeMaintenanceCost(5000);
    
    // Reset AI Usage Training variables
    setTrainedEmployees(10);
    setTimeSavedPerDay(1);
    setHourlyWage(200);
    setTrainingCostPerEmployee(5000);
    
    // Reset Role-Based System Integration Training variables
    setTraineesCount(5);
    setCostPerTraining(10000);
    setMonthlySupportCost(20000);
    setSupportCostReduction(40);
    
    // Reset Certification Programs variables
    setParticipantsCount(5);
    setCostPerCertificate(8000);
    setAvgProjectCost(100000);
    setProjectEfficiency(15);
    setProjectsPerYear(4);
    
    // Reset Service Robot Integration variables
    setLaborCostReplaced(20000);
    setRobotCount(2);
    setRobotCost(250000);
    setRobotMaintenance(5000);
    
    // Reset Cleaning Robot Integration variables
    setCleaningLaborCost(20000);
    setCleaningRobotCount(2);
    setCleaningRobotCost(250000);
    setCleaningRobotMaintenance(5000);
    
    // Reset Safety Inspection variables
    setInspectionCost(15000);
    setRiskReduction(30);
    setInspectionSystemCost(200000);
    setAiSubscription(10000);
    
    // Reset Inventory Monitoring variables
    setInventoryLaborCost(18000);
    setInventoryZones(5);
    setInventorySystemCost(180000);
    setInventoryMaintenance(6000);
    
    // Reset Facility Checks variables
    setAuditCost(12000);
    setAuditedZones(8);
    setFacilitySystemCost(220000);
    setAiProcessingCost(7500);
    
    // Reset Indoor Mapping variables
    setMappingCost(80000);
    setMappingUpdates(2);
    setSetupCost(150000);
    setMappingSoftwareCost(8000);
    
    // Reset form state
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
                      <SelectItem value="voice-assistant">Voice Assistant</SelectItem>
                      <SelectItem value="ai-usage-training">AI Usage Training</SelectItem>
                      <SelectItem value="system-integration-training">Role-Based System Integration Training</SelectItem>
                      <SelectItem value="certification-programs">Certification Programs</SelectItem>
                      <SelectItem value="virtual-concierge">AI Virtual Concierge</SelectItem>
                      <SelectItem value="service-robot">Service Robot Integration</SelectItem>
                      <SelectItem value="cleaning-robot">Cleaning Robot Integration</SelectItem>
                      <SelectItem value="safety-inspection">Safety, Maintenance & Asset Inspection</SelectItem>
                      <SelectItem value="inventory-monitoring">Inventory & Supplies Monitoring</SelectItem>
                      <SelectItem value="facility-checks">Facility Cleanliness & Compliance Checks</SelectItem>
                      <SelectItem value="indoor-mapping">Indoor Mapping & Digital Twin Creation</SelectItem>
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
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={monthlySalary || ""}
                          onChange={(e) => setMonthlySalary(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="employeeCount">Number of Information Desk Employees</Label>
                        <Input
                          id="employeeCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={employeeCount || ""}
                          onChange={(e) => setEmployeeCount(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="systemCost">
                        Chatbot System Cost (TRY, one-time payment)
                      </Label>
                      <Input
                        id="systemCost"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={systemCost || ""}
                        onChange={(e) => setSystemCost(e.target.value ? parseInt(e.target.value) : undefined)}
                        disabled={showResults}
                        required
                        placeholder="Enter value"
                      />
                    </div>
                  </>
                )}

                {solution === "voice-assistant" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Our Voice Assistant can handle guest inquiries 24/7, offering faster service
                        while reducing the need for reception staff, particularly during night shifts.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="receptionistSalary">Monthly Salary per Receptionist (TRY)</Label>
                        <Input
                          id="receptionistSalary"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={receptionistSalary || ""}
                          onChange={(e) => setReceptionistSalary(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="receptionistCount">Number of Receptionists</Label>
                        <Input
                          id="receptionistCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={receptionistCount || ""}
                          onChange={(e) => setReceptionistCount(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="voiceSystemCost">
                          Voice Assistant System Cost (TRY, one-time)
                        </Label>
                        <Input
                          id="voiceSystemCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={voiceSystemCost || ""}
                          onChange={(e) => setVoiceSystemCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="voiceMaintenanceCost">
                          Monthly Maintenance Cost (TRY)
                        </Label>
                        <Input
                          id="voiceMaintenanceCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={voiceMaintenanceCost || ""}
                          onChange={(e) => setVoiceMaintenanceCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "virtual-concierge" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Our AI Virtual Concierge assists guests 24/7, reducing front desk load and elevating guest experience.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="conciergeEmployeeSalary">Monthly Salary per Front Desk Employee (TRY)</Label>
                        <Input
                          id="conciergeEmployeeSalary"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={conciergeEmployeeSalary || ""}
                          onChange={(e) => setConciergeEmployeeSalary(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="conciergeEmployeeCount">Number of Front Desk Employees Replaced</Label>
                        <Input
                          id="conciergeEmployeeCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={conciergeEmployeeCount || ""}
                          onChange={(e) => setConciergeEmployeeCount(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="conciergeSystemCost">
                          AI Virtual Concierge System Cost (TRY, one-time)
                        </Label>
                        <Input
                          id="conciergeSystemCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={conciergeSystemCost || ""}
                          onChange={(e) => setConciergeSystemCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="conciergeMaintenanceCost">
                          Monthly Maintenance Cost (TRY)
                        </Label>
                        <Input
                          id="conciergeMaintenanceCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={conciergeMaintenanceCost || ""}
                          onChange={(e) => setConciergeMaintenanceCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "ai-usage-training" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Proper AI usage training empowers your staff to leverage AI tools effectively,
                        saving significant time on daily tasks and boosting overall productivity.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="trainedEmployees">Number of Employees Trained</Label>
                        <Input
                          id="trainedEmployees"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={trainedEmployees || ""}
                          onChange={(e) => setTrainedEmployees(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeSavedPerDay">Time Saved per Day (hours)</Label>
                        <Input
                          id="timeSavedPerDay"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={timeSavedPerDay || ""}
                          onChange={(e) => setTimeSavedPerDay(e.target.value ? parseFloat(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="hourlyWage">
                          Average Hourly Wage (TRY)
                        </Label>
                        <Input
                          id="hourlyWage"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={hourlyWage || ""}
                          onChange={(e) => setHourlyWage(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="trainingCostPerEmployee">
                          Training Cost per Employee (TRY)
                        </Label>
                        <Input
                          id="trainingCostPerEmployee"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={trainingCostPerEmployee || ""}
                          onChange={(e) => setTrainingCostPerEmployee(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "system-integration-training" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Role-Based System Integration Training reduces dependency on external support 
                        and empowers your team to manage and optimize systems independently, leading to 
                        significant cost savings and improved operational efficiency.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="traineesCount">Number of Trainees</Label>
                        <Input
                          id="traineesCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={traineesCount || ""}
                          onChange={(e) => setTraineesCount(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="costPerTraining">Cost per Training (TRY)</Label>
                        <Input
                          id="costPerTraining"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={costPerTraining || ""}
                          onChange={(e) => setCostPerTraining(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="monthlySupportCost">
                          Monthly External Support Cost Before Training (TRY)
                        </Label>
                        <Input
                          id="monthlySupportCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={monthlySupportCost || ""}
                          onChange={(e) => setMonthlySupportCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="supportCostReduction">
                          Expected Reduction in External Support Cost (%)
                        </Label>
                        <Input
                          id="supportCostReduction"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={supportCostReduction || ""}
                          onChange={(e) => setSupportCostReduction(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "certification-programs" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Industry-recognized certification programs improve your team's expertise,
                        resulting in more efficient project execution, reduced errors, and higher quality results.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="participantsCount">Number of Participants</Label>
                        <Input
                          id="participantsCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={participantsCount || ""}
                          onChange={(e) => setParticipantsCount(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="costPerCertificate">Cost per Certificate (TRY)</Label>
                        <Input
                          id="costPerCertificate"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={costPerCertificate || ""}
                          onChange={(e) => setCostPerCertificate(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="avgProjectCost">
                          Avg. Project Cost Before Certification (TRY)
                        </Label>
                        <Input
                          id="avgProjectCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={avgProjectCost || ""}
                          onChange={(e) => setAvgProjectCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectEfficiency">
                          Increase in Project Efficiency (%)
                        </Label>
                        <Input
                          id="projectEfficiency"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={projectEfficiency || ""}
                          onChange={(e) => setProjectEfficiency(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="projectsPerYear">
                          Projects per Year
                        </Label>
                        <Input
                          id="projectsPerYear"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={projectsPerYear || ""}
                          onChange={(e) => setProjectsPerYear(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "service-robot" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Service robots can automate repetitive tasks, work around the clock, and reduce labor costs while improving operational efficiency.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="laborCostReplaced">Monthly Labor Cost Replaced (TRY)</Label>
                        <Input
                          id="laborCostReplaced"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={laborCostReplaced || ""}
                          onChange={(e) => setLaborCostReplaced(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="robotCount">Number of Robots</Label>
                        <Input
                          id="robotCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={robotCount || ""}
                          onChange={(e) => setRobotCount(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="robotCost">
                          Robot Cost (TRY, per robot)
                        </Label>
                        <Input
                          id="robotCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={robotCost || ""}
                          onChange={(e) => setRobotCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="robotMaintenance">
                          Monthly Maintenance per Robot (TRY)
                        </Label>
                        <Input
                          id="robotMaintenance"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={robotMaintenance || ""}
                          onChange={(e) => setRobotMaintenance(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "cleaning-robot" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Our Cleaning Robots automate routine cleaning tasks, reducing manual labor and improving hygiene consistency in your facility.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="cleaningLaborCost">Monthly Labor Cost Replaced (TRY)</Label>
                        <Input
                          id="cleaningLaborCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={cleaningLaborCost || ""}
                          onChange={(e) => setCleaningLaborCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cleaningRobotCount">Number of Cleaning Robots</Label>
                        <Input
                          id="cleaningRobotCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={cleaningRobotCount || ""}
                          onChange={(e) => setCleaningRobotCount(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="cleaningRobotCost">
                          Cleaning Robot Cost (TRY, one-time)
                        </Label>
                        <Input
                          id="cleaningRobotCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={cleaningRobotCost || ""}
                          onChange={(e) => setCleaningRobotCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cleaningRobotMaintenance">
                          Monthly Maintenance per Robot (TRY)
                        </Label>
                        <Input
                          id="cleaningRobotMaintenance"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={cleaningRobotMaintenance || ""}
                          onChange={(e) => setCleaningRobotMaintenance(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "safety-inspection" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Drones perform scheduled inspections to detect early-stage risks and reduce manual inspection costs.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="inspectionCost">Monthly Manual Inspection Cost (TRY)</Label>
                        <Input
                          id="inspectionCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={inspectionCost || ""}
                          onChange={(e) => setInspectionCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="riskReduction">Expected Risk Reduction (%)</Label>
                        <Input
                          id="riskReduction"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={riskReduction || ""}
                          onChange={(e) => setRiskReduction(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="inspectionSystemCost">
                          One-Time Drone System Cost (TRY)
                        </Label>
                        <Input
                          id="inspectionSystemCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={inspectionSystemCost || ""}
                          onChange={(e) => setInspectionSystemCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="aiSubscription">
                          Monthly AI Analysis Subscription (TRY)
                        </Label>
                        <Input
                          id="aiSubscription"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={aiSubscription || ""}
                          onChange={(e) => setAiSubscription(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "inventory-monitoring" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Drone automates stock checks, minimizing manual labor.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="inventoryLaborCost">Monthly Inventory Labor Cost (TRY)</Label>
                        <Input
                          id="inventoryLaborCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={inventoryLaborCost || ""}
                          onChange={(e) => setInventoryLaborCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inventoryZones">Number of Inventory Zones</Label>
                        <Input
                          id="inventoryZones"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={inventoryZones || ""}
                          onChange={(e) => setInventoryZones(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="inventorySystemCost">
                          Drone System Cost (TRY, one-time)
                        </Label>
                        <Input
                          id="inventorySystemCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={inventorySystemCost || ""}
                          onChange={(e) => setInventorySystemCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inventoryMaintenance">
                          Monthly Maintenance (TRY)
                        </Label>
                        <Input
                          id="inventoryMaintenance"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={inventoryMaintenance || ""}
                          onChange={(e) => setInventoryMaintenance(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </>
                )}

                {solution === "facility-checks" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Facility checks are crucial for ensuring the cleanliness and compliance of your facility.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="auditCost">Monthly Audit Cost (TRY)</Label>
                        <Input
                          id="auditCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={auditCost || ""}
                          onChange={(e) => setAuditCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="auditedZones">Number of Zones Audited</Label>
                        <Input
                          id="auditedZones"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={auditedZones || ""}
                          onChange={(e) => setAuditedZones(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="facilitySystemCost">
                        Facility System Cost (TRY, one-time)
                      </Label>
                      <Input
                        id="facilitySystemCost"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={facilitySystemCost || ""}
                        onChange={(e) => setFacilitySystemCost(e.target.value ? parseInt(e.target.value) : undefined)}
                        disabled={showResults}
                        required
                        placeholder="Enter value"
                      />
                    </div>
                  </>
                )}

                {solution === "indoor-mapping" && (
                  <>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-blue-700">
                        Use drones for 3D facility scanning to optimize robot workflows and navigation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="mappingCost">Manual Mapping Cost (TRY)</Label>
                        <Input
                          id="mappingCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={mappingCost || ""}
                          onChange={(e) => setMappingCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mappingUpdates">Mapping Updates Per Year</Label>
                        <Input
                          id="mappingUpdates"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={mappingUpdates || ""}
                          onChange={(e) => setMappingUpdates(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="setupCost">
                          Drone Mapping Setup Cost (TRY)
                        </Label>
                        <Input
                          id="setupCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={setupCost || ""}
                          onChange={(e) => setSetupCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mappingSoftwareCost">
                          Mapping Software Subscription (Monthly) (TRY)
                        </Label>
                        <Input
                          id="mappingSoftwareCost"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={mappingSoftwareCost || ""}
                          onChange={(e) => setMappingSoftwareCost(e.target.value ? parseInt(e.target.value) : undefined)}
                          disabled={showResults}
                          required
                          placeholder="Enter value"
                        />
                      </div>
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
                  
                  {solution === "chatbot" && (
                    <>
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
                          {chatbotPaybackPeriod.toFixed(1)} Months
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          Based on your inputs, the Chatbot system will pay for itself in approximately 
                          <strong> {chatbotPaybackPeriod.toFixed(1)} months</strong>, with a potential annual 
                          savings of <strong>{annualLaborCost.toLocaleString()} TRY</strong>.
                        </p>
                      </div>
                    </>
                  )}

                  {solution === "voice-assistant" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {voiceMonthlySavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {voiceAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {voiceRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {voicePaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          The Voice Assistant system provides a {voiceRoi.toFixed(0)}% ROI and 
                          will pay for itself in approximately <strong>{voicePaybackPeriod.toFixed(1)} months</strong>,
                          with annual savings of <strong>{voiceAnnualSavings.toLocaleString()} TRY</strong>.
                        </p>
                      </div>
                    </>
                  )}

                  {solution === "virtual-concierge" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {conciergeMonthlySavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {conciergeAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {conciergeRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {conciergePaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          The AI Virtual Concierge system provides a {conciergeRoi.toFixed(0)}% ROI and 
                          will pay for itself in approximately <strong>{conciergePaybackPeriod.toFixed(1)} months</strong>,
                          with annual savings of <strong>{conciergeAnnualSavings.toLocaleString()} TRY</strong>.
                        </p>
                      </div>
                    </>
                  )}

                  {solution === "service-robot" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {robotMonthlySavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {robotAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {robotRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {robotPaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          Implementing {robotCount} service robots provides a {robotRoi.toFixed(0)}% ROI and 
                          will pay for itself in approximately <strong>{robotPaybackPeriod.toFixed(1)} months</strong>,
                          with annual savings of <strong>{robotAnnualSavings.toLocaleString()} TRY</strong>.
                        </p>
                      </div>
                    </>
                  )}

                  {solution === "cleaning-robot" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {cleaningMonthlySavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {cleaningAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {cleaningRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {cleaningPaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          Implementing {cleaningRobotCount} cleaning robots provides a {cleaningRoi.toFixed(0)}% ROI and 
                          will pay for itself in approximately <strong>{cleaningPaybackPeriod.toFixed(1)} months</strong>,
                          with annual savings of <strong>{cleaningAnnualSavings.toLocaleString()} TRY</strong>.
                        </p>
                      </div>
                    </>
                  )}

                  {solution === "ai-usage-training" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Time Saved</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {monthlyTimeSaved.toLocaleString()} Hours
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Value Saved</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {monthlyValueSaved.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Annual Value Saved</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {annualValueSaved.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {trainingRoi.toFixed(0)}%
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          AI Usage Training for {trainedEmployees} employees will save approximately 
                          <strong> {monthlyTimeSaved.toLocaleString()} hours monthly</strong>, 
                          providing a <strong>{trainingRoi.toFixed(0)}%</strong> return on investment 
                          with a payback period of <strong>{trainingPaybackPeriod.toFixed(1)} months</strong>.
                        </p>
                      </div>
                    </>
                  )}
                  
                  {solution === "system-integration-training" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Support Cost Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {integrationMonthlySavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Support Cost Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {integrationAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Total Training Investment</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {integrationTotalCost.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {integrationRoi.toFixed(0)}%
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-6 p-4 bg-tech-green/10 rounded-lg">
                        <p className="text-sm text-muted-foreground">Payback Period</p>
                        <p className="text-3xl font-bold text-tech-green">
                          {integrationPaybackPeriod.toFixed(1)} Months
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          Role-Based System Integration Training for {traineesCount} staff members will reduce 
                          monthly external support costs by <strong>{supportCostReduction}%</strong>, 
                          saving <strong>{integrationMonthlySavings.toLocaleString()} TRY monthly</strong>. 
                          With a <strong>{integrationRoi.toFixed(0)}%</strong> ROI, 
                          your investment will be recovered in <strong>{integrationPaybackPeriod.toFixed(1)} months</strong>.
                        </p>
                      </div>
                    </>
                  )}
                  
                  {solution === "certification-programs" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Efficiency Gain</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {certificationAnnualGain.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Total Certification Cost</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {certificationTotalCost.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {certificationRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {certificationPaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          Certification Programs for {participantsCount} participants will improve project efficiency 
                          by <strong>{projectEfficiency}%</strong>, generating <strong>{certificationAnnualGain.toLocaleString()} TRY</strong> in 
                          annual cost savings across {projectsPerYear} projects. With a <strong>{certificationRoi.toFixed(0)}%</strong> ROI, 
                          your investment will be recovered in <strong>{certificationPaybackPeriod.toFixed(1)} months</strong>.
                        </p>
                      </div>
                    </>
                  )}
                  
                  {solution === "safety-inspection" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {inspectionMonthlySavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {inspectionAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {inspectionRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {inspectionPaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          Our drone-based Safety & Maintenance Inspection system provides a {inspectionRoi.toFixed(0)}% ROI and 
                          will pay for itself in approximately <strong>{inspectionPaybackPeriod.toFixed(1)} months</strong>,
                          with annual savings of <strong>{inspectionAnnualSavings.toLocaleString()} TRY</strong> and a 
                          risk reduction of <strong>{riskReduction}%</strong>.
                        </p>
                      </div>
                    </>
                  )}
                  
                  {solution === "inventory-monitoring" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {inventoryMonthlySavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {inventoryAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {inventoryRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {inventoryPaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          Our drone-based Inventory & Supplies Monitoring system provides a {inventoryRoi.toFixed(0)}% ROI and 
                          will pay for itself in approximately <strong>{inventoryPaybackPeriod.toFixed(1)} months</strong>,
                          with annual savings of <strong>{inventoryAnnualSavings.toLocaleString()} TRY</strong> across {inventoryZones} inventory zones.
                        </p>
                      </div>
                    </>
                  )}
                  
                  {solution === "facility-checks" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {facilityMonthlySavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {facilityAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {facilityRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {facilityPaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          The Facility Checks system provides a {facilityRoi.toFixed(0)}% ROI and 
                          will pay for itself in approximately <strong>{facilityPaybackPeriod.toFixed(1)} months</strong>,
                          with annual savings of <strong>{facilityAnnualSavings.toLocaleString()} TRY</strong>.
                        </p>
                      </div>
                    </>
                  )}

                  {solution === "indoor-mapping" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Mapping Savings</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {mappingAnnualSavings.toLocaleString()} TRY
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Total Investment</p>
                          <p className="text-2xl font-bold text-tech-green">
                            {mappingTotalCost.toLocaleString()} TRY
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Return on Investment (ROI)</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {mappingRoi.toFixed(0)}%
                          </p>
                        </div>
                        
                        <div className="p-4 bg-tech-green/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-3xl font-bold text-tech-green">
                            {mappingPaybackPeriod.toFixed(1)} Months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700">
                          Our drone-based Indoor Mapping & Digital Twin Creation system provides a {mappingRoi.toFixed(0)}% ROI and 
                          will pay for itself in approximately <strong>{mappingPaybackPeriod.toFixed(1)} months</strong>,
                          with annual savings of <strong>{mappingAnnualSavings.toLocaleString()} TRY</strong> for {mappingUpdates} mapping updates per year.
                        </p>
                      </div>
                    </>
                  )}
                  
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