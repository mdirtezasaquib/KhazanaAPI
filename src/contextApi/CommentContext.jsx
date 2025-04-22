import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/comments")
      .then((res) => setComments(res.data.comments))
      .catch((err) => console.error("Comment fetch error:", err));
  }, []);

  return (
    <CommentContext.Provider value={{ comments }}>
      {children}
    </CommentContext.Provider>
  );
};
