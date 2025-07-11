// authentication header'ını almak için oluşturulan yardımcı fonksiyonlar
import { auth } from "@/auth";
import { appConfig } from "./config";

interface AuthHeader {
  [key: string]: string;
}

// 🔐 Token'ı header olarak hazırlayan fonksiyon
export const getAuthHeader = async (): Promise<AuthHeader> => {
  const session = await auth(); // API'den gelen token'ı session içinden al
  const token = (session as { accessToken?: string } | null)?.accessToken;

  const authHeader: AuthHeader = {
    "Content-Type": "application/json",
  };

  if (token) {
    authHeader["Authorization"] = token; // Token zaten 'Bearer ...' formatında geliyor
  }

  return authHeader;
};

// 🔍 JWT Token'ı decode eden yardımcı fonksiyon
interface JwtPayload {
  exp: number;
  [key: string]: unknown;
}

const parseJwt = (token: string): JwtPayload => {
  try {
    const base64Payload = token.split(".")[1];
    const decodedPayload = atob(base64Payload);
    return JSON.parse(decodedPayload) as JwtPayload;
  } catch (error) {
    console.error("JWT parse hatası:", error);
    return { exp: 0 };
  }
};

// ✅ Token süresi kontrolü
export const getIsTokenValid = (token: string | null | undefined): boolean => {
  if (!token) return false;

  const jwtExpireTimeStamp = parseJwt(token).exp;
  const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);

  return jwtExpireDateTime > new Date(); // Mevcut zamanla karşılaştır
};

// 🚦 Kullanıcının yetkili olup olmadığını kontrol eden fonksiyon
interface UserRight {
  urlRegex: RegExp;
  roles: string[];
}

export const getIsUserAuthorized = (
  role: string | null | undefined,
  targetPath: string | null | undefined
): boolean => {
  if (!role || !targetPath) return false;

  const userRight = appConfig.userRightsOnRoutes.find(
    (item: UserRight) => item.urlRegex.test(targetPath)
  );

  if (!userRight) return false;

  return userRight.roles.includes(role);
};
