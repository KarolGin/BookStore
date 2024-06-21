import { useContext } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import "./CartButton.scss"
import { TranslateButtons } from "../../components/TranslateButtons/TranslateButtons";
import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "../../components/Nav/HamburgerMenu/HamburgerMenu";
import BasketBookContext from "../BasketBookContext/BasketBookContext";
export const CartBook = () => {
  const { cart } = useContext(BasketBookContext);
  const { t, i18n } = useTranslation();
  return (
    <>
    
    <div className="change-menu-button">
    <HamburgerMenu />
    <TranslateButtons />
    </div>
    
      <Link to="/cart">
        <div className="cart">
          <button className="cart-button">
            <span className="basket">{t(`mybasket`)}</span>
            <img src="/images/favicon-32x32.png" alt="Shopping Cart" className="shopping-cart" />
          </button>
        </div>
      </Link>
      <div className="cart-container">
        <h1 className="list-basket">{t(`mybasket`)}</h1>
        {cart.length > 0 ? (
          <ul className="list-items">
            {cart.map(book => (
              <li key={book.id}>
                {book.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="nocart-items">{t(`nocartitems`)}</p>
        )}
      </div>
    </>
  )
}