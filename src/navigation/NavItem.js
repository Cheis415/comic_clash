import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function NavItem({ icon, children, route }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    console.log("CHILDREN!!!", children)
    setOpen(!open)
  }

  return (
    <li className="nav-item">
      <a href={route} className="icon-button" onClick={() => handleClick()}>
        {icon}
      </a>
        {open && children}
    </li>
  )
}
export default NavItem;