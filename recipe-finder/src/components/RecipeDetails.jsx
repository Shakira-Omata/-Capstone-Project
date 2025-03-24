export default function RecipeDetails({ recipe, onBack }) {
    const ingredients = Object.keys(recipe)
        .filter((key) => key.includes('strIngredient') && recipe[key])
        .map((key) => recipe[key]);

        return (
            <div className="recipe-details">
                <button onClick={onBlock} className="back-button">&larr; Back to results</button>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-details-image" />
                <h1 className="recipe-details-title">{recipe.strMeal}</h1>
                <p className="recipe-details-category">
        <strong>Category:</strong> {recipe.strCategory} | <strong>Cuisine:</strong> {recipe.strArea}
      </p>
                <h2 className="recipe-details-subtitle">Ingredients</h2>
                <ul className="recipe-details-ingredients">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2 className="recipe-details-subtitle">Instructions</h2>
                <p className="recipe-details-instructions">{recipe.strInstructions}</p>

                {recipe.strYoutube && (
                    <div className="recipe-details-video">
                        <h2 className="recipe-details-subtitle">Video Tutorial</h2>
                        <iframe 
                         src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
                         className="recipe-details-video-iframe"
                         title="YouTube video player"
                         allowFullScreen
                       />
                    </div>
                )}
            </div>
        )
}