import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => setRecipes(res.data.recipes))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes }}>
      {children}
    </RecipeContext.Provider>
  );
};
