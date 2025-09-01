"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Rocket, Settings, Users, FileText, Lightbulb, BarChart3 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

const navigation = [
  {
    title: "Get Started",
    items: [
      { title: "Welcome to Peec AI", href: "/", icon: Rocket, isActive: true },
      { title: "Quickstart", href: "/quickstart", icon: FileText },
      { title: "Setting up your prompts", href: "/setup-prompts", icon: Settings },
      { title: "Adding competitors", href: "/add-competitors", icon: Users },
      { title: "Understanding your metrics", href: "/metrics", icon: BarChart3 },
      { title: "Understanding sources", href: "/sources", icon: Lightbulb },
      { title: "Understanding your dashboard", href: "/dashboard", icon: BarChart3 },
      { title: "Sidebar navigation", href: "/sidebar-navigation", icon: FileText },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Looker Studio connector", href: "/integrations/looker", icon: Settings },
    ],
  },
];

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <div className="mb-2 px-4 text-sm font-semibold tracking-tight flex items-center">
                    <Rocket className="mr-2 h-4 w-4" />
                    {section.title}
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                          pathname === item.href
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
