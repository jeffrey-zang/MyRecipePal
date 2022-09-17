import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipeInput, setRecipeInput] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();
    setRecipeInput(e.target.value);
  };

  const clearInput = () => {
    console.log("reached");

    setFilteredRecipes([]);
    setRecipeInput("");
  };

  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              recipeInput.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon onClick={clearInput} />
              )
            }
          />
          <Input
            type="text"
            placeholder="Search By Recipe Name Here"
            onChange={handleFilter}
          />
        </InputGroup>
      </Stack>
    </>
    //   <>
    //     <Input
    //       type="text"
    //       placeholder="Search by recipe name"
    //       value={recipeInput}
    //       onChange={handleFilter}
    //     />
    //     {recipeInput.length === 0 ? <SearchIcon /> : <CloseIcon />}
    //   </>
  );
};

export default SearchBar;
