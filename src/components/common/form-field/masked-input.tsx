"use client";
import React, { InputHTMLAttributes } from "react";
import {
  FormControl,
  FormFloating,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { InputMask } from "primereact/inputmask";

type MaskedInputProps = {
  label: string;
  name: string; // ✅ zorunlu tanım
  error?: string;
  className?: string;
  value?: string;
  size?: "sm" | "lg";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "name">;

export const MaskedInput: React.FC<MaskedInputProps> = ({
  label,
  name,
  error,
  className = "mb-3",
  value,
  size = "lg",
  ...rest
}) => {
  return (
    <FormGroup className={className} controlId={name}>
      <FormFloating>
        <FormControl
          as={InputMask}
          isInvalid={!!error}
          size={size}
          name={name}
          {...rest}
          value={value ?? ""}
          placeholder={label}
        />
        <FormLabel>{label}</FormLabel>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
      </FormFloating>
    </FormGroup>
  );
};
