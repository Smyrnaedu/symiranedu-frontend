"use client";

import Link from "next/link";
import React from "react";

type SubNavbarItem = {
  title: string;
  idTag: string;
};

type Props = {
  item: SubNavbarItem;
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

  return (
    <Link
      href={item.idTag}
      legacyBehavior
      onClick={handleClick}
    
    >
      {item.title}
    </Link>
  );
};

export default PageNavbarItem;
