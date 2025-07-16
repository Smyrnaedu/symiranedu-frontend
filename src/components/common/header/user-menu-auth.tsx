"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import userMenuData from "@/helpers/data/user-menu.json";
import ButtonLogout from "./button-logout";
import "./sidebar.scss";

const UserSidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
  }, [session, status, router]);

  if (!session?.user?.role) return null;

  const { name, role } = session.user;
  const userMenu = userMenuData[
    role.toLowerCase() as keyof typeof userMenuData
  ];

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-user" title={name}>
        <i className="pi pi-user"></i>
        <span className="sidebar-user-name">{name}</span>
      </div>

      <div className="sidebar-menu">
        {userMenu.map((item) => (
          <button
            key={item.link}
            onClick={() => handleClick(item.link)}
            className={`sidebar-item ${
              pathname === item.link ? "active" : ""
            }`}
            title={item.title}
          >
            <i className="pi pi-angle-right"></i>
            <span className="sidebar-label">{item.title}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-logout">
        <ButtonLogout className="w-100" variant="danger" size="lg" />
      </div>
    </div>
  );
};

export default UserSidebar;
