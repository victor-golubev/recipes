import styles from "./RecipeItem.module.css";

const RecipeItem = ({ recipe }) => {
  return (
    <div className={styles.recipe}>
      <h3 className={styles.title}>{recipe.title}</h3>
      {recipe.extendedIngredients.map((ing) => (
        <p key={ing.id} className={styles.ingredient}>
          {ing.name}
        </p>
      ))}
    </div>
  );
};

export default RecipeItem;
