import { Github, Linkedin, Globe, Instagram, Video } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import Charger from "../../../public/IMG_1150.jpg";
export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-slate-950 to-black">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-rose-400">
              Web & Firmware Developer • Car Content Creator
            </p>
            <h1 className="text-5xl md:text-6xl text-white">Landen Stephens</h1>
            <p className="text-2xl text-slate-400">aka Olykir</p>
            <p className="text-xl text-slate-300">
              Building Technology & Creating Content
            </p>
          </div>
          <p className="text-xl text-slate-300">
            Specializing in full-stack development and embedded systems at
            VibeCTRL, while sharing my passion for cars through content on
            TikTok and Instagram.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              className="bg-rose-500 hover:bg-rose-700 py-2 px-2 rounded-lg transition-all duration-300"
              href="#projects"
            >
              View My Work
            </a>

            <a
              className="border-slate-700 border-1 hover:bg-slate-900 py-2 px-2 rounded-lg transition-all duration-300 hover:text-rose-400"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/LandenStephenss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors duration-250"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors duration-250"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/rt.olykir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors duration-250"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@Olykir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors duration-250"
            >
              <Video className="w-6 h-6" />
            </a>
            <a
              href="https://vibectrl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors duration-250"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <ImageWithFallback
              src={Charger.src}
              alt="Sports car"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute inset-0 bg-rose-500/20 rounded-2xl blur-3xl -z-0 transform scale-95"></div>
        </div>
      </div>
    </section>
  );
}
