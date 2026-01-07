import { useDispatch, useSelector } from "react-redux";
import RecipeItem from "../components/RecipeItem/RecipeItem";
import AddRecipeForm from "../components/AddRecipeForm/AddRecipeForm";

const UsersRecipesPage = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Users Recipes</h1>

      <AddRecipeForm />
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </>
  );
};

export default UsersRecipesPage;
