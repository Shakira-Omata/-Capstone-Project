import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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