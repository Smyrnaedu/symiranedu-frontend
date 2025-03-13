import React from "react";
import Image from "next/image";

interface StudentType {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface StudentProps {
  students: StudentType[];
  currentIndex?: number;
  itemWidth?: number;
}

const Student: React.FC<StudentProps> = ({
  students,
  currentIndex = 0,
  itemWidth = 243,
}) => {
  return (
    <div
      className="category-wrapper"
      style={{
        display: "flex",
        transition: "transform 0.3s ease-in-out",
        transform: `translateX(-${currentIndex * itemWidth}px)`,
      }}
    >
      {students.map((student) => (
        <div
          className="category__item text-decoration-none"
          key={student.id}
          style={{ minWidth: `${itemWidth}px`, margin: "20px 20px 20px 0" }}
        >
          <Image
            src={`/image/students/${student.image}`}
            width={120}
            height={180}
            alt={student.name}
            className="category_img"
          />
          <h3 className="category__title">{student.name}</h3>
          <p className="category__description">{student.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;
