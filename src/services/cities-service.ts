import { GET_CITIES_API_ROUTE } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllCities = async () => {
  return fetch(GET_CITIES_API_ROUTE, {
    method: "GET",
    headers: await getAuthHeader(), // varsa token gerekiyor mu?
  });
};