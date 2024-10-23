import { getLocalStorageData } from "../services/localStorageData";
import { ILocalStorageData } from "../types/localStorage";

export async function loader() {
  const data: ILocalStorageData = await getLocalStorageData();
  return data;
}
