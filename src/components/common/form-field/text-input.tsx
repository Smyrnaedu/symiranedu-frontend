"use client";
import React from "react";
import { FormControl, FormFloating, FormGroup } from "react-bootstrap";
import "./text-input.scss";

type TextInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  type?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  className = "text-base",
  type = "text",
}) => {
  return (
    <FormGroup className={className} controlId={name}>
      <FormFloating>
        <FormControl
          type={type}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          isInvalid={!!error}
          size="lg"
          placeholder={label}
        />
        <label htmlFor={name}>{label}</label>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
      </FormFloating>
    </FormGroup>
  );
};

export default TextInput;