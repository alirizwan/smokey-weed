import * as React from 'react';
import { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import dayjs from 'dayjs';

import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Repository from '../components/Repository';
import SearchBar from '../components/SearchBar';

import { API_ENDPOINTS, REPOSITORIES_PER_PAGE } from '../utils/appCostants';

import { TRepositories, TRepositoriesResponse, TRepository, TSearchParams } from '../types';

import { transformRepositories } from '../utils/helpers';
import { getFavorites } from '../utils/repositoryActions';

const LoadMoreButton = styled((props: LoadingButtonProps) => {
  return <LoadingButton {...props} />;
})(() => ({
  width: 200
}));

const defaultParams: TSearchParams = {
  q: `created:>${dayjs().subtract(7, 'days').format('YYYY-MM-DD')}`,
  sort: 'stars',
  order: 'desc',
  per_page: REPOSITORIES_PER_PAGE,
  page: 1
};

export default function Repositories() {

  const [repoFilter, setRepoFilter] = useState<string>('all');
  const [repositories, setRepositories] = useState<TRepository[]>([]);

  const [params, setParams] = useState<TSearchParams>(defaultParams);

  const [{ data, loading, error }, searchRepositories] = useAxios<TRepositoriesResponse>({
    ...API_ENDPOINTS.SEARCH_REPOSIORIES,
    params
  });

  useEffect(() => {

    if (repoFilter === 'fav') {
      setRepositories(getFavorites());
    } else {
      if (!loading && data && !error) {
        // Transformation is being done to keep the data within app sane and of one notation instead of mixing camel and snake case.
        const refineData: TRepositories = transformRepositories(data);

        setRepositories(repositories.concat(refineData.items));
      };
    }

  }, [loading, data, error, getFavorites]);


  const handleLoadMore = () => {
    // axios hook automatically refetches the data when we make a change to params.
    const newParams = { ...params, page: params.page + 1 };

    setParams(newParams);
  };

  const handleFilter = async (newValue: string) => {
    if (!newValue) return;

    setRepoFilter(newValue);

    if (newValue === 'fav') {
      setRepositories(getFavorites());
    } else {
      setRepositories([]);
      try {
        await searchRepositories();
      } catch (err) {
        // for now ignoring this error.
        //todo: Show a popup and handle possible or rate limits
        console.log(err);
      }
    }
  }

  const handleFavChange = () => {
    if (repoFilter === 'fav') handleFilter('fav');
  }

  const onLanguageChange = (value: string) => {
    const languageFilter = value.length ? ` and language:${value}` : '';

    setRepositories([]);
    setParams({
      ...defaultParams,
      q: `${defaultParams.q}${languageFilter}`
    });
    
  }

  return (
    <Stack spacing={2} justifyContent='center' alignItems='center' style={{ marginTop: '20px' }}>
      <ToggleButtonGroup
        color='primary'
        value={repoFilter}
        exclusive
        aria-label='Filter'
        onChange={(event: React.MouseEvent<HTMLElement>, newValue: string) => handleFilter(newValue)}
      >
        <ToggleButton value='all'>All Repositories</ToggleButton>
        <ToggleButton value='fav'>Fav Repositories</ToggleButton>
      </ToggleButtonGroup>
      {
        repoFilter === 'all' && <SearchBar onChange={(value: string) => onLanguageChange(value)} />
      }
      <Grid container spacing={2}>
        {
          repositories.map((item: TRepository) => (<Repository repository={item} key={item.fullName} onFavChange={handleFavChange} />))
        }
      </Grid>
      {data?.items.length && repoFilter === 'all' && <LoadMoreButton loading={loading} variant='outlined' onClick={() => handleLoadMore()}>Load More</LoadMoreButton>}
    </Stack>
  );
}