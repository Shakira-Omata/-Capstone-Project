import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg"></Link>
        <div className="space-x-4">
          <Link to="/login" className="text-black font-bold hover:bg-white transition">Login</Link>
          <Link to="/signup" className="text-black font-bold hover:bg-black transition">Sign Up</Link>
          <button onClick= {toggleDarkMode}
           className="text-black font-bold hover:bg-white transition">Dark Mode</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
