import { arimo } from "@/helpers/fonts";
import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import "./banner.scss";
import data from "@/helpers/data/tr.json";
import MeetingButton from "./meeting-button";

const Banner = () => {
  const bannerData = data[0]?.Home || {};
  const videoSrc = bannerData["banner-video"];
  const title = bannerData["banner-title"];
  const description = bannerData["banner-description"];
  const buttonText = bannerData["banner-button"];

  return (
    <Container fluid className="banner">
      {videoSrc && (
        <video
          src={`/image/banner/${videoSrc}`}
          autoPlay
          muted
          loop
          className="banner-video"
        ></video>
      )}

      <div className="overlay"></div>

      <div className="banner-text-wrapper">
        <h2 className={arimo.variable}>{title}</h2>
        <p className="banner-text">{description}</p>
        <MeetingButton title={buttonText} />
      </div>
    </Container>
  );
};

export default Banner;
