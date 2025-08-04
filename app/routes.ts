import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("./layout.tsx", [route("recipe/:recipeId", "routes/recipe.tsx")]),
] satisfies RouteConfig;
