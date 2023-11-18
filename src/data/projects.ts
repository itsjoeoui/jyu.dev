import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    name: "Link from jyu.dev",
    desc: "An open-source link shortener (may be longer) service.",
    link: "https://link.jyu.dev",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Redis"],
  },
  {
    name: "Flojoy Studio",
    desc: "An open-source, Python-based alternative to engineering software like LabVIEW.",
    link: "https://flojoy.ai",
    tags: ["TypeScript", "React", "Python", "FastAPI"],
  },
  {
    name: "K8S on Budget",
    desc: "A Kubernetes-like container orchestration platform that orchestrates containerized web servers, with features like auto-scaling, load balancing, real-time resource monitoring, fault tolerance, etc.",
    link: "https://github.com/awsonbudget",
    tags: ["Golang", "Python", "FastAPI", "TypeScript", "SolidJS"],
  },
  {
    name: "Radish Battle Pass",
    desc: "Winner of the Radish challenge at McHacks 23.",
    link: "https://ciena.com",
    tags: ["TypeScript", "React", "NestJS"],
  },
  {
    name: "Dev Access",
    desc: "A firewall access management service I built at Ciena.",
    link: "https://ciena.com",
    tags: ["TypeScript", "React", "NestJS"],
  },
  // {
  //   name: "Dev Access",
  //   desc: "A firewall access management service I built at Ciena.",
  //   link: "https://ciena.com",
  //   tags: ["TypeScript", "React", "NestJS"],
  // },
];
