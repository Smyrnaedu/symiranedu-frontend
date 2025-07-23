"use server";

import {
  convertToJSONObject,
  transformYupErrors,
  TransformYupErrorsResponse,
  YupValidationError,
} from "@/helpers/form-validation";
import { ContactSchema } from "@/helpers/schemes/contact-schema";
import { createContactMessage } from "@/services/contact-service";
import { ContactFormPayload} from "../../types/contact";

// JSON-compatible objeyi tanımla
type JSONObject = { [key: string]: any };

// `useActionState` ile uyumlu hale getirildi
export const createContactAction = async (
  _: TransformYupErrorsResponse<JSONObject>,
  formData: FormData
): Promise<TransformYupErrorsResponse<JSONObject>> => {
 const fields: JSONObject = convertToJSONObject(formData);
 console.log("***************formFields:", fields);
 const contactPayload: ContactFormPayload = {
    firstName: fields.firstName,
    lastName: fields.lastName,
    email: fields.email,
    message: fields.message,
    phone: fields.phone,
    // add other properties if ContactFormPayload has more
  };
  console.log("***************contactPayload:", fields);
  try {
    // Yup doğrulama
    ContactSchema.validateSync(contactPayload, { abortEarly: false });

    const res = await createContactMessage(contactPayload);
    const data = await res.json();
    console.log("***************res:", fields);
    console.log("***************data:", fields);
    if (!res.ok) {
      return {
        ok: false,
        data: fields,
        message: data?.message || "Failed to send your message.",
        errors: data?.errors || {},
      };
    }

    return {
      ok: true,
      data: fields,
      message: "Your message has been sent successfully.",
      errors: {},
    };
  } catch (err) {
    if (err instanceof YupValidationError) {
      const yupErrorResult = transformYupErrors(
        err.inner,
        fields as unknown as JSONObject
      );
      return {
        ok: false,
        data: fields,
        message: "",
        errors: yupErrorResult.errors,
      };
    }
    throw err;
  }
};