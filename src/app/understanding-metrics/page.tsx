import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents, TocItem } from "@/components/layout/table-of-contents";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const understandingMetricsTocItems: TocItem[] = [
  { title: "Brand visibility vs source visibility", href: "#brand-visibility-vs-source-visibility", level: 0 },
  { title: "Brand metrics", href: "#brand-metrics", level: 0 },
  { title: "Position", href: "#position", level: 1 },
  { title: "Sentiment", href: "#sentiment", level: 1 },
  { title: "Visibility score", href: "#visibility-score", level: 1 },
  { title: "Source metrics", href: "#source-metrics", level: 0 },
  { title: "Used", href: "#used", level: 1 },
  { title: "Average citations", href: "#average-citations", level: 1 },
  { title: "Where to analyze your metrics", href: "#where-to-analyze-metrics", level: 0 },
];

export default function UnderstandingMetricsPage() {
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
              <h1 className="text-4xl font-bold mb-4">Understanding your metrics</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Now that you've set up prompts and competitors, let's understand what the data means.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Peec AI tracks two main types of visibility: when your brand is mentioned and when your content is used as a source.
              </p>
              <p>
                Each type has different metrics that help you understand your performance.
              </p>
            </div>

            {/* Brand visibility vs source visibility */}
            <section id="brand-visibility-vs-source-visibility" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Brand visibility vs source visibility</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Understanding the difference between these two is important:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Brand visibility:</strong> Your brand is explicitly mentioned in the response.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Source visibility:</strong> Your domain or content was used or cited — even if your brand isn't named.
                    </div>
                  </li>
                </ul>
                <p>
                  You can be visible as a source without being visible as a brand. And you can be mentioned as a brand without your website being used.
                </p>
                <p>
                  Peec AI tracks both so you can spot gaps. For example:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>If you're cited often but never mentioned, it might mean your brand lacks authority or name recognition.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>If you're mentioned often but never cited, AI might associate your name with a topic, but not trust your content as a reference.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Brand metrics */}
            <section id="brand-metrics" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Brand metrics</h2>
              <p className="text-muted-foreground leading-relaxed">
                These appear on your <strong>Dashboard</strong> and throughout Peec AI:
              </p>

              {/* Position */}
              <div id="position" className="space-y-4">
                <h3 className="text-xl font-semibold">Position</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Average ranking of your brand in the answer (e.g., mentioned first, second, etc.).
                  </p>
                </div>

                {/* Position screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p>Position Metrics Dashboard Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sentiment */}
              <div id="sentiment" className="space-y-4">
                <h3 className="text-xl font-semibold">Sentiment</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The sentiment score measures the overall tone of a prompt's response on a scale from 0 to 100. Most scores fall between 65 and 85. A score near 85 indicates clearly positive language — words like "trusted," "reliable," or "innovative." Around 65 represents neutral or factual language with little emotional tone. Anything below 65 generally signals language that could be critical or negative and typically warrants a closer look.
                  </p>
                </div>

                {/* Sentiment screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">😊</span>
                      </div>
                      <p>Sentiment Analysis Dashboard Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visibility score */}
              <div id="visibility-score" className="space-y-4">
                <h3 className="text-xl font-semibold">Visibility score</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Percentage of chats (AI responses) where your brand is mentioned.
                  </p>
                </div>

                {/* Visibility score screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📈</span>
                      </div>
                      <p>Visibility Score Dashboard Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Source metrics */}
            <section id="source-metrics" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Source metrics</h2>
              <p className="text-muted-foreground leading-relaxed">
                You'll see basic source data on your <strong>Dashboard</strong>, with more detailed information available on the <strong>Sources</strong> page:
              </p>

              {/* Used */}
              <div id="used" className="space-y-4">
                <h3 className="text-xl font-semibold">Used</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Percentage of responses where your content contributed to the AI's answer (even without a citation). Visible on both <strong>Dashboard</strong> and <strong>Sources</strong> page.
                  </p>
                </div>

                {/* Used screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📋</span>
                      </div>
                      <p>Used Metric Dashboard Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Average citations */}
              <div id="average-citations" className="space-y-4">
                <h3 className="text-xl font-semibold">Average citations</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Average number of times a specific source is explicitly cited within a single response. For example, one AI response might cite the same source 3 times. Available on the <strong>Sources</strong> page.
                  </p>
                </div>

                {/* Average citations screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🔗</span>
                      </div>
                      <p>Average Citations Sources Page Screenshot</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 border border-border rounded-lg p-4 text-muted-foreground">
                  <strong>Note:</strong> A source can be used silently (informing the AI's answer) or cited visibly (appearing in the response). Your domain or URLs can contribute to responses even when not explicitly referenced.
                </div>
              </div>
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
                  <h3 className="font-semibold text-lg mb-2">Learn more: Understand your sources</h3>
                  <p className="text-muted-foreground text-sm">
                    Dive deeper into source analysis with URL and domain views.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Where to analyze your metrics */}
            <section id="where-to-analyze-metrics" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Where to analyze your metrics</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>You can view your brand and source metrics at different levels:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Dashboard:</strong> Aggregated view across all prompts and competitors.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Prompts page:</strong> Individual prompt performance and trends.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Sources page:</strong> Source analysis with URL and domain views.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">By tags:</strong> Filter any view by prompt categories to analyze specific themes.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <Link href="/add-competitors" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Adding competitors
              </Link>
              <Link href="/understanding-sources" className="flex items-center text-muted-foreground hover:text-foreground">
                Understanding sources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden p-6">
          <TableOfContents items={understandingMetricsTocItems} />
        </aside>
      </div>
    </div>
  );
}
