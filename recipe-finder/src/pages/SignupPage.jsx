import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const success = signup(email, password);
    if (success) {
      navigate('/login'); 
    } else {
      setError('Failed to create an account');
    }
  };

  return (
    <div>
      <div 
        className="flex flex-col items-center justify-center min-h-screen bg-purple-500 px-4"
        style={{ 
          backgroundImage: "url('/Velvet.jpg')",
          // backgroundImage: "url('/Heart.jpg')",  
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
      <div className="text-center mb-40 bg-black p-20  shadow-md  rounded-lg">  
        <h1 className="text-4xl font-semibold text-white ">Welcome to Recipe Finder
        </h1>
        <p className="text-white font-semibold text-lg mt-2 ">Your<br></br> <br></br> Ultimate Recipe Companion</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;

// This code defines a SignUpPage component that allows users to create an account. It includes form validation for matching passwords and displays error messages when necessary. The component uses the useAuth context to handle user authentication and redirects to the login page upon successful signup.
//  Styled using Tailwind CSS classes for a modern and responsive design.
