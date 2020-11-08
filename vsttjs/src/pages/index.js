import React from "react"
import {
  Flex,
  InputGroup, Input, InputLeftAddon, InputRightElement,
  Button, Text
} from '@chakra-ui/core';
import Layout from '../components/layout';

import { AppContext } from '../context/AppContext';

export default function Home() {

  const Row = ({row}) => {
    console.log(row);
    console.log(row.title);
    return (<Text>{row.title}</Text>);
  };


  return (
    <Layout>
      <Text fontSize="xl">Hello Gatsby!</Text>

      <AppContext.Consumer>
        {({config, rows}) => (
          <div>

              <InputGroup>
                <InputLeftAddon children="Search"/>
                <Input type="text" pr="4.5rem" roundLeft="0" placeholder="enter text"/>
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="md">
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>

            <Text>Rows: {rows.length}, URL: {config.url}</Text>
            {rows.map((row, i) => <Row row={row} key={i}/>)}
          </div>
        )}
      </AppContext.Consumer>
    </Layout>
  );
}
