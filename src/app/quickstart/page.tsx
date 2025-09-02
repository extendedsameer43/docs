import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents } from "@/components/layout/table-of-contents";
import { ThemeImage } from "@/components/ui/theme-image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function QuickstartPage() {
  const tocItems = [
    { title: "Set up your Workspace", href: "#step-1", level: 0 },
    { title: "Configure Analytics & Monitoring", href: "#step-2", level: 0 },
    { title: "Create your first prompts", href: "#step-3", level: 0 },
  ];

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
              <h1 className="text-2xl md:text-4xl font-bold mb-4">Quickstart</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Get up and running with Nudg3 in minutes. Set up your workspace, configure analytics, and start monitoring your brand visibility.
              </p>
            </div>

            {/* Introduction */}
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The fastest way to start monitoring your brand's visibility and competitive landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nudg3 provides comprehensive brand analytics, competitive intelligence, and AI-powered insights to help you understand your market position.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After completing this guide, you'll have a fully configured workspace with analytics running and initial data showing your brand performance.
              </p>
            </div>

            {/* Getting Started Video */}
            <section className="my-8">
              <h2 className="text-xl font-semibold mb-4">Getting Started with NUDG3</h2>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ScMzIvxBSi4"
                    title="Getting Started with NUDG3 - Quickstart Guide"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </section>

            {/* Content Sections */}
            <div className="space-y-12">
              <section id="step-1">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Step 1: Set up your Workspace</h2>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed ml-12">
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground mb-2">
                      Your workspace is the central hub for all your brand analytics and team collaboration.
                    </p>
                    <p>
                      Configure your workspace settings to ensure accurate brand monitoring and proper team access controls.
                    </p>
                  </div>
                  
                  <p>Configure your brand and workspace settings:</p>
                  
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Brand Information:</strong> Set your brand name, logo, and primary domain for accurate tracking.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Team Management:</strong> Invite team members and configure their permissions and access levels.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Data Sources:</strong> Connect your analytics sources and configure data collection preferences.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Notifications:</strong> Set up alerts for important brand mentions and performance changes.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Workspace setup screenshot */}
                <div className="bg-gradient-to-br from-muted/20 to-muted/40 border border-border rounded-lg overflow-hidden ml-12 mt-6 p-4">
                  <div className="aspect-video bg-background/50 rounded-md">
                    <ThemeImage
                      darkSrc="/images/workspace-setup-dark.png"
                      lightSrc="/images/workspace-setup-light.png"
                      alt="Workspace Configuration Interface"
                      className="w-full h-full object-contain rounded-md shadow-sm"
                    />
                  </div>
                </div>
              </section>

              <section id="step-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Step 2: Configure Analytics & Monitoring</h2>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed ml-12">
                  <p>
                    Set up your brand monitoring and competitive analysis to start collecting valuable insights about your market position and visibility.
                  </p>
                  
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">Key Analytics to Configure:</p>
                    <ul className="space-y-1 mt-2">
                      <li>• Brand mention tracking across multiple channels</li>
                      <li>• Competitor performance monitoring</li>
                      <li>• Source reliability and performance metrics</li>
                      <li>• AI model response analysis</li>
                    </ul>
                  </div>
                  
                  <p>
                    Navigate to the <strong>Dashboard</strong> to configure your analytics preferences and start monitoring.
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-3">Configuration Options:</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <span className="mr-2">•</span>
                        <div>
                          <strong className="text-foreground">Automated Setup:</strong> Use our intelligent configuration based on your industry and brand profile.
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="mr-2">•</span>
                        <div>
                          <strong className="text-foreground">Custom Configuration:</strong> Manually set up specific metrics and monitoring parameters.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-muted-foreground">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Add manually:</strong> Click <strong>Add</strong> and enter your own questions.
                    </div>
                  </div>
                </div>
              </section>

              <section id="step-3">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Step 3: Create your first prompts</h2>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed ml-12">
                  <p>
                    Create targeted prompts to guide AI responses and ensure consistent, high-quality interactions with your brand content.
                  </p>
                  
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">Prompt Best Practices:</p>
                    <ul className="space-y-1 mt-2">
                      <li>• Be specific about your brand voice and messaging</li>
                      <li>• Include key product features and differentiators</li>
                      <li>• Define your target audience and use cases</li>
                      <li>• Test prompts with different scenarios</li>
                    </ul>
                  </div>
                  
                  <p>
                    Navigate to <strong>Setup Prompts</strong> to create and manage your prompt library.
                  </p>

                  <div className="flex items-start space-x-3 text-muted-foreground">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Add manually:</strong> Click <strong>Add</strong> and enter your own questions.
                    </div>
                  </div>
                </div>

                {/* Manual add prompts screenshot */}
                <div className="bg-gradient-to-br from-muted/20 to-muted/40 border border-border rounded-lg overflow-hidden ml-12 mt-6 p-4">
                  <div className="aspect-video bg-background/50 rounded-md">
                    <ThemeImage
                      darkSrc="/images/add-prompts-dark.png"
                      lightSrc="/images/add-prompts-light.png"
                      alt="Manual Add Prompts Interface"
                      className="w-full h-full object-contain rounded-md shadow-sm"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Welcome to Nudg3
              </Link>
              <Link href="/setup-prompts" className="flex items-center text-muted-foreground hover:text-foreground">
                Setting up your prompts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="hidden xl:block w-64 border-l border-border bg-card/50 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden">
          <div className="p-6">
            <TableOfContents items={tocItems} />
          </div>
        </aside>
      </div>
    </div>
  );
}
