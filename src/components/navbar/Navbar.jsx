import React, { useState } from "react";

import { Container } from "./NavbarStyles";

import { HiOutlineMoon, HiMoon } from "react-icons/hi";

function Navbar({ toggleTheme, theme }) {
  const [themeIcon, setThemeIcon] = useState(theme.title);

  function handleClick() {
    themeIcon === "dark" ? setThemeIcon("light") : setThemeIcon("dark");
    toggleTheme();
  }

  return (
    <Container>
      <h1>Wiki Countries</h1>
      <div onClick={handleClick}>
        {themeIcon === "dark" ? (
          <HiMoon size={20} />
        ) : (
          <HiOutlineMoon size={20} />
        )}
        <p>Dark Mode</p>
      </div>
    </Container>
  );
}

export default Navbar;
