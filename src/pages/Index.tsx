import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThreatDashboard from "@/components/ThreatDashboard";
import ProtectionModules from "@/components/ProtectionModules";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ThreatDashboard />
      <ProtectionModules />
    </div>
  );
};

export default Index;
