import React from "react";
import { Col, Row } from "react-bootstrap";
import "./contact-style.scss";
import ContactInformation from "./contact-info";
import ContactForm from "./contact-form";

type ContactPageProps = {
  title: string;
  description: string;
  sub_description: string;
  form: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
};

const ContactPageComponent: React.FC<ContactPageProps> = ({
  title,
  description,
  sub_description,
}) => {
  return (
    <section className="container contact-page">
      <p className="description">{description}</p>
      <Row>
        <Col lg={5}>
            <ContactInformation
              title={title}
              sub_description={sub_description}
            />
        </Col>
        <Col lg={7}>
            <ContactForm/>
        </Col>
      </Row>
    </section>
  );
};

export default ContactPageComponent;
