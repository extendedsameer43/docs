import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents, TocItem } from "@/components/layout/table-of-contents";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const understandingSourcesTocItems: TocItem[] = [
  { title: "Why sources matter", href: "#why-sources-matter", level: 0 },
  { title: "How to use source insights", href: "#how-to-use-source-insights", level: 0 },
  { title: "Two views of source data", href: "#two-views-of-source-data", level: 0 },
  { title: "Domains view", href: "#domains-view", level: 1 },
  { title: "URLs view", href: "#urls-view", level: 1 },
  { title: "Filters and controls", href: "#filters-and-controls", level: 0 },
  { title: "Source metrics", href: "#source-metrics", level: 0 },
  { title: "Source classification", href: "#source-classification", level: 0 },
];

export default function SourcesPage() {
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
              <h1 className="text-4xl font-bold mb-4">Understanding sources</h1>
              <p className="text-lg text-muted-foreground mb-8">
                The Sources page shows which websites and specific URLs AI models use when generating responses to your prompts. 
                This helps you understand what content AI trusts and references.
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
                [Sources Dashboard Screenshot - Shows source usage trends and metrics]
              </div>
            </div>

            {/* Why sources matter */}
            <section id="why-sources-matter" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Why sources matter</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When AI models generate responses, they pull information from various websites across the internet. Understanding these sources helps you:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Identify trusted content:</strong> See which websites AI models cite most frequently.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Find optimization opportunities:</strong> Discover if your content appears in sources but isn't being cited directly in AI answers.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Track competitive sources:</strong> Monitor which websites your competitors use or appear on.
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
                  <p className="text-sm">
                    <strong>Important:</strong> A source can be used without being cited. Your content might contribute to an AI's response even if it's not explicitly referenced in the final answer.
                  </p>
                </div>
              </div>
            </section>

            {/* How to use source insights */}
            <section id="how-to-use-source-insights" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">How to use source insights</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Source data helps you make strategic decisions about your content and outreach:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Find partnership opportunities:</strong> Identify high-performing sources where you might want to get your brand mentioned.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Improve your content strategy:</strong> Learn from successful sources to improve how you structure and present your information.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Discover content gaps:</strong> See what topics and formats perform well that you might be missing.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Two views of source data */}
            <section id="two-views-of-source-data" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Two views of source data</h2>
              
              {/* Domains view */}
              <div id="domains-view" className="space-y-4">
                <h3 className="text-xl font-semibold">Domains view</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    See source usage grouped by website domain (click on <strong>Domains</strong>):
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Source Usage by Domain graph:</strong> Shows trends over time for the top 5 domains (hover over the chart to see which domains each line represents).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Source table:</strong> Lists all domains with usage metrics (see metrics definitions below).
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* URLs view */}
              <div id="urls-view" className="space-y-4">
                <h3 className="text-xl font-semibold">URLs view</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    See source usage for individual web pages:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Source Usage by URLs graph:</strong> Shows trends over time for the top 5 URLs.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">URL table:</strong> Lists specific pages with detailed metrics.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="mt-8 rounded-lg border bg-muted/50 p-8 text-center">
                <div className="text-muted-foreground">
                  [URLs View Screenshot - Shows URL-specific source analytics]
                </div>
              </div>
            </section>

            {/* Filters and controls */}
            <section id="filters-and-controls" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Filters and controls</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Use these filters to get a closer look at which domains and URLs are being used by narrowing down your data:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Date range:</strong> View data for different time periods (default is last 7 days).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Tags:</strong> Filter by specific prompt tags you've created.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Brand:</strong> Filter by your brand or tracked competitors.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Models:</strong> Filter by specific AI models.
                    </div>
                  </li>
                </ul>

                {/* Screenshot placeholder */}
                <div className="mt-8 rounded-lg border bg-muted/50 p-8 text-center">
                  <div className="text-muted-foreground">
                    [Filters Screenshot - Shows filtering interface]
                  </div>
                </div>
              </div>
            </section>

            {/* Source metrics */}
            <section id="source-metrics" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Source metrics</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4"><strong>Domains</strong> view metrics:</h3>
                  <ul className="space-y-3 ml-4 text-muted-foreground leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Source:</strong> The domain name of the source cited.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Type:</strong> Shows "You" for your own domains, "Competitor" for tracked competitor domains, or an automatic classification (see more on source classification below).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Used:</strong> Percentage of responses where this domain contributed to the AI's answer (in the last 7 days).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Avg. Citations:</strong> Average number of times the domain was explicitly cited when used (in the last 7 days).
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4"><strong>URLs</strong> view metrics:</h3>
                  <ul className="space-y-3 ml-4 text-muted-foreground leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">URL:</strong> The exact URL used in a response.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Mentioned:</strong> Whether your brand was mentioned on this URL.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Mentions:</strong> Top brands mentioned on this URL.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Used total:</strong> Total number of times the URL was used as a source.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Avg. Citations:</strong> Average number of times the URL was explicitly cited when used.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="mt-8 rounded-lg border bg-muted/50 p-8 text-center">
                <div className="text-muted-foreground">
                  [Source Metrics Screenshot - Shows metrics table]
                </div>
              </div>
            </section>

            {/* Source classification */}
            <section id="source-classification" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Source classification</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Classification of source domains (found in the <strong>Type</strong> column):
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">UGC:</strong> User-generated content and social media sites (such as YouTube, TikTok, and Facebook). Also includes sites where the main content is added by users (such as reddit and G2).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Editorial:</strong> Sites where the majority of content is created by a limited number of editors. Mainly news and media publishers (such as CNN or the New York Times) and blogs.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Corporate:</strong> Corporate websites (such as Peec AI or BMW). Also commercial websites and online shops (such as Walmart or Target).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Reference:</strong> Reference websites (such as Wikipedia or Encyclopedia Britannica), including dictionaries (such as Merriam-Webster).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Institutional:</strong> Institutional and governmental websites, as well as universities.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Other:</strong> Websites that don't fit neatly into the above categories. This includes unclassified websites, websites that span multiple categories, and major platforms (such as Google, Bing, and CDNs).
                    </div>
                  </li>
                </ul>

                {/* Screenshot placeholder */}
                <div className="mt-8 rounded-lg border bg-muted/50 p-8 text-center">
                  <div className="text-muted-foreground">
                    [Source Classification Screenshot - Shows classified sources in table]
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t">
              <Link 
                href="/understanding-metrics" 
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Understanding your metrics
              </Link>
              <Link 
                href="/dashboard" 
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Understanding your dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden p-6 hidden lg:block">
          <TableOfContents items={understandingSourcesTocItems} />
        </aside>
      </div>
    </div>
  );
}
