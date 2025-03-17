"use client";

import React, { useState } from "react";
import "./swiper.scss";
import { Container } from "react-bootstrap";
import { SectionHeader } from "@/components/common/section-header";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import Student from "./student";
import PrevNext from "@/components/common/prev-next";

// Define the type for a student object
interface StudentType {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface HomeData {
  Home: {
    students: StudentType[];
    "student-reviews-sub-title": string;
    "student-reviews-title": string;
  };
}

// Ensure data and data.Home are defined before accessing students
const homeData: HomeData = (data[0] as unknown) as HomeData;
const students: StudentType[] = homeData?.Home?.students || [];

const Students: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + students.length) % students.length
    );
  };

  return (
    <Container className="students position-relative">
      <SectionHeader
        title={homeData.Home["student-reviews-sub-title"]}
        spans={homeData.Home["student-reviews-title"]}
      />

        <Student students={students} currentIndex={currentIndex} />

      <div>
        <PrevNext onNext={handleNext} onPrevious={handlePrevious} />
      </div>
    </Container>
  );
};

export default Students;