import React, { useContext } from 'react'; 
import { CartContext } from '../Components/CartContext';  // Import CartContext
import { FaPlus, FaMinus } from 'react-icons/fa';  // Import icons from react-icons
import './CartPage.css';  // Import CSS file for styling

function CartPage() {
  const { cartItems, clearCart, updateCartItemQuantity } = useContext(CartContext);  // Use CartContext

  // Function to calculate the total price based on item quantities
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {/* Left section: Cart items */}
          <div className="cart-items-section">
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="cart-item-controls">
                      <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                        <FaMinus />
                      </button>
                      <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right section: Cart summary */}
          <div className="cart-summary-section">
            <div className="cart-summary">
              <h3>Total: ${getTotalPrice()}</h3>
              <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
