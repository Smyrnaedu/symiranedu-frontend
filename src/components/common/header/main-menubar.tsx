"use client";
import React from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import MainMenu from "./main-menu";
import Image from "next/image";
import { appConfig } from "@/helpers/config";
import MainLogo from "./main-logo";
import "./main-menu.scss";
import ButtonComponent from "../button/button-component";

import UserMenuAuth from "./user-menu-auth";

interface MainMenubarProps {
  session: any;
}

const MainMenubar: React.FC<MainMenubarProps> = ({ session }) => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary shadow menu-links main-menu"
      sticky="top"
      collapseOnSelect
    >
      <Container>
        <MainLogo src="/image/logo/icon-red.png" width={60} height={50} />
        <Navbar.Toggle aria-controls="main-menubar" />
        <Navbar.Offcanvas
          id="main-menubar"
          aria-labelledby="main-menubar-title"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="main-menubar-title">
              <Image
                src="/image/logo/symrnaEDU.png"
                width={135}
                height={34}
                alt={appConfig.project?.name || "Logo"}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="align-items-center">
            <MainMenu className="justify-content-center flex-grow-1" />
            {session?.user?.role ? (

              <UserMenuAuth session={session} />
            ) : (
              <ButtonComponent
                link="/login-register"
                title="Login / Register"
              />
            )}

           
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainMenubar;
