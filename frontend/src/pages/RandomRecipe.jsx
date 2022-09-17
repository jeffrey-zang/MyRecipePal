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
import React, { useEffect, useRef } from "react";
import autosize from "autosize";

const RandomRecipe = () => {
  const InstructionsRef = useRef();

  useEffect(() => {
    autosize(InstructionsRef.current);
    return () => {
      autosize.destroy(InstructionsRef.current);
    };
  }, []);

  return (
    <>
      <VStack mt={20} h="full">
        <Heading>Recipe:</Heading>
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
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              culpa voluptatibus asperiores enim natus pariatur quis, recusandae
              veritatis! Dolor impedit velit repudiandae cum repellat neque
              corrupti odio quisquam ipsa vero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione enim commodi fugiat delectus
              nisi, incidunt officiis sint quod impedit! Ratione cupiditate
              voluptatum minima facilis amet aspernatur, saepe eos sunt
              perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Architecto repellat atque laboriosam hic cupiditate iusto
              possimus alias esse porro itaque! Temporibus odio modi ipsum
              explicabo! Neque consequuntur ex nisi quisquam.
            </Textarea>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default RandomRecipe;
