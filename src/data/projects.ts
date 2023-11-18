import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    name: "Link from jyu.dev",
    desc: "An open-source link shortener (may be longer) service.",
    link: "https://link.jyu.dev",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Redis"],
    image: "/link.png",
  },
  {
    name: "jyu.dev",
    desc: "The current site you are looking at right now :)",
    link: "https://jyu.dev",
    tags: ["TypeScript", "Astro", "React", "FaunaDB"],
  },
  {
    name: "Flojoy Docs",
    desc: "The accompany documentation site for Flojoy Studio, including all the building blocks that make up the Flojoy platform.",
    link: "https://docs.flojoy.ai",
    tags: ["TypeScript", "Astro", "React"],
    image: "/docs.png",
  },
  {
    name: "Flojoy Studio",
    desc: "An open-source, Python-based alternative to engineering software like LabVIEW. Currently leading the product team to build the next generation Flojoy Studio IDE.",
    link: "https://flojoy.ai",
    tags: ["TypeScript", "React", "Python", "FastAPI"],
    image: "/studio.png",
  },
  {
    name: "K8S on Budget",
    desc: "A Kubernetes-like container orchestration platform that orchestrates containerized web servers, with features like auto-scaling, load balancing, real-time resource monitoring, fault tolerance, etc.",
    link: "https://github.com/awsonbudget",
    tags: ["Golang", "Python", "FastAPI", "TypeScript", "SolidJS"],
  },
  {
    name: "Radish Battle Pass",
    desc: "Winner of the Radish challenge at McHacks 23. It is a battle pass reward system to boost customer engagement within the platform.",
    link: "https://devpost.com/software/radish-battle-pass",
    tags: ["TypeScript", "React", "NestJS"],
    image: "/radish.png",
  },
  {
    name: "Dev Access",
    desc: "A firewall access management service I built at Ciena. Allows all team members to whitelist their IP addresses in order to access the lab infrastructure.",
    link: "https://ciena.com",
    tags: ["TypeScript", "React", "NestJS"],
  },
];
