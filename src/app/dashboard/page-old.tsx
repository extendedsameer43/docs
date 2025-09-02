import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents, TocItem } from "@/components/layout/table-of-contents";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const dashboardTocItems: TocItem[] = [
  { title: "Peec AI automatically refreshes your data once per day — everything you see reflects aggregated results from the most recent prompt run.", href: "#data-refresh", level: 0 },
  { title: "Filters and controls", href: "#filters-and-controls", level: 0 },
  { title: "Dashboard sections", href: "#dashboard-sections", level: 0 },
  { title: "Visibility graph", href: "#visibility-graph", level: 1 },
  { title: "Industry Ranking table", href: "#industry-ranking-table", level: 1 },
  { title: "Recent brand mentions", href: "#recent-brand-mentions", level: 1 },
  { title: "Sources overview", href: "#sources-overview", level: 1 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        {/* Left Sidebar - Hidden on mobile */}
        <aside className="hidden md:block w-64 border-r border-border bg-card/50 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 max-w-4xl">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Get Started</p>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">Understanding your dashboard</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Your Dashboard shows how you&apos;re performing based on prompts that ran during the last 24 hours.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Navigate to <strong>Sources</strong> in your sidebar to access source analytics.
              </p>
            </div>

            {/* Screenshot placeholder */}
            <div className="mb-8 rounded-lg border bg-muted/50 p-8 text-center">
              <div className="text-muted-foreground">
                [Dashboard Screenshot - Shows main dashboard with visibility graph, industry ranking table, and sources overview]
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* Data Refresh Section */}
              <section id="data-refresh">
                <h2 className="text-2xl font-semibold mb-4">Peec AI automatically refreshes your data once per day — everything you see reflects aggregated results from the most recent prompt run.</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The timer in the top-right shows when the next 24-hour cycle begins.
                  </p>
                </div>
              </section>

              {/* Filters and Controls Section */}
              <section id="filters-and-controls">
                <h2 className="text-2xl font-semibold mb-4">Filters and controls</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Use these to customize your dashboard view:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-foreground">Date selector:</strong> Switch between single days or time ranges (default is 7 days).
                    </li>
                    <li>
                      <strong className="text-foreground">Tag filter:</strong> Filter by specific prompt tags you've added.
                    </li>
                    <li>
                      <strong className="text-foreground">Competitor filter:</strong> Compare visibility for selected brands.
                    </li>
                    <li>
                      <strong className="text-foreground">Model selector:</strong> View results from specific AI models.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Dashboard Sections */}
              <section id="dashboard-sections">
                <h2 className="text-2xl font-semibold mb-4">Dashboard sections</h2>
                
                {/* Visibility Graph */}
                <div id="visibility-graph" className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Visibility graph</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Shows brand mention trends over your selected time period. Hover over the graph to see exact percentages. Click the <strong>Download</strong> button to download this data as a CSV file.
                    </p>
                  </div>
                  
                  {/* Visibility Graph Screenshot */}
                  <div className="my-6 rounded-lg border bg-muted/50 p-8 text-center">
                    <div className="text-muted-foreground">
                      [Visibility Graph Screenshot - Shows line chart with brand mention trends over time]
                    </div>
                  </div>
                </div>

                {/* Industry Ranking Table */}
                <div id="industry-ranking-table" className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Industry Ranking table</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Lists all tracked brands ranked by visibility, showing position, sentiment, and visibility scores for each. Red or green arrows indicate changes within your selected time period.
                    </p>
                    <p>
                      Click <strong>All Data</strong> to see the full list of brands for these rankings.
                    </p>
                  </div>

                  {/* Industry Ranking Screenshot */}
                  <div className="my-6 rounded-lg border bg-muted/50 p-8 text-center">
                    <div className="text-muted-foreground">
                      [Industry Ranking Table Screenshot - Shows ranked list of brands with scores and arrows indicating changes]
                    </div>
                  </div>
                </div>

                {/* Recent Brand Mentions */}
                <div id="recent-brand-mentions" className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Recent brand mentions</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Shows the most recent mentions of tracked brands from your prompt runs, including the context and source information.
                    </p>
                  </div>

                  {/* Recent Mentions Screenshot */}
                  <div className="my-6 rounded-lg border bg-muted/50 p-8 text-center">
                    <div className="text-muted-foreground">
                      [Recent Brand Mentions Screenshot - Shows list of recent brand mentions with context]
                    </div>
                  </div>
                </div>

                {/* Sources Overview */}
                <div id="sources-overview" className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Sources overview</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Shows top sources being used across your active prompts. Click <strong>All Sources</strong> to open the in-depth <strong>Sources</strong> page and learn more.
                    </p>
                  </div>

                  {/* Sources Overview Screenshot */}
                  <div className="my-6 rounded-lg border bg-muted/50 p-8 text-center">
                    <div className="text-muted-foreground">
                      [Sources Overview Screenshot - Shows top sources with usage statistics]
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-border">
              <Link 
                href="/understanding-sources" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Understanding sources
              </Link>
              <Link 
                href="/sidebar-navigation" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Sidebar navigation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents - Hidden on mobile and tablet */}
        <aside className="hidden xl:block w-64 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-8">
          <TableOfContents items={dashboardTocItems} />
        </aside>
      </div>
    </div>
  );
}
