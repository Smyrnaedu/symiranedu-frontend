"use client";
import React from "react";
import {
  FormControl,
  FormFloating,
  FormGroup,
} from "react-bootstrap";
import "./text-input.scss";

type TextInputProps = {
  label: string;
  error?: string;
  className?: string;
  [key: string]: any;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  className= "text-base",
  ...rest
}) => {
  return (
    <FormGroup className={className} controlId={rest.name}>
      <FormFloating>
        <FormControl isInvalid={!!error} size="lg" {...rest} placeholder={label}/>
        <label htmlFor={rest.name}>{label}</label>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
      </FormFloating>
    </FormGroup>
  );
};
