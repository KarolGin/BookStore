import { useContext } from "react";
import { BasketBookContext } from "../BasketBookContext/BasketBookContext";
import { t } from "i18next";
import { Link } from "react-router-dom";
import "./CartButton.scss"
export const CartBook = () => {
  const { cart } = useContext(BasketBookContext);
  return (
    <>
      <Link to="/cart">
        <div className="cart">
          <button className="cart-button">
            <span className="basket">{t(`mybasket`)}</span>
            <img src="/images/favicon-32x32.png" alt="Shopping Cart" className="shopping-cart" />
          </button>
        </div>
      </Link>
      <div className="cart-container">
        <h1>{t(`mybasket`)}</h1>
        {cart.length > 0 ? (
          <ul>
            {cart.map(book => (
              <li key={book.id}>
                {book.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>{t(`nocartitems`)}</p>
        )}
      </div>
    </>
  )
}