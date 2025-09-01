import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents, TocItem } from "@/components/layout/table-of-contents";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const sidebarNavigationTocItems: TocItem[] = [
  { title: "General", href: "#general", level: 0 },
  { title: "Preferences", href: "#preferences", level: 0 },
  { title: "Settings", href: "#settings", level: 0 },
];

export default function SidebarNavigationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-border bg-card/50 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 py-8 max-w-4xl">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Get Started</p>
              <h1 className="text-4xl font-bold mb-4">Sidebar navigation</h1>
              <p className="text-lg text-muted-foreground mb-8">
                The left-hand sidebar gives you quick access to all key areas: new file.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* General Section */}
              <section id="general">
                <h2 className="text-2xl font-semibold mb-4">General</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Dashboard:</strong> Overview of brand and source visibility.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Prompts:</strong> Manage prompts, tags, and locations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Sources:</strong> View citations and domain usage.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Preferences Section */}
              <section id="preferences">
                <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Competitors:</strong> Add and manage tracked competitors.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Tags:</strong> Create and organize tags for prompt grouping.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Settings Section */}
              <section id="settings">
                <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">People:</strong> Invite team members.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Workspace:</strong> Set brand name, domain, default location, and tracked AI models.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Company:</strong> Manage organization-level settings.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium text-foreground mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Billing:</strong> Manage subscription plans and invoices.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-border">
              <Link 
                href="/dashboard" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Understanding your dashboard
              </Link>
              <Link 
                href="/looker-studio-connector" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Looker Studio connector
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-8">
          <TableOfContents items={sidebarNavigationTocItems} />
        </aside>
      </div>
    </div>
  );
}
