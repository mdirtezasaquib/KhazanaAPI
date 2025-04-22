const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-teal-700 via-cyan-600 to-sky-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">

            <h1 className="text-xl font-extrabold tracking-wide mb-4 md:mb-0">
              <span className="text-yellow-300 drop-shadow-lg">API</span>-Khazana
            </h1>
  
        
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-200"
              >
                Twitter
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
  
        
          <div className="text-center mt-6">
            <p className="text-sm text-white/80">
              &copy; 2025 <span className="text-yellow-300">API-Khazana</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  