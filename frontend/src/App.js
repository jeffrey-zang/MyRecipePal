import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home.jsx";
import FindRecipe from "./pages/FindRecipe/FindRecipe.jsx";
import Navbar from "./components/Navbar";
import Recipes from './pages/Recipes.jsx';
import AddRecipe from './pages/AddRecipe/AddRecipe.jsx';
import Signin from './pages/SigninSignup/Signin.jsx';
import Signup from "./pages/SigninSignup/Signup.jsx";
import NotFound from './pages/NotFound';
import RandomRecipe from "./pages/RandomRecipe.jsx";

import Footer from './components/Footer/Footer.jsx'

function App() {
  let Component 
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
    case "/MyRecipePal/signin":
      Component = Signin
      break
    case "/MyRecipePal/signup":
      Component = Signup
      break
    case "/MyRecipePal/recipe":
      Component = RandomRecipe
      break
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
