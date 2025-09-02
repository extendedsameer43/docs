import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents, TocItem } from "@/components/layout/table-of-contents";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const metricsTocItems: TocItem[] = [
  { title: "Metrics Overview", href: "#overview", level: 0 },
  { title: "Brand Performance Metrics", href: "#brand-metrics", level: 0 },
  { title: "Competitive Intelligence Metrics", href: "#competitive-metrics", level: 0 },
  { title: "AI Response Metrics", href: "#ai-metrics", level: 0 },
  { title: "Source Analytics", href: "#source-metrics", level: 0 },
  { title: "Interpreting Your Data", href: "#interpreting-data", level: 0 },
];

export default function MetricsPage() {
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
              <p className="text-sm text-muted-foreground mb-2">Platform Features</p>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">Understanding Metrics</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Learn how to interpret and act on the key performance metrics in your Nudg3 analytics dashboard.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <section id="overview">
                <h2 className="text-2xl font-semibold mb-4">Metrics Overview</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nudg3 tracks multiple dimensions of brand performance and competitive intelligence. Understanding these metrics helps you make informed decisions about your brand strategy and market positioning.
                  </p>
                  <p>
                    Each metric provides unique insights into different aspects of your brand's visibility and performance in the market.
                  </p>
                </div>
              </section>

              <section id="brand-metrics">
                <h2 className="text-2xl font-semibold mb-4">Brand Performance Metrics</h2>
                <div className="space-y-6">
                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Brand Visibility Score</h3>
                    <p className="text-muted-foreground mb-3">
                      Your primary performance indicator that measures how often your brand appears across all monitored channels and contexts.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Calculated as a percentage of total possible appearances</li>
                      <li>• Updates in real-time as new data is collected</li>
                      <li>• Higher scores indicate better brand visibility</li>
                      <li>• Benchmarked against your competitive set</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Brand Sentiment</h3>
                    <p className="text-muted-foreground mb-3">
                      Measures the overall sentiment associated with your brand mentions across all channels.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Positive, neutral, or negative sentiment classification</li>
                      <li>• Sentiment trends over time</li>
                      <li>• Context analysis for sentiment drivers</li>
                      <li>• Comparison with competitor sentiment</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Market Share</h3>
                    <p className="text-muted-foreground mb-3">
                      Your brand's share of voice compared to competitors in your industry or market segment.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Percentage of total brand mentions in your category</li>
                      <li>• Historical trend analysis</li>
                      <li>• Identification of market leaders and challengers</li>
                      <li>• Market share growth or decline indicators</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="competitive-metrics">
                <h2 className="text-2xl font-semibold mb-4">Competitive Intelligence Metrics</h2>
                <div className="space-y-6">
                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Competitive Position</h3>
                    <p className="text-muted-foreground mb-3">
                      How your brand ranks against direct competitors across key performance indicators.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Ranking position within your competitive set</li>
                      <li>• Performance gaps between you and market leaders</li>
                      <li>• Areas where you outperform competitors</li>
                      <li>• Opportunities for competitive advantage</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Share of Voice</h3>
                    <p className="text-muted-foreground mb-3">
                      The percentage of industry conversation that mentions your brand versus competitors.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Brand mention frequency compared to competitors</li>
                      <li>• Topic and context-specific share of voice</li>
                      <li>• Trending topics where your brand appears</li>
                      <li>• Competitor activity and mention patterns</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Competitive Gaps</h3>
                    <p className="text-muted-foreground mb-3">
                      Areas where competitors are outperforming your brand and opportunities for improvement.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Topics or channels where competitors lead</li>
                      <li>• Content gaps in your strategy</li>
                      <li>• Audience segments where you're underrepresented</li>
                      <li>• Strategic opportunities for growth</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="ai-metrics">
                <h2 className="text-2xl font-semibold mb-4">AI Response Metrics</h2>
                <div className="space-y-6">
                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Response Performance</h3>
                    <p className="text-muted-foreground mb-3">
                      How well your brand and content perform in AI model responses across different prompts and contexts.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Brand mention frequency in AI responses</li>
                      <li>• Response relevance and context quality</li>
                      <li>• Performance across different AI models</li>
                      <li>• Prompt-specific performance analysis</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Model Comparison</h3>
                    <p className="text-muted-foreground mb-3">
                      Comparative analysis of your brand's performance across different AI models and platforms.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Performance variations between AI models</li>
                      <li>• Model-specific strengths and weaknesses</li>
                      <li>• Optimization opportunities for each platform</li>
                      <li>• Trending performance patterns</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="source-metrics">
                <h2 className="text-2xl font-semibold mb-4">Source Analytics</h2>
                <div className="space-y-6">
                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Source Performance</h3>
                    <p className="text-muted-foreground mb-3">
                      Analytics on the data sources contributing to your brand insights and their reliability.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Source contribution to overall analytics</li>
                      <li>• Data quality and reliability scores</li>
                      <li>• Source coverage and completeness</li>
                      <li>• Performance trends over time</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Usage Statistics</h3>
                    <p className="text-muted-foreground mb-3">
                      Detailed statistics on how different data sources are being utilized in your analytics.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Source utilization rates</li>
                      <li>• Data volume and frequency metrics</li>
                      <li>• Cost per insight analysis</li>
                      <li>• ROI metrics for different sources</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="interpreting-data">
                <h2 className="text-2xl font-semibold mb-4">Interpreting Your Data</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Understanding what your metrics mean and how to act on them is crucial for effective brand management and competitive strategy.
                  </p>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Key Interpretation Guidelines:</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong className="text-foreground">Rising Visibility:</strong> Indicates successful content strategy or increased brand awareness</li>
                      <li><strong className="text-foreground">Declining Sentiment:</strong> May signal PR issues or competitive threats that need attention</li>
                      <li><strong className="text-foreground">Competitive Gaps:</strong> Reveal opportunities for market expansion or strategy adjustment</li>
                      <li><strong className="text-foreground">Source Quality Issues:</strong> Suggest need for data source optimization or diversification</li>
                      <li><strong className="text-foreground">AI Model Variations:</strong> Highlight platform-specific optimization opportunities</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <Link href="/dashboard" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Dashboard Analytics
              </Link>
              <Link href="/sources" className="flex items-center text-muted-foreground hover:text-foreground">
                Source Analytics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents - Hidden on mobile and tablet */}
        <aside className="hidden xl:block w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden p-6">
          <TableOfContents items={metricsTocItems} />
        </aside>
      </div>
    </div>
  );
}
