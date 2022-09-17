import React from 'react'

import Home from "./pages/Home/Home.jsx";
import FindRecipe from "./pages/FindRecipe/FindRecipe.jsx";
import Navbar from "./components/Navbar";
import Recipes from './pages/Recipes.jsx';
import AddRecipe from './pages/AddRecipe/AddRecipe.jsx';
import Signin from './pages/SigninSignup/Signin.jsx';
import Signup from "./pages/SigninSignup/Signup.jsx"

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
    case "/signin":
      Component = Signin
      break
    case "/signup":
      Component = Signup
      break
  }

  return (
    <>
    <Navbar/>
    <Component/>
    </>
  );
}

export default App;
