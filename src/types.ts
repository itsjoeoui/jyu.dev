export type SiteConfig = {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  date: {
    locale: string | string[] | undefined;
    options: Intl.DateTimeFormatOptions;
  };
};

export type PaginationLink = {
  url: string;
  text?: string;
  srLabel?: string;
};

export type SiteMeta = {
  title: string;
  description?: string;
  ogImage?: string | undefined;
  articleDate?: string | undefined;
};

export type PersonalConfig = {
  email: string;
  github: string;
  linkedin: string;
  calendar: string;
  name: string;
};
