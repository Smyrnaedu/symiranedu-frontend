"use client";
import { appConfig } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";

// Menü itemleri için TypeScript türleri tanımlandı
// type ContactInfo = {
//   [key: string]: {
//     url: string;
//     icon: string;
//     value: string;
//   };
// };

// Props tipi
type Props = {
  className?: string;
};

// appConfig.contact.info nesnesinin güvenli şekilde kullanılması
const menuItems = Object.entries(appConfig.contact.info);

const ContactMenu: React.FC<Props> = ({ className }) => {
  return (
    <Nav className={className}>
      {menuItems.map(([key, item]) => (
        <Nav.Link href={item.link} key={key}>
          <item.icon /> {item.value}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default ContactMenu;