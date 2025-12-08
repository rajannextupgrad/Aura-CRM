import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_dark_ai_neural_network_background_with_glowing_nodes.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Network" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6">
            <Sparkles className="h-3 w-3" />
            <span>Nexus AI 2.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 gradient-text">
            The CRM that <br />
            <span className="text-white">thinks before you do.</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Stop managing data. Start managing relationships. Nexus uses predictive AI to automate outreach, score leads, and close deals while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-12 px-8 rounded-full bg-primary text-white hover:bg-primary/90 text-base font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 text-base">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border border-background bg-secondary flex items-center justify-center text-[10px] overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Trusted by 10,000+ sales leaders</p>
          </div>
        </motion.div>

        {/* Right Content - Abstract HUD Interface */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main Glass Card */}
          <div className="relative z-20 glass-card rounded-2xl p-6 aspect-square max-h-[600px] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="text-xs font-mono text-muted-foreground">AI_AGENT_V2.RUNNING</div>
            </div>

            {/* Chat/Activity Feed Simulation */}
            <div className="flex-1 space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20 mt-1">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-4 text-sm max-w-[80%]">
                  <p className="text-gray-300">I've analyzed your pipeline. Deal velocity is up 12% this week. Would you like me to draft follow-ups for the top 5 stalling opportunities?</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="flex items-start gap-3 justify-end"
              >
                <div className="bg-primary text-white rounded-2xl rounded-tr-none p-4 text-sm max-w-[80%]">
                  <p>Yes, prioritize deals over $50k.</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 mt-1">
                  <div className="h-4 w-4 rounded-full bg-white" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="glass-card rounded-xl p-4 mt-4 border-l-4 border-l-accent"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-accent uppercase">Action Required</span>
                  <span className="text-xs text-muted-foreground">Just now</span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Review: 5 Drafted Emails</h4>
                <p className="text-xs text-muted-foreground">Targeting: Acme Corp, TechStart, Global Dyn...</p>
                <div className="mt-3 flex gap-2">
                   <div className="h-6 w-16 bg-white/10 rounded animate-pulse" />
                   <div className="h-6 w-16 bg-white/10 rounded animate-pulse" />
                </div>
              </motion.div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-8 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-30 flex items-center gap-3"
            >
              <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Revenue</div>
                <div className="text-sm font-bold text-white">+$124k</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -left-4 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-30 flex items-center gap-3"
            >
              <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">New Leads</div>
                <div className="text-sm font-bold text-white">+28 Today</div>
              </div>
            </motion.div>

          </div>
          
          {/* Decorative Glows behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
