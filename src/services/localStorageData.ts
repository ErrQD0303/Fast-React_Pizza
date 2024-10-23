import { ILocalStorageData } from "../types/localStorage";

export async function getLocalStorageData(): Promise<ILocalStorageData> {
  let username: string | null = localStorage.getItem("username");
  if (!username) username = "";
  return {
    username,
  };
}

export async function setLocalStorageData(data: object): Promise<void> {
  Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key, value);
  });
}
