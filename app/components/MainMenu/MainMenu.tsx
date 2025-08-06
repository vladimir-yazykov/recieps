import classNames from "classnames";
import { NavLink } from "react-router";

export function MainMenu() {
  return (
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <header className="flex flex-col items-center gap-9">
        <div className="w-[500px] max-w-[100vw] p-4 flex  gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => classNames(isActive && "font-bold")}
          >
            Главная
          </NavLink>
          <NavLink
            to="/recipe"
            className={({ isActive }) => classNames(isActive && "font-bold")}
          >
            Рецепты
          </NavLink>
        </div>
      </header>
    </div>
  );
}
