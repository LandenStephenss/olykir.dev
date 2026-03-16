import { Code, Terminal, Cpu, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern web frameworks and libraries",
    skills: [
      "React",
      "Preact",
      "NextJS",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    icon: Terminal,
    title: "Backend Development",
    description: "Server-side technologies",
    skills: ["Node.js", "Discord.js", "REST APIs", "WebSocket", "Fastify"],
  },
  {
    icon: Cpu,
    title: "Firmware Development",
    description: "Embedded systems and hardware integration",
    skills: [
      "C++",
      "Embedded Systems",
      "Microcontrollers",
      "IoT",
      "Hardware Integration",
    ],
  },
  {
    icon: Globe,
    title: "Tools & Platforms",
    description: "Development and deployment tools",
    skills: ["Git", "Docker", "CI/CD", "Linux", "VS Code", "Webpack", "Docker"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-white">Technical Skills</h2>
          <p className="text-xl text-slate-400">
            A comprehensive toolkit for building modern applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-black border-slate-800 hover:border-rose-900"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-950 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <CardTitle className="text-white">{category.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-sm border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
