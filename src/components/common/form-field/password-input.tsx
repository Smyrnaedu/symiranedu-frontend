"use client";
import React, { useState } from "react";
import { FloatingLabel, FormControl, FormGroup } from "react-bootstrap";
import "./password-input.scss";

type PasswordInputProps = {
    label: string;
    error?: string;
    className?: string;
    [key: string]: any;
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const { label, error, className = "password-base", ...rest } = props;

 

  const [type, setType] = useState("password");
  const handleClick = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <FormGroup className={className} controlId={rest.name}>
      <FloatingLabel controlId={rest.name} label={label}>
        <FormControl
          isInvalid={!!error}
          type={type}
          placeholder={label}
        
          {...rest}
        />
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
        <span
          id="password"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          {type === "password" ? (
            <i className="pi pi-eye-slash" />
          ) : (
            <i className="pi pi-eye"></i>
          )}
        </span>
      </FloatingLabel>
    </FormGroup>
  );
};