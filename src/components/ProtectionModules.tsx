import { 
  Shield, 
  Brain, 
  Mail, 
  Bug, 
  Eye, 
  Users, 
  AlertTriangle,
  Smartphone,
  Globe,
  Award
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
  {
    icon: Eye,
    title: "Threat Intelligence Dashboard",
    description: "Real-time feed of emerging threats with industry-specific vulnerability alerts and geographic attack pattern visualization.",
    features: ["Real-time threat feeds", "Vulnerability alerts", "Attack pattern mapping"],
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "AI-Powered Monitoring",
    description: "Advanced bot detection and anomalous behavior identification with automated suspicious login blocking.",
    features: ["Bot detection", "Behavior analysis", "Login monitoring"],
    color: "text-success"
  },
  {
    icon: Mail,
    title: "Scam Shield",
    description: "Comprehensive email phishing detection, fake website identification, and voice deepfake detection.",
    features: ["Phishing detection", "Fake site blocking", "Voice verification"],
    color: "text-warning"
  },
  {
    icon: Bug,
    title: "Malware Protection",
    description: "Continuous endpoint scanning with zero-day threat detection and advanced ransomware prevention.",
    features: ["Endpoint scanning", "Zero-day detection", "Ransomware protection"],
    color: "text-destructive"
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Assessment",
    description: "Automated security posture evaluation with weak point identification and prioritized remediation.",
    features: ["Automated assessment", "Weak point analysis", "Remediation guides"],
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Employee Security Training",
    description: "Customized microlearning modules with simulated phishing campaigns and awareness quizzes.",
    features: ["Microlearning", "Phishing simulations", "Security quizzes"],
    color: "text-success"
  },
  {
    icon: Smartphone,
    title: "Mobile Management App",
    description: "On-the-go threat alerts with quick response actions and simplified dashboard for critical metrics.",
    features: ["Mobile alerts", "Quick responses", "Critical metrics"],
    color: "text-warning"
  },
  {
    icon: Globe,
    title: "Security Community Network",
    description: "Anonymous threat sharing between users with expert-moderated forums and regional alerts.",
    features: ["Threat sharing", "Expert forums", "Regional alerts"],
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Regulatory Compliance",
    description: "Industry-specific compliance templates with automated documentation and pre-audit preparation.",
    features: ["Compliance templates", "Auto documentation", "Audit preparation"],
    color: "text-success"
  }
];

const ProtectionModules = () => {
  return (
    <section className="py-20 bg-background" id="protection">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Core Protection Modules
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed specifically for small 
            and medium businesses. Every module works together to create an 
            impenetrable defense system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <module.icon className={`h-8 w-8 ${module.color}`} />
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Shield className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectionModules;