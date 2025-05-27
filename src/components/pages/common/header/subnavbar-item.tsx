"use client";
import Link from "next/link";
import { useEffect, useState, useReducer } from "react";
import React from "react";

type SubNavbarItem = {
  title: string;
  idTag: string;
};

type Props = {
  item: SubNavbarItem;
};

// Dummy reducer to force re-render
const forceUpdateReducer = (x: number) => x + 1;

const PageNavbarItem: React.FC<Props> = ({ item }) => {
  const [currentHash, setCurrentHash] = useState<string>("");
  const [, forceUpdate] = useReducer(forceUpdateReducer, 0);

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
      forceUpdate(); // force re-render even if hash doesn't change
    };

    updateHash(); // İlk yüklemede
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const handleClick = () => {
    setCurrentHash(item.idTag); // hash'i ayarla
    forceUpdate();              // re-render zorla
  };

  const isActive = currentHash === item.idTag;

  return (
    <Link
      href={item.idTag}
      onClick={handleClick}
      scroll={false}
      className={isActive ? "active" : ""}
    >
      {item.title}
    </Link>
  );
};

export default PageNavbarItem;
