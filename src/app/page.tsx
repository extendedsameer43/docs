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
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-border bg-card/50 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 py-8 max-w-4xl">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Get Started</p>
              <h1 className="text-4xl font-bold mb-4">Welcome to Peec AI</h1>
              <p className="text-lg text-muted-foreground mb-8">
                The #1 AI search analytics tool for marketing teams and
                agencies.
              </p>
            </div>

            {/* Video Section */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted/20 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Product Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <section id="intro">
                <h2 className="text-2xl font-semibold mb-4">Intro to Peec AI</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Your audience isn't just using Google anymore. They're asking ChatGPT or Claude for product recommendations, using Perplexity for research, getting answers from Grok, and using AI overviews to learn about topics and compare options.
                  </p>
                  <p>
                    People are having conversations with AI instead of searching with keywords. This means visibility works differently now.
                  </p>
                  <p>
                    Peec AI shows you how your brand appears in AI search.
                  </p>
                </div>
              </section>

              <section id="what-peec-ai-does">
                <h2 className="text-2xl font-semibold mb-4">What Peec AI does</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We track whether your brand appears when people ask AI tools questions about your industry, products, or the problems you solve.
                  </p>
                  <p>
                    Peec AI works for any business wanting to understand their AI search presence. Individual companies tracking their own visibility or agencies monitoring multiple clients.
                  </p>
                  <p className="font-medium text-foreground">
                    Visibility happens in two ways:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Brand mentions:</strong> Your company is named in AI responses.</li>
                    <li><strong>Source citations:</strong> Your content is used or referenced, even without naming your brand.</li>
                  </ul>
                  <p>
                    We run your prompts daily across multiple AI models. This gives you reliable data on how often you appear compared to competitors.
                  </p>
                </div>
              </section>

              <section id="how-peec-ai-helps">
                <h2 className="text-2xl font-semibold mb-4">How Peec AI helps</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Track AI visibility:</strong> See when you're mentioned in relevant conversations across different AI models.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Monitor competitors:</strong> Understand who else appears in your space and how often.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Find citation opportunities:</strong> Discover which sources AI models trust and reference.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Spot content gaps:</strong> Identify when you're cited as a source but not mentioned as a brand.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Track trends over time:</strong> Monitor how your visibility changes as AI models evolve.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Make data-driven decisions:</strong> Use probability-based insights for your strategy.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Understand AI behavior:</strong> Learn which content types and sources perform best.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-foreground mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Optimize your approach:</strong> Focus efforts on prompts and topics that matter most.
                    </div>
                  </li>
                </ul>
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

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden p-6">
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
}
