import {
  convertToJSONObject,
  response,
  transformYupErrors,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemes/auth-schema";
import { signIn } from "next-auth/react";
import { ValidationError } from "yup";
import type {
  TransformYupErrorsResponse,
  JSONObject,
} from "@/helpers/form-validation";
import { AuthError } from "next-auth";

export const loginAction = async (
  _: TransformYupErrorsResponse<JSONObject> | undefined,
  formData: FormData
): Promise<TransformYupErrorsResponse<JSONObject>> => {
  const fields: JSONObject = convertToJSONObject(formData);

  try {
    // 1 - Doğrulama
    AuthSchema.validateSync(fields);



    // 2 - Giriş API çağrısı (bu sadece örnek, sunucuda signIn çalışmayabilir)
    await signIn("credentials", {
      redirect: false,
      ...fields,
    });

    // 3 - Başarılı cevap
    return response(true, fields, "Giriş başarılı", {});
  } catch (error) {
    if (error instanceof ValidationError) {
      return transformYupErrors(error.inner, fields);
    } else if (error instanceof AuthError) {
      return response(false, {}, "Invalid Credentials", {});
    }

    throw error;
  }
};
