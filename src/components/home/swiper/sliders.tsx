"use client";
import { SectionHeader } from "@/components/common/section-header";
import React from "react";
import Slider from "react-slick";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import { Spacer } from "@/components/common/spacer";
import SliderCardWithoutPic from "./slider-card-without-pic";
import SliderCardWithPic from "./slider-card-with-pic"; // Resimli card componenti


function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

interface StudentType {
  id: number;
  name: string;
  image?: string;
  description: string;
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

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container container">
      <SectionHeader
        title={homeData.Home["student-reviews-sub-title"]}
        spans={homeData.Home["student-reviews-title"]}
      />
      <Spacer height={10} />
      <Slider {...settings} className="slider">
        {students.map((student) =>
          student.image ? (
            <SliderCardWithPic key={student.id}  title={student.name} student={student} />
          ) : (
            <SliderCardWithoutPic key={student.id} title={student.name} student={student} />
          )
        )}
      </Slider>
    </div>
  );
};

export default Sliders;
