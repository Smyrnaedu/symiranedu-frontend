import React from "react";
import "./student-review-slider-card.scss";
import { Card, CardBody, CardFooter, CardText } from "react-bootstrap";

interface Props {
  title: string;
  student: StudentType;
}

interface StudentType {
  id: number;
  name: string;
  image?: string;
  description: string;
  profilImg: string;
}

const StudentReviewSliderCard: React.FC<Props> = ({
  title,
  student,
}: Props) => {
  const colors = [
    "#D60032",
    "#003A5C",
    "#0076A8",
    "#F05656",
    "#EF7E1A",
    "#0076A8",
  ];

  function getfirstLetter(name:string){
    return  name[0]
  }

  return (
    <Card className="slider-card">
      <CardBody style={{backgroundColor: colors[student.id - 1]}}>
        <CardText className="card-content">{student.description}</CardText>
      </CardBody>
      <CardFooter>
        <div className="photo-holder" style={{backgroundColor: colors[student.id - 1]}}>
          <span>{getfirstLetter(title)}</span>
        </div>
        {/* <Avatar
          image={`/image/students/${student.profilImg}`}
          className="avatar"
          size="large"
          shape="circle"
        /> */}
        <div className="info">
          <p className="name">{title}</p>
          <p className="role">Student</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StudentReviewSliderCard;
