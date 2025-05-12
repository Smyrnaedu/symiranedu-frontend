import { manrope } from "@/helpers/fonts";
import type { Metadata } from "next";
import "@/styles/index.scss";
import { appConfig } from "@/helpers/config";
import Topbar from "@/components/common/header/topbar";
import MainMenuBar from "@/components/common/header/main-menubar";
import Footer from "@/components/common/footer/footer";
import FooterSub from "@/components/common/footer/footer-sub";


export const metadata: Metadata = {
  title: {
    template: `%s| ${appConfig.project.name}`,
    default: appConfig.project.name,
  },
  description: appConfig.project.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={manrope.variable}>
      <body>
        <main>
          <Topbar />
          <MainMenuBar />
          {children}
          <Footer />
        {/*   <FooterImage /> */}
          <FooterSub />
        </main>
      </body>
    </html>
  );
}
