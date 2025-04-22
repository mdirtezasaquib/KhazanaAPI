import { useContext } from "react";
import { RecipeContext } from "../contextApi/RecipeContext";

const Recipes = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-rose-100 p-6">
      <h1 className="text-4xl font-bold text-center text-rose-700 mb-10">Delicious Recipes 🍜</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-rose-600 mb-2">{recipe.name}</h2>
              <p className="text-sm text-gray-700 mb-2">🍽 Cuisine: {recipe.cuisine}</p>
              <p className="text-sm text-gray-600 mb-2">⚙️ Difficulty: {recipe.difficulty}</p>
              <p className="text-xs text-gray-500 line-clamp-3">📋 {recipe.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
