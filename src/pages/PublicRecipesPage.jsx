import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicRecipes } from "../features/recipes/recipesSlice";
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
      <h1>Публичные рецепты</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default PublicRecipesPage;
