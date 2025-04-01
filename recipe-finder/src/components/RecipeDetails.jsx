import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeById } from '../api/mealDb';
import { FiArrowLeft, FiExternalLink, FiYoutube } from 'react-icons/fi';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Recipe not found</h2>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          <FiArrowLeft className="mr-2" />
          Back to recipes
        </Link>
      </div>
    );
  }

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link
        to="/"
        className="inline-flex items-center mb-6 text-blue-500 hover:text-blue-700 transition"
      >
        <FiArrowLeft className="mr-2" />
        Back to recipes
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 md:h-80 object-cover"
        />

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {recipe.strCategory}
            </span>
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              {recipe.strArea}
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>

          {recipe.strYoutube && (
            <div className="mb-6">
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                <FiYoutube className="mr-2" />
                Watch on YouTube
              </a>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {ingredients.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span>
                      <span className="font-medium">{item.ingredient}</span>
                      {item.measure && (
                        <span className="text-gray-600 ml-1">- {item.measure}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <div className="prose max-w-none">
                {recipe.strInstructions
                  .split('\n')
                  .filter((para) => para.trim() !== '')
                  .map((para, index) => (
                    <p key={index} className="mb-4">
                      {para}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {recipe.strSource && (
            <div className="mt-6">
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-700 transition"
              >
                <FiExternalLink className="mr-2" />
                View original source
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;