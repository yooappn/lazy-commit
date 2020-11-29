import React, { useState } from "react"
import {
  Flex,
  InputGroup, Input, InputLeftAddon, InputRightElement,
  Divider,
  Button, Text,
  Stat, StatLabel, StatHelpText
} from '@chakra-ui/core';
import Layout from '../components/layout';

import { AppContext } from '../context/AppContext';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const Row = ({row}) => {
    return (
      <>
      <Stat>
        <StatLabel>{row.title}</StatLabel>
        <StatHelpText>{row.author}</StatHelpText>
      </Stat>
        <Divider />
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

            <Text>Rows: {rows.length}, URL: {config.url}</Text>
            {rows.map((row, i) => <Row row={row} key={i}/>)}
          </div>
        )}
      </AppContext.Consumer>
    </Layout>
  );

};

export default Home;
