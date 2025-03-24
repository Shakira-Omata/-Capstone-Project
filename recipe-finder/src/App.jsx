import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


function App() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await response.json();
            setRecipes(data.meals || []);
        }catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    return (
        <div className='app'>
            <h1 className='app-title'> Recipe Finder</h1>
            <p className='app-subtitle'>Welcome to Recipe Finder <br /> Your <br /> Ultimate Cook Recipe Companion</p>
            <SearchBar onSearch={handleSearch} />
            {selectedRecipe ? (
                <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
            ) : (
                <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
            )}
        </div>
    );
}

export default App;
