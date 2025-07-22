import {
  convertToJSONObject,
  response,
  transformYupErrors,
} from "@/helpers/form-validation";
import { RegisterSchema } from "@/helpers/schemes/register-schema";
import { register } from "@/services/auth-service";
import { ValidationError } from "yup";

import type { TransformYupErrorsResponse, JSONObject } from "@/helpers/form-validation";
import { mapToRegisterPayload } from "@/helpers/mappayload/mapToRegisterPayload";


export const registerAction = async (
  _: TransformYupErrorsResponse<JSONObject> | undefined,
  formData: FormData
): Promise<TransformYupErrorsResponse<JSONObject>> => {
  const fields: JSONObject = convertToJSONObject(formData);

  console.log("Kayıt formu verileri:", fields);

  try {
    // ✅ 1. Form doğrulama
    RegisterSchema.validateSync(fields, { abortEarly: false });

    // ✅ 2. DTO mapleme ve kayıt işlemi
    const registerPayload = mapToRegisterPayload(fields);
    const res = await register(registerPayload);
    const data = await res.json();

    console.log("DB'den gelen cevap:", data);

    if (!res.ok) {
      return response(false, fields, "Kayıt sırasında sunucu hatası oluştu", {});
    }

    return response(true, fields, "Kayıt işlemi başarılı", {});
  } catch (error) {
    if (error instanceof ValidationError) {
        console.error("Doğrulama hatası:", error);
      return transformYupErrors(error.inner, fields);
    }

    console.error("Kayıt hatası:", error);
    return response(false, fields, "Kayıt işlemi başarısız", {});
  }
};
