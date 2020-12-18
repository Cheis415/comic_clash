import React from "react";
import Navbar from "./navigation/Navbar";
import NavItem from "./navigation/NavItem";
import DropdownMenu from "./navigation/DropdownMenu.js";
import { ReactComponent as ReactIcon } from "./icons/icons/display.svg"
import { ReactComponent as ReduxIcon } from "./icons/icons/keyboard.svg"
import { ReactComponent as GithubIcon } from "./icons/icons/embed2.svg"
import { ReactComponent as CaretIcon } from "./icons/icons/caret-down.svg"
import './App.css';

function App() {
  return (
    <Navbar>
    <NavItem icon={<ReactIcon />} />
    <NavItem icon={<ReduxIcon />} />
    <NavItem icon={<GithubIcon />} />
    <NavItem icon={<CaretIcon />}>
      <DropdownMenu />
    </NavItem>
  </Navbar>
  )
}

export default App;
