import type { JSONObject } from "@/helpers/form-validation";
import type { RegisterPayload } from "@/services/auth-service";

export const mapToRegisterPayload = (fields: JSONObject): RegisterPayload => ({
  name: String(fields.name),
  surname: String(fields.surname),
  phoneNumber: String(fields.phoneNumber),
  genderId: String(fields.gender),
  email: String(fields.email),
  birthDay: String(fields.birthDate),
  motherName: String(fields.motherName),
  fatherName: String(fields.fatherName),
  familyPhoneNumber: String(fields.familyPhoneNumber),
  highSchool: String(fields.highSchool),
  grade: String(fields.grade),
  residence: String(fields.residence),
  birthCityId: Number(fields.cityId),
  password: String(fields.password),
});
