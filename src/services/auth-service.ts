//burası endpoint ile bağlantı sağlayacak alan

import { LOGIN_API_ROUTE, REGISTER_API_ROUTE } from "@/helpers/api-routes";



//fetch işlemini yapan yer. bu method auth.js de çağrılacak

interface LoginPayload {
    email: string;
    password: string;
}

export const login = (payload: LoginPayload): Promise<Response> => {
    console.log(payload);
    return fetch(LOGIN_API_ROUTE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};
//register
interface RegisterPayload {
  username: string;
  password: string;
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  familyPhoneNumber: string;
  residance: string;
  cityId: number;
}

export const register = (payload: RegisterPayload): Promise<Response> => {
    return fetch(REGISTER_API_ROUTE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}