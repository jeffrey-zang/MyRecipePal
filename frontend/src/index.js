import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App.js";
import {BrowserRouter as Router} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
  </Router>
);