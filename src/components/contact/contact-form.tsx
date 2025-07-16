"use client";
import { createContactAction } from "@/actions/contact-action";
import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { stat } from "fs";
import Image from "next/image";
import React, { useActionState, useEffect, useRef } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const ContactForm: React.FC = () => {

   const [state, formAction] = useActionState(createContactAction, initialState);
   const refForm = useRef<HTMLFormElement>(null);
   console.log("/*/*/*/*/*/*/*/*/*/*/*/",state);
   
   useEffect(() => {
    if (state.message) {
      if (state.ok) {
        swAlert(state.message, "success");
        // Küçük bir gecikme ile formu sıfırla
        setTimeout(() => {
          if (refForm.current) {
            refForm.current.reset(); // Formu temizle
          }
        }, 10);
      } else {
        swAlert(state.message, "error");
      }
    }
   

  }, [state]); // <-- Close useEffect and add dependency array

  return (
    <div className="contact-form">
      <Form ref={refForm} action={formAction} noValidate>
        <Row className="">
          <Col lg={6}>
            <FloatingLabel controlId="floatingInput" label="Adınız">
              <Form.Control 
                type="text" 
                placeholder="Adınız" 
                name="firstName" 
                isInvalid={!!state?.errors?.firstName} />
              <Form.Control.Feedback type="invalid">
                {state.errors?.firstName}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col lg={6}>
            <FloatingLabel controlId="floatingInput" label="Soyadınız">
              <Form.Control
                type="text"
                placeholder="Soyadınız"
                name="lastName"
                isInvalid={!!state?.errors?.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.lastName} 
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col lg={6}>
            <FloatingLabel controlId="floatingInput" label="Email Adresiniz">
              <Form.Control
                type="email"
                placeholder="Email Adresiniz"
                name="email"
                isInvalid={!!state?.errors?.email}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.email} 
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
           {/* <Col lg={6}>
            <FloatingLabel controlId="floatingInput" label="Telefon Numaranız">
              <Form.Control
                type="phoneNumber"
                placeholder="Telefon Numaranız"
                name="phoneNumber"
                isInvalid={!!state?.errors?.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.phoneNumber} 
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col> */}
          <Col lg={12}>
            <FloatingLabel controlId="floatingInput" label="Mesajınız">
              <Form.Control
                type="textarea"
                placeholder="Mesajınız"
                name="message"
                isInvalid={!!state?.errors?.message}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.message}
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
