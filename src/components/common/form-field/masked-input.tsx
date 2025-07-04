"use client";
import React from "react";
import {
  FormControl,
  FormFloating,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { InputMask } from "primereact/inputmask";

type MaskedInputProps = {
  label: string;
  error?: string;
  className?: string;
  value?: string;
  [key: string]: any;
};

export const MaskedInput: React.FC<MaskedInputProps> = (props) => {
  const { label, error, className = "mb-3", value, ...rest } = props;

  return (
    <FormGroup className={className} controlId={rest.name}>
      <FormFloating>
        <FormControl
          isInvalid={!!error}
          size="lg"
          {...rest}
          value={value ?? ""} // Eğer value null ise boş string kullan
          as={InputMask}
          placeholder={label}
        />
        <FormLabel>{label}</FormLabel>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
      </FormFloating>
    </FormGroup>
  );
};
