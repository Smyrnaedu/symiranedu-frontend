import React from "react";
import PageNavbarItem from "./subnavbar-item";
import subNavbarMenusRaw from "@/helpers/data/sub-navbar.json";

type SubNavbarItem = {
  title: string;
  idTag: string;
};

type SubNavbarData = {
  [key: string]: SubNavbarItem[];
};

type Props = {
  category: string; 
};

const SubNavbar: React.FC<Props> = ({ category }) => {
  const subNavbarMenus: SubNavbarData = subNavbarMenusRaw[0];
  const menuItems: SubNavbarItem[] = subNavbarMenus[category] || [];

  if (!menuItems.length) return null;

  return (
    <nav className="mb-3">
      {menuItems.map((item, idx) => (
        <PageNavbarItem key={idx} item={item} />
      ))}
    </nav>
  );
};

export default SubNavbar;
