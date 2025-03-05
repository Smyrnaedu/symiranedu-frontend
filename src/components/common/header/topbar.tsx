import React from "react";
import { Container } from "react-bootstrap";
import SocialMenu from "../socialmenu";
import "./topbar.scss";
import Link from "next/link";
import { MdPlace } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <div className="topBar-right">
          <Link href="/campuses">
            <MdPlace />
            <span>Şubelerimiz</span>
          </Link>

          <Link href="/blog">Kataloglar </Link>
        </div>
        <SocialMenu />
      </Container>
    </div>
  );
};

export default Topbar;
