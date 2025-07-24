import { GET_ALL_STUDENTD_BY_PAGE_API_ROUTE } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";


export const getAllStudentsByPage = async (
  page = 0,
  size = 10,
  sort = "createdAt",
  type = "asc"
) => {
  const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

  return fetch(`${GET_ALL_STUDENTD_BY_PAGE_API_ROUTE}?${qs}`, {
    method: "GET",
    headers: await getAuthHeader(),
  });
};