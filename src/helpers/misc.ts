import { appConfig } from "./config";

// Gender değerlerini döner → örneğin: ["male", "female"]
export const getGenderValues = (): string[] =>
  appConfig.genders.map((item) => String(item.id));


// Eğitim dönemlerinin value'larını döner → örn: ["fall", "spring"]
export const getTermValues = (): string[] =>
  appConfig.educationTerms.map((item) => item.value);

// Bir term value'suna karşılık gelen label'ı döner
export const getTermLabel = (value: string): string | undefined => {
  const term = appConfig.educationTerms.find((item) => item.value === value);
  return term?.label;
};

// JSON.stringify ile gelen string bir array'i kontrol eder
export const isStringArray = (str: string): boolean => {
  try {
    const arr = JSON.parse(str);
    return Array.isArray(arr) && arr.length > 0;
  } catch {
    // Hata şu an kullanılmıyor ama ilerde loglanabilir
    return false;
  }
};

// Haftanın günlerinin değerlerini döner → ["monday", "tuesday", ...]
export const getDayValues = (): string[] =>
  appConfig.days.map((item) => item.value);

// Gün değerine karşılık gelen label'ı döner
export const getDayLabel = (value: string): string | undefined => {
  const day = appConfig.days.find((item) => item.value === value);
  return day?.label;
};

// Belirtilen saniye kadar bekletir (async işlemlerde kullanılır)
export const wait = (sn: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, sn * 1000);
  });
};
