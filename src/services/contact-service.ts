import { CONTACT_CREATE_API_ROUTE } from "@/helpers/api-routes";
import { ContactFormPayload } from "../../types/contact";

export const createContactMessage = async (payload: ContactFormPayload): Promise<Response> => {
  return fetch(CONTACT_CREATE_API_ROUTE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};