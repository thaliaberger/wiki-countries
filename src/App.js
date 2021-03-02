import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import dark from "../src/styles/themes/dark";
import light from "../src/styles/themes/light";
import GlobalStyle from "../src/styles/global";

import Homepage from "../src/components/homepage/Homepage.jsx";
import CountryDetails from "./components/countryDetails/CountryDetails.jsx";

import Navbar from "../src/components/navbar/Navbar.jsx";

function App() {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:id" component={CountryDetails} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
