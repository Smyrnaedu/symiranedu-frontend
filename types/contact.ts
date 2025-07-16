// Daha önce tanımladığımız ContactFormPayload
export interface ContactFormPayload {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

// Form state için genel bir tip örneği (uygunsa özelleştir)
export interface FormState<T = any> {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string>;
}