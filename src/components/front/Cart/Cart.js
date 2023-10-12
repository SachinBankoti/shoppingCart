import React from "react";
// import "./Cart.css"

const Cart = ({ cartItems, handleRemoveProduct, handleAddProduct,handleCartClearence }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <div>
          {cartItems.length > 0 && (
            <button onClick={handleCartClearence}>Clear cart</button>
          ) }
        </div>
        Cart Items
        {cartItems.length === 0 && (
          <div className="cart-items-empty">No items added in cart</div>
        )}
        <div>
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="cart-items-list">
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />
                <div className="cart-items-name">{item.name}</div>
                <div className="cart-items-function">
                  <button
                    className="cart-items-add"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="cart-items-remove"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
                <div className="cart-items-price">
                  {item.quantity}*{item.price}
                  `${item.quantity*item.price}`
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-items-total-price-name">
          Total Price
          <div className="cart-Items-total-price">${totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
