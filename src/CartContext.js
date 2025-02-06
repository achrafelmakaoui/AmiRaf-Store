import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children, userId }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await axios.get(`https://server.amiraf.shop/api/cart/${userId}`);
        const items = response.data?.items || [];
        setCartCount(items.length);
      } catch (error) {
        console.error("Error fetching cart count:", error.response?.data?.message || error.message);
        setCartCount(0);
      }
    };

    fetchCartCount();
  }, [userId]);

  const updateCartCount = async () => {
    try {
      const response = await axios.get(`https://server.amiraf.shop/api/cart/${userId}`);
      if (response.data && response.data.items) {
        setCartCount(response.data.items.length);
      }
    } catch (error) {
      console.error("Error updating cart count:", error.response?.data?.message || error.message);
      setCartCount(0)
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
