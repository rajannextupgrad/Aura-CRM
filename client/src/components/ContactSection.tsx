import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
              Ready to <span className="text-primary">transform</span> your sales process?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join the 10,000+ forward-thinking companies already using Nexus AI to predict, automate, and close deals faster than ever before.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <p className="text-muted-foreground text-sm">sales@nexus-ai.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Live Chat</h4>
                  <p className="text-muted-foreground text-sm">Available 24/7 for Enterprise plans</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">First Name</label>
                  <Input placeholder="John" className="bg-white/5 border-white/10 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-white/5 border-white/10 focus:border-primary/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Work Email</label>
                <Input placeholder="john@company.com" className="bg-white/5 border-white/10 focus:border-primary/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea placeholder="Tell us about your team size and needs..." className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[120px]" />
              </div>

              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                No credit card required. 14-day free trial on all plans.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
