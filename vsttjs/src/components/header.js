import React from "react";
import { Link as GLink } from 'gatsby';
import { Heading, Flex, Link } from "@chakra-ui/core";

const Header = props => {

  return (
    <Flex
      as="nav" align="center"
      wrap="wrap" ml={16}
      {...props}
    >
      <Flex align="center">
        <Heading as="h1" size="xl">
          Dev DB
        </Heading>
      </Flex>

      <Flex align="center">
        <Link as={GLink} p={2} to="/">DB</Link>
        |
        <Link as={GLink} p={2} to="/config">Configuration</Link>
        |
        <Link as={GLink} p={2} to="/help">Help</Link>
      </Flex>

    </Flex>
  )
};

export default Header;
