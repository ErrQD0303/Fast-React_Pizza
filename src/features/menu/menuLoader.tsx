import { getMenu } from "../../services/apiRestaurant";
import { IMenuItem } from "../../types/menu";

export async function loader(): Promise<IMenuItem[]> {
  const menu = (await getMenu()) as IMenuItem[];
  return menu;
}
