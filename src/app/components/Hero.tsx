import {
  Github,
  Globe,
  Instagram,
  Video,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import Charger from "../../../public/IMG_2586.png";
export function Hero() {
  return (
    <section className="hero min-h-screen flex items-center px-6 py-28">
      <div className="hero-grid" />
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="hero-copy">
          <p className="eyebrow">01 / Independent developer + creator</p>
          <h1 style={{ letterSpacing: "-2px" }}>
            Digital systems with a <em>human</em> pulse.
          </h1>
          <p className="hero-lede">
            I&apos;m Landen Stephens, aka Olykir. I build web applications and
            microcontroller-powered products, taking ideas from the first sketch
            to the final shipped experience.
          </p>
          <div className="flex flex-wrap gap-3 pt-8">
            <a className="button-solid" href="#projects">
              Explore the work <ArrowDownRight className="w-4 h-4" />
            </a>
            <a className="button-line" href="#contact">
              Start a conversation <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/LandenStephess"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/rt.olykir"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@olykir"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="TikTok"
            >
              <Video className="w-6 h-6" />
            </a>
            <a
              href="https://vibectrl.net"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="VibeCTRL"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="hero-visual relative">
          <div className="hero-image relative z-10 overflow-hidden">
            <ImageWithFallback
              src={Charger.src}
              alt="Sports car"
              className="w-full h-auto"
            />
          </div>
          <div className="hero-caption">
            <span className="location-label">
              <span className="location-dot" />
              Based in Oklahoma
            </span>
            <span>Available for select work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
