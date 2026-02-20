import { Github, Linkedin, Instagram, Video } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-400">
            Let&apos;s collaborate on your next project or connect on social
            media
          </p>
        </div>
        <Card className="bg-slate-950 border-slate-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">
              Let&apos;s Work Together
            </CardTitle>
            <CardDescription className="text-slate-400 text-base">
              I&apos;m always interested in hearing about new development
              projects, collaboration opportunities, or just connecting with
              fellow car enthusiasts. Whether you need firmware development, web
              applications, or want to discuss cars, feel free to reach out!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-rose-500 hover:bg-rose-600"
              >
                <a href="mailto:olykirr@gmail.com">Send Email</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-700 text-white hover:bg-slate-900"
              >
                <a
                  href="https://vibectrl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit VibeCTRL
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 pt-4">
              <a
                href="https://github.com/LandenStephenss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/rt.olykir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://tiktok.com/@olykir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <Video className="w-5 h-5" />
                <span>TikTok</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
