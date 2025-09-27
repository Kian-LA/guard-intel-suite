import { useState } from "react";
import { AlertTriangle, Shield, TrendingUp, Globe, Clock, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockThreats = [
  {
    id: 1,
    type: "Phishing",
    severity: "High",
    description: "Suspicious email campaign targeting financial institutions",
    time: "2 minutes ago",
    location: "United States",
    status: "active"
  },
  {
    id: 2,
    type: "Malware",
    severity: "Critical",
    description: "New ransomware variant detected in healthcare sector",
    time: "15 minutes ago", 
    location: "Europe",
    status: "blocked"
  },
  {
    id: 3,
    type: "Bot Attack",
    severity: "Medium",
    description: "Automated login attempts from suspicious IPs",
    time: "1 hour ago",
    location: "Asia",
    status: "monitoring"
  },
  {
    id: 4,
    type: "Social Engineering",
    severity: "High",
    description: "Voice deepfake campaign impersonating executives",
    time: "3 hours ago",
    location: "Global",
    status: "investigating"
  }
];

const securityMetrics = [
  { label: "Threats Blocked Today", value: "2,847", icon: Shield, trend: "+12%" },
  { label: "Active Monitors", value: "1,234", icon: Activity, trend: "+3%" },
  { label: "Global Incidents", value: "45", icon: Globe, trend: "-8%" },
  { label: "Response Time Avg", value: "47s", icon: Clock, trend: "-15%" }
];

const ThreatDashboard = () => {
  const [selectedThreat, setSelectedThreat] = useState(null);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "destructive";
      case "High": return "warning";
      case "Medium": return "secondary";
      default: return "muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "destructive";
      case "blocked": return "success";
      case "monitoring": return "warning";
      case "investigating": return "secondary";
      default: return "muted";
    }
  };

  return (
    <section className="py-20 bg-muted/30" id="dashboard">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Live Threat Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time monitoring and analysis of global cybersecurity threats. 
            Stay ahead of attackers with AI-powered intelligence.
          </p>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityMetrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <metric.icon className="h-8 w-8 text-primary mb-2" />
                    <span className="text-xs text-success flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {metric.trend}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Threat Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-warning mr-2" />
                Active Threat Feed
              </CardTitle>
              <CardDescription>
                Real-time security incidents and emerging threats
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockThreats.map((threat) => (
                <div 
                  key={threat.id}
                  className="p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => setSelectedThreat(threat)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant={getSeverityColor(threat.severity)}>
                        {threat.severity}
                      </Badge>
                      <Badge variant="outline">{threat.type}</Badge>
                    </div>
                    <Badge variant={getStatusColor(threat.status)}>
                      {threat.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground mb-1">{threat.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {threat.time}
                    </span>
                    <span className="flex items-center">
                      <Globe className="h-3 w-3 mr-1" />
                      {threat.location}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Threat Analysis */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-6 w-6 text-primary mr-2" />
                Threat Analysis
              </CardTitle>
              <CardDescription>
                AI-powered analysis and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedThreat ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Threat Details</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {selectedThreat.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Risk Assessment</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Impact Level:</span>
                        <Badge variant={getSeverityColor(selectedThreat.severity)}>
                          {selectedThreat.severity}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Geographic Scope:</span>
                        <span className="text-muted-foreground">{selectedThreat.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Threat Type:</span>
                        <span className="text-muted-foreground">{selectedThreat.type}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Recommended Actions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Implement additional email filtering rules</li>
                      <li>• Update employee training materials</li>
                      <li>• Monitor for similar attack patterns</li>
                      <li>• Review current security policies</li>
                    </ul>
                  </div>

                  <Button variant="hero" className="w-full">
                    Implement Protection
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Select a threat from the feed to view detailed analysis
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThreatDashboard;