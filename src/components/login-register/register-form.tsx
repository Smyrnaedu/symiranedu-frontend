"use client";
import React, { useActionState, useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { TextInput } from "../common/form-field/text-input";
import { PasswordInput } from "../common/form-field/password-input";
import { SubmitButton } from "../common/form-field/submit-button";
import { MaskedInput } from "../common/form-field/masked-input";
import { SelectInput } from "../common/form-field/select-input";
import { DateInput } from "../common/form-field/date-input";
import { registerAction } from "@/actions/register-action";
import { initialState } from "@/helpers/form-validation";

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
  cities: CityOption[];
  onSuccess?: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  register,
  cities,
  onSuccess,
}) => {
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

  const [state, formAction] = useActionState(registerAction, initialState);
  console.log("REGISTER STATE", state);

  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);

  useEffect(() => {
    if (state?.ok && onSuccess) {
      onSuccess();
    }
  }, [state?.ok]);

  const cityOptionsWithPlaceholder = [
    { value: 0, label: "Şehir Seçiniz" },
    ...cities,
  ];

  return (
    <Form action={formAction} className="login-form">
      <h4>{title}</h4>

      <Row>
        <Col md={6}>
          <TextInput
            label={name}
            name="name"
            type="text"
            required
            error={state?.errors?.name}
          />
        </Col>
        <Col md={6}>
          <TextInput
            label={surname}
            name="surname"
            type="text"
            required
            error={state?.errors?.surname}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <MaskedInput
            label={phoneNumber}
            name="phoneNumber"
            mask="(999) 999 99 99"
            required
            error={state?.errors?.phoneNumber}
          />
        </Col>
        <Col md={6}>
          <MaskedInput
            label={familyPhoneNumber}
            name="familyPhoneNumber"
            mask="(999) 999 99 99"
            required
            error={state?.errors?.familyPhoneNumber}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <TextInput
            label={email}
            name="email"
            type="email"
            required
            error={state?.errors?.email}
          />
        </Col>
        <Col md={6}>
          <SelectInput
            name="genderId"
            label={genderTitle}
            required
            optionLabel="label"
            optionValue="value"
            options={Object.entries(genders).map(([value, label]) => ({
              value,
              label,
            }))}
            error={state?.errors?.gender}
          />
        </Col>
      </Row>

      <TextInput
        label={highSchool}
        name="highSchool"
        as="textarea"
        required
        error={state?.errors?.highSchool}
      />
      <TextInput
        label={residence}
        name="residence"
        as="textarea"
        required
        error={state?.errors?.residence}
      />

      <Row>
        <Col md={6}>
          <SelectInput
            name="residenceCityId"
            label={cityId}
            required
            optionLabel="label"
            optionValue="value"
            options={cityOptionsWithPlaceholder}
            value={selectedCityId !== null ? selectedCityId : 0}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedCityId(Number(e.target.value))
            }
            error={state?.errors?.cityId}
          />
        </Col>
        <Col md={6}>
          <DateInput
            label={birthDate}
            name="birthDay"
            dateFormat="yy-mm-dd"
            required
            error={state?.errors?.birthDay}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <PasswordInput
            label={passwordLabel}
            name="password"
            required
            error={state?.errors?.password}
          />
        </Col>
        <Col md={6}>
          <PasswordInput
            label={confirmPassword}
            name="confirmPassword"
            required
            error={state?.errors?.confirmPassword}
          />
        </Col>
      </Row>

      <SubmitButton title={registerButton} icon="sign-up" />

      {state?.message && (
        <div
          className={`alert ${state?.ok ? "alert-success" : "alert-danger"}`}
        >
          {state.message}
        </div>
      )}
    </Form>
  );
};

export default RegisterForm;
