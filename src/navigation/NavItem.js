import React, { useState } from "react";
import "./Nav.css"

function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open)
  }

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => handleClick()}>
        {icon}
      </a>
        {open && children}
    </li>
  )
}
export default NavItem;