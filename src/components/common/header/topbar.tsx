import React from "react";
import { Container } from "react-bootstrap";
import SocialMenu from "../socialmenu";
import "./topbar.scss";
import Link from "next/link";
import { MdPlace } from "react-icons/md";
import { GrCatalogOption } from "react-icons/gr";

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <div className="topBar-left">
          <Link href="/offices">
            <MdPlace />
            <span>Şubelerimiz</span>
          </Link>
          <Link href="/catalogue">
            <GrCatalogOption />
            <span>Kataloglar</span>
          </Link>
        </div>
        <div className="topbar-right">
          <SocialMenu />
          <a href="/dualingo" className="try-yourself">
            Kendini Dene
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
