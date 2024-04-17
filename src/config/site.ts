type Config = {
  description: string;
  email: string;
  discordUserId: string;
  projects: Project[];
  contacts: Contact[];
  tools: Tool[];
};

type Project = {
  title: string;
  description: string;
  link: string;
};

type Tool = {
  name: string;
  description: string;
};

type Contact = {
  name: string;
  link: string;
};

export const config: Config = {
  description: "Joey Yu - Software Engineer - joey@jyu.dev",
  email: "joey@jyu.dev",
  discordUserId: "481294021054955533",
  projects: [
    {
      title: "Fijoy",
      description: "Personal finance management platform for everyone",
      link: "https://github.com/itsjoeoui/fijoy",
    },
    {
      title: "Flojoy Cloud",
      description: "Cloud-native data platform for hardware manufacturers",
      link: "https://github.com/flojoy-ai/cloud",
    },
    {
      title: "Flojoy Docs",
      description: "Documentation site built with Starlight",
      link: "https://github.com/flojoy-ai/studio",
    },
    {
      title: "Flojoy Studio",
      description: "LabVIEW alternative powered by Python",
      link: "https://github.com/flojoy-ai/studio",
    },
    {
      title: "jyu.dev",
      description: "The site you are looking at right now :P",
      link: "https://github.com/itsjoeoui/jyu.dev",
    },
    {
      title: "K8S on Budget",
      description: "Low-budget Kubernetes on FastAPI",
      link: "https://github.com/awsonbudget",
    },
    {
      title: "Radish Battle Pass",
      description: "Tier-based loyalty reward system",
      link: "https://devpost.com/software/radish-battle-pass",
    },
    {
      title: "Astro: Star Formation",
      description: "Physics simulation of star formation",
      link: "https://devpost.com/software/star-formation",
    },
  ],
  tools: [
    {
      name: "Languages",
      description:
        "TypeScript, JavaScript, Golang, Python, Java, C/C++, Rust, OCaml, Clojure",
    },
    {
      name: "Frontend",
      description:
        "React, Next.js, Astro, Docusaurus, HTML, CSS, TailwindCSS, Radix UI",
    },
    {
      name: "Backend",
      description:
        "Chi, net/http, gRPC, Connect, FastAPI, Flask, ElysiaJS, NestJS, Express, GraphQL, Electron, tRPC, Tauri",
    },
    {
      name: "Database",
      description: "PostgreSQL, MySQL, MongoDB, SQLite, Redis, FaunaDB",
    },
    {
      name: "AI",
      description: "OpenAI, LangChain",
    },
    {
      name: "Cloud",
      description: "S3, EC2, AMI, SES",
    },
    {
      name: "DevOps",
      description: "Docker, GitHub Actions, GitLab Runners, Terraform",
    },
    {
      name: "Editor",
      description: "Neovim",
    },
  ],
  contacts: [
    {
      name: "GitHub",
      link: "https://github.com/itsjoeoui",
    },
    {
      name: "Twitter",
      link: "https://x.com/itsjoeoui",
    },
    {
      name: "Twitch",
      link: "https://twitch.com/itsjoeoui",
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/itsjoeoui/",
    },
    {
      name: "Let's chat!",
      link: "https://cal.com/itsjoeoui/",
    },
  ],
};
