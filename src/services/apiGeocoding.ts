import { IPosition } from "../types/user";
import axios from "axios";

const geocodingAxios = axios.create({
  baseURL: "https://api.bigdatacloud.net/data",
});

export async function getAddress({ latitude, longitude }: IPosition) {
  try {
    const res = await geocodingAxios({
      // method: "get", // Default to "get"
      url: `reverse-geocode-client`,
      params: {
        latitude,
        longitude,
      },
      responseType: "json",
    });

    const data = res.data;

    return data;
  } catch (error) {
    throw new Error("Failed getting address");
  }
}

/* export async function getAddress({ latitude, longitude }: IPosition) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  console.log(res);
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
 */
