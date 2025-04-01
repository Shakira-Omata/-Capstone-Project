import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchRecipes } from '../api/mealDb';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await searchRecipes(searchTerm);
      setRecipes(results);
      if (results.length === 0) {
        setError('No recipes found. Try a different search term.');
      }
    } catch (err) {
      setError('Failed to fetch recipes. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load - show popular recipes
  useEffect(() => {
    const fetchPopularRecipes = async () => {
      setLoading(true);
      try {
        const results = await searchRecipes('a'); // 'a' returns many popular recipes
        setRecipes(results.slice(0, 12));
      } catch (err) {
        console.error('Error fetching popular recipes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularRecipes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-left  mb-8">Recipe Finder</h1>
        <p className="text-center mb-4">Welcome to Your Recipe Finder</p>
        <p className="text-center mb-8">Your Ultimate Cook Companion</p>
      
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="bg-fuchsia-700 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <h2 className="text-2xl font-semibold mb-6">
            {searchTerm ? `Search Results for "${searchTerm}"` : 'Popular Recipes'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;