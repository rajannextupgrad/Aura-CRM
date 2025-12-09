import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  Users, 
  Briefcase, 
  CheckCircle2,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  PieChart
} from "lucide-react";
import { motion } from "framer-motion";

// Mock Data
const stats = [
  {
    title: "Total Revenue",
    value: "$124,500",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    title: "Active Leads",
    value: "1,240",
    change: "+4.2%",
    trend: "up",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Open Deals",
    value: "45",
    change: "-2.4%",
    trend: "down",
    icon: Briefcase,
    color: "text-purple-500",
  },
  {
    title: "Tasks Pending",
    value: "12",
    change: "On track",
    trend: "neutral",
    icon: CheckCircle2,
    color: "text-orange-500",
  },
];

const activities = [
  {
    id: 1,
    user: "AI Agent",
    action: "drafted email to",
    target: "Sarah Conner",
    time: "2 min ago",
    icon: Sparkles,
    color: "text-primary",
  },
  {
    id: 2,
    user: "John Doe",
    action: "moved deal",
    target: "TechStart Enterprise",
    time: "15 min ago",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    id: 3,
    user: "AI Agent",
    action: "scored lead",
    target: "Global Dynamics",
    time: "1 hour ago",
    icon: Sparkles,
    color: "text-primary",
  },
  {
    id: 4,
    user: "System",
    action: "alert",
    target: "Q3 Goal Reached",
    time: "2 hours ago",
    icon: Bell, // Imported but not defined in stats, used here
    color: "text-yellow-500",
  },
];

import { Bell } from "lucide-react"; // Import missing icon

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-1">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              Download Report
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
              <Sparkles className="mr-2 h-4 w-4" />
              Ask Nexus AI
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card border-white/5 bg-white/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div className={`flex items-center text-xs font-medium ${
                      stat.trend === "up" ? "text-green-500" : 
                      stat.trend === "down" ? "text-red-500" : "text-muted-foreground"
                    }`}>
                      {stat.trend === "up" && <ArrowUpRight className="h-3 w-3 mr-1" />}
                      {stat.trend === "down" && <ArrowDownRight className="h-3 w-3 mr-1" />}
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-2xl font-bold font-display text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area (Placeholder for now) */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card border-white/5 bg-white/5">
              <CardHeader>
                <CardTitle className="font-display">Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-black/20">
                  <p className="text-muted-foreground text-sm flex items-center gap-2">
                    <PieChart className="h-4 w-4" />
                    Chart Component Visualization
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card border-white/5 bg-white/5">
                <CardHeader>
                  <CardTitle className="font-display text-lg">Top Deals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                            TS
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">TechStart Inc</div>
                            <div className="text-xs text-muted-foreground">Proposal • $45k</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                          High Prob
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/5 bg-white/5">
                 <CardHeader>
                  <CardTitle className="font-display text-lg">Recent Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground/50" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white line-through decoration-muted-foreground/50 opacity-50">Call with Mike</div>
                          <div className="text-xs text-muted-foreground">Due Today</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Insights & Feed */}
          <div className="space-y-6">
            <Card className="glass-card border-primary/20 bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-20">
                <Sparkles className="h-24 w-24 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-display text-primary">
                  <Sparkles className="h-5 w-5" />
                  Nexus Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="p-3 rounded-xl bg-background/50 border border-primary/10 backdrop-blur-sm">
                  <p className="text-sm text-foreground mb-2">
                    <span className="font-bold text-primary">Opportunity detected:</span> Acme Corp has opened your proposal 3 times today.
                  </p>
                  <Button size="sm" variant="secondary" className="w-full h-8 text-xs">
                    Send Follow-up
                  </Button>
                </div>
                 <div className="p-3 rounded-xl bg-background/50 border border-primary/10 backdrop-blur-sm">
                  <p className="text-sm text-foreground mb-2">
                    <span className="font-bold text-orange-400">Risk alert:</span> 3 deals in "Negotiation" have stalled for &gt;7 days.
                  </p>
                  <Button size="sm" variant="secondary" className="w-full h-8 text-xs">
                    View Deals
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/5 bg-white/5">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="font-display text-lg">Activity Feed</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 relative">
                  <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex gap-4 relative">
                      <div className="h-8 w-8 rounded-full bg-background border border-white/10 flex items-center justify-center shrink-0 z-10">
                        <activity.icon className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm text-white">
                          <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium text-primary">{activity.target}</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
