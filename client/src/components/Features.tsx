import { motion } from "framer-motion";
import { BrainCircuit, Zap, ShieldCheck, BarChartHorizontal, Bot, Globe } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Predictive Lead Scoring",
    description: "Our neural engine analyzes 500+ data points to identify which prospects are ready to buy now.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: Bot,
    title: "Autonomous Agents",
    description: "Deploy AI agents that handle scheduling, follow-ups, and data entry automatically.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Globe,
    title: "Global Enrichment",
    description: "Instantly enrich contact profiles with real-time data from across the web.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Zap,
    title: "Instant Velocity",
    description: "Reduce sales cycle time by 40% with automated blockers removal and instant insights.",
    colSpan: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Built for the <span className="text-primary">Intelligence Age</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Traditional CRMs are just databases. Nexus is an active participant in your sales process, working alongside your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 rounded-3xl group hover:bg-white/5 transition-all duration-300 ${feature.colSpan}`}
            >
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
