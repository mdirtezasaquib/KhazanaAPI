import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="relative h-screen w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500">
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-md animate-fade-in-up">
            🔥 Welcome to <span className="text-yellow-300">API-Khazana</span>
          </h1>
          <p className="text-xl sm:text-2xl max-w-2xl mb-8 animate-fade-in text-white/90">
            Dive into a world of powerful APIs. From users to quotes, recipes to carts —
            explore the treasure of dummy APIs with beautiful UI!
          </p>
  
          <Link
            to="/users"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            🚀 Explore Users
          </Link>
        </div>
      </div>
    );
  };
  
  export default Home;
  