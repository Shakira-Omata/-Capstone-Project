import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipeDetails from './components/RecipeDetails';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
      <div className="w-full min-h-screen bg-purple-500">
        <header className="bg-purple-500 text-black p-4">
          <h1 className="text-5xl font-extrabold text-center">Recipe Finder</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
        <Footer />
      </AuthProvider>
    </Router>
  
  );
}

export default App;