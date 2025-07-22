import type { JSONObject } from "@/helpers/form-validation";
import type { RegisterPayload } from "@/services/auth-service";

export const mapToRegisterPayload = (fields: JSONObject): RegisterPayload => ({
  username: String(fields.username),
  password: String(fields.password),
  email: String(fields.email),
  name: String(fields.name),
  surname: String(fields.surname),
  phoneNumber: String(fields.phoneNumber),
  familyPhoneNumber: String(fields.familyPhoneNumber),
  gender: String(fields.gender),
  birthDate: String(fields.birthDate),
  residence: String(fields.residence),
  highSchool: String(fields.highSchool),
  cityId: Number(fields.cityId),
});
