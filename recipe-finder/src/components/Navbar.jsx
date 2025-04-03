import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg"></Link>
        <div className="space-x-4">
          <Link to="/login" className="text-white font-bold hover:bg-black transition">Login</Link>
          <Link to="/signup" className="text-white font-bold hover:bg-black transition">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
