import dayjs from 'dayjs';

import { TRepositoriesResponse, TRepositories, TRepositoryResponse, TRepository } from '../types';

export function transformRepositories(data: TRepositoriesResponse): TRepositories {

  const repositoryData: TRepositories = {
    totalCount: data.total_count,
    incompleteResults: data.incomplete_results,
    items: data.items.map((item: TRepositoryResponse): TRepository => ({
      id: item.id,
      name: item.name,
      fullName: item.full_name,
      description: item.description,
      htmlUrl: item.html_url,
      createdAt: dayjs(item.created_at).format('MMM DD, YYYY'),
      stars: item.stargazers_count,
      watchers: item.watchers,
      forks: item.forks,
      language: item.language,
      owner: {
        login: item.owner.login,
        avatarUrl: item.owner.avatar_url
      }
    }))
  };

  return repositoryData;

};