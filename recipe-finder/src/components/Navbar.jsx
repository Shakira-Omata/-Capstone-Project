import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useAuth();

  return (
    <nav className={`p-4 transition ${darkMode ? 'bg-gray-900 text-white' : 'bg-purple-500 text-black'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">Home</Link>
        <div className="space-x-4">
          <Link to="/login" className="font-bold hover:bg-white dark:hover:bg-gray-800 transition">Login</Link>
          <Link to="/signup" className="font-bold hover:bg-black dark:hover:bg-gray-800 transition">Sign Up</Link>

          {/* Toggle Button */}
          <button 
            onClick={toggleDarkMode} 
            className="font-bold hover:bg-white dark:hover:bg-gray-800 transition p-2 rounded"
          >
            {darkMode ? '🌙 ' : '⭐'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
