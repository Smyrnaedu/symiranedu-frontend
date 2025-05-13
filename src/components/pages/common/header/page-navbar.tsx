import React from "react";
import { Nav } from "react-bootstrap";
import PageNavbarItem from "./page-navbar-item";

interface Props {
  url?: string;
}

const PageNavbar: React.FC<Props> = ({ url }) => {
  return (
    <Nav variant="tabs" defaultActiveKey={url}>
      <PageNavbarItem />
    </Nav>
  );
};

export default PageNavbar;
