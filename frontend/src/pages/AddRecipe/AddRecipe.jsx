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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import './AddRecipe.css'

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

        <TableContainer width = '60%' marginLeft = 'auto' marginRight='auto' marginBottom = '25px'>
          <Table id = 'mytable' variant='simple' colorScheme='green' border = '3px solid #48BB78'>
            <TableCaption>
              <Button
                mt={6}
                colorScheme="teal"
                type="submit"
                marginTop = '5px'
                onClick={() => {
                  // Find a <table> element with id="myTable":
                  var table = document.getElementById("mytable");

                  // Create an empty <tr> element and add it to the 1st position of the table:
                  var row = table.insertRow(-1);

                  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                  var cell1 = row.insertCell(0);
                  var cell2 = row.insertCell(1);
                  var cell3 = row.insertCell(2);
                  cell1.innerHTML = '<input></input>';
                  cell2.innerHTML = '<input></input>';                
                  cell3.innerHTML = "<input></input>";                
                }}
              >
                Add new row
              </Button>
              <br></br>
              <Button marginTop = '10px' onClick = {() => {
                // Find a <table> element with id="myTable":
                var x = document.getElementById("mytable").rows.length;
                if (x > 1) {
                  document.getElementById("mytable").deleteRow(-1);
                }
              }}>
                Delete last row
              </Button>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name (string)</Th>
                <Th>Amount (g) (integer)</Th>
                <Th>Cost ($) (float) </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <td>
                  <input></input>
                </td>
                <td>
                  <input type='number'></input>
                </td>
                <td>
                  <input type='number'></input>
                </td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        {/* <Center>
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
        </Center> */}

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
            marginBottom = '10px'
          >
            Submit
          </Button>
        </Center>
      </FormControl>
    </>
  );
};

export default AddRecipe;
