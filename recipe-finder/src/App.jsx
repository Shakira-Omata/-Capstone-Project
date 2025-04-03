import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipeDetails from './components/RecipeDetails';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="w-full min-h-screen bg-purple-500 dark:bg-gray-900">
          <header className="bg-purple-500 text-black p-4 dark:bg-gray-900">
            <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Recipe Finder</h1>
          </header>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protect home and recipe details routes */}
            <Route 
              path="/" 
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route 
              path="/recipe/:id" 
              element={
                <PrivateRoute>
                  <RecipeDetails />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
