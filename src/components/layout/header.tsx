"use client";

import { Search, Menu, Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { Nudg3Logo } from "@/components/logo/nudg3";
import { useState, useEffect } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(true); // Start with dark as default

  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full ${
        isDark 
          ? 'bg-black' 
          : 'bg-white'
      }`} 
      style={{ 
        backgroundColor: isDark ? '#000000' : '#ffffff',
        boxShadow: 'none',
        border: 'none',
        outline: 'none'
      }}
    >
      <div className="container flex h-12 max-w-screen-2xl items-center px-6">
        <div className="mr-8 hidden md:flex">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <Nudg3Logo width={32} height={32} />
              <span className="font-semibold text-xl tracking-tight">
                <span className={isDark ? 'text-white' : 'text-black'}>NUDG</span>
                <span style={{ color: '#A958F2' }}>3</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-3 px-0 text-base hover:bg-accent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden text-foreground"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pl-1 pr-0 w-[300px] sm:w-[350px] bg-background border-border">
            <div className="px-7 pb-4">
              <div className="flex items-center space-x-3">
                <Nudg3Logo width={28} height={28} />
                <span className="font-semibold">
                  <span className={isDark ? 'text-white' : 'text-black'}>NUDG</span>
                  <span style={{ color: '#A958F2' }}>3</span>
                </span>
              </div>
            </div>
            <div className="px-3">
              <Sidebar />
            </div>
          </SheetContent>
        </Sheet>

        {/* Mobile logo */}
        <div className="flex items-center space-x-3 md:hidden">
          <Nudg3Logo width={28} height={28} />
          <span className="font-semibold">
            <span className={isDark ? 'text-white' : 'text-black'}>NUDG</span>
            <span style={{ color: '#A958F2' }}>3</span>
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center space-x-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <Input
                placeholder="Search…"
                className={`h-9 pl-10 pr-20 text-sm w-[240px] lg:w-[280px] border rounded-lg focus:ring-0 focus:outline-none ${
                  isDark 
                    ? 'bg-black border-gray-900 text-white placeholder:text-gray-400 focus:border-gray-800' 
                    : 'bg-white border-gray-200 text-black placeholder:text-gray-500 focus:border-gray-300'
                }`}
                style={{ 
                  backgroundColor: isDark ? '#000000' : '#ffffff',
                  borderColor: isDark ? '#1a1a1a' : '#e5e5e5'
                }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className={`pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-2 font-mono text-[10px] font-medium ${
                  isDark 
                    ? 'border-gray-800 bg-gray-900 text-gray-400' 
                    : 'border-gray-200 bg-gray-50 text-gray-600'
                }`}
                style={{ 
                  backgroundColor: isDark ? '#111111' : '#f9f9f9',
                  borderColor: isDark ? '#333333' : '#e0e0e0'
                }}
                >
                  Ctrl K
                </kbd>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className={`h-9 text-sm font-normal px-3 border rounded-lg flex items-center gap-2 ${
                isDark 
                  ? 'bg-black border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black'
              }`}
            >
              <Sparkles className="h-3 w-3" />
              Ask AI
            </Button>
          </div>
          <div className="hidden md:flex items-center space-x-4 absolute right-6">
            <a href="#" className={`text-sm font-normal transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              Support
            </a>
            <a href="#" className={`text-sm font-normal transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              nudg3.ai
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}
            >
              {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
