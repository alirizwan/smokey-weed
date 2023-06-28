import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { configure } from 'axios-hooks';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { client as axios } from './utils/apiClient';

import Footer from './components/Footer';
import Header from './components/Header';

import routerConfig from './utils/routerConfig';

import { TRoute } from './types';

configure({ axios, cache: false });

export default function App() {
  return (
    <Box>
      <Header />

      <Container maxWidth={false}>
        <BrowserRouter>
          <Routes>
            {routerConfig.map((route: TRoute) => <Route path={route.path} element={<route.element />} />)}
          </Routes>
        </BrowserRouter>

        <Footer />
      </Container>
    </Box>
  );
}
