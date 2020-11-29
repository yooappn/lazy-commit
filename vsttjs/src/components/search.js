import React from 'react';

import {
    Stack, Flex, Box,
    InputGroup, InputLeftAddon, Input,
    Icon, Text, Tag
} from '@chakra-ui/core';


const SearchBox = () => {
    return (
        <Stack>
            <InputGroup>
                <InputLeftAddon>
                <Icon name="phone" />
                </InputLeftAddon>
                <Input type="text" roundedLeft="0" />
            </InputGroup>
            <Flex border="2px" p={2} borderColor="gray.200">
                <Flex align="center" justify="center"><Text fontSize="sm">Label</Text></Flex>
                <Flex p={1}>
                    
                    <Tag>
                        <Text m={1}>Text</Text> |
                        <Text m={1}>Text</Text> |
                        <Text m={1}>Text</Text>
                    </Tag>
                </Flex>
            </Flex>
        </Stack>
    );
};

export default SearchBox;