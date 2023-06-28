import { TApiEndPoints } from '../types';

// ideally this could come from .env
export const API_URL: string = 'https://api.github.com';

export const API_ENDPOINTS: TApiEndPoints = {
  SEARCH_REPOSIORIES: { url: '/search/repositories', method: 'GET' }
};
