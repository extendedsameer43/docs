import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents, TocItem } from "@/components/layout/table-of-contents";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import Link from "next/link";

const lookerTocItems: TocItem[] = [
  { title: "What is the Peec AI Looker Studio connector?", href: "#what-is-connector", level: 0 },
  { title: "How this helps", href: "#how-this-helps", level: 0 },
  { title: "How to set up the connector", href: "#setup-connector", level: 0 },
  { title: "What you need", href: "#what-you-need", level: 1 },
  { title: "Step 1: Access the connector", href: "#step-1-access", level: 1 },
  { title: "Step 2: Authorize the connection", href: "#step-2-authorize", level: 1 },
  { title: "Step 3: Configure your data source", href: "#step-3-configure", level: 1 },
  { title: "Step 4: Connect and validate", href: "#step-4-connect", level: 1 },
  { title: "Available data fields", href: "#available-data-fields", level: 0 },
  { title: "Dimensions", href: "#dimensions", level: 1 },
  { title: "Metrics", href: "#metrics", level: 1 },
  { title: "Creating your first report", href: "#creating-first-report", level: 0 },
  { title: "Step 1: Create a new report", href: "#create-new-report", level: 1 },
  { title: "Step 2: Add visualizations", href: "#add-visualizations", level: 1 },
  { title: "Step 3: Apply filters and controls", href: "#apply-filters", level: 1 },
  { title: "Troubleshooting", href: "#troubleshooting", level: 0 },
  { title: "Common issues", href: "#common-issues", level: 1 },
  { title: "Getting help", href: "#getting-help", level: 1 },
];

