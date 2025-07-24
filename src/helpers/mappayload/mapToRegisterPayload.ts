// 1. İmportlar
import type { RegisterPayload } from "@/services/auth-service";
import type { JSONObject } from "@/helpers/form-validation";
import { appConfig } from "../config";

// 2. Yardımcı fonksiyon: Sadece rakamları al
const toDigitsOnly = (phone: string): string => phone.replace(/\D/g, "");

// 3. Ana fonksiyon: Form verilerini payload'a dönüştür
export const mapToRegisterPayload = (fields: JSONObject): RegisterPayload => {
  // genderId string olarak geliyor: "1", "2", "0"
  const genderObject = appConfig.genders.find(
    (g) => String(g.id) === String(fields.genderId)
  );

  if (!genderObject) {
    throw new Error("Geçersiz cinsiyet seçimi yapıldı.");
  }

  return {
    name: String(fields.name).trim(),
    surname: String(fields.surname).trim(),
    phoneNumber: toDigitsOnly(String(fields.phoneNumber)),
    familyPhoneNumber: toDigitsOnly(String(fields.familyPhoneNumber)),
    email: String(fields.email).toLowerCase().trim(),
    genderId: genderObject.id, // backend sayı bekliyor
    highSchool: String(fields.highSchool).trim(),
    residence: String(fields.residence).trim(),
    birthCityId: Number(fields.birthCityId),
    motherName: String(fields.motherName).trim(),
    fatherName: String(fields.fatherName).trim(),
    grade: String(fields.grade).trim(),
    birthDay: String(fields.birthDay), // format dd-mm-yyyy zaten geliyor
    password: String(fields.password),
  };
};
