import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar";
import Recipes from "./pages/Recipes.jsx";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import RandomRecipe from "./pages/RandomRecipe.jsx";


function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/recipes":
      Component = Recipes;
      break;
    case "/addrecipe":
      Component = AddRecipe;
      break;
    case "/recipe":
      Component = RandomRecipe;
      break;
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
