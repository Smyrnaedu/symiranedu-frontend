import { appConfig } from "./config";


//COMMON ENDOINTS
export const CONTACT_CREATE_API_ROUTE = `${appConfig.apiURL}/contact-messages/create`;
export const CONTACT_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/contactMessages/getAll`;


export const LOGIN_API_ROUTE = `${appConfig.apiURL}/auth/login`;
export const REGISTER_API_ROUTE = `${appConfig.apiURL}/smyrna/student/register`;

export const GET_CITIES_API_ROUTE = `${appConfig.apiURL}/cities/all`;