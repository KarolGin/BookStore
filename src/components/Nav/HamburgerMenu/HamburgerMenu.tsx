import { useState } from "react";
import "./HamburgerMenu.scss";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Strona Główna</a>
        </li>
        <li>
          <a href="/add">Dodaj</a>
        </li>
        <li>
          <a href="/edit">Edytuj</a>
        </li>
      </ul>
    </div>
  );
};
