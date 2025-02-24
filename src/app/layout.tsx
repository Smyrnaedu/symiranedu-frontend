import { poppins } from "@/helpers/fonts";
import type { Metadata } from "next";
import "@/styles/index.scss"
import { appConfig } from "@/helpers/config";
import Topbar from "@/components/common/header/topbar";
import MainMenuBar from "@/components/common/header/main-menubar";

export const metadata: Metadata = {
  title: {
    template:`%s| ${appConfig.project.name}`,
    default:appConfig.project.name
  },
  description: appConfig.project.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={poppins.variable}>
      <body>
        <Topbar/>
        <MainMenuBar/>
        {children}
      </body>
    </html>
  );
}
