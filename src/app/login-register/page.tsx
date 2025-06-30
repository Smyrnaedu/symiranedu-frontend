import { Metadata } from "next";
import { Spacer } from "@/components/common/spacer";

import data from "@/helpers/data/tr.json";
import LoginRegisterSection from "@/components/login-register/login-register";

export async function generateMetadata(): Promise<Metadata> {
  const loginRegisterData = data[0]?.LoginRegister || {};

  return {
    title: loginRegisterData.title || "Giriş Yap / Kayıt Ol",
    description:
      loginRegisterData.description ||
      "Smyrna Edu Danışmanlık platformuna giriş yapın, hizmetlere ulaşın.",
  };
}

const LoginPage = () => {
  const loginRegisterData = data[0]?.LoginRegister || {};

  return (
    <>
      <Spacer />
      <LoginRegisterSection loginRegisterData={loginRegisterData} />
      <Spacer />
    </>
  );
};

export default LoginPage;
