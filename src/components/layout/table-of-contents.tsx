"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { List } from "lucide-react";

export interface TocItem {
  title: string;
  href: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
  items?: TocItem[];
}

const defaultTocItems = [
  { title: "Platform Overview", href: "#intro", level: 0 },
  { title: "Core Features", href: "#what-nudg3-does", level: 0 },
  { title: "Key Benefits", href: "#how-nudg3-helps", level: 0 },
  { title: "Technology Stack", href: "#technology-stack", level: 0 },
];

export function TableOfContents({ className, items = defaultTocItems }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
      }
    );

    const headings = document.querySelectorAll("h1[id], h2[id], h3[id], section[id]");
    headings.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Update the URL hash without triggering a page scroll
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <div className={cn("w-64", className)}>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-4 flex items-center">
            <List className="mr-2 h-4 w-4" />
            On this page
          </h3>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-2">
              {items.map((item: TocItem) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={cn(
                      "block py-1 text-sm transition-colors hover:text-foreground",
                      item.level === 1 && "pl-4",
                      isActive 
                        ? "text-foreground font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
