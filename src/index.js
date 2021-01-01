import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Routes from "./Routes"
import Navbar from "./navigation/Navbar";
import NavItem from "./navigation/NavItem";
import DropdownMenu from "./navigation/DropdownMenu.js";
import { ReactComponent as ReactIcon } from "./navigation/icons/display.svg"
import { ReactComponent as ReduxIcon } from "./navigation/icons/keyboard.svg"
import { ReactComponent as GithubIcon } from "./navigation/icons/embed2.svg"
import { ReactComponent as CaretIcon } from "./navigation/icons/caret-down.svg"


ReactDOM.render(
  <BrowserRouter>
      <Navbar>
    <NavItem route="/" icon={<ReactIcon />} />
    <NavItem route="/clash_form" icon={<ReduxIcon />} />
    <NavItem route="/clash_page" icon={<GithubIcon />} />
    {/* <NavItem icon={<CaretIcon />}>
      <DropdownMenu />
    </NavItem> */}
  </Navbar>
    <App />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

