"use client";

import { useEffect, useState } from "react";
import { Code } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll posistion

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg border-b border-slate-800" : "border-slate-800 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <Code className="w-6 h-6 text-rose-400" />
            <span className="font-semibold">Landen Stephens</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-slate-400 hover:text-rose-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-400 hover:text-rose-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-rose-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="border-slate-700 border-1 hover:bg-slate-900 py-1 px-2 rounded-lg transition-all duration-300 hover:text-rose-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
