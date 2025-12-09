import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cpu, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/20">
            <Cpu className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold font-display tracking-tight">Nexus AI</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#solutions" className="hover:text-foreground transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">
            Log in
          </Link>
          <Link href="/dashboard">
            <Button className="bg-white text-black hover:bg-white/90 font-semibold rounded-full px-6">
              Get Started
            </Button>
          </Link>
          <button className="md:hidden text-muted-foreground">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
