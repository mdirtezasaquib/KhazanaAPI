import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";
import Carts from "./components/Carts";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Quotes from "./components/Quotes";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
