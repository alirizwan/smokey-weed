import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { configure } from 'axios-hooks';

import App from './App';
import theme from './theme';

import { client as axios } from './utils/apiClient';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

configure({ axios, cache: false });

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
