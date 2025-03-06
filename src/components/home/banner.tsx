import { arimo } from "@/helpers/fonts";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./banner.scss";

const Banner = () => {
  return (
    <Container className="banner">
      <Image
        src="/image/banner/banner.png"
        width={1440}
        height={545}
        alt="Main-Banner"
        className="banner-image"
      />
      <div className="banner-text-wrapper">
        <p className="icon">
          {" "}
          <Image
            src="/image/banner/hugeicons_job-link.svg"
            width={24}
            height={24}
            alt="Logo"
          />
          Yurtdışı Eğitim Danışmanlık
        </p>
        <h2 className="arimo.variable">
          Hayallerindeki Eğitime <br />
          <span>Smyrna EDU </span>
          ile Ulaş!
        </h2>
        <p className="banner-text">
          Gitmek istediğin ülkeyi ve almak istediğin eğitimi seç, fiyat teklifi
          al ve bizimle iletişime geç! Bütçene uygun dil okulu ve üniversite
          için anlık fiyatlar alın! Kendinize en uygun programları araştırın!
        </p>
      </div>
    </Container>
  );
};

export default Banner;
