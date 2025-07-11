"use client";
import React, { useState } from "react";
import { FloatingLabel, FormControl, FormGroup } from "react-bootstrap";
import "./password-input.scss";

type PasswordInputProps = {
  label: string;
  name: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  type?: string;
  required?: boolean;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  defaultValue = "",
  onChange,
  error,
  className = "password-base",
}) => {
  const [type, setType] = useState<"text" | "password">("password");

  const handleClick = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <FormGroup className={className} style={{ position: "relative" }}>
      <FloatingLabel label={label}>
        <FormControl
          id={name}
          name={name}
          type={type}
          defaultValue={defaultValue}
          onChange={onChange}
          isInvalid={!!error}
          size="lg"
          placeholder={label}
        />
        <label htmlFor={name}>{label}</label>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>

        <span
          onClick={handleClick}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          {type === "password" ? (
            <i className="pi pi-eye-slash" />
          ) : (
            <i className="pi pi-eye" />
          )}
        </span>
      </FloatingLabel>
    </FormGroup>
  );
};

export default PasswordInput;
