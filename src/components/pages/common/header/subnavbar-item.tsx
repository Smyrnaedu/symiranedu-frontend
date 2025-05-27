import Link from "next/link";
import React from "react";
import { Nav } from "react-bootstrap";

type SubNavbarItem = {
  title: string;
  idTag: string;
};

type Props = {
  item: SubNavbarItem;
};

const PageNavbarItem: React.FC<Props> = ({ item }) => {
  return (
      <Link href={item.idTag}>
        {item.title}
      </Link>
  );
};

export default PageNavbarItem;
