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
import { useDisclosure, Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'

const RandomRecipe = () => {
  const { isOpen, onToggle } = useDisclosure();
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
      console.log(data[0])
      onToggle()
    })
  },[change])
  if (!recipe){
    return <></>
  }

  const clickNewRecipe = () => {
    setChange((cur) => !cur)
    onToggle();
  }
  
  const listIngredients = () => {
    if(!recipe.ingredientNames) return;
    let len = recipe.ingredientNames.length;
    let ans;
    for (let i = 0; i < len; i++) {
      ans = <div>{ans} 
        <listItem>
        {recipe.ingredientAmounts[i]} {recipe.ingredientNames[i]}, {recipe.ingredientCosts[i]}$
        </listItem>
      </div>
    }
    return ans;
  }

  return (
    <>
      <SlideFade in={isOpen} offsetY='20px' >
      <VStack mt={20} h="full">
        <Heading>Recipe: {recipe.recipeName}</Heading>
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
              Time to prepare: {recipe.timeToCook}
            </Heading>
            <Divider width="xl" />
            <Heading pt={3} size="sm">
              Ingredients:
            </Heading>
            <UnorderedList pl={4}>
              {listIngredients()}
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
              height="270px"
            >{recipe.instructions}
            </Textarea>
          </VStack>
        </Box>
      </VStack>
      </SlideFade>
      <BottomNavbar clickNewRecipe={clickNewRecipe} />
      
    </>
  );
};

export default RandomRecipe;