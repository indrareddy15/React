import React from "react";

const Checkout = ({ user, _cartItems }) => {
  return (
    <div>
      <h1>Checkout</h1>
      {user && _cartItems ? (
        <div className="cart-summary-cont">
          <h2>Total: ${_cartItems.totalAmount.toFixed(2)}</h2>
          <h5>Shopping Cost: $0</h5>
          <h5>Total Items: {_cartItems.numberOfItems}</h5>
          <h5>
            Shipping Address{" "}
            <span className="text-purple">
              {user.address.city} {user.address.street}
            </span>
          </h5>
          <h5>
            Biller:
            <span>
              {user.name.firstname} {user.name.lastname}
            </span>
            <button style={{ alignSelf: "center", width: "100" }}>
              Pay Now
            </button>
          </h5>
        </div>
      ) : (
        <h3>No CartItems</h3>
      )}
    </div>
  );
};

export default Checkout;
