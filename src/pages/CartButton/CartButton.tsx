
import "./CartButton.scss"
import { Link } from "react-router-dom";
export const CartBook = () => {
    return (
        <>
        <Link to="/search">
       <div className="cart">
      <button className="cart-button">
        My basket
        <span className="shopping-cart">🛒</span>
      </button>
    </div>
    </Link>
        </>
    )
}