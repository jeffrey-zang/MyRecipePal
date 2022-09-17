import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const LinkItem = ({ href, children }) => {
  return (
    <Link
      p={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <>
      <Box bg="green.400" css={{ backdropFilter: "blur(10px)" }} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading as="h1" size="lg">
            Logo
          </Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <LinkItem href="/home">
                <Text>Home</Text>
              </LinkItem>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
