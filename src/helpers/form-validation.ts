// Yup'ın ValidationError sınıfı dışarı aktarılıyor
export { ValidationError as YupValidationError } from "yup";

// FormData'nın JSON'a dönüştürülmesi için tip tanımları
export interface JSONObject {
  [key: string]: string | number | boolean | null | JSONObject | JSONArray;
}

export interface JSONArray extends Array<string | number | boolean | null | JSONObject | JSONArray> {}

export const convertFormDataToJSON = (formData: Iterable<[string, FormDataEntryValue]>): JSONObject => {
  return Object.fromEntries(formData) as JSONObject;
};

// Genel response tipi
export interface Response<T = unknown, E = Record<string, string>> {
  ok: boolean;
  data: T;
  message: string;
  errors: E;
}

// Response üreten yardımcı fonksiyon
export const response = <T = unknown, E = Record<string, string>>(
  ok: boolean,
  data: T,
  message: string,
  errors: E
): Response<T, E> => {
  return {
    ok,
    data,
    message,
    errors,
  };
};

// initialState başlangıç objesi (form için)
export const initialState: Response<object, Record<string, string>> = response(false, {}, "", {});

// Yup validasyon hatası tipi (path opsiyonel hale getirildi)
export interface YupErrorItem {
  path?: string;
  message: string;
}

// transformYupErrors tipi
export interface TransformYupErrorsResponse<T = unknown> extends Response<T, Record<string, string>> {}

// Yup hatalarını error objesine dönüştürür
export const transformYupErrors = <T = unknown>(
  errors: YupErrorItem[],
  data: T
): TransformYupErrorsResponse<T> => {
  const errObject: Record<string, string> = {};

  // path varsa işlenir (undefined olanlar atlanır)
  errors
    .filter((item): item is YupErrorItem & { path: string } => Boolean(item.path))
    .forEach((item) => {
      errObject[item.path] = item.message;
    });

  return response(false, data, "", errObject);
};
