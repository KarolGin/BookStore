import { useState } from "react";
import "./HamburgerMenu.scss";
import Paths from "./Paths";  


export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
        <a href={Paths.home}>Strona Główna</a>
        </li>
        <li>
          <a href={Paths.add}>Dodaj</a>
        </li>
        <li>
          <a href={Paths.edit}>Edytuj</a>
        </li>
      </ul>
    </div>
  );
};
