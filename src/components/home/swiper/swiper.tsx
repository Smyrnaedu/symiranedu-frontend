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
  itemWidth = 305, // Updated to match the width in the CSS
}) => {
  return (
    <div
      className="student-wrapper"
      style={{
        transform: `translateX(-${currentIndex * itemWidth +12}px)`,
      }}
    >
      {students.map((student) => (
        <div

          className="student__item"

    

          key={student.id}
          style={{ minWidth: `${itemWidth}px` }}
        >
          <Image
            src={`/image/students/${student.image}`}
            width={180}
            height={240}
            alt={student.name}
            className="student_img"
          />
          <h3 className="student__title">{student.name}</h3>
          <p className="student__description">{student.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;
