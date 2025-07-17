import { Metadata } from "next";
import { Spacer } from "@/components/common/spacer";
import LoginRegisterSection from "@/components/login-register/login-register";
import { getAllCities } from "@/services/cities-service";
import { CityResponse } from "../../../types/cities";
import data from "@/helpers/data/tr.json";

export async function generateMetadata(): Promise<Metadata> {
  const loginRegisterData = data[0]?.LoginRegister || {};

  return {
    title: loginRegisterData.title || "Giriş Yap / Kayıt Ol",
    description:
      loginRegisterData.description ||
      "Smyrna Edu Danışmanlık platformuna giriş yapın, hizmetlere ulaşın.",
  };
}
const LoginPage = async () => {

  const loginRegisterData = data[0]?.LoginRegister || {};

  return (
    <>
      <Spacer />
      <LoginRegisterSection
        loginRegisterData={loginRegisterData}
      />
      <Spacer />
    </>
  );
};

export default LoginPage;
