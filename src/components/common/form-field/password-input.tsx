"use client";
import React, { useState } from "react";
import { FloatingLabel, FormControl, FormGroup } from "react-bootstrap";
import "./password-input.scss";

type PasswordInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  className = "password-base",
}) => {
  const [type, setType] = useState<"text" | "password">("password");

  const handleClick = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <FormGroup className={className} controlId={name}>
      <FloatingLabel controlId={name} label={label}>
        <FormControl
          type={type}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          isInvalid={!!error}
          size="lg"
          placeholder={label}
        />
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
        <span onClick={handleClick} style={{ cursor: "pointer", position: "absolute", top: "50%", right: "1rem", transform: "translateY(-50%)" }}>
          {type === "password" ? <i className="pi pi-eye-slash" /> : <i className="pi pi-eye" />}
        </span>
      </FloatingLabel>
    </FormGroup>
  );
};
export default PasswordInput;