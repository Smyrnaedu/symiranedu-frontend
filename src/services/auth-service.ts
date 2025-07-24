//burası endpoint ile bağlantı sağlayacak alan

import { LOGIN_API_ROUTE, REGISTER_API_ROUTE } from "@/helpers/api-routes";



//fetch işlemini yapan yer. bu method auth.js de çağrılacak

interface LoginPayload {
    email: string;
    password: string;
}

export const login = (payload: LoginPayload): Promise<Response> => {
    return fetch(LOGIN_API_ROUTE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(payload),
        credentials: 'include',
    });
};
//register
export interface RegisterPayload {
  name: string;
  surname: string;
  genderId: number; // ✅ string → number
  email: string;
  residence: string;
  birthDay: string;
  phoneNumber: string;
  motherName: string;
  fatherName: string;
  familyPhoneNumber: string;
  highSchool: string;
  grade: string;
  birthCityId: number;
  password: string;
}

export const register = async (payload: RegisterPayload): Promise<Response> => {
  console.log("Register payload:", payload);
  return fetch(REGISTER_API_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    credentials: 'include',
  });
};
