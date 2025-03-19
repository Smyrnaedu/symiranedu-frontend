"use client";
import { SectionHeader } from "@/components/common/section-header";
import React, { useRef } from "react";
import Slider from "react-slick";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import { Spacer } from "@/components/common/spacer";
import SliderCardWithoutPic from "./slider-card-without-pic";
import SliderCardWithPic from "./slider-card-with-pic"; // Resimli card componenti
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface StudentType {
  id: number;
  name: string;
  image?: string;
  description: string;
  profilImg: string;
}

interface HomeData {
  Home: {
    students: StudentType[];
    "student-reviews-sub-title": string;
    "student-reviews-title": string;
  };
}

const Sliders: React.FC = () => {
  const homeData: HomeData = data[0] as unknown as HomeData;
  const students: StudentType[] = homeData?.Home?.students || [];

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3, // Büyük ekranlarda kaymaları engelle
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container container">
      {/* ✅ Header ve butonları aynı hizada konumlandır */}
      <div className="slider-header">
        <SectionHeader
          title={homeData.Home["student-reviews-sub-title"]}
          spans={homeData.Home["student-reviews-title"]}
        />
        <div className="slider-buttons">
          <button className="prev-button" onClick={() => sliderRef.current?.slickPrev()}>
          <IoIosArrowBack />
          </button>
          <button className="next-button" onClick={() => sliderRef.current?.slickNext()}>
          <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Spacer height={10} />
      <Slider ref={sliderRef} {...settings} className="slider">
        {students.map((student) =>
          student.image ? (
            <SliderCardWithPic key={student.id} title={student.name} student={student} />
          ) : (
            <SliderCardWithoutPic key={student.id} title={student.name} student={student} />
          )
        )}
      </Slider>
    </div>
  );
};

export default Sliders;
