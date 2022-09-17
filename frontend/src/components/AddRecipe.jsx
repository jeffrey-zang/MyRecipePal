import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

const AddRecipe = () => {
  return (
    <Button
      colorScheme={"green.400"}
      size={"sm"}
      mr={4}
      leftIcon={<AddIcon />}
      variant="outline"
      alignSelf='center'
    >
      Add Recipe
    </Button>
  );
};

export default AddRecipe;