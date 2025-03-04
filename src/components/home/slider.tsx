"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";
import "./slider.scss";

// Slider verisi için TypeScript tipi
type Slide = {
  id: number;
  image: string;
  title: string;
  desc: string;
};

export const Slider: React.FC = () => {
  return (
    <Carousel fade className="main-slider">
      {slides.map((item: Slide) => (
        <Carousel.Item key={item.id}>
          <Image
            src={`/image/slider/${item.image}`}
            width={1920}
            height={1080}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
