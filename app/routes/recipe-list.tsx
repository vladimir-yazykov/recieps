import recieps from "../data/recieps.json";

export default function RecipeListPage() {
  return (
    <article>
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            Мои рецепты
          </p>
          <ul>
            {recieps.map(({ title, id }) => (
              <li key={id}>
                <a
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href={`/recipe/${id}`}
                  rel="noreferrer"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
