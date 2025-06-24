"use client";
import Image from "next/image";
import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">
      <Form>
        <Row className="">
          <Col lg={6}>
            <FloatingLabel controlId="floatingInput" label="Adınız">
              <Form.Control type="text" placeholder="Adınız" name="firstName" />
              <Form.Control.Feedback type="invalid">
                Lütfen adınızı giriniz. 
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col lg={6}>
            <FloatingLabel controlId="floatingInput" label="Soyadınız">
              <Form.Control
                type="text"
                placeholder="Soyadınız"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Lütfen soy adınızı giriniz. 
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col lg={6}>
            <FloatingLabel controlId="floatingInput" label="Email Adresiniz">
              <Form.Control
                type="email"
                placeholder="Email Adresiniz"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Lütfen email adresinizi giriniz. 
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
           <Col lg={6}>
            <FloatingLabel controlId="floatingInput" label="Telefon Numaranız">
              <Form.Control
                type="phoneNumber"
                placeholder="Telefon Numaranız"
                name="phoneNumber"
              />
              <Form.Control.Feedback type="invalid">
                Lütfen telefon numaranızı giriniz. 
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col lg={12}>
            <FloatingLabel controlId="floatingInput" label="Mesajınız">
              <Form.Control
                type="textarea"
                placeholder="Mesajınız"
                name="message"
              />
              <Form.Control.Feedback type="invalid">
                Lütfen mesajınızı giriniz. 
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>
        <div className="button-container">
          <Button type="submit" className="mt-3 submit-btn">
          Gönder
        </Button>
        </div>
      </Form>
      <Image
        src="/image/misc/letter_send.png"
        alt="Contact Form Image"
        width={270}
        height={127}
        className="contact-form-image"
        />
    </div>
  );
};

export default ContactForm;
