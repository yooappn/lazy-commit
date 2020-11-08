import React from 'react';
import { Box } from '@chakra-ui/core';
import Header from './header';

import { AppProvider } from '../context/AppContext';

export default function Layout({ children }) {
  return (
    <AppProvider>
      <Header />
      <Box ml={16} mr={16}>{ children }</Box>
    </AppProvider>
  );
};
