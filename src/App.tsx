import * as React from 'react';
import { Route } from "react-router";
import { BrowserRouter, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Footer from './components/Footer';
import Header from './components/Header';

import routerConfig from './utils/routerConfig';

import { TRoute } from './types';

export default function App() {
  return (
    <Box>
      <Header />

      <Container maxWidth={false}>
        <BrowserRouter>
          <Routes>
            {routerConfig.map((route: TRoute) => <Route key={route.path} path={route.path} element={<route.element />} />)}
          </Routes>
        </BrowserRouter>

        <Footer />
      </Container>
    </Box>
  );
}
