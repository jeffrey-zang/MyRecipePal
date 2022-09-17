import { React, useEffect, useRef, useState } from "react";
import autosize from "autosize";

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const instructionsRef = useRef();

  useEffect(() => {
    autosize(instructionsRef.current);
    return () => {
      autosize.destroy(instructionsRef.current);
    };
  }, []);

  const handleRecipeInputChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const recipeObject = {
    //   "recipeName": recipeName,
    //   "recipeContent": {
    //     "ingredientName":
    //   }

    // }

    console.log("shi");
  };

  const handleIngredientsInputChange = (e) => {
    console.log(ingredients, ingredientsError);
    setIngredients(e.target.value);
  };

  // const handleInputChange = (e) => setRecipeName(e.target.value);

  const recipeNameError = recipeName === "";
  const ingredientsError = ingredients === [];

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel
          style={{
            textAlign: "center",
            fontSize: "max(1.5vw, 15px)",
            marginTop: "25px",
          }}
        >
          Recipe Name
        </FormLabel>
        <Center>
          <Input
            errorBorderColor="red.300"
            width="40%"
            borderColor="green.400"
            onChange={handleRecipeInputChange}
          />
        </Center>

        <FormLabel
          style={{
            textAlign: "center",
            fontSize: "max(1.5vw, 15px)",
            marginTop: "25px",
          }}
        >
          Ingredients:
        </FormLabel>

        <Center>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftAddon children="Name" w="40%" />
              <Input type="text" />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon children="Amount (g)" w="40%" />
              <Input type="number" />
            </InputGroup>
          </Stack>
        </Center>

        <FormLabel
          style={{
            textAlign: "center",
            fontSize: "max(1.5vw, 15px)",
            marginTop: "25px",
          }}
        >
          Nutritional Info:
        </FormLabel>

        <Center>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftAddon children="Calories" w="50%" />
              <Input type="number" />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon children="Protein (g)" w="50%" />
              <Input type="number" />
            </InputGroup>

            <InputGroup>
              <InputGroup>
                <InputLeftAddon children="Carbohydrates (g)" w="50%" />
                <Input type="number" />
              </InputGroup>
            </InputGroup>
            <InputGroup pt={6}>
              <Textarea
                placeholder="Recipe Instructions"
                ref={instructionsRef}
              ></Textarea>
            </InputGroup>
          </Stack>
        </Center>

        <Center>
          <Button
            mt={6}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Center>
      </FormControl>
    </>
  );
};

export default AddRecipe;
