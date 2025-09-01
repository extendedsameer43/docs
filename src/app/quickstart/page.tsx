import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function QuickstartPage() {
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
                Get up and running with Peec AI in minutes. Follow this guide to set up your first analytics dashboard.
              </p>
            </div>

            {/* Introduction */}
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The fastest way to understand your brand's AI search presence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Peec AI shows you how your brand appears when people ask AI questions about your industry.
                Set up your workspace, create prompts, and get your first visibility data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After completing this guide, you'll have prompts running and initial data showing how your brand appears across AI models.
              </p>
            </div>

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
                      The workspace name must exactly match your brand.
                    </p>
                    <p>
                      It is the term we use when analyzing responses, so it's important that it reflects your actual brand.
                    </p>
                    <p className="mt-2">
                      You'll also see your brand listed under "Competitors" because our system treats your brand as one of the competitors during the analysis process.
                    </p>
                  </div>
                  
                  <p>Define your brand basics in the Workspace settings:</p>
                  
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Brand name:</strong> The name of the brand exactly as you want us to look for it in AI responses.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Domain:</strong> Brand's main website domain.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">IP Address:</strong> Choose where to run prompts from.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <strong className="text-foreground">Models:</strong> Select which AI models to track based on your plan.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Workspace setup screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden ml-12 mt-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <p>Workspace Settings Screenshot</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="step-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Step 2: Create your first prompts</h2>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed ml-12">
                  <p>
                    Prompts are the actual questions people type into ChatGPT, Perplexity, Google, and other AI tools — they're essential for generating your data.
                  </p>
                  
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">For example:</p>
                    <p className="italic">"What project management tool would be best for a remote team of 10 people with a tight budget?"</p>
                  </div>
                  
                  <p>
                    Navigate to the <strong>Prompts</strong> page in your sidebar and start with 3-5 questions where you'd want your brand to appear.
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-3">Quick start options:</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <span className="mr-2">•</span>
                        <div>
                          <strong className="text-foreground">Use suggestions:</strong> Accept prompts we generate based on your website and industry.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suggestions screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden ml-12 mt-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">💡</span>
                      </div>
                      <p>Prompt Suggestions Screenshot</p>
                    </div>
                  </div>
                </div>

                <div className="ml-12 mt-6">
                  <div className="flex items-start space-x-3 text-muted-foreground">
                    <span className="mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Add manually:</strong> Click <strong>Add</strong> and enter your own questions.
                    </div>
                  </div>
                </div>

                {/* Manual add screenshot */}
                <div className="bg-card border border-border rounded-lg overflow-hidden ml-12 mt-6">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-2xl">✏️</span>
                      </div>
                      <p>Manual Add Prompts Screenshot</p>
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
                    <h2 className="text-2xl font-semibold mb-4">Step 3: Review your Dashboard</h2>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed ml-12">
                  <p>
                    Within 24 hours, check your dashboard for your first visibility data. Learn how to read your results in our dashboard guide.
                  </p>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Welcome to Peec AI
              </Link>
              <Link href="/setup-prompts" className="flex items-center text-muted-foreground hover:text-foreground">
                Setting up your prompts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm mb-4 flex items-center">
                <div className="mr-2 h-4 w-4 border-2 border-current rounded-sm"></div>
                On this page
              </h3>
              <div className="space-y-2">
                <a href="#step-1" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Step 1: Set up your Workspace
                </a>
                <a href="#step-2" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Step 2: Create your first prompts
                </a>
                <a href="#step-3" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Step 3: Review your Dashboard
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
