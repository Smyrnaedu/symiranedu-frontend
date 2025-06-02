"use client";

import React from "react";
import Link from "next/link";

type SubNavbarItem = {
  title: string;
  idTag: string;
};
type Props = {
  item: SubNavbarItem;
  onSelect?: (id: string) => void;
};

const PageNavbarItem: React.FC<Props> = ({ item, onSelect }) => {
  const handleClick = () => {
    const targetId = item.idTag.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState(null, "", item.idTag);
    onSelect?.(targetId); // ilk tıklamada da state güncellenebilir
  };

  return (
    <Link href={item.idTag} legacyBehavior onClick={handleClick}>
      {item.title}
    </Link>
  );
};

export default PageNavbarItem;