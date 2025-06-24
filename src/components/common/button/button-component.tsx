import Link from "next/link";
import React from "react";
import "./button-component.scss";

interface ButtonProps {
  link: string;
  title?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ link, title }) => {
  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      className="btn btn-secondary special-btn"
    >
      {title}
    </Link>
  );
};

export default ButtonComponent;
