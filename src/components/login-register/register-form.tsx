"use client";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { TextInput } from "../common/form-field/text-input";
import { PasswordInput } from "../common/form-field/password-input";
import { SubmitButton } from "../common/form-field/submit-button";
import { MaskedInput } from "../common/form-field/masked-input";
import { SelectInput } from "../common/form-field/select-input";
import { DateInput } from "../common/form-field/date-input";

type CityOption = { label: string; value: number };

type RegisterFormProps = {
  register: {
    title: string;
    name: string;
    surname: string;
    phoneNumber: string;
    familyPhoneNumber: string;
    email: string;
    passwordLabel: string;
    confirmPassword: string;
    registerButton: string;
    gender: {
      title: string;
      genders: Record<string, string>;
    };
    birthDate: string;
    residence: string;
    cityId: string;
    highSchool: string;
  };
  cities: CityOption[]; // dışarıdan geliyor
};

const RegisterForm: React.FC<RegisterFormProps> = ({ register, cities }) => {
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
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);

  console.log("cities on register form: ", cities);

  // Placeholder'lı şehir listesi
  const cityOptionsWithPlaceholder = [
    { value: 0, label: "Şehir Seçiniz" },
    ...cities,
  ];

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
          <MaskedInput label={phoneNumber} name="phoneNumber" required />
        </Col>
        <Col md={6}>
          <MaskedInput label={familyPhoneNumber} name="familyPhoneNumber" required />
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

      <TextInput label={highSchool} name="highSchool" as="textarea" required />
      <TextInput label={residence} name="residence" as="textarea" required />

      <Row>
        <Col md={6}>
          <SelectInput
            name="cityId"
            label={cityId}
            required
            optionLabel="label"
            optionValue="value"
            options={cityOptionsWithPlaceholder}
            value={selectedCityId !== null ? selectedCityId : 0}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedCityId(Number(e.target.value))
            }
          />
        </Col>
        <Col md={6}>
          <DateInput label={birthDate} name="birthDay" dateFormat="yy-mm-dd" required />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <PasswordInput
            label={passwordLabel}
            name="password"
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
            required
            defaultValue={password}
          />
        </Col>
      </Row>

      <SubmitButton title={registerButton} icon="sign-up" />
    </Form>
  );
};

export default RegisterForm;
