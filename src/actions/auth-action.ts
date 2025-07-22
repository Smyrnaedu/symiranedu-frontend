
import { redirect } from "next/navigation";
import {
  convertToJSONObject,
  response,
  transformYupErrors,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemes/auth-schema";
import { signIn, signOut } from "next-auth/react";
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
    // ✅ 1. Doğrulama
    AuthSchema.validateSync(fields, { abortEarly: false });



    // ✅ 2. Giriş işlemi
    const res = await signIn("credentials", {
 
      ...fields,
      callbackUrl: "/dashboard",
    });

    // ✅ 3. Başarılıysa yönlendirme
    if (res?.ok && res.url) {
      redirect(res.url);
    }

    // ❌ Hatalı giriş
    return response(false, fields, "Email veya şifre hatalı", {});

  } catch (error) {
    // ❌ Yup validasyon hataları
    if (error instanceof ValidationError) {
      return transformYupErrors(error.inner, fields);
    }

    // ❌ Kimlik doğrulama hatası
    if (error instanceof AuthError) {
      return response(false, fields, "Invalid credentials", {});
    }

    // ❌ Diğer hatalar
    // console.error("Login hata:", error);
    return response(false, fields, "Login failed", {});
  }
};

export const logoutAction = async (redirectTo = "/") => {
  await signOut({ callbackUrl: redirectTo });
};
