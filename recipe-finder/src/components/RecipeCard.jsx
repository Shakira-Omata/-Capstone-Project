import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const toggleFavorite = (e) => {
    e.preventDefault();
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes') || []);
    
    const isFavorite = storedFavorites.some(fav => fav.idMeal === recipe.idMeal);
    
    if (isFavorite) {
      const updatedFavorites = storedFavorites.filter(fav => fav.idMeal !== recipe.idMeal);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...storedFavorites, recipe]));
    }
  };

  const isFavorite = JSON.parse(localStorage.getItem('favoriteRecipes') || [])
    .some(fav => fav.idMeal === recipe.idMeal);

  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill={isFavorite ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{recipe.strMeal}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {recipe.strCategory}
            </span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              {recipe.strArea}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;