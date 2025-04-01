import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-100">
        <header className="bg-purple-500 text-white p-4">
          <h1 className="text-3xl font-bold">Recipe Finder</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;