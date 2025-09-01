import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents, TocItem } from "@/components/layout/table-of-contents";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const setupPromptsTocItems: TocItem[] = [
  { title: "Why prompts matter", href: "#why-prompts-matter", level: 0 },
  { title: "Two ways to add prompts", href: "#two-ways-to-add-prompts", level: 0 },
  { title: "1. Use prompt suggestions", href: "#use-suggestions", level: 1 },
  { title: "2. Add prompts manually", href: "#add-manually", level: 1 },
  { title: "3. Upload prompts via CSV", href: "#upload-csv", level: 1 },
  { title: "Tagging your prompts", href: "#tagging-prompts", level: 0 },
  { title: "How to tag prompts", href: "#how-to-tag", level: 1 },
  { title: "Reading your prompts dashboard", href: "#reading-dashboard", level: 0 },
  { title: "Dashboard overview", href: "#dashboard-overview", level: 1 },
  { title: "Filters and controls", href: "#filters-controls", level: 1 },
  { title: "Prompt performance table", href: "#performance-table", level: 1 },
  { title: "Individual prompt performance", href: "#individual-performance", level: 0 },
  { title: "Managing your prompts", href: "#managing-prompts", level: 0 },
  { title: "Individual prompt actions", href: "#individual-actions", level: 1 },
  { title: "Bulk prompt actions", href: "#bulk-actions", level: 1 },
  { title: "Export prompt performance data", href: "#export-data", level: 1 },
];

