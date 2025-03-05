import { Manrope } from "next/font/google";
import { Arimo } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
}) satisfies ReturnType<typeof Manrope>;

export const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
}) satisfies ReturnType<typeof Arimo>;
