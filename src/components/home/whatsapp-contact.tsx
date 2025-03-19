"use client";
import { appConfig } from "@/helpers/config";
import React from "react";

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
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "15px",
        cursor: "pointer",
        zIndex: 9999, // Üst katmanda yer almasını sağlamak için
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }} // Add support for keyboard navigation
    >
      <RiWhatsappFill
        style={{
          fontSize: "4rem",
          color: "#25D366",
        }}
      />
    </div>
  );
};

export default WhatsAppContact;
