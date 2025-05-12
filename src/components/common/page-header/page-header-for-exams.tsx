import Image from "next/image";
import React from "react";
import "./page-header-for-exams.scss";

type Props = {
  title: string;
  src: string;
};

const PageHeaderForExams: React.FC<Props> = ({ title, src }) => {
  return (
    <div className="page-header-for-exams">
      <Image
        src={`/image/exams-logos/${src}`}
        width={300}
        height={168}
        alt="page-header"
      />
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeaderForExams;
