"use server";

import { RegisterSchema } from "@/helpers/schemes/register-schema";
import { register } from "@/services/auth-service";
import {
  response,
  transformYupErrors,
  convertToJSONObject,
} from "@/helpers/form-validation";
import { ValidationError } from "yup";
import { mapToRegisterPayload } from "@/helpers/mappayload/mapToRegisterPayload";
import type {
  TransformYupErrorsResponse,
  JSONObject,
} from "@/helpers/form-validation";

export const registerAction = async (
  _: TransformYupErrorsResponse<JSONObject> | undefined,
  formData: FormData
): Promise<TransformYupErrorsResponse<JSONObject>> => {
  const fields: JSONObject = convertToJSONObject(formData);

  console.log("✅ registerAction tetiklendi. Gelen form verisi:", fields);

  try {
    // Validasyon
    RegisterSchema.validateSync(fields, { abortEarly: false });
    console.log("✅ Validasyon başarılı");

    // Payload'a çevir
    const registerPayload = mapToRegisterPayload(fields);
    console.log("📦 registerPayload:", registerPayload);

    // Sunucuya gönder
    const res = await register(registerPayload);
    const data = await res.json();

    console.log("✅ Sunucudan gelen yanıt:", data);

    if (!res.ok) {
      return response(false, fields, data.message || "Sunucu hatası", {});
    }

    return response(true, fields, data.message || "Kayıt başarılı", {});
  } catch (error) {
    console.log("❌ Validasyon veya işlem hatası:", error);

    // Yup validasyon hatalarını işle
    if (error instanceof ValidationError) {
      console.log("⚠️ Yup validation hataları:", error.errors);
      return transformYupErrors(error.inner, fields);
    }

    // Diğer hataları işle
    return response(false, fields, "Beklenmeyen bir hata oluştu", {});
  }
};