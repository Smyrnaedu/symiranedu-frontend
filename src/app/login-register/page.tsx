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

  let cities: { label: string; value: number }[] = [];

  try {
    const res = await getAllCities();
    const json = await res.json();

    console.log("CITIES1",json)

    // Bazı API'ler data içinde bazıları direk array döner
    const citiesRaw: CityResponse[] = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];

    console.log("CITIES",citiesRaw)

    cities = citiesRaw.map((city) => ({
      label: city.name,
      value: city.id,
    }));
  } catch (error) {
    console.error("❌ Şehir verileri alınamadı:", error);
  }

  return (
    <>
      <Spacer />
      <LoginRegisterSection
        loginRegisterData={loginRegisterData}
        cities={cities}
      />
      <Spacer />
    </>
  );
};

export default LoginPage;
