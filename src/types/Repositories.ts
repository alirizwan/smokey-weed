export type TOwner = {
  login: string;
  html_url: string;
  avatar_url: string;
};

export type TRepository = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  url: string;
  forks: number;
  watchers: number;
  language: string;
  owner: TOwner;
};

export type TRepositories = {
  total_counts: number;
  incomplete_results: boolean;
  items: TRepository[];
};
