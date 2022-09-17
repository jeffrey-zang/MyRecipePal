import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
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

const searchBar = () => {};

const Navbar = () => {
  return (
    <>
      <Box bg="green.400" css={{ backdropFilter: "blur(10px)", color: '#fff' }} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading as="h1" size="lg">
            Logo
          </Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <LinkItem href="/">
                <Text>Home</Text>
              </LinkItem>

              <LinkItem href="/recipes">Browse</LinkItem>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"} color='black'>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Favourites</MenuItem>
                  <MenuItem> Account Settings</MenuItem>
                  <MenuItem>Log Out</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
