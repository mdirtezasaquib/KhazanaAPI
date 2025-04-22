import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/quotes")
      .then((res) => setQuotes(res.data.quotes))
      .catch((err) => console.error("Error fetching quotes:", err));
  }, []);

  return (
    <QuoteContext.Provider value={{ quotes }}>
      {children}
    </QuoteContext.Provider>
  );
};
