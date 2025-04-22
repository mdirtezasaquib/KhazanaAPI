import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-teal-700 via-cyan-600 to-sky-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-300 drop-shadow-lg">API</span>-Khazana
        </h1>

    
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>


        <ul className={`md:flex md:gap-8 items-center absolute md:static top-[70px] left-0 w-full md:w-auto bg-gradient-to-r from-teal-700 via-cyan-600 to-sky-600 md:bg-transparent z-50 px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          {[ 
            { path: "/", label: "Home" },
            { path: "/users", label: "Users" },
            { path: "/products", label: "Products" },
            { path: "/carts", label: "Carts" },
            { path: "/posts", label: "Posts" },
            { path: "/comments", label: "Comments" },
            { path: "/quotes", label: "Quotes" },
            { path: "/recipes", label: "Recipes" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block py-2 md:py-0 hover:text-yellow-300 text-lg font-semibold transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
