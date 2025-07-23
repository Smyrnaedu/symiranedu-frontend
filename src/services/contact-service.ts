import { CONTACT_CREATE_API_ROUTE, CONTACT_GET_ALL_BY_PAGE_API_ROUTE } from "@/helpers/api-routes";
import { ContactFormPayload } from "../../types/contact";
import { getAuthHeader } from "@/helpers/auth-helper";

export const createContactMessage = async (payload: ContactFormPayload): Promise<Response> => {
  return fetch(CONTACT_CREATE_API_ROUTE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const getAllMessagesByPage = async (
  q = "",
  page = 0,
  size = 20,
  sort = "createdAt",
  type = "asc"
) => {
  const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

  return fetch(`${CONTACT_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
    method: "GET",
    headers: await getAuthHeader(),
  });
};