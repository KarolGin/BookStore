import { useState } from "react";
import "./HamburgerMenu.scss";
import Paths from "./Paths";

import { useTranslation } from "react-i18next";


export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
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
          <a href={Paths.home}>{t(`mainpage`)}</a>
        </li>
        <li>
          <a href={Paths.add}>{t(`add`)}</a>
        </li>
        <li>
          <a href={Paths.edit}>{t(`edit`)}</a>
        </li>
        <li>
          <a href={Paths.sell}>{t(`sell`)}</a>
        </li>
        <li>
          <a href={Paths.cart}>{t(`basket`)}</a>
        </li>
      </ul>
    </div>
  );
};
