import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home.jsx";
import FindRecipe from "./pages/FindRecipe/FindRecipe.jsx";
import Navbar from "./components/Navbar";
import Recipes from './pages/Recipes.jsx'
import AddRecipe from './pages/AddRecipe/AddRecipe'
import NotFound from './pages/NotFound'
import RandomRecipe from "./pages/RandomRecipe.jsx";

import Footer from './components/Footer/Footer.jsx'

function App() {
  let Component 
  let footer = <Footer/>;
  switch (window.location.pathname) {
    case '/MyRecipePal/':
      Component = Home
      break
    case '/MyRecipePal/recipes':
      Component = Recipes
      break
    case '/MyRecipePal/addrecipe':
      Component = AddRecipe
      break
    case '/MyRecipePal/findrecipe':
      Component = FindRecipe
      break  
    case "/MyRecipePal/recipe":
      Component = RandomRecipe;
      break;
    default:
      Component = NotFound
      break
  }

  return (
    <>
    <Navbar/>
    <Component/>
    <footer/>
    </>
  );
}

export default App;
