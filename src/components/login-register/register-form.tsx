"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
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
    birthDay: string;
    residence: string;
    birthCityId: string;
    highSchool: string;
    motherName: string;
    fatherName: string;
    grade: string;
  };
  cities: CityOption[];
  onSuccess?: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  register,
  cities,
  onSuccess,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formKey, setFormKey] = useState(Date.now());

  const {
    title,
    name,
    surname,
    phoneNumber,
    gender: { title: genderTitle, genders },
    email,
    residence,
    birthDay,
    motherName,
    fatherName,
    familyPhoneNumber,
    highSchool,
    grade,
    passwordLabel,
    birthCityId,
    confirmPassword,
    registerButton,
  } = register;

  const [state, formAction] = useActionState(registerAction, initialState);

  useEffect(() => {
    if (state?.ok) {
      setFormKey(Date.now());
      if (onSuccess) {
        onSuccess();
      }
    }
  }, [state?.ok]);

  const cityOptionsWithPlaceholder = [
    { value: 0, label: "Şehir Seçiniz" },
    ...cities,
  ];

  const getSafeValue = (value: unknown): string => {
    if (typeof value === "string") return value;
    if (typeof value === "number") return value.toString();
    return "";
  };

  return (
    <Form
      key={formKey}
      ref={formRef}
      action={formAction}
      className="login-form"
      noValidate
    >
      <h4>{title}</h4>

      <Row>
        <Col md={6}>
          <TextInput
            label={name}
            name="name"
            type="text"
            defaultValue={getSafeValue(state?.data?.name)}
            error={state?.errors?.name}
          />
        </Col>
        <Col md={6}>
          <TextInput
            label={surname}
            name="surname"
            type="text"
            defaultValue={getSafeValue(state?.data?.surname)}
            error={state?.errors?.surname}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <MaskedInput
            label={phoneNumber}
            name="phoneNumber"
            mask="99999999999"
            defaultValue={getSafeValue(state?.data?.phoneNumber)}
            required
            error={state?.errors?.phoneNumber}
          />
        </Col>
        <Col md={6}>
          <MaskedInput
            label={familyPhoneNumber}
            name="familyPhoneNumber"
            mask="99999999999"
            defaultValue={getSafeValue(state?.data?.familyPhoneNumber)}
            required
            error={state?.errors?.familyPhoneNumber}
          />
        </Col>
      </Row>

      <TextInput
        label={email}
        name="email"
        type="email"
        defaultValue={getSafeValue(state?.data?.email)}
        error={state?.errors?.email}
      />

      <SelectInput
        name="genderId"
        label={genderTitle}
        required
        defaultValue={getSafeValue(state?.data?.genderId)}
        optionLabel="label"
        optionValue="value"
        options={Object.entries(genders).map(([value, label]) => ({
          value,
          label,
        }))}
        error={state?.errors?.genderId}
      />

      <TextInput
        label={highSchool}
        name="highSchool"
        as="textarea"
        defaultValue={getSafeValue(state?.data?.highSchool)}
        error={state?.errors?.highSchool}
      />

      <TextInput
        label={residence}
        name="residence"
        as="textarea"
        defaultValue={getSafeValue(state?.data?.residence)}
        error={state?.errors?.residence}
      />

      <Row>
        <Col md={12}>
          <SelectInput
            name="birthCityId"
            label="Doğum Şehri"
            required
            defaultValue={getSafeValue(state?.data?.birthCityId)}
            optionLabel="label"
            optionValue="value"
            options={cityOptionsWithPlaceholder}
            error={state?.errors?.birthCityId}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <TextInput
            label={motherName}
            name="motherName"
            type="text"
            defaultValue={getSafeValue(state?.data?.motherName)}
            error={state?.errors?.motherName}
          />
        </Col>
        <Col md={6}>
          <TextInput
            label={fatherName}
            name="fatherName"
            type="text"
            defaultValue={getSafeValue(state?.data?.fatherName)}
            error={state?.errors?.fatherName}
          />
        </Col>
      </Row>

      <TextInput
        label={grade}
        name="grade"
        type="text"
        defaultValue={getSafeValue(state?.data?.grade)}
        error={state?.errors?.grade}
      />

      <DateInput
        label={birthDay}
        name="birthDay"
        dateFormat="dd-mm-yy"
        required
        defaultValue={getSafeValue(state?.data?.birthDay)}
        error={state?.errors?.birthDay}
      />

      <Row>
        <Col md={6}>
          <PasswordInput
            label={passwordLabel}
            name="password"
            defaultValue={getSafeValue(state?.data?.password)}
            required
            error={state?.errors?.password}
          />
        </Col>
        <Col md={6}>
          <PasswordInput
            label={confirmPassword}
            name="confirmPassword"
            defaultValue={getSafeValue(state?.data?.confirmPassword)}
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
