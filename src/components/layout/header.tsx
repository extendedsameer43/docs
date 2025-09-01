"use client";

import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 hidden md:flex">
          <div className="mr-6 flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-primary"></div>
              <span className="hidden font-bold sm:inline-block text-lg">
                Peec AI
              </span>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pl-1 pr-0 w-[300px] sm:w-[350px]">
            <div className="px-7 pb-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-primary"></div>
                <span className="font-bold">Peec AI</span>
              </div>
            </div>
            <div className="px-3">
              <Sidebar />
            </div>
          </SheetContent>
        </Sheet>

        {/* Mobile logo */}
        <div className="flex items-center space-x-2 md:hidden">
          <div className="h-6 w-6 rounded bg-primary"></div>
          <span className="font-bold">Peec AI</span>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8 md:w-[300px] lg:w-[400px] bg-muted/50"
              />
            </div>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <Button variant="ghost" size="sm" className="text-sm hidden sm:inline-flex">
              <span className="hidden lg:inline">Ctrl K</span>
              <span className="lg:hidden">⌘K</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-xs md:text-sm">
              Ask AI
            </Button>
            <Button variant="ghost" size="sm" className="text-xs md:text-sm hidden sm:inline-flex">
              Support
            </Button>
            <Button variant="ghost" size="sm" className="text-xs md:text-sm hidden md:inline-flex">
              Peec.ai
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
