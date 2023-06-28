import * as React from 'react';
import useAxios from 'axios-hooks';

import Box from '@mui/material/Box';

import { API_ENDPOINTS } from '../utils/appCostants';

export default function Repositories() {

  const [{ data, loading }, searchRepositories] = useAxios(API_ENDPOINTS.SEARCH_REPOSIORIES);

  return (
    <Box>
    </Box>
  );
}