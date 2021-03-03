import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import usePersistedState from "../src/utils/usePersistedState.js";

import dark from "../src/styles/themes/dark";
import light from "../src/styles/themes/light";
import GlobalStyle from "../src/styles/global";

import Homepage from "../src/components/homepage/Homepage.jsx";
import CountryDetails from "./components/countryDetails/CountryDetails.jsx";
import Navbar from "../src/components/navbar/Navbar.jsx";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  function toggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:name" component={CountryDetails} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
