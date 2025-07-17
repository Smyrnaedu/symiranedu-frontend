import { GET_CITIES_API_ROUTE } from "@/helpers/api-routes";

export const getAllCities = async () => {
  return fetch(GET_CITIES_API_ROUTE, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  })
 
};
