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
  switch (window.location.pathname) {
    case '/':
      Component = Home
      break
    case '/recipes':
      Component = Recipes
      break
    case '/addrecipe':
      Component = AddRecipe
      break
    case '/findrecipe':
      Component = FindRecipe
      break  
    case "/recipe":
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
    <Footer/>
    </>
  );
}

export default App;
