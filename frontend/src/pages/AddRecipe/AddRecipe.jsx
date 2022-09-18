import { React, useEffect, useRef, useState } from "react";
import autosize from "autosize";
import axios from "axios";

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

import "./AddRecipe.css";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [calories, setCalories] = useState();
  const [protein, setProtein] = useState();
  const [carbs, setCarbs] = useState();
  const [instructions, setInstructions] = useState("");
  const [timeToCook, setTimeToCook] = useState();
  const [recipe, setRecipe] = useState();

  const instructionsRef = useRef();

  useEffect(() => {
    autosize(instructionsRef.current);
    return () => {
      autosize.destroy(instructionsRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let recipeData = {
      recipeName: recipeName,
      ingredients: [],
      nutrition: {
        calories: calories,
        protein: protein,
        carbs: carbs,
      },
      instructions: instructions,
      timeToCook: timeToCook,
    };

    let ingredientObject = {};
    const table = document.getElementById("mytable");

    for (let i = 1; i < table.rows.length; i++) {
      // Gets cells collection of curr row
      let objCells = table.rows.item(i).cells;

      // Loop through each cell of curr row to read cell value
      for (let j = 0; j < objCells.length; j++) {
        if (j === 0) {
          console.log();
          ingredientObject.ingredientName = objCells.item(j).children[0].value;
        } else if (j === 1) {
          ingredientObject.ingredientAmount =
            objCells.item(j).children[0].value;
        } else {
          ingredientObject.ingredientCost = objCells.item(j).children[0].values;
        }
      }
      recipeData.ingredients.push(ingredientObject);
      ingredientObject = {};
    }
    setRecipe(recipeData);
    axios.post("http://localhost:3001/add", recipeData);
  };

  // const handleInputChange = (e) => setRecipeName(e.target.value);

  const recipeNameError = recipeName === "";
  // const ingredientsError = ingredients === [];

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
            onChange={(e) => setRecipeName(e.target.value)}
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

        <TableContainer
          width="60%"
          marginLeft="auto"
          marginRight="auto"
          marginBottom="25px"
        >
          <Table
            id="mytable"
            variant="simple"
            colorScheme="green"
            border="3px solid #48BB78"
          >
            <TableCaption>
              <Button
                mt={6}
                colorScheme="teal"
                type="submit"
                marginTop="5px"
                onClick={() => {
                  // Find a <table> element with id="myTable":
                  var table = document.getElementById("mytable");

                  // Create an empty <tr> element and add it to the 1st position of the table:
                  var row = table.insertRow(-1);

                  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                  var cell1 = row.insertCell(0);
                  var cell2 = row.insertCell(1);
                  var cell3 = row.insertCell(2);
                  cell1.innerHTML = "<input></input>";
                  cell2.innerHTML = "<input></input>";
                  cell3.innerHTML = "<input></input>";
                }}
              >
                Add new row
              </Button>
              <br></br>
              <Button
                marginTop="10px"
                onClick={() => {
                  // Find a <table> element with id="myTable":
                  var x = document.getElementById("mytable").rows.length;
                  if (x > 1) {
                    document.getElementById("mytable").deleteRow(-1);
                  }
                }}
              >
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
                  <input type="number"></input>
                </td>
                <td>
                  <input type="number"></input>
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
              <Input
                type="number"
                onChange={(e) => {
                  setCalories(e.target.value);
                }}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon children="Protein (g)" w="50%" />
              <Input
                type="number"
                onChange={(e) => {
                  setProtein(e.target.value);
                }}
              />
            </InputGroup>

            <InputGroup>
              <InputGroup>
                <InputLeftAddon children="Carbohydrates (g)" w="50%" />
                <Input
                  type="number"
                  onChange={(e) => {
                    setCarbs(e.target.value);
                  }}
                />
              </InputGroup>
            </InputGroup>
            <InputGroup pt={6}>
              <Textarea
                placeholder="Recipe Instructions"
                ref={instructionsRef}
                onChange={(e) => setInstructions(e.target.value)}
              ></Textarea>
            </InputGroup>

            <FormLabel
              style={{
                textAlign: "center",
                fontSize: "max(1.5vw, 15px)",
                marginTop: "25px",
              }}
            >
              Time to Prepare (mins)
            </FormLabel>
            <Input
              type="number"
              onChange={(e) => setTimeToCook(e.target.value)}
            />
          </Stack>
        </Center>

        <Center>
          <Button
            mt={6}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
            marginBottom="10px"
          >
            Submit
          </Button>
        </Center>
      </FormControl>
    </>
  );
};

export default AddRecipe;
