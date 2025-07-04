//authentication headerını almak için bir fonk oluşturuldu
import { auth } from "@/auth";
import { appConfig } from "./config";

export const getAuthHeader = async () => {
  const session = await auth(); //apinin gönderdiği tokeni session içerisinden al
  const token = (session as any)?.accessToken;

  let authHeader: { [key: string]: string } = {
    "Content-Type": "application/json",
  };

  if (token) {
    authHeader["Authorization"] = token; //`Bearer ${token}`normalde bu şekilde olmalı. ama şu an api den "Bearer" geliyor. bu nedenle sadece token al
  }
  return authHeader;
};

//jwt yi parçalayacak fonk
interface JwtPayload {
  exp: number;
  [key: string]: any;
}

const parseJwt = (token: string): JwtPayload => {
  //token.split('.') -> //token'i noktalardan böler ve 3 elemanlı dizi oluşturur
  //token.split('.')[1] -> 1. elemanı alır
  //atob() -> base64 ile sifrelenmiş datayı decode eder.
  //JSON.parse(...) -> decode edilen datayı json formatına çevirir

  return JSON.parse(atob(token.split(".")[1]));
};

type GetIsTokenValid = (token: string | null | undefined) => boolean;

export const getIsTokenValid: GetIsTokenValid = (token) => {
  if (!token) return false;

  const jwtExpireTimeStamp: number = parseJwt(token).exp;
  //burada gelen exp değeri SANIYE cinsinden olur.1 Ocak 1971 tarihinden itibaren geçen saniye

  const jwtExpireDateTime: Date = new Date(jwtExpireTimeStamp * 1000);
  //SANIYE cinsinden exp değeri milisaniyeye çevrilir ve DateTime objesi oluşturulur.

  return jwtExpireDateTime > new Date();
  //elimizdeki zaman mevcut zamandan büyükse token geçerli demektir.
};

//bu method authorize olan kullanıcının yetki kontrolü için kullanılır.
interface UserRight {
  urlRegex: RegExp;
  roles: string[];
}

export const getIsUserAuthorized = (
  role: string | null | undefined,
  targetPath: string | null | undefined
): boolean => {
  if (!role || !targetPath) return false;
  const userRight: UserRight | undefined = appConfig.userRightsOnRoutes.find(
    (item: UserRight) => item.urlRegex.test(targetPath)
  );

  if (!userRight) return false;
  return userRight.roles.includes(role);
};