export type TEndPoint = {
  url: string;
  method: 'POST' | 'GET' | 'DELETE' | 'PUT';
  useCache?: boolean;
};

export type TApiEndPoints = {
  SEARCH_REPOSIORIES: TEndPoint;
};
