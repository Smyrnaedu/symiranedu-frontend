import React from "react";
import { Menubar } from "primereact/menubar";
import menuItems from "@/helpers/data/main-menu.json";
import MainLogo from "./main-logo";

// Menü verisi için TypeScript tipleri
type SubMenuItem = {
  title: string;
  link: string;
};

type MainMenuItem = {
  title: string;
  link: string;
  subLinks?: SubMenuItem[];
};

const items = menuItems.map((item: MainMenuItem) => ({
  label: item.title,
  url: item.link,
  items: item.subLinks
    ? item.subLinks.map((sub) => ({
        label: sub.title,
        url: sub.link,
      }))
    : undefined,
}));

const start = <MainLogo/>;

export default function MainMenu() {
  return (
    <div className="card">
      <Menubar model={items} start={start} className="container"/>
    </div>
  );
}
