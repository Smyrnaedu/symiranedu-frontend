"use client";
import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";


// Menü tipleri
type SubMenuItem = {
  title: string;
  link: string;
  flag?: string; // <-- Opsiyonel yaptık
};

type MainMenuItem = {
  title: string;
  link: string;
  icon?: string;
  subLinks?: SubMenuItem[];
};

interface MainMenuProps {
  className?: string;
}

const MainMenu: React.FC<MainMenuProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <Nav className={`me-auto align-items-start navbar ${className || ""}`}>
      {menuItems.map((item: MainMenuItem) =>
        item.subLinks ? (
          <NavDropdown title={item.title} key={item.link}>
            {item.subLinks.map((sub) => (
              <NavDropdown.Item
                as={Link}
                href={sub.link}
                key={sub.link}
                className={pathname === sub.link ? "active" : ""}
              >
                {sub.flag && (
                  <span
                    className={`fi fi-${sub.flag}`}
                    style={{ marginRight: "20px" }}
                  ></span>
                )}
                {sub.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        ) : (
          <Nav.Link
            as={Link}
            href={item.link}
            key={item.link}
            className={pathname === item.link ? "active" : ""}
          >
            {item.icon && <i className={item.icon}></i>} {item.title}
          </Nav.Link>
        )
      )}
    </Nav>
  );
};

export default MainMenu;
