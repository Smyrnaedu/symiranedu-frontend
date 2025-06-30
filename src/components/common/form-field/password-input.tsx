import React, { useState } from "react";
import {
  FloatingLabel,
  FormControl,
  FormGroup,
  FormControlProps
} from "react-bootstrap";
import "./password-input.scss";

type PasswordInputProps = {
  label: string;
  error?: string;
  className?: string;
} & Omit<FormControlProps, "size">; // ✅ Çakışan size prop'u çıkarıldı

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  className = "password-base",
  ...rest
}) => {
  const [type, setType] = useState<"text" | "password">("password");

  const handleClick = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <FormGroup className={className} controlId={rest.name}>
      <FloatingLabel controlId={rest.name} label={label}>
        <FormControl
          isInvalid={!!error}
          type={type}
          size="lg"
          placeholder={label}
          {...rest}
        />
        <FormControl.Feedback type="invalid">
          {error}
        </FormControl.Feedback>
        <span id="password" onClick={handleClick} style={{ cursor: "pointer" }}>
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
