
import "./CartButton.scss"
import { Link } from "react-router-dom";
export const CartBook = () => {
  return (
    <>
      <Link to="/search">
        <div className="cart">
          <button className="cart-button">
            My basket
            <img src="/images/favicon-32x32.png" alt="Shopping Cart" className="shopping-cart" />
          </button>
        </div>
      </Link>
    </>
  )
}