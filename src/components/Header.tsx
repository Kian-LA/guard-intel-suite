import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary animate-pulse-glow" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            SecureDefend
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-muted-foreground hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#threats" className="text-muted-foreground hover:text-primary transition-colors">
            Threat Intel
          </a>
          <a href="#protection" className="text-muted-foreground hover:text-primary transition-colors">
            Protection
          </a>
          <a href="#training" className="text-muted-foreground hover:text-primary transition-colors">
            Training
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="hero" className="hidden md:inline-flex">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;