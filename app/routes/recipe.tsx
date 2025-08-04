import type { Route } from "./+types/recipe";

import recieps from "../data/recieps.json";

export default function RecipePage({ params }: Route.ComponentProps) {
  const id = +params.recipeId;
  const recipe = recieps.find((r) => r.id === id);

  if (!recipe) {
    return "Рецепт не найден";
  }
  return (
    <article>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </article>
  );
}
