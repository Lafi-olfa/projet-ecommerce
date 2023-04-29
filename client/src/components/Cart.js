import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
const Cart = () => {
  // const { user } = useSelector((state) => state.user);

  const { cartItems } = useSelector((state) => state.cart);
  window.scrollTo(0, 0);
  console.log(cartItems);
  useEffect(() => {}, []);
  return (
    <div className="cart-shopping">
      <div className="cart-shopping-desc">
        <p> Shopping card</p>
        {cartItems.length === 0 ? (
          <div className="cart-shopping-red">
            your cart is empty{" "}
            <Link to="/" className="cart-shopping-re">
              {" "}
              Go back
            </Link>
          </div>
        ) : (
          cartItems.map((item) => <CartItems item={item} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
