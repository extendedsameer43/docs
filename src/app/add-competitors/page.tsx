import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents, TocItem } from "@/components/layout/table-of-contents";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const addCompetitorsTocItems: TocItem[] = [
  { title: "Two ways to add competitors", href: "#two-ways-to-add-competitors", level: 0 },
  { title: "1. Use suggested competitors", href: "#use-suggested-competitors", level: 1 },
  { title: "2. Add competitors manually", href: "#add-competitors-manually", level: 1 },
];

export default function AddCompetitorsPage() {
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
              <h1 className="text-4xl font-bold mb-4">Adding competitors</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Peec AI lets you monitor competitors using the same visibility metrics, so you can see who AI is promoting alongside (or instead of) you.
              </p>
            </div>

            {/* Two ways to add competitors */}
            <section id="two-ways-to-add-competitors" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Two ways to add competitors</h2>
              <p className="text-muted-foreground leading-relaxed">
                Navigate to <strong>Competitors</strong> in your sidebar. From here, you can:
              </p>

              {/* 1. Use suggested competitors */}
              <section id="use-suggested-competitors" className="space-y-4">
                <h3 className="text-xl font-semibold">1. Use suggested competitors</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Peec AI automatically flags companies that appear often in your prompt responses. You can:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Accept:</strong> Click the checkmark to add them as a competitor.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Reject:</strong> Click the X to remove them.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Edit:</strong> Click the pencil icon to edit name or domain before adding.
                      </div>
                    </li>
                  </ul>
                  <p>
                    Each suggestion shows how many times that brand has been mentioned across your prompts.
                  </p>
                </div>

                {/* Suggested competitors screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🔍</span>
                      </div>
                      <p>Suggested Competitors Screenshot</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Add competitors manually */}
              <section id="add-competitors-manually" className="space-y-4">
                <h3 className="text-xl font-semibold">2. Add competitors manually</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Navigate to the <strong>Competitors</strong> page and use the <strong>Create Competitor</strong> form:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Name:</strong> Enter the competitor's brand name as it typically appears in AI responses.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Domain:</strong> Add their main website domain (used to detect source citations).
                      </div>
                    </li>
                  </ul>
                  <p>Click <strong>Add</strong> to save.</p>
                </div>

                {/* Manual competitor form screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">➕</span>
                      </div>
                      <p>Create Competitor Form Screenshot</p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* Call-to-action */}
            <div className="border border-border rounded-lg p-6 my-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Next: Understand your metrics</h3>
                  <p className="text-muted-foreground text-sm">
                    Learn how to interpret your competitor performance data and analytics.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <Link href="/setup-prompts" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Setting up your prompts
              </Link>
              <Link href="/metrics" className="flex items-center text-muted-foreground hover:text-foreground">
                Understanding your metrics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden p-6">
          <TableOfContents items={addCompetitorsTocItems} />
        </aside>
      </div>
    </div>
  );
}
