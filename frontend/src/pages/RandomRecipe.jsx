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
import RecipeDisplay from "../components/RecipeDisplay";
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
    fetch('http://localhost:3001/random', {mode: 'cors',method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      setRecipe(data[0]);
      onToggle()
    })
  },[change])
  if (!recipe){
    return <h1>No Matches</h1>
  }
  console.log(recipe)
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
      <RecipeDisplay recipe={recipe}/>
      <BottomNavbar clickNewRecipe={clickNewRecipe} listIngredients={listIngredients}/>
      
    </>
  );
};

export default RandomRecipe;