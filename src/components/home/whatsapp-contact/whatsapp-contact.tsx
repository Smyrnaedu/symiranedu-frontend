"use client";
import { appConfig } from "@/helpers/config";
import React from "react";
import "./whatsapp-contact.scss"
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppContact: React.FC = () => {
  const handleClick = (): void => {
    const whatsappNumber = appConfig.contact.info.whatsapp.value;
    const message = "Hello! I would like to get in touch.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      className="whatsapp-wrapper"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }} 
    >
      <RiWhatsappFill className="whatsapp-icon"/>
    </div>
  );
};

export default WhatsAppContact;
