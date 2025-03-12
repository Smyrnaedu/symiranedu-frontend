import { appConfig } from "@/helpers/config";
import React from "react";

const ButtonContactUs: React.FC = () => {
  return (
    <a
      href={`tel:${appConfig.contact.info.whatsapp.link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-secondary"
    >
      Giriş Yap
    </a>
  );
};

export default ButtonContactUs;
