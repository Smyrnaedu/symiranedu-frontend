"use client";
import { SectionHeader } from "@/components/common/section-header";
import React, { useRef } from "react";
import Slider from "react-slick";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import blogData from "@/helpers/data/blog.json";
import { Spacer } from "@/components/common/spacer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlogCard from "./blog-card";

interface BlogType {
  id: number;
  blogTextTitle: string;
  image?: string;
  blogText: string;
  blogDate: string;
}

interface HomeData {
  Home: {
    "blogSubtitle": string;
    "blogTitle": string;
  };
}

const BlogSection: React.FC = () => {
  const homeData: HomeData = data[0] as unknown as HomeData;
  const blogs: BlogType[] = blogData;

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
    <div className="container-fluid bg-light">
        <div className="blog-slider-container container ">
      <div className="blog-header">
        <SectionHeader
          title={homeData.Home["blogSubtitle"]}
          spans={homeData.Home["blogTitle"]}
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
        {blogs.map((blog) =>
        <BlogCard key={blog.id} blog={blog}/>
        )}
      </Slider>
    </div>
    </div>
  );
};

export default BlogSection;
