import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>
      {children}
    </PostContext.Provider>
  );
};
