import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Routes from "./Routes"
import Navbar from "./navigation/Navbar";
import NavItem from "./navigation/NavItem";

import { ReactComponent as Sword } from "./navigation/icons/pvp.svg";
import { ReactComponent as Comic } from "./navigation/icons/comics.svg"
import { ReactComponent as GithubIcon } from "./navigation/icons/embed2.svg"




ReactDOM.render(
  <BrowserRouter>
      <Navbar>
    <NavItem route="/" icon={<Comic />} />
    <NavItem route="/clash_form" icon={<Sword />} />
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

