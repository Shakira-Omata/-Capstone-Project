import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Simulate signup
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <button onClick={handleSignup} className="px-4 py-2 bg-green-500 text-white rounded">
        Sign Up
      </button>
    </div>
  );
};

export default SignupPage;
