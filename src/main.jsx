import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contextApi/UserContext";
import { ProductProvider } from "./contextApi/ProductContext";
import { CartProvider } from "./contextApi/CartContext";
import { PostProvider } from "./contextApi/PostContext";
import { CommentProvider } from "./contextApi/CommentContext";
import { QuoteProvider } from "./contextApi/QuoteContext";
import { RecipeProvider } from "./contextApi/RecipeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <PostProvider>
        <CommentProvider>
        <QuoteProvider>
        <RecipeProvider>
                  <App />
                </RecipeProvider>
              </QuoteProvider>
            </CommentProvider>
        </PostProvider>
      </CartProvider>
    </ProductProvider>
  </UserProvider>
</React.StrictMode>
);
