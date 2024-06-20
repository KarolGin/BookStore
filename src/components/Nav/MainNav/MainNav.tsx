
import { t } from "i18next";
import "./MainNav.scss";
import { useTranslation } from "react-i18next";

export const MainNav = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="main-nav">
      <span className="container-for-links">
        <ul className="main-nav-list">
          <li className="main-nav-list-item">
            <a href="/">{t(`mainpage`)}</a>
          </li>
          <li className="main-nav-list-item">
            <a href="/add">{t(`addproduct`)}</a>
          </li>
          <li className="main-nav-list-item">
            <a href="/edit">{t(`editproduct`)}</a>
          </li>
          <li className="main-nav-list-item">
            <a href="/sell">{t(`sellproduct`)}</a>
          </li>
        </ul>
      </span>
    </div>
  );
};