export default function SetupPromptsPage() {
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
              <h1 className="text-4xl font-bold mb-4">Setting up your prompts</h1>
            </div>

            {/* Why prompts matter */}
            <section id="why-prompts-matter" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Why prompts matter</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Prompts simulate real questions your audience might ask. Peec AI runs them across multiple AI models once every 24 hours, giving you fresh insights on how the models respond and who they highlight.
                </p>
              </div>
            </section>

            {/* Two ways to add prompts */}
            <section id="two-ways-to-add-prompts" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Two ways to add prompts</h2>
              <p className="text-muted-foreground leading-relaxed">
                Navigate to <strong>Prompts</strong> in your sidebar. From here, you can:
              </p>

              {/* 1. Use prompt suggestions */}
              <div id="use-suggestions" className="space-y-4">
                <h3 className="text-xl font-semibold">1. Use prompt suggestions</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Our suggestion engine proposes prompts based on:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Your website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Industry context</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Existing prompts in your workspace</span>
                    </li>
                  </ul>
                  <p>You can accept, reject, or ask for more suggestions.</p>
                  <p>
                    Go to the <strong>Suggested</strong> tab to see suggested prompts. Click to <strong>Reject</strong> or <strong>Accept</strong> them. Any accepted prompts will get added to the <strong>Active</strong> prompts tab.
                  </p>
                  <p>
                    If you don't see any suggestions, click the <strong>Generate suggestion</strong> button.
                  </p>
                </div>

                {/* Prompt suggestions screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">💡</span>
                      </div>
                      <p>Prompt Suggestions Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Add prompts manually */}
              <div id="add-manually" className="space-y-4">
                <h3 className="text-xl font-semibold">2. Add prompts manually</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Click <strong>Add</strong> in the top-right of the Prompts page. You can:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Add one or more prompts (use new line for each new prompt).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        In <strong>IP Address</strong>, set the country you want each prompt to run from.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Add prompt dialog screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p>Add Prompt Dialog Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Upload prompts via CSV */}
              <div id="upload-csv" className="space-y-4">
                <h3 className="text-xl font-semibold">3. Upload prompts via CSV</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>You can bulk import prompts by uploading a CSV file.</p>
                  <p>
                    To do so, click <strong>Bulk Add</strong> in the top-right of the Prompts page, right next to the <strong>Add</strong> button.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Click anywhere in the upload box to open a system upload dialog or just drag-&-drop your CSV into the box</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Confirm that the preview follows your desired structure</span>
                    </li>
                  </ul>
                  <p>
                    Any imported prompts will appear in your <strong>Active prompts</strong> tab and start running right away before joining the regular 24-hour prompt cycle.
                  </p>
                  <p>Your CSV file should be comma- or semicolon-separated and follow this format:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Row 1:</strong> Header row for naming your columns. It is ignored during import.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Column 1:</strong> Prompt text (one per row, max 200 characters)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Column 2:</strong> Location, using ISO 3166-1 alpha-2 two-letter country codes (e.g., US, GB, DE). Default is US if left blank or invalid.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong>Column 3:</strong> Tags, comma-separated (optional). If you want to use commas in your tags, wrap the entire cell in quotes.
                      </div>
                    </li>
                  </ul>
                  <p>
                    After upload, prompts will run immediately once, then join the regular cycle for the next update.
                  </p>
                </div>

                {/* CSV upload screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p>CSV Upload Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tagging your prompts */}
            <section id="tagging-prompts" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Tagging your prompts</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tags help you organize prompts around themes, funnel stages, locations, or product areas — so you can analyze performance in isolation.
                </p>
                <p>
                  For example, you could compare visibility for "email marketing" prompts versus "social media marketing" prompts, or compare German prompts versus US prompts.
                </p>

                <h3 id="how-to-tag" className="text-xl font-semibold text-foreground mt-6 mb-3">How to tag prompts</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Add/edit tags by clicking the <strong>Tag</strong> column in the prompt table.</span>
                  </li>
                </ul>
              </div>

              {/* Tagging screenshot */}
              <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                <div className="aspect-video bg-muted/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏷️</span>
                    </div>
                    <p>Tagging Screenshot</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reading your prompts dashboard */}
            <section id="reading-dashboard" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Reading your prompts dashboard</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The <strong>Prompts</strong> page shows all your prompts and their performance data. Here's what you'll see:
                </p>

                <h3 id="dashboard-overview" className="text-xl font-semibold text-foreground mt-6 mb-3">Dashboard overview</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Next prompt cycle:</strong> Timer showing when the next 24-hour prompt run begins.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Prompt usage:</strong> Shows how many active prompts you're using vs. your plan limit.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Active/Inactive tabs:</strong> Switch between running prompts and archived ones.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Suggested prompts:</strong> Generated prompt recommendations.
                    </div>
                  </li>
                </ul>

                {/* Dashboard overview screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p>Dashboard Overview Screenshot</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 border border-border rounded-lg p-4 text-muted-foreground">
                  <strong>Note:</strong> Only active prompts count toward your prompt limit. Inactive prompts are archived but don't use your quota — a great way to experiment with new prompts while staying within your plan.
                </div>

                <h3 id="filters-controls" className="text-xl font-semibold text-foreground mt-6 mb-3">Filters and controls</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Tags filter:</strong> Filter prompts by specific or all tags.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Brand filter:</strong> View prompts for your brand or specific (or all) competitors.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Add button:</strong> Create new prompts manually.
                    </div>
                  </li>
                </ul>

                {/* Filters screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🔍</span>
                      </div>
                      <p>Filters and Controls Screenshot</p>
                    </div>
                  </div>
                </div>

                <h3 id="performance-table" className="text-xl font-semibold text-foreground mt-6 mb-3">Prompt performance table</h3>
                <p className="text-muted-foreground mb-4">Each prompt shows:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Position:</strong> Average ranking when your brand appears in AI answers (lower is better).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Sentiment:</strong> Score from 1-100 based on how positively you're mentioned (higher is better).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Visibility:</strong> Percentage of responses where your brand appeared.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Top:</strong> Icons showing the top 3 competitors mentioned for this prompt (hover to see exact percentages).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Tags:</strong> Prompt categories for organization (click to create or add new tags).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Geo:</strong> Country where the prompt is run from (geo proxies available for ChatGPT and AI Overviews only).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Created:</strong> When the prompt was added.
                    </div>
                  </li>
                </ul>

                {/* Performance table screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📈</span>
                      </div>
                      <p>Performance Table Screenshot</p>
                    </div>
                  </div>
                </div>

                <h3 id="individual-performance" className="text-xl font-semibold text-foreground mt-6 mb-3">Individual prompt performance</h3>
                <p className="text-muted-foreground mb-4">
                  Click into a specific prompt to see an in-depth performance dashboard. Just like all other dashboards, you can customize it using filters, download CSV files, and explore metrics.
                </p>

                {/* Individual performance screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📋</span>
                      </div>
                      <p>Individual Prompt Performance Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Managing your prompts */}
            <section id="managing-prompts" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Managing your prompts</h2>

              <h3 id="individual-actions" className="text-xl font-semibold text-foreground mt-6 mb-3">Individual prompt actions</h3>
              <p className="text-muted-foreground mb-4">For single prompts, you can:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    <strong className="text-foreground">Archive prompts:</strong> Select your prompt and click <strong>Disable</strong> to turn it inactive while keeping historical data. To restore it, head into <strong>Inactive</strong> and click <strong>Enable</strong>.
                  </div>
                </li>
              </ul>

              {/* Individual actions screenshot */}
              <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                <div className="aspect-video bg-muted/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <p>Individual Actions Screenshot</p>
                  </div>
                </div>
              </div>

              <h3 id="bulk-actions" className="text-xl font-semibold text-foreground mt-6 mb-3">Bulk prompt actions</h3>
              <p className="text-muted-foreground mb-4">Select multiple prompts using the checkboxes to:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    <strong className="text-foreground">Group assign tags:</strong> Add tags to several prompts at once.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    <strong className="text-foreground">Group disable:</strong> Turn multiple prompts inactive simultaneously.
                  </div>
                </li>
              </ul>

              {/* Bulk actions screenshot */}
              <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                <div className="aspect-video bg-muted/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <p>Bulk Actions Screenshot</p>
                  </div>
                </div>
              </div>

              <h3 id="export-data" className="text-xl font-semibold text-foreground mt-6 mb-3">Export prompt performance data</h3>
              <p className="text-muted-foreground mb-4">
                Scroll to the bottom of all active or inactive prompts to download a CSV file containing the last 7 days of data for each set.
              </p>

              {/* Export data screenshot */}
              <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
                <div className="aspect-video bg-muted/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📥</span>
                    </div>
                    <p>Export Data Screenshot</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">
                <strong>Next:</strong> Once your prompts are running, learn how to interpret your results.
              </p>
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
                  <h3 className="font-semibold text-lg mb-2">Learn more: Understand your metrics</h3>
                  <p className="text-muted-foreground text-sm">
                    Dive deeper into interpreting your prompt performance data and analytics.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <Link href="/quickstart" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quickstart
              </Link>
              <Link href="/add-competitors" className="flex items-center text-muted-foreground hover:text-foreground">
                Adding competitors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden p-6">
          <TableOfContents items={setupPromptsTocItems} />
        </aside>
      </div>
    </div>
  );
}
