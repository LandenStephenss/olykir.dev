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
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="brand-mark shrink-0">
            <span className="brand-dot" />
            <span>
              olykir<span className="brand-muted">.dev</span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4 md:gap-8">
            <Link href="/#about" className="nav-link text-[0.72rem] sm:text-[0.85rem]">
              About
            </Link>
            <Link href="/#skills" className="nav-link text-[0.72rem] sm:text-[0.85rem]">
              Skills
            </Link>
            <Link href="/#projects" className="nav-link text-[0.72rem] sm:text-[0.85rem]">
              Projects
            </Link>
            <Link
              href="/#contact"
              className="nav-cta text-[0.7rem] sm:text-[0.85rem]"
            >
              Contact <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
