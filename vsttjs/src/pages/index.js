import React, { useState } from "react"
import {
  Flex, Box,
  InputGroup, Input, InputLeftAddon, InputRightElement,
  Divider,
  Button, Text, Badge,
  Stat, StatLabel, StatHelpText
} from '@chakra-ui/core';
import Layout from '../components/layout';

import { AppContext } from '../context/AppContext';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const Row = ({row}) => {
    console.log(row);
    return (
      <>
      <Stat m="2" p="2" borderLeft="4px" borderLeftColor="gray.800">
        <StatLabel>{row.title}</StatLabel>

        <Badge d="inline" borderRadius="full" px="2" colorScheme="teal">{row.author}</Badge>
        <Box
            d="inline"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
             links:
        </Box>
      </Stat>
      </>
    );
  };

  return (
    <Layout>
      <Text fontSize="xl">Hello Gatsby!</Text>

      <AppContext.Consumer>
        {({config, rows, setRows, engine}) => (
          <div>

            <InputGroup>
              <InputLeftAddon children="Search"/>
              <Input type="text" pr="4.5rem" roundLeft="0" placeholder="enter text"
                     value={searchText} onChange={(event) => {setSearchText(event.target.value);}} />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="md" onClick={() => {
                  console.log(searchText);
                  if (searchText.length > 0) {
                    const searchResult = engine.search(searchText);
                    console.log(searchResult);
                    setRows(searchResult);
                  }
                }}>Search</Button>
              </InputRightElement>
            </InputGroup>

            <Box borderWidth="1px" borderRadius="lg" m="2" p="2">
              <Text fontSize="sm" color="gray.500">Result Summary</Text>
              <Text>Rows: {rows.length}, URL: {config.url}</Text>
            </Box>
            {rows.map((row, i) => <Row row={row} key={i}/>)}
          </div>
        )}
      </AppContext.Consumer>
    </Layout>
  );

};

export default Home;
