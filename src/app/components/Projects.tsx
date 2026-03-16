import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import VibeCTRLImage from "../../../public/IMG_1126.jpg";

const projects = [
  {
    title: "VibeCTRL Platform",
    description:
      "Leading development of innovative hardware control systems and web interfaces for VibeCTRL. Building scalable firmware solutions and responsive web applications.",
    image: VibeCTRLImage.src,
    tags: ["React", "React Native", "Node.js", "IoT", "C++"],
    featured: true,
    link: null,
    github: null,
  },
  {
    title: "This Portfolio",
    description:
      "A meta moment: the very website you're looking at right now. Built to showcase my work while procrastinating on actual client projects. Featuring a dark theme that definitely won't hurt your eyes at 3 AM.",
    image:
      "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjY2MTg0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Tailwind CSS", "NextJS"],
    featured: false,
    link: "#",
    github: "https://github.com/LandenStephenss/olykir.dev",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-white">Featured Projects</h2>
          <p className="text-xl text-slate-400">
            A selection of my work across web, firmware development, and content
            creation
          </p>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden bg-slate-950 border-slate-800 ${project.featured ? "border-2 border-rose-800" : ""}`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-rose-500">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2 text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-sm border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.link && (
                        <Button
                          asChild
                          variant="default"
                          className="bg-rose-500 hover:bg-rose-600"
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Site
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-slate-700 text-white hover:bg-slate-900"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
