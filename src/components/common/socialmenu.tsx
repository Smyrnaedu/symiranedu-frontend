"use client";
import { appConfig } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";

type SocialMediaItem = {
  url: string;
  icon: string;
  title: string
};

type SocialMenuProps = React.ComponentProps<typeof Nav>;

const menuItems: [string, SocialMediaItem][] = Object.entries(appConfig.contact.socialMedia);

const SocialMenu: React.FC<SocialMenuProps> = (props) => {
  return (
    <Nav {...props}>
      {menuItems.map(([key, value]) => (
        <Nav.Link href={value.url} key={key} title={value.title}>
          <i className={value.icon}></i>
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default SocialMenu;