import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  ListItem,
  Text,
  Textarea,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import autosize from "autosize";
import BottomNavbar from "../components/BottomNavbar";

const RandomRecipe = () => {
  const InstructionsRef = useRef();
  const [recipe, setRecipe] = useState();
  const [change, setChange] = useState(false);
  useEffect(() => {
    autosize(InstructionsRef.current);
    return () => {
      autosize.destroy(InstructionsRef.current);
    };
  }, []);
  useEffect(()=> {
    fetch('http://localhost:3001/random', {mode: 'cors'}).then((response) => {
      return response.json()
    }).then((data) => {
      setRecipe(data[0]);
    })
  },[change])
  if (!recipe){
    return <></>
  }

  const clickNewRecipe = () => {
    setChange((cur) => !cur)
  }
  return (
    <>
      <VStack mt={20} h="full">
        <Heading>Recipe: {recipe.name}</Heading>
        <Divider pt={3} width="2xl" />
        <Box
          w="2xl"
          maxW="2xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <VStack m={4} alignItems="left">
            <Heading pb={3} size="sm">
              Time to prepare:
            </Heading>
            <Divider width="xl" />
            <Heading pt={3} size="sm">
              Ingredients:
            </Heading>
            <UnorderedList pl={4}>
              <ListItem>chicken (200g)</ListItem>
              <ListItem>Cat</ListItem>
            </UnorderedList>
            <Divider width="xl" />
            <Heading size="sm">Instructions:</Heading>
            <Textarea
              isReadOnly
              ref={InstructionsRef}
              variant="outline"
              resize="vertical"
              h="auto"
              minH="unset"
              overflow="hidden"
              w="100%"
              minRows={1}
              autoGrow={2}
            >recipe.instructions
            </Textarea>
          </VStack>
        </Box>
      </VStack>
      <BottomNavbar clickNewRecipe={clickNewRecipe}/>
    </>
  );
};

export default RandomRecipe;