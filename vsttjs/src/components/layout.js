import React from 'react';
import { Box } from '@chakra-ui/core';


export default function Layout({ children }) {
  return (
    <Box p={16}>{ children }</Box>
  );
};
