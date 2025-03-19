import React from "react";
import { Avatar } from "primereact/avatar";
import { Card, CardBody, CardFooter, CardImg, CardText } from "react-bootstrap";
import "./slider-with-pic.scss";

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

const SliderCardWithPic: React.FC<Props> = ({ title, student }: Props) => {
  return (
    <Card className="slider-card-with-pic">
      <CardBody className="d-flex flex-column justify-content-between h-100 position-relative">
        <CardText className="card-content">{student.description}</CardText>
        <CardImg
          variant="bottom"
          src={`/image/students/${student.image}`}
          alt={title}
          width={90}
          height={150}
          className="card-img-bottom"
        />
      </CardBody>
      <CardFooter className="d-flex align-items-center">
        <Avatar
          image={`/image/students/${student.profilImg}`}
          className="avatar"
          size="large"
          shape="circle"
        />
        <div className="ms-2">
          <p className="name">{student.name}</p>
          <p className="role">Author</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SliderCardWithPic;
