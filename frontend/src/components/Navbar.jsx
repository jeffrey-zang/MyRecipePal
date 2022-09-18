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
import AddRecipe from "./AddRecipeButton.jsx";
import SearchBar from "./SearchBar";

import logo from '../assets/logo.png'

const LinkItem = ({ href, children }) => {
  return (
    <Link
      p={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
        color: 'black'
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
      <Box
        bg="green.400"
        css={{ backdropFilter: "blur(10px)", color: "#fff" }}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <a href = '/MyRecipePal/'>
            <Avatar name = 'yes' src = {logo} alt = 'logo'/>
          </a>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>

              <SearchBar />

              <AddRecipe/>

              <LinkItem href="/MyRecipePal/">
                  Home
              </LinkItem>

              <LinkItem href="/MyRecipePal/recipes">Browse</LinkItem>

              <LinkItem href="/MyRecipePal/findrecipe">Find a Recipe</LinkItem>

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
                <MenuList alignItems={"center"} color="black">
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
