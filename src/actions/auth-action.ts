"use server";

import { signIn, signOut } from "@/auth";
import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
  Response,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemes/auth-schema";
import { AuthError } from "next-auth";

// Giriş formundan gelen alanlar
interface LoginFields {
  username: string;
  password: string;
  [key: string]: string;
}

// Server action: login işlemini yürütür
export const loginAction = async (
  prevState: Response<LoginFields>, // önceki state (useFormState için)
  formData: FormData // form verisi
): Promise<Response<LoginFields>> => {
  // 1- Form verisini JSON objesine çevir
  const fields = convertFormDataToJSON(formData) as LoginFields;

  try {
    // 2- Yup ile doğrulama
    AuthSchema.validateSync(fields, { abortEarly: false });

    // 3- Auth.js signIn (credentials)
    await signIn("credentials", fields);

    // 4- Giriş başarılı ise bir şey dönmeye gerek yok (redirect edilir)
    return response(true, fields, "Login successful", {});
  } catch (err) {
    // 5- Validation hatası
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    // 6- Kimlik doğrulama hatası
    if (err instanceof AuthError) {
      return response(false, fields, "Invalid credentials", {});
    }

    // 7- Bilinmeyen hata (re-throw)
    throw err;
  }
};

// Logout işlemi
export const logoutAction = async (redirectTo: string = "/"): Promise<void> => {
  await signOut({ redirectTo });
};
