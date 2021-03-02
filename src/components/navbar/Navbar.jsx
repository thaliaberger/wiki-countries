import React, { useState } from "react";

import { Container } from "./NavbarStyles";

import { HiOutlineMoon, HiMoon } from "react-icons/hi";

function Navbar({ toggleTheme }) {
  const [darkMode, setDarkMode] = useState(true);

  function handleClick() {
    setDarkMode(!darkMode);
    toggleTheme();
  }
  return (
    <Container>
      <h1>Where in the world?</h1>
      <div onClick={handleClick}>
        {darkMode ? <HiMoon size={20} /> : <HiOutlineMoon size={20} />}
        <p>Dark Mode</p>
      </div>
    </Container>
  );
}

export default Navbar;
