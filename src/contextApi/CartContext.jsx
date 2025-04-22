import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/carts")
      .then((res) => setCarts(res.data.carts))
      .catch((err) => console.error("Cart fetch error:", err));
  }, []);

  return (
    <CartContext.Provider value={{ carts }}>
      {children}
    </CartContext.Provider>
  );
};
