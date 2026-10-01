"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
      className={`site-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "is-scrolled" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="brand-mark">
            <span className="brand-dot" />
            <span>
              olykir<span className="brand-muted">.dev</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="nav-link">
              About
            </Link>
            <Link href="/#skills" className="nav-link">
              Skills
            </Link>
            <Link href="/#projects" className="nav-link">
              Projects
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/#contact" className="nav-cta">
              Contact <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
