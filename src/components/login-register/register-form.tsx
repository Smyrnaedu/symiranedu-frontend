"use client";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { TextInput } from "../common/form-field/text-input";
import { PasswordInput } from "../common/form-field/password-input";
import { SubmitButton } from "../common/form-field/submit-button";
import { MaskedInput } from "../common/form-field/masked-input";
import { SelectInput } from "../common/form-field/select-input";
import { DateInput } from "../common/form-field/date-input";

type RegisterFormProps = {
  register: Record<string, any>;
  [key: string]: any;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ register }) => {
  const {
    title,
    name,
    surname,
    phoneNumber,
    familyPhoneNumber,
    email,
    passwordLabel,
    confirmPassword,
    registerButton,
    gender: { title: genderTitle, genders },
    birthDate,
    residence,
    cityId,
    highSchool,
  } = register;

  const [password, setPassword] = useState("");
  const [cities, setCities] = useState<{ label: string; value: number }[]>([]);

  return (
    <Form className="login-form">
      <h4>{title}</h4>

      <Row>
        <Col md={6}>
          <TextInput label={name} name="name" type="text" required />
        </Col>
        <Col md={6}>
          <TextInput label={surname} name="surname" type="text" required />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <MaskedInput
            label={phoneNumber}
            name="phoneNumber"
            type="text"
            required
          />
        </Col>
        <Col md={6}>
          <MaskedInput
            label={familyPhoneNumber}
            name="familyPhoneNumber"
            type="text"
            required
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <TextInput label={email} name="email" type="email" required />
        </Col>
        <Col md={6}>
          <SelectInput
            name="gender"
            label={genderTitle}
            required
            optionLabel="label"
            optionValue="value"
            options={Object.entries(genders).map(([value, label]) => ({
              value,
              label,
            }))}
          />
        </Col>
      </Row>

      <TextInput
        label={highSchool}
        name="highSchool"
        type="text"
        as="textarea"
        required
      />
      <TextInput
        label={residence}
        name="residence"
        type="text"
        as="textarea"
        required
      />

      <Row>
        <Col md={6}>
          <SelectInput
            name="cityId"
            label={cityId}
            required
            optionLabel="label"
            optionValue="value"
            options={cities}
          />
        </Col>
        <Col md={6}>
          <DateInput
            label={birthDate}
            name="birthDay"
            dateFormat="yy-mm-dd"
            error=""
            required
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <PasswordInput
            label={passwordLabel}
            name="password"
            type="password"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </Col>
        <Col md={6}>
          <PasswordInput
            label={confirmPassword}
            name="confirmPassword"
            type="password"
            required
            value={password}
          />
        </Col>
      </Row>

      <SubmitButton title={registerButton} icon="sign-up" />
    </Form>
  );
};

export default RegisterForm;
