import Image from "next/image";
import React from "react";
import "./page-header.scss";
import ButtonComponent from "../button/button-component";

type PageHeaderProps = {
  header: string;
  url: string;
  buttonLabel: string;
  flag?: string; // Her sayfaya ait flag, örneğin "us", "de"
};

const PageHeader: React.FC<PageHeaderProps> = ({
  header,
  url,
  buttonLabel,
  flag,
}) => {
  return (
    <div className="page-header">
      <div className="overlay"></div>
      <Image src={`${url}`} width={1920} height={600} alt={header} />

      <h1>
        <span>
          {flag && (
            <span
              className={`fi fi-${flag}`}
              style={{ marginRight: "20px" }}
            ></span>
          )}
          {header}
        </span>
        <ButtonComponent link="/contact" title={buttonLabel} />
      </h1>
    </div>
  );
};

export default PageHeader;
