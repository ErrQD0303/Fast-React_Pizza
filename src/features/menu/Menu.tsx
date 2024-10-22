import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { IMenuItem } from "../../types/menu";

function Menu() {
  const menu = useLoaderData() as IMenuItem[];
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
