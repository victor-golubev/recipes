import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicRecipes } from "../features/recipes/recipesSlice";
import RecipeItem from "../components/RecipeItem/RecipeItem";
const PublicRecipesPage = () => {
  const dispatch = useDispatch();
  const {
    public: recipes,
    loading,
    error,
  } = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(fetchPublicRecipes());
  }, [dispatch]);
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  return (
    <div>
      <h1>Public Recipes</h1>

      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};
export default PublicRecipesPage;
