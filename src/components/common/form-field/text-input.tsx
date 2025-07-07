"use client";
import React, { useState } from "react";
import { FormControl, FormFloating, FormGroup } from "react-bootstrap";
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
  className = "text-base",
  ...rest
}) => {
  const [val, setVal] = useState("");
  return (
    <FormGroup className={className} controlId={rest.name}>
      <FormFloating>
        <FormControl
          isInvalid={!!error}
          size="lg"
          {...rest}
          placeholder={label}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <label htmlFor={rest.name}>{label}</label>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
      </FormFloating>
    </FormGroup>
  );
};
