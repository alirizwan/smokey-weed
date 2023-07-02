export type TOwnerResponse = {
  login: string;
  html_url: string;
  avatar_url: string;
};

export type TOwner = {
  htmlUrl: string;
  avatarUrl: string;
  login: string;
}

export type TRepositoryResponse = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  url: string;
  forks: number;
  watchers: number;
  stargazers_count: number;
  language: string;
  created_at: string;
  owner: TOwnerResponse;
};

export type TRepositoriesResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: TRepositoryResponse[];
};

export type TRepository = Omit<TRepositoryResponse, 'full_name' | 'html_url' | 'owner'> & { 
  fullName: string;
  htmlUrl: string;
  stars: number;
  owner: TOwner;
  createdAt: string;
};

export type TRepositories = {
  totalCount: number;
  incompleteResults: boolean;
  items: TRepository[];
};

export type TOrder = 'asc' | 'desc';

export type TSort = 'stars'

export type TSearchParams = {
  q: string;
  sort: TSort;
  order: TOrder;
  per_page: number;
  page: number
}