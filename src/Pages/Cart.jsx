import React from 'react';

const Cart = ({ cartItems,removeFromCart  }) => {
  const handleRemove = (index) => {
    removeFromCart(index);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='productContainer'>
        {cartItems.map((item, index) => (
          <div className='productItem' key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
        
      )}
      {/* Add other cart-related functionality such as total price, checkout button, etc. */}
    </div>
  );
};

export default Cart;