export default function RecipeList({ recipes, onSelectRecipe }) {
    return (
        <div className="recipe-list">
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <div key={recipe.idMeal} onClick={() => onSelectRecipe(recipe)} className="recipe-card">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
                        <h2 className="recipe-title">{recipe.strMeal}</h2>
                        <p className="recipe-category">{recipe.strCategory}</p>
                    </div>
                ))
            ) : (
              <p className="error-message">No recipes found. Please try another search.</p>
            )}
        </div>
    );
}


      
    
