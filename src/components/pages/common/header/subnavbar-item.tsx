
"use client";

import React from "react";
import Link from "next/link";
import { Nav } from "react-bootstrap";

type SubNavbarItem = {
  title: string;
  idTag: string;
};

type Props = {
  item: SubNavbarItem;
  hash: string;
};

const PageNavbarItem: React.FC<Props> = ({ item }) => {
  const handleClick = () => {
    const targetId = item.idTag.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState(null, "", item.idTag);
  };

const PageNavbarItem: React.FC<Props> = ({ item, hash }) => {


  return (
    <Nav.Item>
      <Nav.Link
      as={Link}
      href={item.idTag}
      legacyBehavior
      onClick={handleClick}
         className={`subnavbar-item ${hash === item.idTag ? "active" : ""}`}
    >
      {item.title}
    </Nav.Link>
    </Nav.Item>
    
  );
};

export default PageNavbarItem;
