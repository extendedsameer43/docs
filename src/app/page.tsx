import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents } from "@/components/layout/table-of-contents";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
              <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Nudg3</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                A comprehensive brand visibility and competitive analysis platform providing real-time analytics for brand monitoring and competitive intelligence.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <section id="intro">
                <h2 className="text-2xl font-semibold mb-4">Platform Overview</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nudg3 is a comprehensive brand visibility and competitive analysis platform that provides real-time analytics for brand monitoring, competitive intelligence, and AI-powered insights.
                  </p>
                  <p>
                    The platform combines advanced AI models, data visualization, and collaborative tools to help businesses understand their brand performance and competitive landscape.
                  </p>
                </div>
              </section>

              {/* Product Demo Video */}
              <section className="my-8">
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="NUDG3 Product Walkthrough"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </section>

              <section id="what-nudg3-does">
                <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 hover:scale-[1.02] cursor-pointer group">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">Dashboard Analytics</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Real-time brand visibility charts</li>
                        <li>• Top performing sources analytics</li>
                        <li>• Advanced filtering by date, models, and tags</li>
                        <li>• Competitive brand comparison tools</li>
                      </ul>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 hover:scale-[1.02] cursor-pointer group">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">Brand Intelligence</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Monitor brand mentions and sentiment</li>
                        <li>• Track competitor performance</li>
                        <li>• Analyze brand positioning over time</li>
                        <li>• Generate competitive intelligence reports</li>
                      </ul>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 hover:scale-[1.02] cursor-pointer group">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">AI Models & Prompts</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Support for multiple AI models (Claude, GPT-4, Gemini)</li>
                        <li>• Create and manage custom prompts</li>
                        <li>• Response analysis and performance tracking</li>
                        <li>• Historical response data and trends</li>
                      </ul>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 hover:scale-[1.02] cursor-pointer group">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">Source Analytics</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Track performance across data sources</li>
                        <li>• Detailed usage statistics</li>
                        <li>• Source reliability scoring</li>
                        <li>• Data source optimization insights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="how-nudg3-helps">
                <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Comprehensive Analytics:</strong> Get detailed insights into your brand's performance across multiple channels and metrics.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Competitive Intelligence:</strong> Compare your brand against competitors with detailed visibility scores and positioning analysis.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">AI-Powered Insights:</strong> Leverage multiple AI models to analyze prompts and generate intelligent business insights.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Real-Time Monitoring:</strong> Track brand mentions, sentiment, and performance changes as they happen.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Team Collaboration:</strong> Manage workspaces, teams, and user permissions with comprehensive collaboration tools.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Advanced Filtering:</strong> Filter data by time ranges, AI models, tags, and brands to get precise insights.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Data Visualization:</strong> Interactive charts and tables for better understanding of trends and patterns.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Scalable Infrastructure:</strong> Built with modern technology stack to handle enterprise-level data and analytics.
                    </div>
                  </li>
                </ul>
              </section>

              <section id="technology-stack">
                <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-sm">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Frontend</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Next.js 15</li>
                        <li>React 19</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">UI Components</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Radix UI</li>
                        <li>TanStack Table</li>
                        <li>Recharts</li>
                        <li>React Hook Form</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Authentication</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>NextAuth.js</li>
                        <li>Secure sessions</li>
                        <li>Role-based access</li>
                        <li>Workspace permissions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Features</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Real-time updates</li>
                        <li>Data visualization</li>
                        <li>Export capabilities</li>
                        <li>Responsive design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-end pt-8 border-t border-border">
              <Link href="/quickstart" className="flex items-center text-muted-foreground hover:text-foreground">
                Quickstart
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents - Hidden on mobile and tablet */}
        <aside className="hidden xl:block w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden p-6">
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
}
