import * as React from 'react';
import { useState } from 'react';
import useAxios from 'axios-hooks';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { API_ENDPOINTS } from '../utils/appCostants';

import { TRepositories, TRepository } from '../types';

export default function Repositories() {

  const [query, setQuery] = useState<string>('created:>2017-01-10');
  const [sort, setSort] = useState<string>('stars');
  const [order, setOrder] = useState<'desc' | 'asc'>('desc');

  const [{ data, loading }, searchRepositories] = useAxios<TRepositories>({
    ...API_ENDPOINTS.SEARCH_REPOSIORIES,
    params: {
      q: query,
      sort,
      order
    }
  });

  return (
    <Grid>
      {
        (loading && data ? data.items : []).map((item: TRepository) => (<Typography key={item.id}>{item.full_name}</Typography>))
      }
    </Grid>
  );
}