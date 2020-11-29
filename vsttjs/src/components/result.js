import React from 'react';

import { Box } from '@chakra-ui/core';
import { SimpleGrid } from "@chakra-ui/core";

const data = [
  {'id': 10, 'name': 'test', 'alias': 'aaa'},
  {'id': 11, 'name': 'test 12', 'alias': 'aaa'},
  {'id': 12, 'name': 'test 13', 'alias': 'aaa'}
];


const ResultTable = () => {
    return (
        <Box mt={8}>
            <SimpleGrid columns={3} borderRadius="8px"  border="2px" borderColor="gray.600">
            <Box bg="gray.600" p={4} color="white" >One</Box>
            <Box bg="gray.600" p={4} color="white">Two</Box>
            <Box bg="gray.600" p={4} color="white">Three</Box>
            </SimpleGrid>

            {data.map((d,i) => {
                const bgColor = i%2 == 0 ? 'gray.50' : 'gray.200';
                return (
                    <SimpleGrid columns={3} >
                    <Box p={2} bg={bgColor} >{d.id}</Box>
                    <Box p={2} bg={bgColor} >{d.name}</Box>
                    <Box p={2} bg={bgColor} >{d.alias}</Box>
                    </SimpleGrid>
                    );
            })}
        </Box>
      );
};


export default ResultTable;