export default function LookerStudioConnectorPage() {
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
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Integrations</p>
              <h1 className="text-4xl font-bold mb-4">Looker Studio connector</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Complete guide to connecting and using Peec AI data in Looker Studio.
              </p>
            </div>

            {/* What is the Peec AI Looker Studio connector? */}
            <section id="what-is-connector" className="space-y-4">
              <h2 className="text-2xl font-semibold">What is the Peec AI Looker Studio connector?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Peec AI Looker Studio community connector lets you import your AI search visibility data directly into{" "}
                  <strong className="text-foreground">Google Looker Studio</strong>. You can then create custom dashboards and reports using your 
                  brand performance data from AI search engines like ChatGPT, Perplexity, and Gemini.
                </p>
              </div>
              
              {/* Info callout */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  <p>
                    Looker Studio is Google&apos;s free data visualization tool that helps you turn your data into informative, 
                    easy-to-read, and shareable dashboards and reports.
                  </p>
                </div>
              </div>

              {/* Video placeholder */}
              <div className="mb-8 rounded-lg border bg-muted/50 p-8 text-center">
                <div className="text-muted-foreground mb-2">
                  📹 Integrating Peec AI with Google Looker Studio - A Step by Step Tutorial
                </div>
                <div className="text-xs text-muted-foreground">
                  [YouTube video embedded here]
                </div>
              </div>
            </section>

            {/* How this helps */}
            <section id="how-this-helps" className="space-y-4">
              <h2 className="text-2xl font-semibold">How this helps</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <div>
                    <strong className="text-foreground">Real-time data access:</strong>{" "}
                    <span className="text-muted-foreground">
                      Connect directly to your Peec AI workspace for up-to-date visibility metrics.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <div>
                    <strong className="text-foreground">Custom visualizations:</strong>{" "}
                    <span className="text-muted-foreground">
                      Create charts, graphs, and tables that match your reporting needs.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <div>
                    <strong className="text-foreground">Team collaboration:</strong>{" "}
                    <span className="text-muted-foreground">
                      Share dashboards with stakeholders and team members.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* How to set up the connector */}
            <section id="setup-connector" className="space-y-6">
              <h2 className="text-2xl font-semibold">How to set up the connector</h2>
              
              {/* What you need */}
              <div id="what-you-need" className="space-y-4">
                <h3 className="text-xl font-medium">What you need</h3>
                <p className="text-muted-foreground">Before you begin, ensure you have:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-muted-foreground">A Peec AI account with access to at least one workspace</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-muted-foreground">A Google account with access to Looker Studio</span>
                  </div>
                </div>
              </div>

              {/* Step 1: Access the connector */}
              <div id="step-1-access" className="space-y-4">
                <h3 className="text-xl font-medium">Step 1: Access the connector</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      Use <strong>this link</strong> to access Peec AI connector (make sure you&apos;re signed in with your Google account).
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      Enter your basic info and complete account setup.
                    </div>
                  </div>
                </div>

                {/* Screenshot placeholder */}
                <div className="mb-6 rounded-lg border bg-muted/50 p-6 text-center">
                  <div className="text-muted-foreground text-sm mb-2">
                    📸 Looker Studio Connector Selection Screen
                  </div>
                  <div className="text-xs text-muted-foreground">
                    [Shows AI Analytics - Peec AI connector with authorization button]
                  </div>
                </div>
              </div>

              {/* Warning callout */}
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800 dark:text-amber-200">
                  <p>
                    If you can&apos;t find the Peec AI connector in the gallery or encounter other issues, contact us at{" "}
                    <strong>support@peec.ai</strong>
                  </p>
                </div>
              </div>

              {/* Step 2: Authorize the connection */}
              <div id="step-2-authorize" className="space-y-4">
                <h3 className="text-xl font-medium">Step 2: Authorize the connection</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      Click <strong>AUTHORIZE</strong> to begin the OAuth2 authentication process.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      You&apos;ll be redirected to Google&apos;s authorization page.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      Sign in with your Google account if prompted.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      You&apos;ll see a &quot;Google hasn&apos;t verified this app&quot; warning. This is normal for community connectors. 
                      Click <strong>Advanced → Go to Peec AI (unsafe)</strong>.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      Grant the necessary permissions to the connector.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      6
                    </div>
                    <div>
                      You&apos;ll be redirected back to Looker Studio once authorization is complete. 
                      Another <strong>AUTHORIZE</strong> button will appear below &quot;AI Analytics - Peec AI requires authorization to connect to data.&quot;
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      7
                    </div>
                    <div>
                      Click on <strong>AUTHORIZE</strong>.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      8
                    </div>
                    <div>
                      You will see a Peec AI Looker Authenticator pop-up. Click{" "}
                      <strong>Continue with Google</strong> and sign in or select your Google account.
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Configure your data source */}
              <div id="step-3-configure" className="space-y-4">
                <h3 className="text-xl font-medium">Step 3: Configure your data source</h3>
                <p className="text-muted-foreground">
                  After authorization, you&apos;ll see the connector configuration screen:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      Choose which Peec AI Workspace to connect.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      If you want to create reports that can switch between multiple Peec AI Workspaces, 
                      select the option to use Workspaces as a parameter in Reports.
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Connect and validate */}
              <div id="step-4-connect" className="space-y-4">
                <h3 className="text-xl font-medium">Step 4: Connect and validate</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      Click <strong>CONNECT</strong> to establish the connection.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      The connector will validate your configuration and fetch sample data.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      You&apos;ll see the available fields that can be used in your reports.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Available data fields */}
            <section id="available-data-fields" className="space-y-6">
              <h2 className="text-2xl font-semibold">Available data fields</h2>
              <p className="text-muted-foreground">
                The Peec AI connector provides the following data fields:
              </p>

              {/* Dimensions */}
              <div id="dimensions" className="space-y-4">
                <h3 className="text-xl font-medium">Dimensions</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Field Name</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">Brand</td>
                        <td className="border border-border p-3 text-muted-foreground">Text</td>
                        <td className="border border-border p-3 text-muted-foreground">All the Brands that you have mentioned in Peec AI</td>
                      </tr>
                      <tr className="bg-muted/25">
                        <td className="border border-border p-3 font-mono text-sm">Source: Domain</td>
                        <td className="border border-border p-3 text-muted-foreground">Text</td>
                        <td className="border border-border p-3 text-muted-foreground">The Website Domains that the AI Models used while answering your prompts</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">Date</td>
                        <td className="border border-border p-3 text-muted-foreground">Date</td>
                        <td className="border border-border p-3 text-muted-foreground">Date for all the Metrics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Metrics */}
              <div id="metrics" className="space-y-4">
                <h3 className="text-xl font-medium">Metrics</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Field Name</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">Visibility</td>
                        <td className="border border-border p-3 text-muted-foreground">Number</td>
                        <td className="border border-border p-3 text-muted-foreground">Visibility for Brands on the specific Date</td>
                      </tr>
                      <tr className="bg-muted/25">
                        <td className="border border-border p-3 font-mono text-sm">Citations</td>
                        <td className="border border-border p-3 text-muted-foreground">Number</td>
                        <td className="border border-border p-3 text-muted-foreground">
                          Citation value for the <strong>Source: Domain</strong> on the specified Date
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">Chats</td>
                        <td className="border border-border p-3 text-muted-foreground">Number</td>
                        <td className="border border-border p-3 text-muted-foreground">Number of Chats on the specified Date</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Creating your first report */}
            <section id="creating-first-report" className="space-y-6">
              <h2 className="text-2xl font-semibold">Creating your first report</h2>

              {/* Video placeholder */}
              <div className="mb-6 rounded-lg border bg-muted/50 p-8 text-center">
                <div className="text-muted-foreground mb-2">
                  📹 Creating Engaging Reports with Looker Studio
                </div>
                <div className="text-xs text-muted-foreground">
                  [YouTube video tutorial embedded here]
                </div>
              </div>

              {/* Step 1: Create a new report */}
              <div id="create-new-report" className="space-y-4">
                <h3 className="text-xl font-medium">Step 1: Create a new report</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      After configuring your data source, click <strong>CREATE REPORT</strong>.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      Looker Studio will open the report editor with your Peec AI data.
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Add visualizations */}
              <div id="add-visualizations" className="space-y-4">
                <h3 className="text-xl font-medium">Step 2: Add visualizations</h3>
                <p className="text-muted-foreground">
                  Looker Studio offers a wide range of charts and tables to fit your needs. Have a look at the{" "}
                  <strong className="text-foreground">Types of Charts in Looker Studio</strong> for more options.
                </p>
              </div>

              {/* Step 3: Apply filters and controls */}
              <div id="apply-filters" className="space-y-4">
                <h3 className="text-xl font-medium">Step 3: Apply filters and controls</h3>
                <p className="text-muted-foreground">
                  Add interactive controls to make your reports dynamic.
                </p>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="space-y-6">
              <h2 className="text-2xl font-semibold">Troubleshooting</h2>

              {/* Common issues */}
              <div id="common-issues" className="space-y-6">
                <h3 className="text-xl font-medium">Common issues</h3>

                {/* Authorization Failed */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">&quot;Authorization Failed&quot;</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Ensure you&apos;re using the correct Google account.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Clear browser cache and try again.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Check that your account has access to the Peec AI Workspace.</span>
                    </div>
                  </div>
                </div>

                {/* No Data Available */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">"No Data Available"</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Verify you've selected the correct Peec AI Workspace.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Check that your date range includes data.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Ensure your filters aren't too restrictive.</span>
                    </div>
                  </div>
                </div>

                {/* Connection Timeout */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">"Connection Timeout"</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Try reducing the date range.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Remove unnecessary filters.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Contact support if the issue persists.</span>
                    </div>
                  </div>
                </div>

                {/* Invalid Workspace */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">"Invalid Workspace"</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Double-check your Workspace in the Peec AI dashboard.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Ensure you have access permissions to the Workspace.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground">Contact your account administrator if needed.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Getting help */}
              <div id="getting-help" className="space-y-4">
                <h3 className="text-xl font-medium">Getting help</h3>
                <p className="text-muted-foreground">
                  If you encounter issues not covered here:
                </p>
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4">
                    <p className="font-medium mb-2">Contact support:</p>
                    <p className="text-muted-foreground mb-2">
                      Email <strong className="text-foreground">support@peec.ai</strong> with:
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-foreground rounded-full"></div>
                        <span className="text-muted-foreground">Description of the issue</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-foreground rounded-full"></div>
                        <span className="text-muted-foreground">Screenshots if applicable</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    For more advanced use cases and enterprise features, contact{" "}
                    <strong className="text-foreground">sales@peec.ai</strong>.
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t">
              <Link
                href="/sidebar-navigation"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Sidebar navigation
              </Link>
              <div className="text-xs text-muted-foreground">
                Powered by Mintlify
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden">
          <TableOfContents items={lookerTocItems} />
        </aside>
      </div>
    </div>
  );
}
