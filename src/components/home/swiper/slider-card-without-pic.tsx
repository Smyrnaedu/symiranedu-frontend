import React from "react";
import { Avatar } from "primereact/avatar";
import "./slider-without-pic.scss";
import {
  Card,
  CardBody,
  CardFooter,
 
  CardText,

} from "react-bootstrap";

interface Props {
  title: string;
  student: StudentType;
}

interface StudentType {
  id: number;
  name: string;
  image?: string;
  description: string;
}

const SliderCardWithoutPic: React.FC<Props> = ({ title, student }: Props) => {
  return (
    <Card className="slider-card">
      <CardBody>
        <CardText className="card-content">{student.description}</CardText>
      </CardBody>
      <CardFooter>
        <Avatar
          image={`/image/students/${student.image}`}
          className="avatar"
          size="large"
          shape="circle"
        />
        <div>
          <p className="name">{student.name}</p>
          <p className="role">Author</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SliderCardWithoutPic;
