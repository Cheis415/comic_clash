import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import "./Nav.css";
import { ReactComponent as Display } from "./icons/display.svg";
import { ReactComponent as Rarrow } from "./icons/circle-right.svg";
import { ReactComponent as Larrow } from "./icons/circle-left.svg";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as Javascript } from "./icons/javascript.svg";
import { ReactComponent as ReactIcon } from "./icons/react.svg";
import { ReactComponent as ReduxIcon } from "./icons/redux.svg";
import { ReactComponent as Contact } from "./icons/whatsapp.svg";

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem({ children, leftIcon, rightIcon, goToMenu }) {
    return (
      <a href="#" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>)
  }
  return (
    <div className="dropdown" style={{height: menuHeight}}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<GithubIcon />} 
            goToMenu="settings"
            rightIcon={<Larrow />}>
            Proficient in
        </DropdownItem>
          <DropdownItem
            leftIcon={<Display />}>
            About me
      </DropdownItem>
          <DropdownItem
            leftIcon={<Contact />}>
            Contact
        </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        onEnter={calcHeight}
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<Javascript /> } 
            rightIcon={<Rarrow />} 
            goToMenu="main">
            Javascript
        </DropdownItem>
          <DropdownItem
            leftIcon={<ReactIcon />}>
            React
      </DropdownItem>
      <DropdownItem
            leftIcon={<ReactIcon />}>
            React
      </DropdownItem>
      <DropdownItem
            leftIcon={<ReactIcon />}>
            React
      </DropdownItem>
      <DropdownItem
            leftIcon={<ReactIcon />}>
            React
      </DropdownItem>
          <DropdownItem
            leftIcon={<ReduxIcon />}>
            Redux
        </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}
export default DropdownMenu;