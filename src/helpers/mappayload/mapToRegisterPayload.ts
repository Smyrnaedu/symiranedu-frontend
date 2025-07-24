// 1. İmportlar
import type { RegisterPayload } from "@/services/auth-service";
import type { JSONObject } from "@/helpers/form-validation";
import { appConfig } from "../config";

// 2. toDigitsOnly (sadece rakamları alır)
const toDigitsOnly = (phone: string): string => phone.replace(/\D/g, "");

// 3. mapToRegisterPayload
export const mapToRegisterPayload = (fields: JSONObject): RegisterPayload => {
  const genderObject = appConfig.genders.find(
    (g) => g.value === String(fields.genderId).toUpperCase()
  );

  if (!genderObject) {
    throw new Error("Geçersiz cinsiyet seçimi yapıldı.");
  }

  return {
    name: String(fields.name),
    surname: String(fields.surname),
    phoneNumber: toDigitsOnly(String(fields.phoneNumber)),             // ✅ sadece rakam
    genderId: genderObject.id,                                         // ✅ sayı (1 veya 2)
    email: String(fields.email),
    birthDay: String(fields.birthDay),
    motherName: String(fields.motherName),
    fatherName: String(fields.fatherName),
    familyPhoneNumber: toDigitsOnly(String(fields.familyPhoneNumber)), // ✅ sadece rakam
    highSchool: String(fields.highSchool),
    grade: String(fields.grade),
    residence: String(fields.residence),
    birthCityId: Number(fields.birthCityId),
    password: String(fields.password),
  };
};
