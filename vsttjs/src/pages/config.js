import React from "react";
import Layout from '../components/layout';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  InputGroup, InputLeftAddon, InputRightElement,
} from "@chakra-ui/core";

import { AppContext } from '../context/AppContext';
import { Key, setLocalData } from '../context/local';

const Config = () => {
  const [url, setUrl] = React.useState('https://bvaughn.github.io/js-search/books.json');

  return (
    <Layout>
      <Text fontSize="xl">Configuration</Text>

      <FormControl mt={4} mb={4}>
        <FormLabel>sheet url</FormLabel>

        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input rounded="0" placeholder="mysite" value={url} onChange={(event) => {setUrl(event.target.value);}} />
          <InputRightElement width="4.5rem" >
          <AppContext.Consumer>
            {() => {
              return (
                <Button h="1.75rem" size="sm" onClick={() => {
                  setLocalData(Key.sheet ,{sheet: { url: url}});
                }} >Load</Button>
              );
            }}
          </AppContext.Consumer>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Layout>
  )
};

export default Config;
