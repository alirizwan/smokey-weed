import { TRepositoriesResponse, TRepositories, TRepositoryResponse, TRepository } from '../types';
import { transformRepositories } from './helpers';

describe('Helpers', () => {

  it('transforms repository', () => {

    const repositoriesResponse: TRepositoriesResponse = {
      total_count: 1,
      incomplete_results: false,
      items: [{
        "id": 659510798,
        "name": "Test",
        "full_name": "slarkvan/test",
        "owner": {
          "login": "slarkvan",
          "avatar_url": "https://avatars.githubusercontent.com/u/131340443?v=4",
        },
        "html_url": "https://github.com/test/test",
        "description": "test.",
        "created_at": "2023-06-28T02:06:49Z",
        "stargazers_count": 562,
        "language": "JavaScript",
        "forks": 240,
        "watchers": 562,
      }]
    };

    const repositories: TRepositories = {
      totalCount: 1,
      incompleteResults: false,
      items: [{
        id: 659510798,
        name: "Test",
        fullName: "slarkvan/test",
        owner: {
          login: "slarkvan",
          avatarUrl: "https://avatars.githubusercontent.com/u/131340443?v=4",
        },
        htmlUrl: "https://github.com/test/test",
        description: "test.",
        createdAt: "Jun 28, 2023",
        stars: 562,
        language: "JavaScript",
        forks: 240,
        watchers: 562
      }]
    };

    expect(transformRepositories(repositoriesResponse)).toEqual(repositories);

  });
});
