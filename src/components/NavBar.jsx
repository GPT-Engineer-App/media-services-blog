import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="blue.900" color="white">
      <Flex align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold">
          Wilson Media Services
        </Text>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={() => {}}>
        {}
      </Box>

      <Box display={{ sm: "none", md: "flex" }} width={{ sm: "full", md: "auto" }} alignItems="center">
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to="/world">
          <Button variant="ghost">World</Button>
        </Link>
        <Link to="/business">
          <Button variant="ghost">Business</Button>
        </Link>
        <Link to="/technology">
          <Button variant="ghost">Technology</Button>
        </Link>
        <Link to="/science">
          <Button variant="ghost">Science</Button>
        </Link>
        <Link to="/entertainment">
          <Button variant="ghost">Entertainment</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
