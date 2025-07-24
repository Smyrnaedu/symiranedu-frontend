"use client";
import React, { useState } from "react";
import { Nav, Offcanvas, Button } from "react-bootstrap";
import userMenuData from "@/helpers/data/user-menu.json";
import { usePathname, useRouter } from "next/navigation";
import ButtonLogout from "./button-logout";

type UserMenuAuthProps = {
  session: {
    user: {
      name: string;
      role: keyof typeof userMenuData;
    };
  };
};

export const UserMenuAuth: React.FC<UserMenuAuthProps> = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { name, role } = session.user;
  const userMenu = userMenuData[role.toLowerCase() as keyof typeof userMenuData];

  const handleClick = (link: string) => {
    router.push(link);
    handleClose();
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow} title={name} className="d-flex align-items-center">
        <i className="pi pi-user me-2"></i>
        <span>{name}</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {userMenu?.map((item) => (
              <button
                key={item.link}
                onClick={() => handleClick(item.link)}
                className={`nav-link text-start btn btn-link ${pathname === item.link ? "active" : ""}`}
                disabled={item.link !== "/dashboard/contact-messages" && item.link !== "/dashboard/student-management"}
              >
                {item.title}
              </button>
            ))}
            <ButtonLogout className="mt-4" />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserMenuAuth;
