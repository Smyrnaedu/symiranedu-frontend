import React, { InputHTMLAttributes } from "react";
import { FormGroup, FormLabel, FormFloating } from "react-bootstrap";
import { InputMask, InputMaskProps } from "primereact/inputmask";

type MaskedInputProps = {
  label: string;
  name: string;
  error?: string;
  className?: string;
  value?: string;
  size?: "sm" | "lg";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "name"> &
  Partial<InputMaskProps>;

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
        <InputMask
          {...rest}
          name={name}
          value={value ?? ""}
          className={`form-control form-control-${size} ${error ? "is-invalid" : ""}`}
        />
        <FormLabel>{label}</FormLabel>
        {error && <div className="invalid-feedback">{error}</div>}
      </FormFloating>
    </FormGroup>
  );
};
