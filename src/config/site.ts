type Config = {
  email: string;
  discordUserId: string;
  projects: Project[];
};

type Project = {
  title: string;
  description: string;
  link: string;
};

export const config: Config = {
  email: "joey@jyu.dev",
  discordUserId: "481294021054955533",
  projects: [
    {
      title: "Fijoy",
      description: "Personal finance management platform for everyone",
      link: "https://github.com/itsjoeui/fijoy",
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
      description: "The site you are looking at right now :)",
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
  ],
};
