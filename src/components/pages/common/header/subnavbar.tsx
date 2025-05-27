"use client";
import React, { useEffect, useState } from "react";
import PageNavbarItem from "./subnavbar-item";
import subNavbarMenusRaw from "@/helpers/data/sub-navbar.json";
import "./subnavbar.scss";
import { Nav } from "react-bootstrap";

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

  const [hash, setHash] = useState(""); // örnek: #overview

  useEffect(() => {
    // Sadece client'ta çalışır
    setHash(window.location.hash); // örnek: #overview
  }, [hash]);
  

  if (!menuItems.length) return null;

  return (
    <section className="container-fluid">
      <Nav className="container subnavbar">
        {menuItems.map((item, idx) => (
          <PageNavbarItem key={idx} item={item} hash={hash}/>
        ))}
      </Nav>
    </section>
  );
};

export default SubNavbar;
