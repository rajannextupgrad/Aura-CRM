import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Users, 
  KanbanSquare, 
  CheckSquare, 
  Settings, 
  LogOut,
  Cpu,
  PieChart,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Contacts", href: "/contacts" },
  { icon: KanbanSquare, label: "Deals", href: "/deals" },
  { icon: CheckSquare, label: "Tasks", href: "/tasks" },
  { icon: PieChart, label: "Analytics", href: "/analytics" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-black/90 backdrop-blur-xl border-r border-white/5 z-50 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-white/5">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/20 group-hover:bg-primary/30 transition-colors">
              <Cpu className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-bold font-display tracking-tight text-white">Nexus AI</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 py-6 px-3 space-y-1">
        <div className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Menu
        </div>
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                  isActive 
                    ? "bg-primary/20 text-primary border border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.2)]" 
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive && "text-primary")} />
                {item.label}
              </div>
            </Link>
          );
        })}

        <div className="mt-8 px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          System
        </div>
        <Link href="/settings">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
            <Settings className="h-4 w-4" />
            Settings
          </div>
        </Link>
      </div>

      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-xs font-bold text-white">
            JD
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-sm font-medium text-white truncate">John Doe</div>
            <div className="text-xs text-muted-foreground truncate">john@nexus.ai</div>
          </div>
          <LogOut className="h-4 w-4 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </aside>
  );
}
