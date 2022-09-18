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
  
  const RecipeDisplay = ({recipe}) => {

    const InstructionsRef = useRef();
    useEffect(() => {
      autosize(InstructionsRef.current);
      return () => {
        autosize.destroy(InstructionsRef.current);
      };
    }, []);
    if (!recipe){
      return <h1>No Matches</h1>
    }
  
    
    const listIngredients = () => {
      if(!recipe.ingredientNames) return;
      let len = recipe.ingredientNames.length;
      let ans;
      for (let i = 0; i < len; i++) {
        ans = <div>{ans} 
          <listItem>
          {recipe.ingredientAmounts[i]}g {recipe.ingredientNames[i]}, {recipe.ingredientCosts[i]}$
          </listItem>
        </div>
      }
      return ans;
    }
  
    return (
      <>
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
      </>
    );
  };
  
  export default RecipeDisplay;