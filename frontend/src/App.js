import React from 'react'

import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import Recipes from './pages/Recipes.jsx'

function App() {
  let Component 
  switch (window.location.pathname) {
    case '/':
      Component = Home
      break
    case '/recipes':
      Component = Recipes
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
